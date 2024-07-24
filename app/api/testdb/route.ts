// app/api/testdb/route.ts
import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    // Attempt to ping the database
    await client.db("admin").command({ ping: 1 });
    return NextResponse.json({ message: "Connected successfully to MongoDB!" });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Unable to connect to MongoDB' }, { status: 500 });
  }
}