import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { Container, Text } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Welcome = () => {
  const navigation = useNavigation();

  const openScreenRegister = () => {
    navigation.navigate('LoginRegister', { is: false });
  };

  const openScreenLogin = () => {
    navigation.navigate('LoginRegister', { is: true });
  };
  return (
    <SafeAreaView>
      <Container>
        <Text>Welcome</Text>
        <View>
          <TouchableOpacity onPress={openScreenRegister}>
            <Text>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openScreenLogin}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </Container>
    </SafeAreaView>
  );
};
