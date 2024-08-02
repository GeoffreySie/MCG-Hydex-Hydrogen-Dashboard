export interface ProductData {
  id: string;
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
