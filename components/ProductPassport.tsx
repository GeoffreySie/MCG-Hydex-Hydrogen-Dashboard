import React, { useEffect, useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import { ProductData } from "@/passport-types";

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

  const smallSectionClass = compact
    ? "bg-blue-200 w-full p-2 border border-neutral-400 rounded-lg"
    : "bg-blue-200 w-full h-32 border border-neutral-400 rounded-lg p-2";

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
        <div className={smallSectionClass}>
          <h3 className='text-center text-sm font-semibold'>Renewable Energy Source</h3>
          <p>{data.renewableEnergySource}</p>
        </div>
        <div className={smallSectionClass}>
          <h3 className='text-center text-sm font-semibold'>Geographical Correlation</h3>
          <p>{data.geographicalCorrelation ? 'Yes' : 'No'}</p>
        </div>
        <div className={smallSectionClass}>
          <h3 className='text-center text-sm font-semibold'>Renewables Additionality</h3>
          <p>{data.renewablesAdditionality ? 'Yes' : 'No'}</p>
        </div>
        <div className={smallSectionClass}>
          <h3 className='text-center text-sm font-semibold'>Temporal Correlation</h3>
          <p>{data.temporalCorrelation ? 'Yes' : 'No'}</p>
        </div>
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
        <h3 className="font-semibold">Waste Management</h3>
        <p>{data.wasteManagement}</p>
      </div>
      <div className={greenSectionClass}>
        <h3 className="font-semibold">Water Consumption</h3>
        <p>{data.waterConsumption}</p>
      </div>
      <div className={greenSectionClass}>
        <h3 className="font-semibold">Resource Depletion</h3>
        <p>{data.resourceDepletion}</p>
      </div>
      <div className={greenSectionClass}>
        <h3 className="font-semibold">Land Use</h3>
        <p>{data.landUse}</p>
      </div>
      <div className={greenSectionClass}>
        <h3 className="font-semibold">Ozone Depletion</h3>
        <p>{data.ozoneDepletion}</p>
      </div>
      <div className={greenSectionClass}>
        <h3 className="font-semibold">Eco Toxicity</h3>
        <p>{data.ecoToxicity}</p>
      </div>
    </div>
  );
};

export default ProductPassport;