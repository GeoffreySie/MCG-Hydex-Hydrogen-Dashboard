import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import LoadingScreen from './LoadingScreen';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface DailyReading {
  [key: string]: number;
}

interface CryogenicTankerData {
  _id: string;
  pressure: DailyReading[];
  temperature: DailyReading[];
  humidity: DailyReading[];
  energy_consumption: DailyReading[];
}

interface IoTDataProps {
  currentSelectedProductId: string | null;
}

const IoTData: React.FC<IoTDataProps> = ({ currentSelectedProductId }) => {
  const [data, setData] = useState<CryogenicTankerData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIoTData = async () => {
      if (currentSelectedProductId) {
        setIsLoading(true);
        setError(null);
        try {
          console.log('Fetching IoT data for product:', currentSelectedProductId);
          const response = await fetch(`/api/products/${currentSelectedProductId}/iot-data`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const result = await response.json();
          console.log('Fetched IoT data:', result);
          setData(result);
        } catch (error) {
          console.error('Failed to fetch IoT data:', error);
          setError('Failed to fetch IoT data. Please try again.');
          setData(null);
        } finally {
          setIsLoading(false);
        }
      } else {
        console.log('No product ID provided');
        setData(null);
        setError('No product selected');
        setIsLoading(false);
      }
    };

    fetchIoTData();
  }, [currentSelectedProductId]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No IoT data available for this product.</div>;
  }

  const days = Array.from(new Set(data.pressure.flatMap(Object.keys)));

  const createChartData = (label: string, dataSet: DailyReading[], color: string) => ({
    labels: days,
    datasets: [
      {
        label,
        data: days.map(day => {
          const dayData = dataSet.find(d => d[day] !== undefined);
          return dayData ? dayData[day] : 0;
        }),
        borderColor: color,
        backgroundColor: color.replace(')', ', 0.5)').replace('rgb', 'rgba'),
        tension: 0.1,
      },
    ],
  });

  const options = (title: string) => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
          weight: 700,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  });

  const charts = [
    { title: 'Pressure', data: data.pressure, color: 'rgb(239, 68, 68)' },
    { title: 'Temperature', data: data.temperature, color: 'rgb(59, 130, 246)' },
    { title: 'Humidity', data: data.humidity, color: 'rgb(16, 185, 129)' },
    { title: 'Energy Consumption', data: data.energy_consumption, color: 'rgb(251, 191, 36)' },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center overflow-y-auto">
  {charts.map((chart, index) => (
    <div key={index} className="bg-white w-full h-full max-w-4xl">
      <div className="w-full h-80">
        <Line 
          options={options(chart.title)}
          data={createChartData(chart.title, chart.data, chart.color)} 
        />
      </div>
    </div>
  ))}
</div>
  );
};

export default IoTData;