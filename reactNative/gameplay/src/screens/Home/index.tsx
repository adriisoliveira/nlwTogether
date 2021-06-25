import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import { Background } from "../../components/Background";

import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";

export function Home() {
  const [category, setCategory] = useState('');

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 as 20:40h',
      description: 'É hoje que vams chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 as 20:40h',
      description: 'É hoje que vams chegar ao challenger sem perder uma partida da md10'
    }
  ]

  const navigation = useNavigation();
  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails')
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate')
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      <ListHeader
        title="Partidas agendadas"
        subtitle="Total 6"
      />

      <FlatList
        data={appointments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Appointment
            data={item}
            onPress={handleAppointmentDetails}
          />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        contentContainerStyle={{ paddingBottom: 69 }}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
      />
    </Background>
  );
}