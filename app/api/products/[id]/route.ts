// app/api/products/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const client = await clientPromise;
    const db = client.db("demoDB");

    // Find the product within the nested products array
    const user = await db.collection('products').findOne(
      { 'products._id': new ObjectId(params.id) },
      { projection: { 'products.$': 1 } }
    );

    if (!user || !user.products || user.products.length === 0) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    const product = user.products[0];
    return NextResponse.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json({ message: 'Error fetching product data' }, { status: 500 });
  }
}
