import React, { useState } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler"


import { styles } from "./styles";
import { Avatar } from "../Avatar";
import { useAuth } from "../../hooks/auth";
import { ModalSignOut } from "../../components/ModalSignOut";
import { ButtonsExit } from "../ButtonsExit";
import { theme } from "../../global/styles/theme";


export function Profile() {
  const { user, signOut } = useAuth();
  const [openSignOut, setOpenSignOut] = useState(false);

  //console.log(user.avatar);
  function handleSignOut() {
    setOpenSignOut(true);
  }

  function exitSignOut() {
    setOpenSignOut(false);
  }

  function handleCloseSignOut() {
    setOpenSignOut(false);
  }
  return (
    <View style={styles.container}>

      <RectButton onPress={handleSignOut}>
        <Avatar urlImage={user.avatar} />
      </RectButton>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}> Olá,</Text>

          <Text style={styles.username}>{user.firstName} </Text>
        </View>

        <Text style={styles.message}> Hoje é dia de vitória</Text>
      </View>

      <ModalSignOut visible={openSignOut} closeModal={handleCloseSignOut}>
        <View style={styles.containerText}>
          <Text style={styles.question}> Deseja sair do
              <Text style={styles.text}> Game
                <Text style={styles.colorText}>Play
                  <Text style={styles.text}>?</Text>
              </Text>
            </Text>
          </Text>
        </View>

        <View style={styles.containerButtons}>
          <TouchableOpacity
            style={styles.buttonNo}
            onPress={handleCloseSignOut}
            activeOpacity={0.7}
          >
            <Text style={styles.greeting}>
              Não
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonYes}
            onPress={() => signOut()}
            activeOpacity={0.7}
          >
            <Text style={styles.greeting} >
              Sim
            </Text>
          </TouchableOpacity>
        </View>
      </ModalSignOut>

    </View >
  );

}