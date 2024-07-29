export interface ProductData {
    id: string;
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
    renewableOrigin: boolean;
    wasteManagement: string;
    waterConsumption: string;
    mineralInput: string;
    socioEconomicImpact: string;
    landUse: string;
  }
  