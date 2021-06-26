import React from "react";
import { View, ImageBackground, Text, FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler"

import { Fontisto } from "@expo/vector-icons"

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import BannerImg from "../../assets/banner.png"

import { Member } from "../../components/Member";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";
import { ListDivider } from "../../components/ListDivider";




export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Dri',
      avatar_url: 'https://github.com/adriisoliveira.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Adri',
      avatar_url: 'https://github.com/adriisoliveira.png',
      status: 'offline'
    }
  ]


  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent} >
          <Text style={styles.title}>
            Lendários
          </Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text >
        </View>
      </ImageBackground>
      <ListHeader
        title="Jogadores"
        subtitle="Total 3"
      ></ListHeader>
      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.members}
      />
      <View style={styles.footer} >
        <ButtonIcon title="Entrar na Partida" />
      </View>

    </Background>
  )
}
