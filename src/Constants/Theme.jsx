import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useColorScheme } from "nativewind";

export const { colorScheme } = useColorScheme();
export const Colors = {
    primary: '#F97316',
    secondary: 'rgb(252, 124, 59)',
    white: '#FFF',
    slateGray: '#eff2fa',
    black: '#000',
    darkGray: '#A1A1AA',
    lightGray: '#EFF2F9',
    lightGray2: '#FAFBFF',
    red: '#FF0000',
    green: '#22C55E',
    gray: '#94a3b8',
    orangeShade: '#FC7C3B29'
};

export const Wp = wp
export const Hp = hp

export const Fonts = {
    intBold: { fontFamily: "Inter-Bold" },
    intMed: { fontFamily: "Inter-Medium" },
    intReg: { fontFamily: "Inter-Regular" },
    intSemi: { fontFamily: "Inter-SemiBold" },
};

const appTheme = { Colors, Fonts, Wp, Hp };

export default appTheme;