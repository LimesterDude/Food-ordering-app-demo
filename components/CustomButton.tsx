import { View, TouchableOpacity , Text } from 'react-native'
import React from 'react'
import { CustomButtonProps } from '@/type'
import  cn  from "clsx";


const CustomButton = ({
    onPress,
    title = "Click Me",
    style,
    textStyle,
    leftIcon,
    isLoading = false,


}: CustomButtonProps) => {
  return (
    <TouchableOpacity className={cn('custom-btn', style)} onPress={onPress}>
      <Text>Sign in</Text>
    </TouchableOpacity >
  )
}

export default CustomButton