import { View, Text } from 'react-native'
import React from 'react'
import { Hp } from '../../Constants/Theme'
import LinearGradient from 'react-native-linear-gradient'

const HeadingTitle = ({ title }) => {
    return (
        <View className='relative pb-1 px-3 ios:space-y-1' >
            <Text className="font-intSemi text-black " style={{ fontSize: Hp(2.3) }}>{title}</Text>
        </View>
    )
}

export default HeadingTitle