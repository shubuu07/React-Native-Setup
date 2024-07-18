import { View, Alert, TouchableOpacity, PermissionsAndroid, Platform, Text } from 'react-native';
import { useEffect } from 'react';
import { Edit2 } from 'phosphor-react-native';
import { launchCamera } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import { Hp } from '../../../../Constants/Theme';
import { setUserProfile } from '../../../../Redux/Slice/UserSlice';
import FastImage from 'react-native-fast-image';

const ProfilePic = ({ profile }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.details)
    const profileImage = useSelector((state) => state.user.profile)
    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {

            try {

                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Permission',
                        message: 'App needs camera permission',
                    },
                );

                // If CAMERA Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else return true;
    };

    const requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'External Storage Write Permission',
                        message: 'App needs write permission',
                    },
                );
                // If WRITE_EXTERNAL_STORAGE Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                Alert.alert('Write permission err', err);
            }
            return false;
        } else return true;
    };

    const selectFunc = () => {
        Alert.alert("Select a photo from", "", [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel pressed"),
                style: "cancel",
            },
            {
                text: "Gallery",
                onPress: () => pickImage(),
            },
            {
                text: "Camera",
                onPress: () => captureImage('photo'),
            }
        ])
    }

    const captureImage = async (type) => {

        let options = {
            mediaType: type,
            quality: 1,
        };
        let isCameraPermitted = await requestCameraPermission();
        let isStoragePermitted = await requestExternalWritePermission();

        // if (isCameraPermitted && isStoragePermitted) {
        if (isCameraPermitted) {
            await launchCamera(options, (response) => {

                if (response.didCancel) {
                    return;
                } else if (response.errorCode == 'camera_unavailable') {
                    Alert.alert('Camera not available on device');
                    return;
                } else if (response.errorCode == 'permission') {
                    Alert.alert('Permission not satisfied');
                    return;
                } else if (response.errorCode == 'others') {
                    Alert.alert(response.errorMessage);
                    return;
                }

                const { uri, width, height, fileSize, type, fileName } = response?.assets[0];

                // -------------------------------- Image feature start's from here --------------------------------------------------

                if (type == 'image/jpeg') {
                    const isLt5MB = isLessThanTheMB(fileSize, 8)
                    if (!isLt5MB) {
                        Alert.alert(`Image size must be smaller than 8MB!`)
                        return
                    } else {
                        dispatch(setUserProfile(uri));
                    }
                }

                // -------------------------------- Image feature End's from here --------------------------------------------------

            });
        }
        else {
            console.log("elseeeeeee")
        }
    };

    const pickImage = async () => {
        try {
            const image = await ImagePicker.openPicker({
                width: 300,
                height: 300,
                cropping: true,
                cropperCircleOverlay: true,
                compressImageQuality: 0.7,
                mediaType: 'photo',
            });

            const { path, width, height, size, mime } = image;

            console.log("type------------>", path);

            // Your existing image handling logic goes here...
            if (mime === 'image/jpeg') {
                const isLt5MB = isLessThanTheMB(size, 8);
                if (!isLt5MB) {
                    Alert.alert(`Image size must be smaller than 8MB!`);
                    return;
                } else {
                    dispatch(setUserProfile(path));
                }
            }
        } catch (error) {
            if (error.code === 'E_PICKER_CANCELLED') {
                Alert.alert('User cancelled image picker');
            } else {
                Alert.alert('Image picker error', error.message || 'Unknown error');
            }
        }
    };

    const isLessThanTheMB = (fileSize, smallerThanSizeMB) => {
        const isOk = fileSize / 1024 / 1024 < smallerThanSizeMB
        return isOk;
    }

    useEffect(() => {
        requestCameraPermission();
        requestExternalWritePermission();
    }, []);

    return (
        <View className='py-5' >
            <View className="self-center border-4 relative border-orange-500 rounded-full bg-slate-100">
                <FastImage priority={FastImage.priority.high} source={{ uri: profileImage == '' ? profile : profileImage }} style={{ width: Hp(13), height: Hp(13) }} className="rounded-full bg-slate-100" />
                <TouchableOpacity onPress={selectFunc} activeOpacity={0.9} className='absolute right-0 -bottom-2 self-center  bg-white rounded-full justify-center items-center' style={{
                    width: Hp(5), height: Hp(5), shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5
                }}>
                    <Edit2 size={Hp(3)} className="text-orange-500" variant='Bold' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfilePic