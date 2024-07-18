import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import images from '../../constants/images'
import { Hp } from '../../constants/theme'

const CenterLoader = ({ style, bg, text }) => {
    return (
        <View className={style ? style : `flex-1 items-center justify-center space-y-2 ${bg}`} >
            <LottieView
                style={{ height: Hp(12), width: Hp(12) }}
                source={images.loaderOrange}
                autoPlay
                loop
            />
            {text && <Text className="text-slate-400 font-intBold uppercase tracking-[4] text-center" style={{ fontSize: Hp(2.2) }}>Loading...</Text>}
        </View>
    )
}

export default CenterLoader