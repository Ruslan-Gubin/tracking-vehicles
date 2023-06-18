import { StyleSheet, Text, View } from "react-native";

interface TransportProps {
  category: string;
  NameVehicle: string;
  driverName: string;
}

const Transport = ({ category, NameVehicle, driverName }: TransportProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.transport}>
        <Text style={styles.nameVehicle}>{NameVehicle}</Text>
        <Text style={styles.driverName}>{driverName}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  transport: {
    borderWidth: 1,
    borderColor: "#CFCFCF",
    borderStyle: "solid",
    padding: 15,
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
  },
  nameVehicle: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },
  driverName: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },
  category: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },
});

export { Transport };
