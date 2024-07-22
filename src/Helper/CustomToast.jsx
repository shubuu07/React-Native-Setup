import { View, Text } from 'react-native'
import { Hp, Wp } from '../Constants/Theme'

function CustomToast({ message }) {
    return (
        <View className='px-4 
         bg-[#313033]  rounded-lg self-center' style={{ shadowColor: '#666', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.15, shadowRadius: 3.84, width: Wp(96), paddingVertical: Hp(2) }}>
            <Text className="text-white font-intMed capitalize" style={{ fontSize: Hp(2.2) }}>{message}</Text>
        </View>
    );
}

export default CustomToast