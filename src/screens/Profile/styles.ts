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

export const AvatarWrapper = styled.TouchableOpacity`
  width: 100px;
  height: 100px;

  border-radius: 50px;

  background-color: #fff;

  align-self: center;

  margin-top: 20px;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;

  border-radius: 50px;
`;

export const Name = styled.Text`
  align-self: center;
  font-size: 20px;
  font-weight: 600;

  color: #222;

  margin-top: 10px;
`;

export const Title = styled.Text`
  align-self: center;
  font-weight: bold;

  font-size: 20px;

  margin-top: 10px;

  color: #444;
  text-decoration-line: underline;
`;

export const Input = styled.TextInput`
  flex: 1;
  margin-top: 5px;
  height: 45px;

  border-radius: 20px;

  background-color: #fff;

  border-width: 1px;
  border-color: #eb4141;

  padding: 10px 20px;
`;

export const Label = styled.Text`
  margin-top: 15px;
`;

export const AddWrapper = styled.View`
  flex-direction: row;

  justify-content: space-between;

  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  margin-left: 10px;

  background-color: #eb4141;
  border-radius: 5px;

  justify-content: center;
  align-items: center;
`;

export const AddIcon = styled(Feather)`
  font-size: 30px;
  color: #fff;
`;

export const ContactsWrapper = styled.TouchableOpacity`
  flex: 1;
  margin-top: 5px;
  height: 45px;

  border-radius: 20px;

  background-color: #fff;

  border-width: 1px;
  border-color: #eb4141;

  padding: 10px 20px;
  align-items: center;

  flex-direction: row;
  justify-content: space-between;
`;

export const ContactItem = styled.Text`
  align-self: center;
`;

export const DeleteButton = styled.TouchableOpacity``;

export const DeleteIcon = styled(Feather)`
  color: #eb4141;
  font-size: 15px;
`;

export const SaveWrapper = styled.View`
  flex-direction: row;

  margin-bottom: 40px;
  margin-top: 20px;

  justify-content: space-between;
`;

export const SaveButton = styled.TouchableOpacity`
  width: 45%;
  height: 45px;

  justify-content: center;
  align-items: center;

  border-radius: 20px;

  background-color: #414fc9;
`;

export const CleanButton = styled.TouchableOpacity`
  width: 45%;
  height: 45px;

  justify-content: center;
  align-items: center;

  border-radius: 20px;

  background-color: #000;
`;

export const SaveText = styled.Text`
  color: #fff;

  font-size: 20px;
`;

export const CleanText = styled.Text`
  color: #fff;

  font-size: 20px;
`;
