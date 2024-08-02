import mongoose, { Schema, Document } from 'mongoose';

interface IPassport extends Document {
  consignmentId: string;
  carbonIntensity: number;
  production: number;
  compressionAndStorage: number;
  transport: number;
  endUse: number;
  renewableEnergySource: string;
  geographicalCorrelation: boolean;
  renewablesAdditionality: boolean;
  temporalCorrelation: boolean;
  productionGHGEmissionsClass: string;
  globalWarmingPotential: number;
  wasteManagement: string;
  waterConsumption: string;
  resourceDepletion: string;
  landUse: string;
  ozoneDepletion: number;
  ecoToxicity: string;
}

const passportSchema: Schema = new Schema(
  {
    consignmentId: { type: String, required: true },
    carbonIntensity: { type: Number, required: true },
    production: { type: Number, required: true },
    compressionAndStorage: { type: Number, required: true },
    transport: { type: Number, required: true },
    endUse: { type: Number, required: true },
    renewableEnergySource: { type: String, required: true },
    geographicalCorrelation: { type: Boolean, required: true },
    renewablesAdditionality: { type: Boolean, required: true },
    temporalCorrelation: { type: Boolean, required: true },
    productionGHGEmissionsClass: { type: String, required: true },
    globalWarmingPotential: { type: Number, required: true },
    wasteManagement: { type: String, required: true },
    waterConsumption: { type: String, required: true },
    resourceDepletion: { type: String, required: true },
    landUse: { type: String, required: true },
    ozoneDepletion: { type: Number, required: true },
    ecoToxicity: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

export default mongoose.models.Passport || mongoose.model<IPassport>('Passport', passportSchema);
