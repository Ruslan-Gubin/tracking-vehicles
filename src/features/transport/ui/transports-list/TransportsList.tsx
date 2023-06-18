import { FlatList, RefreshControl,  TouchableOpacity } from "react-native";
import { Transport, TransportModel, useTransport, useTransportAction } from "../../../../entities";
import { useTransports } from "../../model";
import { TransportListDescription } from "../transport-description/TransportListDescription";

const TransportsList = ({navigation, filterTransport}: {navigation: any, filterTransport: TransportModel[]}) => {
  const { displayMode } = useTransports();
  const { loading } = useTransport()
  const { fetchTransports } = useTransportAction()

  if (displayMode === "map") {
    return null;
  }

  return (
    <>
    <TransportListDescription />
    <FlatList
    refreshControl={<RefreshControl refreshing={loading} onRefresh={() => fetchTransports()} />}
    data={filterTransport} 
    renderItem={({item}) => (
      <TouchableOpacity onPress={() => navigation.navigate('TransportScreen', { id: item.vehicle_name })}>
    <Transport NameVehicle={item.vehicle_name} category={item.category} driverName={item.driver_name} />
    </TouchableOpacity>
      )}
      />
      </>
  );
};

export{ TransportsList };