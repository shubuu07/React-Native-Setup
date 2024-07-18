import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Hp } from '../../constants/theme'

export default function Button({ onPress, title }) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.9} className="w-full bg-orange-500 rounded-full py-3.5 ios:py-[18px] justify-center items-center absolute bottom-5">
            <Text className="font-intSemi text-white" style={{ fontSize: Hp(2.3) }}>{title}</Text>
        </TouchableOpacity>
    )
}