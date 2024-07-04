import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard, Login, Signup } from '../screens';
import { Profile } from '../screens/profile';
import Pay from '../screens/paymentScreen';
import { Notification } from '../screens/notification';
import { AllCoins } from '../screens/AllCoins';
import { Watchlisted } from '../screens/Watchlist';
import { TrendingCoin } from '../screens/TrendingCoin';
import { CoinDetails } from '../screens/CoinDetails';
import { LineCharts } from '../components/LineChart';



const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false, headerShown: false }}>
   
       <Stack.Screen name="Home" component={Dashboard} />
       <Stack.Screen name="Pay" component={Pay} />
       <Stack.Screen name="Notification" component={Notification} />
       {/*  */}
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="TrendingCoin" component={TrendingCoin} />
      <Stack.Screen name="AllCoins" component={AllCoins} />
      <Stack.Screen name="Watchlisted" component={Watchlisted} />
      <Stack.Screen name="CoinDetails" component={CoinDetails} />
      
      

      
    </Stack.Navigator>
  );
}
export default RootStack;