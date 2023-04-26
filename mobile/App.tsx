import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { TextLayout } from './src/components/TextLayout';

export default function App() {

  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-500': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isFontsLoaded) return null;


  return (
    <View style={styles.container}>
      <TextLayout size={32}color='#fff' weight='600'>WAITER APP 🍔</TextLayout>
      <TextLayout color='#fff' opacity={0.5} >Bora anotar os pedidos !</TextLayout>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D73035',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
