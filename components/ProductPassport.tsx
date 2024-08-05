import React from 'react';
import { ProductData } from "@/passport-types";
import { faRecycle, faWater, faIndustry, faLandmark, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import InfoBox from '@/components/passport/ui/InfoBox';
import BooleanBox from '@/components/passport/ui/BooleanBox';

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
    : "bg-cream w-full p-2 border border-neutral-400 rounded-lg";

  const smallSectionClass = compact
    ? "bg-blue-200 w-full p-2 border border-neutral-400 rounded-lg"
    : "bg-blue-200 w-full h-32 border border-neutral-400 rounded-lg p-2";

  const greenSectionClass = compact
    ? "bg-lime w-full p-2 border border-neutral-400 rounded-lg p-2"
    : "bg-lime w-full h-32 border border-neutral-400 rounded-lg p-2";

  return (
      <div className="bg-neutral-50 p-4 max-w-6xl rounded-lg box-border border border-neutral-400 grid md:grid-cols-4 sm:grid-cols-2 gap-4 mr-4">
        <div className="bg-cream w-full h-full p-2 border border-neutral-400 rounded-lg col-span-2 flex flex-col justify-center">
          <div className='mb-4'>
            <h2 className='text-xl font-semibold'>Carbon Intensity</h2>
            <p className='text-2xl font-semibold'>{data.carbonIntensity} kg CO₂-eq/kg H₂</p>
          </div>
        </div>
  
        <div className='w-full grid grid-cols-2 gap-2'>
          <div>
            <h2 className='text-sm font-semibold'>Production</h2>
            <p>{data.production} kg CO₂-eq/kg H₂</p>
          </div>
          <div>
            <h2 className='text-sm font-semibold'>Compression and Storage</h2>
            <p>{data.compressionAndStorage} kg CO₂-eq/kg H₂</p>
          </div>
          <div>
            <h2 className='text-sm font-semibold'>Transport</h2>
            <p>{data.transport} kg CO₂-eq/kg H₂</p>
          </div>
          <div>
            <h2 className='text-sm font-semibold'>End Use</h2>
            <p>{data.endUse} kg CO₂-eq/kg H₂</p>
          </div>
        </div>
  
        <div className="bg-lightblue w-full h-full col-span-2 grid grid-cols-2 gap-4">
          <InfoBox title="Renewable Energy Source" value={data.renewableEnergySource} />
          <BooleanBox title="Geographical Correlation" value={data.geographicalCorrelation} />
          <BooleanBox title="Renewables Additionality" value={data.renewablesAdditionality} />
          <BooleanBox title="Temporal Correlation" value={data.temporalCorrelation} />
        </div>
  
        <div className="w-full h-32 col-span-2 flex">
          <InfoBox title="Production GHG Emissions Class" value={data.productionGHGEmissionsClass} />
          <BooleanBox title="Renewable Origin" value={data.renewableOrigin} />
        </div>
  
        <div>
          <InfoBox title="Waste Management" value={data.wasteManagement} icon={faRecycle} />
          <InfoBox title="Water Consumption" value={data.waterConsumption} icon={faWater} />
          <InfoBox title="Mineral Input" value={data.mineralInput} icon={faIndustry} />
          <InfoBox title="Socio-Economic Impact" value={data.socioEconomicImpact} icon={faUserFriends} />
          <InfoBox title="Land Use" value={data.landUse} icon={faLandmark} />
        </div>
      </div>
    );
  };

export default ProductPassport;