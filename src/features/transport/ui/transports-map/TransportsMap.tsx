import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { useTransports } from "../../model";
import { TransportModel } from "../../../../entities";
import { CONFIG_APP } from "../../../../shared";


function TransportsMap({ filterTransport}: { filterTransport: TransportModel[]}) {
  const { displayMode } = useTransports();

  if (displayMode === "transports") {
    return null;
  }

  const showLocationOfTransports = () => {
    return filterTransport.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.driver_name}
          description={item.category}
          image={{ uri: item.uri }}
        ></Marker>
      );
    });
  };



  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={CONFIG_APP.initialCoordinates}
      >
        {showLocationOfTransports()}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export { TransportsMap };
