import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useColorScheme } from "nativewind";

export const { colorScheme } = useColorScheme();
export const Colors = {
    primary: '#F97316',
    secondary: 'rgb(252, 124, 59)',
    slateGray: '#eff2fa',
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