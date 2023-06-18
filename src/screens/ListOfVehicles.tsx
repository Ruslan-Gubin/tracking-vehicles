import { useEffect } from "react";
import { View } from "react-native";
import {
  SelectButton,
  SelectModal,
  TransportsMap,
  TransportsList,
  getchekedListOptions,
  filterTransport,
  useTransports,
} from "../features";
import { useTransport, useTransportAction } from "../entities";
import { Loading } from "../shared";

const ListOfVehicles = ({ navigation }: { navigation: any }) => {
  const { fetchTransports } = useTransportAction();
  const { category, isActiveFilters } = useTransports();
  const { loading, transportList } = useTransport();

  useEffect(() => {
    fetchTransports();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const filterTransports = () => {
    if (!isActiveFilters) {
      return transportList;
    }

    const chekedList = getchekedListOptions(category);
    return filterTransport(transportList, chekedList);
  };

  return (
    <>
      <View>
        <SelectButton />
        <SelectModal />
        <TransportsList
          navigation={navigation}
          filterTransport={filterTransports()}
        />
      </View>
      <TransportsMap filterTransport={filterTransports()} />
    </>
  );
};

export { ListOfVehicles };
