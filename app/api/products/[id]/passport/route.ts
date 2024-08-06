import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const client = await clientPromise;
    const db = client.db("demoDB");

    const product = await db.collection('products').findOne(
      { 'products._id': new ObjectId(params.id) },
      { projection: { 'products.$': 1 } }
    );

    if (!product || !product.products || product.products.length === 0) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    const passportData = product.products[0].passportId;

    if (!passportData || passportData.length === 0) {
      return NextResponse.json({ message: 'Passport data not found for this product' }, { status: 404 });
    }

    return NextResponse.json({ passportId: passportData });
  } catch (error) {
    console.error('Error fetching passport data:', error);
    return NextResponse.json({ message: 'Error fetching passport data' }, { status: 500 });
  }
}