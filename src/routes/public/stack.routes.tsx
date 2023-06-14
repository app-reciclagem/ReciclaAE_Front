import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome } from '../../screens/Welcome';
import { Home } from '../../screens/Home';
import { LoginRegister } from '../../screens/LoginRegister';
import { MapScreen } from '../../screens/MapScreen';
import { Profile } from '../../screens/Profile';

const { Screen, Navigator } = createNativeStackNavigator();

export const PublicStackRoutes = () => {
  return (
    <Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Home" component={Home} />
      <Screen name="LoginRegister" component={LoginRegister} />
      <Screen name="MapScreen" component={MapScreen} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};
