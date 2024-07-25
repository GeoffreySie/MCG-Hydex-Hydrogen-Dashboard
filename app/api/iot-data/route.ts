import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

interface DailyReading {
  [key: string]: number;
}

interface CryogenicTankerData {
  _id: ObjectId;
  pressure: DailyReading[];
  temperature: DailyReading[];
  humidity: DailyReading[];
  energy_consumption: DailyReading[];
}

export async function GET(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("MCG");
    const collection = db.collection<CryogenicTankerData>("IoTData");

    const data = await collection.find({}).toArray();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch IoT data:', error);
    return NextResponse.json({ error: 'Failed to fetch IoT data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("MCG");
    const collection = db.collection<CryogenicTankerData>("IoTData");

    const body = await request.json();
    const newData: Omit<CryogenicTankerData, '_id'> = {
      pressure: body.pressure,
      temperature: body.temperature,
      humidity: body.humidity,
      energy_consumption: body.energy_consumption
    };

    const result = await collection.insertOne(newData as CryogenicTankerData);

    return NextResponse.json({ 
      message: "IoT data added successfully", 
      insertedId: result.insertedId 
    }, { status: 201 });
  } catch (error) {
    console.error('Failed to add IoT data:', error);
    return NextResponse.json({ error: 'Failed to add IoT data' }, { status: 500 });
  }
}