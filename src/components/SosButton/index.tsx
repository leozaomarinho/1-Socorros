import React from "react";
import { Linking } from "react-native";

import * as S from "./styles";

const SosButton: React.FC = () => {
  return (
    <S.Container>
      <S.Button onPress={() => Linking.openURL(`tel:193`)}>
        <S.Icon name="phone" size={20} color="#f8f8f2" />
        <S.Title>Ligar para emergência</S.Title>
      </S.Button>
    </S.Container>
  );
};

export default SosButton;
