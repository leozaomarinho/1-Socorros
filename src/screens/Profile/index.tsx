import React from "react";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Linking } from "react-native";

export interface IProps {
  id: string;
  contact: string;
}

const Profile: React.FC = () => {
  const navigation = useNavigation<any>();
  const [name, setName] = React.useState("Usuário");
  const [contactList, setContactList] = React.useState<any>([]);
  const [contact, setContact] = React.useState("");
  const date = new Date();

  React.useEffect(() => {
    async function load() {
      AsyncStorage.getItem("user").then((user) => {
        if (user) {
          setName(user);
        }
      });
      AsyncStorage.getItem("contacts").then((contacts) => {
        if (contacts) {
          setContactList(JSON.parse(contacts));
        }
      });
    }
    load();
  }, []);

  async function handleSaveProfile() {
    await AsyncStorage.setItem("user", name);

    await AsyncStorage.setItem("contacts", JSON.stringify(contactList));

    navigation.navigate("Home");
  }

  function handleSaveContact() {
    setContactList((oldState: IProps[]) => [
      ...oldState,
      { id: date.getTime(), contact },
    ]);

    setContact("");
  }

  function handleCleanAll() {
    setContactList([]);
  }

  function handleDeleteContact(id: string) {
    setContactList((oldState: IProps[]) =>
      oldState.filter((contact) => contact.id !== id)
    );
  }

  function maskedPhone(v: string) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      r = r.replace(/^(\d*)/, "($1");
    }
    return r;
  }

  return (
    <S.Container>
      <S.BackButton onPress={() => navigation.goBack()}>
        <S.BackIcon name="arrowleft" />
      </S.BackButton>
      <S.AvatarWrapper>
        <S.Avatar
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
          }}
        />
      </S.AvatarWrapper>
      <S.Name>{name}</S.Name>
      <S.Title>Perfil</S.Title>
      <S.Label>Nome:</S.Label>
      <S.Input
        onChangeText={setName}
        placeholder="Digite seu nome..."
        value={name}
      />
      <S.Title>Contatos</S.Title>
      <S.Label>Adicionar contatos de emergência:</S.Label>
      <S.AddWrapper>
        <S.Input
          onChangeText={setContact}
          placeholder="Digite um contato de emergência..."
          value={contact}
          keyboardType="numeric"
          maxLength={11}
        />
        <S.Button onPress={() => handleSaveContact()}>
          <S.AddIcon name="plus" />
        </S.Button>
      </S.AddWrapper>
      <S.Label>Lista de contatos:</S.Label>
      {contactList.map((item: IProps) => {
        return (
          <S.ContactsWrapper
            onPress={() => Linking.openURL(`tel:+55${item.contact}`)}
            key={item.id}
          >
            <S.ContactItem>{maskedPhone(item.contact)}</S.ContactItem>
            <S.DeleteButton onPress={() => handleDeleteContact(item.id)}>
              <S.DeleteIcon name="trash" />
            </S.DeleteButton>
          </S.ContactsWrapper>
        );
      })}
      <S.SaveWrapper>
        <S.SaveButton onPress={() => handleSaveProfile()}>
          <S.SaveText>Salvar</S.SaveText>
        </S.SaveButton>
        <S.CleanButton onPress={() => handleCleanAll()}>
          <S.CleanText>Limpar</S.CleanText>
        </S.CleanButton>
      </S.SaveWrapper>
    </S.Container>
  );
};

export default Profile;
