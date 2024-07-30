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

const IoTData: React.FC = () => {
  const [data, setData] = useState<CryogenicTankerData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/iot-data');
        const result = await response.json();
        setData(result[0]); // Assuming we're displaying the first document
      } catch (error) {
        console.error('Failed to fetch IoT data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <LoadingScreen/>;
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
    <div className="w-full h-full flex flex-col items-center space-y-4">
      {charts.map((chart, index) => (
        <div key={index} className="bg-white w-full max-w-4xl">
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