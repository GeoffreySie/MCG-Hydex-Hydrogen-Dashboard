import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db('demoDB');
    const usersCollection = db.collection('users');

    // Find the user with name "Clinton Liu"
    const user = await usersCollection.findOne({ name: "Clinton Liu" });

    if (user) {
      // Respond with the user data
      return NextResponse.json(user, { status: 200 });
    } else {
      // If user not found, respond with a 404 status
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Failed to fetch user:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}