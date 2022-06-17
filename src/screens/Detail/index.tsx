import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Share } from "react-native";

import { Props } from "../Home/styles";

import * as S from "./styles";

const Detail: React.FC = () => {
  const route = useRoute<any>();
  const navigation = useNavigation();
  const data: Props = route.params.data;

  const shareLink = async () => {
    Share.share({
      message: `Veja como ajudar alguém em situações de risco`,
      url: data.link,
      title: data.title,
    });
  };

  return (
    <S.Container>
      <S.BackButton onPress={() => navigation.goBack()}>
        <S.BackIcon name="arrowleft" />
      </S.BackButton>
      <S.ThumbnailWrapper>
        <S.Thumbnail source={{ uri: `${data.thumbnail}` }} />
        <S.ShareButton onPress={shareLink}>
          <S.ShareIcon name="share" />
        </S.ShareButton>
      </S.ThumbnailWrapper>
      <S.DetailsWrapper>
        <S.Title>{data.title.toUpperCase()}</S.Title>
        <S.Wrapper>
          <S.SecondTitle>Sintomas:</S.SecondTitle>
          {data.symptoms.map((item) => {
            return (
              <S.Box key={item.key}>
                <S.Icon name="minus" />
                <S.Description>{item.description}</S.Description>
              </S.Box>
            );
          })}
        </S.Wrapper>
        <S.Wrapper>
          <S.SecondTitle>Causas:</S.SecondTitle>
          {data.causes.map((item) => {
            return (
              <S.Box key={item.key}>
                <S.Icon name="minus" />
                <S.Description key={item.key}>{item.description}</S.Description>
              </S.Box>
            );
          })}
        </S.Wrapper>
        <S.Wrapper>
          <S.SecondTitle>Passo a passo:</S.SecondTitle>
          {data.steps.map((item) => {
            return (
              <S.StepBox key={item.key}>
                <S.DescriptionWrapper>
                  <S.Image source={{ uri: `${item.imagem}` }} />
                  <S.Description>{item.step}</S.Description>
                </S.DescriptionWrapper>
              </S.StepBox>
            );
          })}
        </S.Wrapper>
      </S.DetailsWrapper>
    </S.Container>
  );
};

export default Detail;
