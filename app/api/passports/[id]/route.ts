import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

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

        const client = await clientPromise;
        const db = client.db("test");
        const passportsCollection = db.collection("passports");

        const updatedPassport = await passportsCollection.findOneAndUpdate(
            { _id: new ObjectId(id) },
            {
                $set: {
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
            },
            { returnDocument: 'after' }
        );

        if (!updatedPassport || !updatedPassport.value) {
            return NextResponse.json({ message: 'Passport not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Passport updated', passport: updatedPassport.value }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: 'Error updating passport', error }, { status: 500 });
    }
}

// GET request to fetch a passport by ID
export async function GET(request: NextRequest, { params }: { params: Params }): Promise<NextResponse> {
    const { id } = params;

    try {
        const client = await clientPromise;
        const db = client.db("test");
        const passportsCollection = db.collection("passports");

        const passport = await passportsCollection.findOne({ _id: new ObjectId(id) });

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

    try {
        const client = await clientPromise;
        const db = client.db("test");
        const passportsCollection = db.collection("passports");

        const deletedPassport = await passportsCollection.findOneAndDelete({ _id: new ObjectId(id) });

        if (!deletedPassport || !deletedPassport.value) {
            return NextResponse.json({ message: 'Passport not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Passport deleted' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Error deleting passport', error }, { status: 500 });
    }
}
