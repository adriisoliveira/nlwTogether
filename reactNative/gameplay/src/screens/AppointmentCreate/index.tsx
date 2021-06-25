import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Feather } from "@expo/vector-icons"
import { RectButton } from 'react-native-gesture-handler'

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { Guilds } from "../Guilds";
import { Header } from "../../components/Header";

import { Button } from "../../components/Button";
import { GuildProps } from "../../components/Guild";
import { TextArea } from "../../components/TextArea";
import { ModalView } from "../../components/ModalView";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";
import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";




export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [openGuilsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuilds() {
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect)
    setOpenGuildsModal(false);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Background>
        <ScrollView>
          <Header
            title="Agendar Partida"
          />

          <Text style={[
            styles.label,
            {
              marginLeft: 24,
              marginTop: 36,
              marginBottom: 18
            }]}>
            Categoria
      </Text>

          <CategorySelect
            hasCheckBox
            setCategory={handleCategorySelect}
            categorySelected={category}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {
                  guild.icon
                    ? <View style={styles.image} />
                    : <GuildIcon />
                }
                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name
                      ? guild.name
                      : 'Selecione o servidor'}
                  </Text>
                </View>

                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />

              </View>
            </RectButton>
            <View style={styles.align}>
              <View style={styles.field}>
                <View>
                  <Text style={[styles.label, { marginBottom: 12 }]}>
                    Dia e mês
            </Text>
                  <View style={styles.colum}>
                    <SmallInput maxLength={2} />
                    <Text style={styles.divider}>
                      /
              </Text>
                    <SmallInput maxLength={2} />
                  </View>
                </View>
              </View>

              <View style={styles.field}>
                <View>
                  <Text style={[styles.label, { marginBottom: 12 }]}>
                    Hora e Minuto
            </Text>
                  <View style={styles.colum}>
                    <SmallInput maxLength={2} />
                    <Text style={styles.divider}>
                      :
              </Text>
                    <SmallInput maxLength={2} />
                  </View>
                </View>

              </View>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>
                Descrição
          </Text>

              <Text style={styles.caracteresLimit}>
                Max 100 caracteres
          </Text>
            </View>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />
            <View style={styles.footer}>
              <Button
                title="Agendar"
              />
            </View>
          </View>

        </ScrollView>
      </Background>

      <ModalView visible={openGuilsModal} closeModal={handleCloseGuilds}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  )
}
