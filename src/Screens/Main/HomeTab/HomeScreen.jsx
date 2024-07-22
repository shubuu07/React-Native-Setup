import { View, Text } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import ButtonFill from '../../../Components/Button/ButtonFill';

const HomeScreen = () => {
    const toast = useToast();
    return (
        <>
            <View className='flex-1 items-center justify-center bg-slate1 space-y-2'>
                <Text className='text-3xl text-black'>Home Screen</Text>
                <View className='p-4 w-full' >
                    <ButtonFill title={"Click Me"} onPress={() => toast.show("Hello World")} />
                </View>
            </View>
        </>

    )
}

export default HomeScreen