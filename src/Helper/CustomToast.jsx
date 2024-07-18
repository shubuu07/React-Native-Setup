import { View, Text } from 'react-native'
import { Hp } from '../constants/theme'

function CustomToast({ message, type }) {
    return (
        <View className='flex-row items-center justify-center px-3 
         bg-white  rounded-md py-3' style={{ shadowColor: '#888', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 3.84, elevation: 10 }}>
            <Text className={type === 'success' ? 'text-green-500 font-intMed capitalize' : type === 'error' ? 'text-red-500 font-intMed capitalize' : 'text-orange-500 font-intMed capitalize'} style={{ fontSize: Hp(1.7) }}>{message}</Text>
        </View>
    );
}

export default CustomToast