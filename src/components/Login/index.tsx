import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
} from "react-native";

import { ControllerTextInput } from "../ControllerTextInput";
import {styles} from "./styles";
import { useForm } from "react-hook-form";
import { ButtonSocialGoogle } from "../ButtonSocialGoogle/ButtonSocialGoogle";
import { API } from "../../API";
type data = {
  email: string,
  password: string,
}

export const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior="position" enabled>
            <ControllerTextInput
              name="email"
              label = "Email"
              control={control}
              rules={{ required: "Email é obrigatorio" }}
            />
            <ControllerTextInput
              name="password"
              label="Senha"
              control={control}
              rules={{ required: " Senha é obrigatorio" }}
              secureTextEntry
            />
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
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
