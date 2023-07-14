import { Image, View } from 'react-native';

import organico from '../../assets/kindOfTrash/organic.png';
import plastico from '../../assets/kindOfTrash/plastic.png';
import vidro from '../../assets/kindOfTrash/glass.png';
import bateria from '../../assets/kindOfTrash/battery.png';
import papel from '../../assets/kindOfTrash/paper.png';
import metal from '../../assets/kindOfTrash/metal.png';

type ITipoLixo = {
  tipo: string;
};
export const Garbage = ({ tipo }: ITipoLixo) => {
  const tipoToNum: { [key: string]: number } = {
    Organic: 0,
    Plastic: 1,
    Glass: 2,
    Batteries: 3,
    Paper: 4,
    Metal: 5,
  };

  const num = tipoToNum[tipo];
  const tipos = [organico, plastico, vidro, bateria, papel, metal];

  return (
    <Image
      source={tipos[num]}
      style={{
        width: 15,
        height: 15,
        resizeMode: 'contain',
      }}
    />
  );
};
