import React from 'react';
import { ProductData } from "@/passport-types";

interface ProductPassportProps {
  data: ProductData;
}

const ProductPassport: React.FC<ProductPassportProps> = ({ data }) => {
  return (
    <div className="text-black bg-neutral-50 p-4 max-w-7xl rounded-lg box-border border border-neutral-400 grid md:grid-cols-4 sm:grid-cols-2 gap-4">
      <div className="bg-cream w-full h-64 p-2 border border-neutral-400 rounded-lg col-span-2 flex flex-col justify-center">
        <div>
          <h2>Carbon Intensity</h2>
          <p>{data.carbonIntensity}</p>
        </div>

        <div className='w-full grid grid-cols-2'>

            <div>
                <h2 className='text-sm font-semibold'>Production</h2>
                <p>{data.production}</p>
            </div>
            <div>
                <h2 className='text-sm font-semibold'>Compression and Storage</h2>
                <p>{data.compressionAndStorage}</p>
            </div>
            <div>
                <h2 className='text-sm font-semibold'>Transport</h2>
                <p>{data.transport}</p>
            </div>
            <div>
                <h2 className='text-sm font-semibold'>End Use</h2>
                <p>{data.endUse}</p>
            </div>
        </div>

        </div>

      <div className="w-full h-64 col-span-2 grid grid-cols-2 gap-4">
        <div className="bg-blue-200 w-full h-full border border-neutral-400 rounded-lg p-2">
          <h2 className='text-center text-sm font-semibold'>Renewable Energy Source</h2>
          <p>{data.renewableEnergySource}</p>
        </div>
        <div className="bg-blue-200 w-full h-full border border-neutral-400 rounded-lg p-2">
          <h2 className='text-center text-sm font-semibold'>Geographical Correlation</h2>
          <p>{data.geographicalCorrelation ? 'Yes' : 'No'}</p>
        </div>
        <div className="bg-blue-200 w-full h-full border border-neutral-400 rounded-lg p-2">
          <h2 className='text-center text-sm font-semibold'>Renewables Additionality</h2>
          <p>{data.renewablesAdditionality ? 'Yes' : 'No'}</p>
        </div>
        <div className="bg-blue-200 w-full h-full border border-neutral-400 rounded-lg p-2">
          <h2 className='text-center text-sm font-semibold'>Temporal Correlation</h2>
          <p>{data.temporalCorrelation ? 'Yes' : 'No'}</p>
        </div>
      </div>

      <div className="w-full h-32 col-span-2 flex">
        <div className="bg-cream w-1/2 h-full border border-neutral-400 rounded-lg">
          <h2>Production GHG Emissions Class</h2>
          <p>{data.productionGHGEmissionsClass}</p>
        </div>
        <div className="bg-cream w-1/2 h-full border border-neutral-400 rounded-lg">
          <h2>Renewable Origin</h2>
          <p>{data.renewableOrigin ? 'Yes' : 'No'}</p>
        </div>
      </div>

      <div className="bg-lime w-full h-32 border border-neutral-400 rounded-lg">
        <h2>Waste Management</h2>
        <p>{data.wasteManagement}</p>
      </div>
      <div className="bg-lime w-full h-32 border border-neutral-400 rounded-lg">
        <h2>Water Consumption</h2>
        <p>{data.waterConsumption}</p>
      </div>
      <div className="bg-lime w-full h-32 border border-neutral-400 rounded-lg">
        <h2>Mineral Input</h2>
        <p>{data.mineralInput}</p>
      </div>
      <div className="bg-lime w-full h-32 border border-neutral-400 rounded-lg">
        <h2>Socio-Economic Impact</h2>
        <p>{data.socioEconomicImpact}</p>
      </div>
      <div className="bg-lime w-full h-32 border border-neutral-400 rounded-lg">
        <h2>Land Use</h2>
        <p>{data.landUse}</p>
      </div>
    </div>
  );
};

export default ProductPassport;
