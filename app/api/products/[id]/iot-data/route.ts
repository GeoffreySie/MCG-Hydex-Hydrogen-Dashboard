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

    console.log('Fetching product with ID:', params.id);

    // First, find the product to get the ioTData reference
    const product = await db.collection('products').findOne(
      { 'products._id': new ObjectId(params.id) },
      { projection: { 'products.$': 1 } }
    );

    console.log('Found product:', product);

    if (!product || !product.products || product.products.length === 0) {
      console.log('Product not found');
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    const ioTDataId = product.products[0].ioTData;

    if (!ioTDataId) {
      console.log('IoT data reference not found for this product');
      return NextResponse.json({ message: 'IoT data reference not found for this product' }, { status: 404 });
    }

    console.log('Fetching IoT data with ID:', ioTDataId);

    // Now fetch the actual IoT data
    const iotData = await db.collection('IoTdata').findOne({ _id: new ObjectId(ioTDataId) });

    if (!iotData) {
      console.log('IoT data not found');
      return NextResponse.json({ message: 'IoT data not found' }, { status: 404 });
    }

    console.log('IoT data found:', iotData);

    return NextResponse.json(iotData);
  } catch (error) {
    console.error('Error fetching IoT data:', error);
    return NextResponse.json({ message: 'Error fetching IoT data' }, { status: 500 });
  }
}