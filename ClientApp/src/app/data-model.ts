export class Vehicle {
  make: string;
  model: string;
  isRegistered: boolean;
  features: string[];
  contactName: string;
  contactPhone: string;
  contactEmail: string;
}

export interface Model {
  id: number;
  name: string;
}

export interface Make {
  id: number;
  name: string;
  models: Model[];
}

export interface Feature {
  id: number;
  name: string;
}
