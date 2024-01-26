import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { navigationContainer } from '@react-navigation/native';
import { AppScreens } from './src/screens/AppScreens';

export default function App() {
  return (
    <AppScreens />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#e12153',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
