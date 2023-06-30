import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Image
} from "react-native";
import { RouteProp } from "@react-navigation/native";

import { Login } from '../../components/Login'
import { Header } from '../../components/Header'
import { styles } from "./styles";

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
    <View style={styles.container}>
      <View style={{zIndex: 1, position: 'absolute'}}>
        <Image source={require('../../assets/Splash.png')}
          alt='Plano de fundo do app' />
      </View>

      <View style={{zIndex: 2}}>
        <Header is={onLogin} tipo={setOnLogin} />
        {onLogin ? <Login /> : <View><Text>Registro</Text></View>}
      </View>
    </View>
  )
}
