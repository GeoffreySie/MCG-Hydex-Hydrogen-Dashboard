import React from 'react';
import { ProductData } from "@/passport-types";
import { faRecycle, faWater, faIndustry, faLandmark, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import InfoBox from '@/components/passport/ui/InfoBox';
import BooleanBox from '@/components/passport/ui/BooleanBox';

interface ProductPassportProps {
  data: ProductData;
}

const ProductPassport: React.FC<ProductPassportProps> = ({ data }) => {

  const carbonIntensity = data.production + data.compressionAndStorage + data.transport + data.endUse;

  return (
    <div className="bg-neutral-50 p-4 max-w-6xl rounded-lg box-border border border-neutral-400 grid md:grid-cols-4 sm:grid-cols-2 gap-4 mr-4">
      <div className="bg-cream w-full h-full p-2 border border-neutral-400 rounded-lg col-span-2 flex flex-col justify-center">
        <div className='mb-4'>
          <h2 className='text-xl font-semibold'>Carbon Intensity</h2>
          <p className='text-2xl font-semibold'>{carbonIntensity} kg CO₂-eq/kg H₂</p>
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
      </div>

      <div className="bg-lightblue w-full h-full col-span-2 grid grid-cols-2 gap-4">
        <InfoBox title="Renewable Energy Source" value={data.renewableEnergySource} />
        <BooleanBox title="Geographical Correlation" value={data.geographicalCorrelation} />
        <BooleanBox title="Renewables Additionality" value={data.renewablesAdditionality} />
        <BooleanBox title="Temporal Correlation" value={data.temporalCorrelation} />
      </div>

      <div className="w-full h-32 col-span-2 flex">
        <InfoBox title="Production GHG Emissions Class" value={data.productionGHGEmissionsClass} />
        <InfoBox title="Global Warming Potential" value={data.globalWarmingPotential} />
      </div>

      <InfoBox title="Waste Management" value={data.wasteManagement} icon={faRecycle} />
      <InfoBox title="Water Consumption" value={data.waterConsumption} icon={faWater} />
      <InfoBox title="Resource Depletion" value={data.resourceDepletion} icon={faIndustry} />
      <InfoBox title="Land Use" value={data.landUse} icon={faLandmark} />
      <InfoBox title="Ozone Depletion" value={data.ozoneDepletion} icon={faLandmark} />
      <InfoBox title="Eco Toxicity" value={data.ecoToxicity} icon={faLandmark} />
    </div>
  );
};

export default ProductPassport;
