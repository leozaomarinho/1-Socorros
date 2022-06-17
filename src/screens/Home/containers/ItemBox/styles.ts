import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 15px 10px;
  margin-bottom: 10px;

  flex-direction: row;

  background-color: #fff;

  border-radius: 30px;
`;

export const Thumbnails = styled.Image`
  height: 60px;
  width: 60px;

  align-self: center;
`;

export const DetailsWrapper = styled.View`
  flex: 1;

  margin-left: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;

  font-weight: bold;
  color: #222;
`;

export const Description = styled.Text`
  font-size: 14px;

  margin-top: 5px;
  color: #444;
`;
