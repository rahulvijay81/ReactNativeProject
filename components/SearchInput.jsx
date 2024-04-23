import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { icons } from "../constants";

const SearchInput = ({
  title,
  value,
  placeholder,
  otherStyles,
  handleChangeText,
  ...props
}) => {


  return (
      <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
        <TextInput
          className="flex-1 text-white font-pregular text-base mt-0.5"
          value={value}
          placeholder="Search for a video topic"
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
        />
          <TouchableOpacity>
            <Image
              className="w-5 h-5"
              source={icons.search}
              resizeMode="contain"
            />
          </TouchableOpacity>
      </View>
  );
};

export default SearchInput;
