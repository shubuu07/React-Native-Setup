import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { Hp } from '../../Constants/Theme'

const ButtonFill = ({ onPress, title, iosStyle, loader, disabled }) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={loader && disabled} activeOpacity={0.9} className={`w-full  rounded-full py-3.5 ios:py-[18px] justify-center items-center ${!iosStyle ? "ios:mb-5" : ""} ${disabled ? "bg-orange-200" : "bg-orange-500"}`}>
            {loader ? <View className='flex-row items-center space-x-1.5' >
                <Text className="font-intSemi text-white" style={{ fontSize: Hp(2.1) }}>Please wait...</Text>
                <ActivityIndicator size={"small"} color={"#fff"} />
            </View> : <Text className="font-intSemi text-white" style={{ fontSize: Hp(2.1) }}>{title}</Text>}
        </TouchableOpacity>
    )
}

export default ButtonFill