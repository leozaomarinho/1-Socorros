import styled from "styled-components/native";
import { AntDesign, Feather } from "@expo/vector-icons";

export const Container = styled.ScrollView`
  flex: 1;

  padding: 20px 20px 0px;

  background-color: #fee7f5;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackIcon = styled(AntDesign)`
  font-size: 20px;

  color: #222;
`;

export const ThumbnailWrapper = styled.View`
  height: 200px;
  width: 100%;

  background-color: #fff;

  margin-top: 15px;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const Thumbnail = styled.Image`
  height: 150px;
  width: 150px;
`;

export const DetailsWrapper = styled.View`
  flex: 1;

  margin-top: 10px;
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;

  color: #222;
`;

export const Wrapper = styled.View`
  margin-top: 10px;
`;

export const Box = styled.View`
  flex: 1;
  flex-direction: row;

  align-items: center;
`;

export const SecondTitle = styled.Text`
  font-size: 16px;

  color: #222;

  margin-bottom: 5px;
`;

export const Description = styled.Text`
  width: 90%;
  font-size: 14px;
  color: #222;
`;

export const Icon = styled(AntDesign)`
  margin-right: 5px;

  color: #1b2430;
`;

export const StepBox = styled.View`
  flex: 1;

  margin-bottom: 10px;
`;

export const DescriptionWrapper = styled.View`
  width: 85%;
  flex-direction: row;

  align-items: center;
`;

export const Image = styled.Image`
  width: 15%;
  width: 50px;
  height: 50px;

  border-radius: 3px;

  margin-right: 10px;
`;

export const ShareIcon = styled(Feather)`
  font-size: 18px;
`;

export const ShareButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: 10px;
`;
