import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Colors = {
    primary: '#f97316',
    secondary: 'rgb(252, 124, 59)',
    slateGray: '#eff2fa',
    black: '#000000',
    white: '#ffffff',
    blue: '#3b82f6',
    red: '#ef4444',
    slateGray400: '#94a3b8',
    slateGray500: '#64748b',
    slateGray600: '#475569',
    slateGray700: '#334155',
    slateGray800: '#1e293b',
    slateGray900: '#0f172a',
};

export const Wp = wp
export const Hp = hp

export const Fonts = {
    intBold: { fontFamily: "Inter-Bold" },
    intMed: { fontFamily: "Inter-Medium" },
    intReg: { fontFamily: "Inter-Regular" },
    intSemi: { fontFamily: "Inter-SemiBold" },
    Muli: { fontFamily: 'Mulish-Regular' },
    MuliMed: { fontFamily: 'Mulish-Medium' },
    MuliSemi: { fontFamily: 'Mulish-SemiBold' },
    MuliBold: { fontFamily: 'Mulish-Bold' },
    MuliBlack: { fontFamily: 'Mulish-Black' },
};

const appTheme = { Colors, Fonts, Wp, Hp };

export default appTheme;