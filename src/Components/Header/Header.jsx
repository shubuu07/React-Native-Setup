import { View, Text, TouchableOpacity, Platform, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Hp } from '../../Constants/Theme';
import { ArrowLeft } from 'phosphor-react-native';

const Header = ({ name, backBtn, RightBtn, shadow, upparcase, onBackPress }) => {
    const navigation = useNavigation()
    return (
        <SafeAreaView className="bg-white" >
            <View className="flex-row  z-20 justify-center px-3 items-center  bg-white w-full space-x-3" style={!shadow && { shadowColor: '#bbb', shadowOffset: { width: 0, height: Platform.OS === 'ios' ? 5 : 2 }, shadowOpacity: 0.25, shadowRadius: 5, paddingVertical: Hp(0.7) }}>
                {backBtn ?
                    <View activeOpacity={.8} className="border border-slate-300 opacity-0 rounded-full p-1.5" >
                        <ArrowLeft weight='bold' className="text-black" size={Hp(3)} />
                    </View> : <TouchableOpacity activeOpacity={.8} className=" p-1.5" onPress={() => onBackPress ? onBackPress() : navigation.goBack()}>
                        <ArrowLeft weight='bold' className="text-black" size={Hp(3)} />
                    </TouchableOpacity>}
                <Text numberOfLines={1} className={`font-intSemi text-black text-center capitalize py-3 flex-1 self-center ${upparcase ? "uppercase" : "capitalize"}`} style={{ fontSize: Hp(2.3) }}>{name}</Text>
                {RightBtn ? RightBtn : <Text className="mx-10" />}
            </View>
        </SafeAreaView>
    )
}

export default Header