import { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Image,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';

import { Login } from '../../components/Login';
import { Register } from '../../components/Register';
import { Header } from '../../components/Header';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

type RootStackParamList = {
  LoginRegister: { is: boolean };
};

type LoginRegisterRouteProp = RouteProp<RootStackParamList>;

type ILoginRegisterProps = {
  route: LoginRegisterRouteProp;
};

export const LoginRegister = ({ route }: ILoginRegisterProps) => {
  const { is } = route.params;
  const [onLogin, setOnLogin] = useState(is);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ zIndex: 1, position: 'absolute' }}>
          <Image
            source={require('../../assets/image-background.png')}
            alt="Plano de fundo do app"
            style={{ resizeMode: 'cover' }}
          />
        </View>

      </View>
      <View style={{ zIndex: 2, flex: 1 }}>
        <Header is={onLogin} tipo={setOnLogin} />
        {onLogin ? <Login /> : <Register />}

      </View>
    </SafeAreaView>
  );
};
