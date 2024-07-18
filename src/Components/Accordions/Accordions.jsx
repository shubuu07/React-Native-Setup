import { CaretRight } from 'phosphor-react-native';
import { useEffect } from 'react';
import { View, Text, ScrollView, Platform, UIManager, TouchableOpacity, Linking } from 'react-native';
import { AccordionItem } from 'react-native-accordion-list-view';
import { Hp, Wp } from '../../Constants/Theme';
import EmptyList from '../EmptyComponent/EmptyList';
import Animated, { FadeInDown } from 'react-native-reanimated';



const Accordion = ({ supportLinks }) => {
    // ===================== Phone Number Linking =================
    const openLink = (item) => {
        const phoneNumberPattern = /^\d{10}$/;
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
        phoneNumberPattern.test(item) ? Linking.openURL(`http://api.whatsapp.com/send?phone=${'+91' + item}&text=Hi Max Bazaar Team, I need your help`) :
            emailPattern.test(item) ? Linking.openURL(`mailto:${item}`) :
                item.startsWith('http://') || item.startsWith('https://') ? Linking.openURL(item) :
                    console.log(`${item} is not recognized as a phone number, email, or link.`);
    }

    // ===================== Ui Rendering for Android =================
    useEffect(() => {
        if (Platform.OS === 'android') {
            if (UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true);
            }
        }
    }, []);
    return (
        <ScrollView className="" showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: Hp(1.8), paddingVertical: Hp(2), rowGap: Hp(0.2) }}>
            {supportLinks?.length == 0 ? <EmptyList /> :
                <>
                    <Animated.View entering={FadeInDown.delay(1 * 100).duration(800)}>
                        <AccordionItem
                            customTitle={() =>
                                <View className='flex-row items-center' >
                                    <View className='absolute  bg-red-500 ' style={{ width: 3.2, height: Hp(4.5), left: Wp(-3), borderRadius: Hp(1) }} />
                                    <Text className="text-black font-intSemi p-3" style={{ fontSize: Hp(2) }}>Franchise Support Name</Text>
                                </View>}
                            customBody={() =>
                                <View className='flex-row space-x-2 border-t border-slate-100 px-5 pt-2' >
                                    <View className='w-3 h-3 bg-green-400 rounded-full mt-[4px]' />
                                    <TouchableOpacity activeOpacity={0.9}>
                                        <Text className="text-gray-500 font-intMed px-1 pb-2" style={{ fontSize: Hp(1.7) }} >
                                            {supportLinks?.support_name}
                                        </Text>
                                    </TouchableOpacity>

                                </View>

                            }
                            containerStyle={{ borderRadius: Hp(1.2), backgroundColor: "#fff", paddingHorizontal: Hp(1.5) }}
                            animationDuration={400}
                            isOpen={true}
                            expandMultiple={false}
                            customIcon={() => <View className="px-1"><ArrowRight2 size={Hp(2.6)} className="text-slate-400" /></View>}
                        />
                    </Animated.View>

                    <Animated.View entering={FadeInDown.delay(2 * 100).duration(800)}>
                        <AccordionItem
                            customTitle={() => <View className='flex-row items-center' >
                                <View className='absolute  bg-red-500 ' style={{ width: 3.2, height: Hp(4.5), left: Wp(-3), borderRadius: Hp(1) }} />
                                <Text className="text-black font-intSemi p-3" style={{ fontSize: Hp(2) }}>Franchise Support Number</Text>
                            </View>}
                            customBody={() =>
                                <View className='flex-row space-x-2 border-t border-slate-100 px-5 pt-2' >
                                    <View className='w-3 h-3 bg-green-400 rounded-full mt-[4px]' />
                                    <TouchableOpacity onPress={() => openLink(supportLinks?.support_contact)} activeOpacity={0.9}>
                                        <Text className="text-gray-500 font-intMed px-1 pb-2" style={{ fontSize: Hp(1.7) }} >
                                            {supportLinks?.support_contact}
                                        </Text>
                                    </TouchableOpacity>

                                </View>

                            }
                            containerStyle={{ borderRadius: Hp(1.2), backgroundColor: "#fff", paddingHorizontal: Hp(1.5) }}
                            animationDuration={400}
                            isOpen={true}
                            expandMultiple={false}
                            customIcon={() => <View className="px-1"><ArrowRight2 size={Hp(2.6)} className="text-slate-400" /></View>}
                        />
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(3 * 100).duration(800)}>
                        <AccordionItem
                            customTitle={() => <View className='flex-row items-center' >
                                <View className='absolute  bg-red-500 ' style={{ width: 3.2, height: Hp(4.5), left: Wp(-3), borderRadius: Hp(1) }} />
                                <Text className="text-black font-intSemi p-3" style={{ fontSize: Hp(2) }}>Franchise Support Email</Text>
                            </View>}
                            customBody={() =>
                                <View className='flex-row space-x-2 border-t border-slate-100 px-5 pt-2' >
                                    <View className='w-3 h-3 bg-green-400 rounded-full mt-[4px]' />
                                    <TouchableOpacity onPress={() => openLink(supportLinks?.support_email)} activeOpacity={0.9}>
                                        <Text className="text-gray-500 font-intMed px-1 pb-2" style={{ fontSize: Hp(1.7) }} >
                                            {supportLinks?.support_email}
                                        </Text>
                                    </TouchableOpacity>

                                </View>

                            }
                            containerStyle={{ borderRadius: Hp(1.2), backgroundColor: "#fff", paddingHorizontal: Hp(1.5) }}
                            animationDuration={400}
                            isOpen={true}
                            expandMultiple={false}
                            customIcon={() => <View className="px-1"><ArrowRight2 size={Hp(2.6)} className="text-slate-400" /></View>}
                        />
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(4 * 100).duration(800)}>
                        <AccordionItem
                            customTitle={() => <View className='flex-row items-center' >
                                <View className='absolute  bg-red-500 ' style={{ width: 3.2, height: Hp(4.5), left: Wp(-3), borderRadius: Hp(1) }} />
                                <Text className="text-black font-intSemi p-3" style={{ fontSize: Hp(2) }}>Admin Support Email</Text>
                            </View>}
                            customBody={() =>
                                <View className='flex-row space-x-2 border-t border-slate-100 px-5 pt-2' >
                                    <View className='w-3 h-3 bg-green-400 rounded-full mt-[4px]' />
                                    <TouchableOpacity onPress={() => openLink(supportLinks?.admin_support_email)} activeOpacity={0.9}>
                                        <Text className="text-gray-500 font-intMed px-1 pb-2" style={{ fontSize: Hp(1.7) }} >
                                            {supportLinks?.admin_support_email}
                                        </Text>
                                    </TouchableOpacity>

                                </View>

                            }
                            containerStyle={{ borderRadius: Hp(1.2), backgroundColor: "#fff", paddingHorizontal: Hp(1.5) }}
                            animationDuration={400}
                            isOpen={true}
                            expandMultiple={false}
                            customIcon={() => <View className="px-1"><ArrowRight2 size={Hp(2.6)} className="text-slate-400" /></View>}
                        />
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(5 * 100).duration(800)}>
                        <AccordionItem
                            customTitle={() => <View className='flex-row items-center' >
                                <View className='absolute  bg-red-500 ' style={{ width: 3.2, height: Hp(4.5), left: Wp(-3), borderRadius: Hp(1) }} />
                                <Text className="text-black font-intSemi p-3" style={{ fontSize: Hp(2) }}>Admin Support Number</Text>
                            </View>}
                            customBody={() =>
                                <View className='flex-row space-x-2 border-t border-slate-100 px-5 pt-2' >
                                    <View className='w-3 h-3 bg-green-400 rounded-full mt-[4px]' />
                                    <TouchableOpacity onPress={() => openLink(supportLinks?.admin_support_contact)} activeOpacity={0.9}>
                                        <Text className="text-gray-500 font-intMed px-1 pb-2" style={{ fontSize: Hp(1.7) }} >
                                            {supportLinks?.admin_support_contact}
                                        </Text>
                                    </TouchableOpacity>

                                </View>

                            }
                            containerStyle={{ borderRadius: Hp(1.2), backgroundColor: "#fff", paddingHorizontal: Hp(1.5) }}
                            animationDuration={400}
                            isOpen={true}
                            expandMultiple={false}
                            customIcon={() => <View className="px-1"><ArrowRight2 size={Hp(2.6)} className="text-slate-400" /></View>}
                        />
                    </Animated.View>
                </>
            }
        </ScrollView>

    );
};

export default Accordion;
