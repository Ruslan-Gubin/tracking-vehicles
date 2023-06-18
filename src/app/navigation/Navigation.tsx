import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ListOfVehicles, TransportScreen } from '../../screens'


const Stack = createNativeStackNavigator();

export const Navigation = () => { 

  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="ListOfVehicles" component={ListOfVehicles} options={{ title: 'Список транспортных средств' }} />
    <Stack.Screen name="TransportScreen" component={TransportScreen} options={{ title: 'Транспортное средство' }} />
    </Stack.Navigator>
    </NavigationContainer>
  )

}