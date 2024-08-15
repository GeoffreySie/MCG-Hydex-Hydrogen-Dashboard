import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  console.log('Request received with params:', params);

  try {
    const client = await clientPromise;
    const db = client.db('demoDB');
    console.log('Connected to database');

    const user = await db.collection('users').findOne({ _id: new ObjectId(params.id) });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json({ message: 'Error fetching user data' }, { status: 500 });
  }
}
