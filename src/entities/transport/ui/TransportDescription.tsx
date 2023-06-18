import { View, Text, StyleSheet } from "react-native";

const TransportDescription = ({ category, phone }: {category: string, phone: number}) => {

  return (
    <View style={styles.container}>
      <View style={styles.description}>
    <Text style={styles.text}>Категория:</Text>
    <Text style={styles.text}>{category}</Text>
      </View>
      <View style={styles.description}>
    <Text style={styles.text}>Контактный номер:</Text>
    <Text style={styles.text}>{phone}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  description: {
    borderWidth: 1,
    borderColor: "#CFCFCF",
    borderStyle: "solid",
    padding: 15,
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },
});

export { TransportDescription };