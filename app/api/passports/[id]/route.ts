import { NextRequest, NextResponse } from 'next/server';
import Passport from '@/models/passports';
import connectMongodb from '@/lib/mongodb';

type Params = {
    id: string;
}

// PUT request to update a passport by ID
export async function PUT(request: NextRequest, { params }: { params: Params }): Promise<NextResponse> {
    const { id } = params;

    try {
        const data = await request.json();
        const {
            consignmentId,
            production,
            compressionAndStorage,
            transport,
            endUse,
            renewableEnergySource,
            geographicalCorrelation,
            renewablesAdditionality,
            temporalCorrelation,
            productionGHGEmissionsClass,
            globalWarmingPotential,
            wasteManagement,
            waterConsumption,
            resourceDepletion,
            landUse,
            ozoneDepletion,
            ecoToxicity,
        } = data;

        if (!consignmentId) {
            return NextResponse.json({ message: 'Required fields are missing' }, { status: 400 });
        }
        
        await connectMongodb();
        const updatedPassport = await Passport.findByIdAndUpdate(
            id,
            {
                consignmentId,
                production,
                compressionAndStorage,
                transport,
                endUse,
                renewableEnergySource,
                geographicalCorrelation,
                renewablesAdditionality,
                temporalCorrelation,
                productionGHGEmissionsClass,
                globalWarmingPotential,
                wasteManagement,
                waterConsumption,
                resourceDepletion,
                landUse,
                ozoneDepletion,
                ecoToxicity,
            },
            { new: true }
        );

        if (!updatedPassport) {
            return NextResponse.json({ message: 'Passport not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Passport updated', passport: updatedPassport }, { status: 200 });
        
    } catch (error) {
        return NextResponse.json({ message: 'Error updating passport', error }, { status: 500 });
    }
}

// GET request to fetch a passport by ID
export async function GET(request: NextRequest, { params }: { params: Params }): Promise<NextResponse> {
    const { id } = params;

    try {
        await connectMongodb();
        const passport = await Passport.findById(id);

        if (!passport) {
            return NextResponse.json({ message: 'Passport not found' }, { status: 404 });
        }

        return NextResponse.json({ passport }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching passport', error }, { status: 500 });
    }
}

// DELETE request to delete a passport by ID
export async function DELETE(request: NextRequest, { params }: { params: Params }): Promise<NextResponse> {
    const { id } = params;

    if (!id) {
        return NextResponse.json({ message: 'Missing id' }, { status: 400 });
    }

    await connectMongodb();

    try {
        const deletedPassport = await Passport.findByIdAndDelete(id);

        if (!deletedPassport) {
            return NextResponse.json({ message: 'Passport not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Passport deleted' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Error deleting passport', error }, { status: 500 });
    }
}
