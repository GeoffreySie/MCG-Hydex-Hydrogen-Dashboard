import React from 'react';
import { ProductData } from "@/passport-types";

interface ProductPassportProps {
  data: ProductData;
  compact?: boolean;
}

const ProductPassport: React.FC<ProductPassportProps> = ({ data, compact = false }) => {
  const containerClass = compact
    ? "bg-neutral-50 p-2 rounded-lg box-border border border-neutral-400 grid grid-cols-1 gap-2 text-sm"
    : "bg-neutral-50 p-4 max-w-7xl rounded-lg box-border border border-neutral-400 grid md:grid-cols-4 sm:grid-cols-2 gap-4";

  const sectionClass = compact
    ? "bg-cream w-full p-2 border border-neutral-400 rounded-lg"
    : "bg-cream w-full h-64 p-2 border border-neutral-400 rounded-lg";

  const smallSectionClass = compact
    ? "bg-blue-200 w-full p-2 border border-neutral-400 rounded-lg"
    : "bg-blue-200 w-full h-full border border-neutral-400 rounded-lg p-2";

  const greenSectionClass = compact
    ? "bg-lime w-full p-2 border border-neutral-400 rounded-lg"
    : "bg-lime w-full h-32 border border-neutral-400 rounded-lg";

  return (
    <div className={containerClass}>
      <div className={`${sectionClass} ${compact ? '' : 'col-span-2'}`}>
        <h2 className="font-semibold">Carbon Intensity</h2>
        <p>{data.carbonIntensity}</p>

        <div className='w-full grid grid-cols-2 gap-2 mt-2'>
          <div>
            <h3 className='text-xs font-semibold'>Production</h3>
            <p className='text-xs'>{data.production}</p>
          </div>
          <div>
            <h3 className='text-xs font-semibold'>Compression and Storage</h3>
            <p className='text-xs'>{data.compressionAndStorage}</p>
          </div>
          <div>
            <h3 className='text-xs font-semibold'>Transport</h3>
            <p className='text-xs'>{data.transport}</p>
          </div>
          <div>
            <h3 className='text-xs font-semibold'>End Use</h3>
            <p className='text-xs'>{data.endUse}</p>
          </div>
        </div>
      </div>

      <div className={`grid grid-cols-2 gap-2 ${compact ? '' : 'col-span-2'}`}>
        <div className={smallSectionClass}>
          <h3 className='text-center text-xs font-semibold'>Renewable Energy Source</h3>
          <p className='text-xs'>{data.renewableEnergySource}</p>
        </div>
        <div className={smallSectionClass}>
          <h3 className='text-center text-xs font-semibold'>Geographical Correlation</h3>
          <p className='text-xs'>{data.geographicalCorrelation ? 'Yes' : 'No'}</p>
        </div>
        <div className={smallSectionClass}>
          <h3 className='text-center text-xs font-semibold'>Renewables Additionality</h3>
          <p className='text-xs'>{data.renewablesAdditionality ? 'Yes' : 'No'}</p>
        </div>
        <div className={smallSectionClass}>
          <h3 className='text-center text-xs font-semibold'>Temporal Correlation</h3>
          <p className='text-xs'>{data.temporalCorrelation ? 'Yes' : 'No'}</p>
        </div>
      </div>

      <div className={`${sectionClass} ${compact ? '' : 'col-span-2 flex'}`}>
        <div className={`${sectionClass} ${compact ? 'w-full' : 'w-1/2'}`}>
          <h3 className="font-semibold">Production GHG Emissions Class</h3>
          <p>{data.productionGHGEmissionsClass}</p>
        </div>
        <div className={`${sectionClass} ${compact ? 'w-full mt-2' : 'w-1/2'}`}>
          <h3 className="font-semibold">Renewable Origin</h3>
          <p>{data.renewableOrigin ? 'Yes' : 'No'}</p>
        </div>
      </div>

      <div className={greenSectionClass}>
        <h3 className="font-semibold">Waste Management</h3>
        <p>{data.wasteManagement}</p>
      </div>
      <div className={greenSectionClass}>
        <h3 className="font-semibold">Water Consumption</h3>
        <p>{data.waterConsumption}</p>
      </div>
      <div className={greenSectionClass}>
        <h3 className="font-semibold">Mineral Input</h3>
        <p>{data.mineralInput}</p>
      </div>
      <div className={greenSectionClass}>
        <h3 className="font-semibold">Socio-Economic Impact</h3>
        <p>{data.socioEconomicImpact}</p>
      </div>
      <div className={greenSectionClass}>
        <h3 className="font-semibold">Land Use</h3>
        <p>{data.landUse}</p>
      </div>
    </div>
  );
};

export default ProductPassport;