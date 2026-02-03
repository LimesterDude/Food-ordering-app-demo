import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { CustomInputProps } from '@/type'
import  cn  from "clsx";


const CustomInput = ({
     placeholder = 'Search for something',
     value,
     onChangeText,
     label,
     secureTextEntry = false,
     keyboardType="default"
    
    }: CustomInputProps) => {
        const [IsFocused, setIsFocused] = useState(false);
  return (
    <View className="w-full">
      <Text className="label">{label}</Text>
      <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onFocus={()=> setIsFocused(true)}
        onBlur={()=> setIsFocused(false)}
        placeholder={placeholder}
        placeholderTextColor="#888"
        className={cn('input', IsFocused ? 'border-primary' : 'border-gray-300')}
      />
    </View>
  )
}

export default CustomInput