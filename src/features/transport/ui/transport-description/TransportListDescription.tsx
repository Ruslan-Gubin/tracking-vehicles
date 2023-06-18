import { StyleSheet, Text, View } from "react-native";

const TransportListDescription = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameVehicle}>Номер:</Text>
      <Text style={styles.driverName}>Имя:</Text>
      <Text style={styles.category}>Категория:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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

export { TransportListDescription };
