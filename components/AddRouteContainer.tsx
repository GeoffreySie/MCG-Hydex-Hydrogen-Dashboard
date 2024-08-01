'use client'
import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

type RouteStop = {
  postcode: string;
};

type FormData = {
  productionMethod: string;
  storageMethod: string;
  renewableEnergySource: string;
  productionQuantity: number;
  startLocation: string;
  endLocation: string;
  intermediateStops: RouteStop[];
};

const AddRouteContainer: React.FC = () => {
  const { register, control, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      intermediateStops: [{ postcode: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'intermediateStops',
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="w-screen mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add New Route</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="productionMethod" className="block text-sm font-medium text-gray-700">Production Method</label>
          <input
            {...register('productionMethod', { required: 'Production method is required' })}
            type="text"
            placeholder="e.g. Electrolysis"
            id="productionMethod"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.productionMethod && <p className="mt-1 text-sm text-red-600">{errors.productionMethod.message}</p>}
        </div>

        <div>
          <label htmlFor="storageMethod" className="block text-sm font-medium text-gray-700">Storage Method</label>
          <input
            {...register('storageMethod', { required: 'Storage method is required' })}
            type="text"
            placeholder="e.g. Cryogenic Tanker"
            id="storageMethod"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.storageMethod && <p className="mt-1 text-sm text-red-600">{errors.storageMethod.message}</p>}
        </div>

        <div>
          <label htmlFor="renewableEnergySource" className="block text-sm font-medium text-gray-700">Renewable Energy Source</label>
          <input
            {...register('renewableEnergySource', { required: 'Renewable energy source is required' })}
            type="text"
            placeholder='e.g. Wind'
            id="renewableEnergySource"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.renewableEnergySource && <p className="mt-1 text-sm text-red-600">{errors.renewableEnergySource.message}</p>}
        </div>

        <div>
          <label htmlFor="productionQuantity" className="block text-sm font-medium text-gray-700">Production Quantity</label>
          <input
            {...register('productionQuantity', { required: 'Production quantity is required', min: 0 })}
            type="number"
            placeholder='(Kg)'
            id="productionQuantity"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.productionQuantity && <p className="mt-1 text-sm text-red-600">{errors.productionQuantity.message}</p>}
        </div>

        <div>
          <label htmlFor="startLocation" className="block text-sm font-medium text-gray-700">Production Site</label>
          <input
            {...register('startLocation', { required: 'Start location is required' })}
            type="text"
            placeholder="Postcode"
            id="startLocation"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.startLocation && <p className="mt-1 text-sm text-red-600">{errors.startLocation.message}</p>}
        </div>


        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Intermediate Stops</label>
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center space-x-2 mb-2">
              <input
                {...register(`intermediateStops.${index}.postcode` as const, { required: 'Postcode is required' })}
                type="text"
                placeholder="Postcode"
                className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ postcode: '' })}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Add Stop
          </button>
        </div>

        <div>
          <label htmlFor="endLocation" className="block text-sm font-medium text-gray-700">Final Destination</label>
          <input
            {...register('endLocation', { required: 'End location is required' })}
            type="text"
            placeholder="Postcode"
            id="endLocation"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.endLocation && <p className="mt-1 text-sm text-red-600">{errors.endLocation.message}</p>}
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit Route
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRouteContainer;