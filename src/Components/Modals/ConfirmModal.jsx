import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import { COLORS, Hp, Wp } from '../../constants/theme'

const ConfirmModal = ({ title, toggleModal, isModalVisible, onDone }) => {
    return (
        <View>
            <StatusBar hidden={isModalVisible} />
            <Modal
                statusBarTranslucent={true}
                isVisible={isModalVisible} animationIn={'fadeInUp'} animationOut={'fadeOutDown'} animationInTiming={500} animationOutTiming={500} backdropOpacity={0.3} deviceWidth={Wp(100)} className="m-0 flex-1">
                <View className="rounded-2xl self-center p-4 ios:p-5  justify-center bg-white space-y-1" style={{ width: Wp(90) }} >
                    <Text className="text-center font-intSemi text-black  p-2 mx-10" style={{ fontSize: Hp(2.2) }}>{title}</Text>
                    <View className="flex-row justify-center space-x-5 pt-2 items-center">
                        <TouchableOpacity activeOpacity={0.9} className="px-8 ios:px-10  py-2 ios:py-3  rounded-full  bg-primary  flex-row items-center space-x-2 justify-center" onPress={onDone}>
                            <Text className="font-intSemi text-white text-center " style={{ fontSize: Hp(2) }}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9} className="px-8 ios:px-10 py-2 ios:py-3  rounded-full   flex-row items-center space-x-2 justify-center" onPress={toggleModal} style={{
                            borderWidth: 1,
                            borderColor: COLORS.primary,
                        }}>
                            <Text className="font-intSemi text-primary text-center " style={{ fontSize: Hp(2) }}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>
        </View>
    )
}

export default ConfirmModal