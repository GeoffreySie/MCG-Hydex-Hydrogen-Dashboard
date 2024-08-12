import React, { useEffect, useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import { ProductData } from "@/passport-types";
import { faRecycle, faWater, faIndustry, faLandmark, faSun, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import InfoBox from '@/components/passport/ui/InfoBox';
import BooleanBox from '@/components/passport/ui/BooleanBox';

interface ProductPassportProps {
  currentSelectedProductId: string | null;
  compact?: boolean;
}

const ProductPassport: React.FC<ProductPassportProps> = ({ currentSelectedProductId, compact = false }) => {
  const [data, setData] = useState<ProductData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPassportData = async () => {
      if (currentSelectedProductId) {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch(`/api/products/${currentSelectedProductId}/passport`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const productData = await response.json();
          if (productData.passportId && productData.passportId.length > 0) {
            setData(productData.passportId[0]);
          } else {
            setError('No passport data found for this product.');
          }
        } catch (error) {
          console.error('Failed to fetch passport data:', error);
          setError('Failed to fetch passport data. Please try again.');
        } finally {
          setIsLoading(false);
        }
      } else {
        setData(null);
        setError('No product selected');
        setIsLoading(false);
      }
    };

    fetchPassportData();
  }, [currentSelectedProductId]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  if (!data) {
    return null;
  }

  const containerClass = compact
    ? "bg-neutral-50 p-2 rounded-lg box-border border border-neutral-400 grid grid-cols-1 gap-2 text-sm"
    : "bg-neutral-50 p-4 max-w-7xl rounded-lg box-border border border-neutral-400 grid md:grid-cols-4 sm:grid-cols-2 gap-4";

  const sectionClass = compact
    ? "bg-cream w-full p-2 border border-neutral-400 rounded-lg"
    : "bg-cream w-full p-2 border border-neutral-400 rounded-lg";

  // const smallSectionClass = compact
  //   ? "bg-blue-200 w-full p-2 border border-neutral-400 rounded-lg"
  //   : "bg-blue-200 w-full h-32 border border-neutral-400 rounded-lg p-2";

  const greenSectionClass = compact
    ? "bg-lime w-full p-2 border border-neutral-400 rounded-lg p-2"
    : "bg-lime w-full h-32 border border-neutral-400 rounded-lg p-2";


  return (
    <div className={containerClass}>
      <div className={`${sectionClass} ${compact ? '' : 'col-span-2'}`}>
        <h2 className="font-semibold">Carbon Intensity</h2>
        <p>{data.globalWarmingPotential}</p>

        <div className='w-full grid grid-cols-2 gap-2 mt-2'>
          <div>
            <h3 className='text-sm font-semibold'>Production</h3>
            <p>{data.production}</p>
          </div>
          <div>
            <h3 className='text-sm font-semibold'>Compression and Storage</h3>
            <p>{data.compressionAndStorage}</p>
          </div>
          <div>
            <h3 className='text-sm font-semibold'>Transport</h3>
            <p>{data.transport}</p>
          </div>
          <div>
            <h3 className='text-sm font-semibold'>End Use</h3>
            <p>{data.endUse}</p>
          </div>
        </div>
      </div>

      <div className={`grid grid-cols-2 gap-2 ${compact ? '' : 'col-span-2'}`}>
        <InfoBox title="Renewable Energy Source" value={data.renewableEnergySource} color="#92DBFF" />
        <BooleanBox title="Geographical Correlation" value={data.geographicalCorrelation} color="#92DBFF" />
        <BooleanBox title="Renewables Additionality" value={data.renewablesAdditionality} color="#92DBFF" />
        <BooleanBox title="Temporal Correlation" value={data.temporalCorrelation} color="#92DBFF" />
      </div>

      <div className={`${sectionClass} ${compact ? '' : 'flex col-span-2'}`}>
        <div className={`${sectionClass} ${compact ? 'w-full' : 'w-1/2 mr-1'}`}>
          <h3 className="font-semibold">Production GHG Emissions Class</h3>
          <p>{data.productionGHGEmissionsClass}</p>
        </div>
        <div className={`${sectionClass} ${compact ? 'w-full mt-2' : 'w-1/2 ml-1'}`}>
          <h3 className="font-semibold">Global Warming Potential</h3>
          <p>{data.globalWarmingPotential}</p>
        </div>
      </div>

      <div className={greenSectionClass}>
        <InfoBox title="Waste Management" value={data.wasteManagement} icon={faRecycle} color="#CFFF93" />
      </div>
      <div className={greenSectionClass}>
        <InfoBox title="Water Consumption" value={data.waterConsumption} icon={faWater} color="#CFFF93" />
      </div>
      <div className={greenSectionClass}>
        <InfoBox title="Resource Depletion" value={data.resourceDepletion} icon={faIndustry} color="#CFFF93" />
      </div>
      <div className={greenSectionClass}>
        <InfoBox title="Land Use" value={data.landUse} icon={faLandmark} color="#CFFF93" />
      </div>
      <div className={greenSectionClass}>
        <InfoBox title="Ozone Depletion" value={data.ozoneDepletion} icon={faSun} color="#CFFF93" />
      </div>
      <div className={greenSectionClass}>
        <InfoBox title="Eco Toxicity" value={data.ecoToxicity} icon={faSkullCrossbones} color="#CFFF93" />
      </div>
    </div>
  );
};

export default ProductPassport;