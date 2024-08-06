import React from 'react';
import { ProductData } from "@/passport-types";
import { faRecycle, faWater, faIndustry, faLandmark, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import InfoBox from '@/components/passport/ui/InfoBox';
import BooleanBox from '@/components/passport/ui/BooleanBox';
import { light } from '@fortawesome/fontawesome-svg-core/import.macro';

interface ProductPassportProps {
  data: ProductData;
  compact?: boolean;
}

const ProductPassport: React.FC<ProductPassportProps> = ({ data }) => {

  const carbonIntensity = data.production + data.compressionAndStorage + data.transport + data.endUse;

  const lime = '#CFFF93';
  const cream = '#FFFBF1';
  const lightblue= '#92DBFF';

  return (
    <div className="bg-neutral-50 p-4 w-full rounded-lg box-border border border-neutral-400 grid xl:grid-cols-4 sm:grid-cols-2 gap-2 mr-4">
      <div className="w-full h-full pl-8 p-2 border border-neutral-400 rounded-lg col-span-2 flex flex-col justify-center" style={{backgroundColor: cream}}>
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

      <div className=" w-full h-full col-span-2 grid grid-cols-2 gap-2">
        <InfoBox title="Renewable Energy Source" value={data.renewableEnergySource} color={lightblue} />
        <BooleanBox title="Geographical Correlation" value={data.geographicalCorrelation } color={lightblue}/>
        <BooleanBox title="Renewables Additionality" value={data.renewablesAdditionality} color={lightblue}/>
        <BooleanBox title="Temporal Correlation" value={data.temporalCorrelation} color={lightblue}/>
      </div>

      <div className="w-full h-full col-span-2 flex">
        <InfoBox title="Production GHG Emissions Class" value={data.productionGHGEmissionsClass} />
        <InfoBox title="Global Warming Potential" value={data.globalWarmingPotential} />
      </div>

      <InfoBox title="Waste Management" value={data.wasteManagement} icon={faRecycle} color={lime}/>
      <InfoBox title="Water Consumption" value={data.waterConsumption} icon={faWater} color={lime}/>
      <InfoBox title="Resource Depletion" value={data.resourceDepletion} icon={faIndustry} color={lime}/>
      <InfoBox title="Land Use" value={data.landUse} icon={faLandmark} color={lime}/>
      <InfoBox title="Ozone Depletion" value={data.ozoneDepletion} icon={faLandmark} color={lime}/>
      <InfoBox title="Eco Toxicity" value={data.ecoToxicity} icon={faLandmark} color={lime}/>
    </div>
  );
};

export default ProductPassport;
