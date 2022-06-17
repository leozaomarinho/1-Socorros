import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Props } from "../../styles";

import * as S from "./styles";

const ItemBox: React.FC<Props> = (props) => {
  const navigation = useNavigation<any>();
  return (
    <S.Container onPress={() => navigation.navigate("Detail", { data: props })}>
      <S.Thumbnails source={{ uri: `${props.thumbnail}` }} />
      <S.DetailsWrapper>
        <S.Title numberOfLines={1}>{props.title}</S.Title>
        <S.Description numberOfLines={2}>{props.description}</S.Description>
      </S.DetailsWrapper>
    </S.Container>
  );
};

export default ItemBox;
