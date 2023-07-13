import { View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { styles } from './styles';
import { Image } from 'react-native';

export type IPonto = {
  tipoLixo: string[];
  photo: string;
  name: string;
  time: string;
  latitude?: number;
  longitude?: number;
  city?: string;
  state?: string;
  id: string;
};

export const Card = ({ tipoLixo, photo, name, time }: IPonto) => {
  console.log(tipoLixo);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.garbages}>
          {tipoLixo.map((item, index) => (
            <View style={styles.garbage}>
              <Image
                style={{ resizeMode: 'contain', zIndex: 5 }}
                key={index}
                source={{ uri: item }}
                alt="garbages"
              />
            </View>
          ))}
        </View>
        <Image source={{ uri: photo }} resizeMode="cover" style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={[styles.text, { marginBottom: 2, height: 32, fontWeight: '700' }]}
        >
          {name}
        </Text>
        <Text style={styles.text}>Collection time:</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.text}>{time}</Text>
          <FontAwesome5 name="map-marked-alt" size={16} color="#008000" />
        </View>
      </View>
    </View>
  );
};