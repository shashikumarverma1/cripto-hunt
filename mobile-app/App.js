import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DraweNavigation from "./navigation/drawerNavigation"
import ContextProvider from './context/userDetails';
export default function App() {
  return (
    <ContextProvider>
  <NavigationContainer>
     <DraweNavigation/>
  </NavigationContainer>
    </ContextProvider>
  
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
