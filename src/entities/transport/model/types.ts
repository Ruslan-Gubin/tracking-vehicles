export interface TransportModel {
  location: {
    latitude: number;
    latitudeDelta: number;
    longitude: number;
    longitudeDelta: number;
  };
  category: string;
  driver_name: string;
  vehicle_name: string;
  uri: string;
  phone: number;
}

export interface TransportState {
  transportList: TransportModel[];
  loading: boolean;
  error: string | null;
}
