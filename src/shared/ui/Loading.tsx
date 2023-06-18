import {  Text, View, ActivityIndicator } from "react-native";

const Loading = () => {
  return (
    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 100}}>
      <ActivityIndicator size='large' />
      <Text>Загрузка...</Text>
    </View>
  );
};

export { Loading }