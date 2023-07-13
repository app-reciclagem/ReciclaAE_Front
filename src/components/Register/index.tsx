import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { ControllerTextInput } from "../ControllerTextInput";
import Checkbox from 'expo-checkbox';
import React, {useState} from 'react';
import {stylesRegister} from "./stylesRegister";
import { useForm } from "react-hook-form";
import { ButtonSocialGoogle } from "../ButtonSocialGoogle/ButtonSocialGoogle";
import { Controller } from "react-hook-form";
import { API } from "../../api";
import { onChange } from "react-native-reanimated";
type data = {
  name: string,
  email: string,
  password: string,
  confirmPassword: string
}
type FormRegister = {
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  termosDeUso: string,
  politicaDePrivacidade: string
}

export const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRegister>();

  const onSubmit = async (data:FormRegister) => {
    // try{
    //   const result = await API.post("users", data);
    //   console.log(result);
    // }catch{

    // }
    console.log(data);
  };

  const [isChecked, setChecked] = useState(false);


  return (
    <View style={stylesRegister.container}>
      <View style={stylesRegister.inputsContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior="position" enabled>
            <ControllerTextInput
              name="name"
              label = "Nome completo"
              control={control}
              //rules={{ required: "Nome é obrigatorio" }}
            />
            <ControllerTextInput
              name="email"
              label = "Email"
              control={control}
              //rules={{ required: "Email é obrigatorio" }}
            />
            <ControllerTextInput
              name="password"
              label="Senha"
              control={control}
              //rules={{ required: " Senha é obrigatorio" }}
              secureTextEntry
            />
            <ControllerTextInput
              name="password"
              label="Confirmar senha"
              control={control}
              //rules={{ required: " Confirmação de senha é obrigatoria!" }}
              secureTextEntry
            />
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <TouchableOpacity style={stylesRegister.button} onPress={handleSubmit(onSubmit)}>
          <Text style={stylesRegister.textEntrar}>REGISTRAR</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text>Termos de uso</Text>
      <Controller
      name="termosDeUso"
      control={control}
      defaultValue="false"
      //rules={{required:true}}
      render={({ field: {onChange, value} }) => (
        <Checkbox value={value === "true"} onValueChange={(newValue) => onChange(newValue.toString())}/>
      )}
    />
    </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text>Políticas de privacidade</Text>
      <Controller
      name="politicaDePrivacidade"
      control={control}
      defaultValue="false"
      //rules={{required:true}}
      render={({ field: {onChange, value} }) => (
        <Checkbox value={value === "true"} onValueChange={(newValue) => onChange(newValue.toString())}/>
      )}
    />
    </View>
    </View>
    
  );
};
