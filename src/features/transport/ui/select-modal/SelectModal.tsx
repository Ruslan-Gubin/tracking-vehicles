import { Button, StyleSheet, View, FlatList } from "react-native";
import { ModalComponent } from "../../../../shared";
import { useTransportOptionsAction, useTransports } from "../../model";

const SelectModal = () => {
  const { category, modalStatus } = useTransports();
  const {
    setFilterCategory,
    cancelFiltersCategory,
    removeActiveFilters,
    setActiveFilters,
    toggleSelectModal,
  } = useTransportOptionsAction();

  const handleApplyFilterPress = () => {
    toggleSelectModal(false);
    setActiveFilters();
  };

  const handleCancelFilters = () => {
    cancelFiltersCategory();
    toggleSelectModal(false);
    removeActiveFilters();
  };

  return (
    <ModalComponent onClose={handleCancelFilters} visible={modalStatus}>
      <View style={styles.modalContainer}>
        <FlatList
          style={styles.ListCategory}
          data={category}
          renderItem={({ item }) => (
            <Button
              key={item.value}
              title={item.label}
              onPress={() => setFilterCategory(item.value)}
              color={item.checked ? "#68E9F6" : "#ACACAC"}
            />
          )}
        />
        <View style={styles.btnContainer}>
          <Button title="Применить" onPress={handleApplyFilterPress} />
          <Button
            color={"#F85B46"}
            onPress={handleCancelFilters}
            title="Отмена"
          />
        </View>
      </View>
    </ModalComponent>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 6,
  },
  ListCategory: {
    backgroundColor: "white",
    padding: 4,
    borderRadius: 8,
  },
  btnContainer: {
    paddingTop: 15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: 100,
    marginHorizontal: 10,
    color: "red",
  },
});

export { SelectModal };
