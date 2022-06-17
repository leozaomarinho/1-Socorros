import React from "react";
import { ListRenderItem, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import data from "../../data/data.json";
import logo from "../../assets/logo.png";

import * as S from "./styles";
import ItemBox from "./containers/ItemBox";

const Home: React.FC = () => {
  const renderItem: ListRenderItem<S.Props> = React.useCallback(({ item }) => {
    return <ItemBox {...item} />;
  }, []);
  const [name, setName] = React.useState("Usuário");
  const navigation = useNavigation<any>();

  React.useEffect(() => {
    async function load() {
      AsyncStorage.getItem("user").then((user) => {
        if (user) {
          setName(user);
        }
      });
    }
    load();
  }, [name]);

  return (
    <S.Container>
      <S.SalutationWrapper>
        <S.AvatarWrapper onPress={() => navigation.navigate("Profile")}>
          <S.Avatar
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
            }}
          />
          <S.Name numberOfLines={1}>{name}</S.Name>
        </S.AvatarWrapper>

        <S.Logo source={logo} />
        <View style={{ width: 40 }} />
      </S.SalutationWrapper>

      <S.List
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
      />
    </S.Container>
  );
};

export default Home;
