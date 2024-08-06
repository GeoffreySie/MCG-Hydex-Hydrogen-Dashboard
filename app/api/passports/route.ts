import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

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
      ozoneDepletion: string;
      ecoToxicity: string;
    } = data;

    if (!consignmentId) {
      return NextResponse.json({ message: 'Required fields are missing' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("test");
    const passportsCollection = db.collection("passports");

    const newPassport = {
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
    };

    const result = await passportsCollection.insertOne(newPassport);

    return NextResponse.json({ message: 'Passport created', newPassport: { ...newPassport, _id: result.insertedId } }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error creating passport', error }, { status: 500 });
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    const client = await clientPromise;
    const db = client.db("test");
    const passportsCollection = db.collection("passports");

    const passports = await passportsCollection.find({}).toArray();

    return NextResponse.json({ passports }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching passports', error }, { status: 500 });
  }
}
