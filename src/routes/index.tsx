import { NavigationContainer } from '@react-navigation/native';

import { PublicStackRoutes } from './public/stack.routes';

export const Routes = () => {
  return (
    <NavigationContainer>
      <PublicStackRoutes />
    </NavigationContainer>
  );
};
