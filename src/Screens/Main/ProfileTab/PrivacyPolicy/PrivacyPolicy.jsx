import { View, StatusBar, Platform } from 'react-native';
import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { WebView } from 'react-native-webview';
import { useFocusEffect } from '@react-navigation/native';
import Header from '../../../../Components/Header/Header';
const staticUrl = 'https://www.termsfeed.com/live/1953982d-7b66-49d9-bd9b-90b4d0ecda2d';


const PrivacyPolicy = () => {
    const webViewRef = useRef();
    const [url, setUrl] = useState(staticUrl);

    useFocusEffect(
        React.useCallback(() => {
            setUrl(staticUrl);
            return () => {
                setUrl(undefined);
            };
        }, [url]),
    );

    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar backgroundColor="#fff" barStyle='dark-content' />
            <View className='flex-1 bg-slate1' >
                <Header name="Privacy Policy" />
                <WebView
                    originWhitelist={['*']}
                    startInLoadingState={true}
                    ref={webViewRef}
                    style={{ marginTop: Platform.OS === 'android' ? 0 : 0 }}
                    source={{ uri: staticUrl }}
                />
            </View>
        </SafeAreaView>
    )
}

export default PrivacyPolicy