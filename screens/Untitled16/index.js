import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled16 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("Untitled19");
      }}><Text style={styles.GWaDcGvW}>Explore</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled21");
      }}><Text style={styles.ulfWNRrj}>Chat History</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("settings");
      }}><Text style={styles.omzEuHya}>Settings</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("notifications");
      }}><Text style={styles.noHQnmJM}>notification</Text></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  GWaDcGvW: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  ulfWNRrj: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  omzEuHya: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  noHQnmJM: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled16;