import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

interface Location {
  name: string;
  latitude: number;
  longitude: number;
  status: Date | null;
}

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("MCG");
    const locationsCollection = db.collection("locations");

    const body = await request.json();
    const location: Location = {
      name: body.name,
      latitude: body.latitude,
      longitude: body.longitude,
      status: body.status ? new Date(body.status) : null,
    };

    const result = await locationsCollection.insertOne(location);

    return NextResponse.json({ 
      message: "Location added successfully", 
      locationId: result.insertedId 
    }, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to add location' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("MCG");
    const locationsCollection = db.collection("locations");

    const locations = await locationsCollection.find({}).toArray();

    return NextResponse.json(locations, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to fetch locations' }, { status: 500 });
  }
}