import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_900Black,
  useFonts,
} from '@expo-google-fonts/montserrat';

import { Loading } from './src/components/Loading/index';
import { Routes } from './src/routes/index';
import { LoginRegister } from './src/screens/LoginRegister';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_900Black,
  });

  return <SafeAreaView style={{ flex: 1 }}>{fontsLoaded ? <Routes /> : <Loading />}</SafeAreaView>
}
