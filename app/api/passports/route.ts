import { NextRequest, NextResponse } from 'next/server';
import connectMongodb from '@/lib/mongodb';
import Passport from '@/models/passports';

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const data = await request.json();
    const {
      consignmentId,
      carbonIntensity,
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
    }: {
      consignmentId: string;
      carbonIntensity: number;
      production: number;
      compressionAndStorage: number;
      transport: number;
      endUse: number;
      renewableEnergySource: string;
      geographicalCorrelation: boolean;
      renewablesAdditionality: boolean;
      temporalCorrelation: boolean;
      productionGHGEmissionsClass: string;
      globalWarmingPotential: number;
      wasteManagement: string;
      waterConsumption: string;
      resourceDepletion: string;
      landUse: string;
      ozoneDepletion: number;
      ecoToxicity: string;
    } = data;

    if (!consignmentId) {
      return NextResponse.json({ message: 'Required fields are missing' }, { status: 400 });
    }

    await connectMongodb();
    const newPassport = new Passport({
      consignmentId,
      carbonIntensity,
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
    });

    await newPassport.save();

    return NextResponse.json({ message: 'Passport created', newPassport }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error creating passport', error }, { status: 500 });
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    await connectMongodb();
    const passports = await Passport.find({});
    return NextResponse.json({ passports }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching passports', error }, { status: 500 });
  }
}