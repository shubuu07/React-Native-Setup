import { View, Text } from 'react-native'
import SwitchToggles from './SwitchToggles'
import { Hp } from '../Constants/Theme'

const CustomSwitch = ({ Headtitle, ViewStyle, headStyle, toggleVal, toggleFun }) => {
    return (
        <View className={`${ViewStyle}  items-center`}>
            <Text className={`${headStyle ? headStyle : "text-gray-400 font-intMed"} `} style={{ fontSize: Hp(2) }}>{Headtitle}</Text>
            <SwitchToggles toggleVal={toggleVal} toggleFun={toggleFun} />
        </View>
    )
}

export default CustomSwitch