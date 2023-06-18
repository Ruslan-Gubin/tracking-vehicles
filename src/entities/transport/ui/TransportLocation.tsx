import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";

interface TransportLocationProps {
  location: {
    latitude: number;
    latitudeDelta: number;
    longitude: number;
    longitudeDelta: number;
  };
  uri: string;
  name: string;
  category: string;
}

const TransportLocation = ({
  location,
  uri,
  name,
  category,
}: TransportLocationProps) => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={location}>
        <Marker
          coordinate={location}
          title={name}
          description={category}
          image={{ uri }}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export { TransportLocation };
