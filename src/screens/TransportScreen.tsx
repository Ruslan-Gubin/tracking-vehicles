import { useEffect } from "react";
import { View } from "react-native";
import { ContactButtons } from "../features";
import {
  TransportDescription,
  TransportLocation,
  useTransport,
} from "../entities";

interface TransportScreenProps {
  route: { params: { id: string; drivenName: string } };
  navigation: { setOptions: Function };
}

const TransportScreen = ({ route, navigation }: TransportScreenProps) => {
  const { id } = route.params;
  const { transportList } = useTransport();

  const driverData = transportList.find((item) => item.vehicle_name === id);

  if (!driverData) {
    return null;
  }

  useEffect(() => {
    navigation.setOptions({
      title: `Водитель: ${driverData?.driver_name}`,
    });
  }, []);

  return (
    <>
      <View>
        <TransportDescription
          category={driverData.category}
          phone={driverData.phone}
        />
      </View>
      <TransportLocation
        location={driverData.location}
        uri={driverData.uri}
        category={driverData.category}
        name={driverData.driver_name}
      />
      <ContactButtons phone={driverData.phone} />
    </>
  );
};

export { TransportScreen };
