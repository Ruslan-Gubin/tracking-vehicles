import { Button, StyleSheet, View } from "react-native";
import { useTransportOptionsAction, useTransports } from "../../model";

const SelectButton = () => {
  const { displayMode } = useTransports();
  const { cancelMapDisplay, setMapDisplay, toggleSelectModal } = useTransportOptionsAction();

  const checkDisplayMap = displayMode === "map";

  return (
    <View style={styles.headerBtbContainer}>
      <View style={styles.headerBtn}>
        <Button title="Категории" color="#38A448" onPress={() => toggleSelectModal(true)} />
      </View>
      <View style={styles.headerBtn}>
        <Button
          title={checkDisplayMap ? "Скрыть карту" : "Показать на карте"}
          color={checkDisplayMap ? "#DB1E12" : "#50338D"}
          onPress={() => {
            if (!checkDisplayMap) {
              setMapDisplay();
            } else {
              cancelMapDisplay();
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBtbContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerBtn: {
    width: "48%",
  },
});

export { SelectButton };
