import { View, Text, ActivityIndicator } from 'react-native';
import { COLORS, Hp } from '../../constants/theme'

const Loading = () => {
    return (
        <View className='flex-1 justify-center items-center space-y-3 bg-slate-100'>
            <ActivityIndicator size={'large'} color={COLORS.primary} />
            <Text className="font-intSemi text-orange-500 text-center" style={{ fontSize: Hp(2) }}>Loading…</Text>
        </View>
    )
}

export default Loading