import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { Hp } from '../../Constants/Theme'

const ButtonFill = ({ onPress, title, iosStyle, loader, disabled }) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={loader && disabled} activeOpacity={0.9} className={`w-full  rounded-xl justify-center items-center ${!iosStyle ? "ios:mb-5" : ""} ${disabled ? "bg-orange-200" : "bg-primary"}`} style={{ height: Hp(6.5) }}>
            {loader ? <View className='flex-row items-center space-x-1.5' >
                <Text className="font-intSemi text-white" style={{ fontSize: Hp(2.3) }}>Please wait...</Text>
                <ActivityIndicator size={"small"} color={"#fff"} />
            </View> : <Text className="font-intSemi font-bold text-white" style={{ fontSize: Hp(2.3) }}>{title}</Text>}
        </TouchableOpacity>
    )
}

export default ButtonFill