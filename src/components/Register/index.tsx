import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ControllerTextInput } from '../ControllerTextInput';
import Checkbox from 'expo-checkbox';

import React, {useState} from 'react';
import {stylesRegister} from "./stylesRegister";
import { useForm } from "react-hook-form";
import { ButtonSocialGoogle } from "../ButtonSocialGoogle/ButtonSocialGoogle";
import { Controller } from "react-hook-form";
import { API } from "../../api";
import { onChange } from "react-native-reanimated";
import { styles } from '../TextInputField/styles';
import { ResponseLoginData } from '../../@types/types';

type data = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
type FormRegister = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  termosDeUso: string;
  politicaDePrivacidade: string;
  role: string;
};

export const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRegister>();

  const onSubmit = async (data: FormRegister) => {
    data.role ? data.role = "Admin" : data.role = "User"
    try {
      const result = await API.post('users', data);

      const { user, token } = result.data as ResponseLoginData;

      API.defaults.headers.common.Authorization = `Bearer ${token}`;

      await AsyncStorage.setItem('Auth.user', JSON.stringify(user));
      await AsyncStorage.setItem('Auth.token', token);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={stylesRegister.container}>
      <View style={stylesRegister.inputsContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior="position" enabled>
            <ControllerTextInput
              name="name"
              label="Nome completo"
              control={control}
              //rules={{ required: "Nome é obrigatorio" }}
            />
            <ControllerTextInput
              name="email"
              label="Email"
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
            <View style={stylesRegister.text}>
              <Text>Coletor</Text>
              <Controller
                control={control}
                name="role"
                defaultValue="false"
                render={({ field: { onChange, value } }) => (
                  <Checkbox
                    value={value === 'true'}
                    onValueChange={(newValue) => onChange(newValue.toString())}
                  />
                )}
              />
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <TouchableOpacity style={stylesRegister.button} onPress={handleSubmit(onSubmit)}>
          <Text style={stylesRegister.textEntrar}>REGISTRAR</Text>
        </TouchableOpacity>
      </View>
      <View style={stylesRegister.text}>
        <Text>Termos de uso</Text>
        <Controller
          name="termosDeUso"
          control={control}
          defaultValue="false"
          //rules={{required:true}}
          render={({ field: { onChange, value } }) => (
            <Checkbox
              value={value === 'true'}
              onValueChange={(newValue) => onChange(newValue.toString())}
            />
          )}
        />
      </View>
      <View style={stylesRegister.text}>
        <Text>Políticas de privacidade</Text>
        <Controller
          name="politicaDePrivacidade"
          control={control}
          defaultValue="false"
          //rules={{required:true}}
          render={({ field: { onChange, value } }) => (
            <Checkbox
              value={value === 'true'}
              onValueChange={(newValue) => onChange(newValue.toString())}
            />
          )}
        />
      </View>
    </View>
  );
};
