import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
} from 'react-native';

import { ControllerTextInput } from '../ControllerTextInput';
import { styles } from './styles';
import { useForm } from 'react-hook-form';
import { ButtonSocialGoogle } from '../ButtonSocialGoogle/ButtonSocialGoogle';
import { API } from '../../api';
import { useMyContext } from '../../context/hook';
import { useNavigation } from '@react-navigation/native';

type FormDataLogin = {
  email: string;
  password: string;
};

export const Login = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataLogin>();

  const { login } = useMyContext();

  const handleSignIn = async ({ email, password }: FormDataLogin) => {
    await login(email, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior="position" enabled>
            <ControllerTextInput
              name="email"
              label="Email"
              control={control}
              rules={{ required: 'Email é obrigatorio' }}
            />
            <ControllerTextInput
              name="password"
              label="Senha"
              control={control}
              rules={{ required: ' Senha é obrigatorio' }}
              secureTextEntry
            />
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}>
          <Text style={styles.textEntrar}>ENTRAR</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Esqueceu sua senha?</Text>
      </View>
      <View>
        <Text style={styles.textSG}>Faça login com</Text>
        <ButtonSocialGoogle />
      </View>
    </View>
  );
};
