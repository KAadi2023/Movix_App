import { View, Text, Platform, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import {styles} from '../theme'

const ios = Platform.OS === "ios";

const Home = () => {
  return (
    <View className="flex-1 bg-neutral-800">
      {/* SearchBar and logo */}
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size={"30"} color={"white"} strokeWidth={2} />
          <Text className="text-3xl font-bold text-neutral-100"><Text style={styles.text}>M</Text>ovix</Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={"30"} color={"white"} strokeWidth={2} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
