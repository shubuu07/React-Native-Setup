import { CallCalling, Gift, Location, Lock, Setting2, RecoveryConvert } from "phosphor-react-native";
import { Hp } from "../../Constants/Theme";
import { CaretRight, Power } from "phosphor-react-native";

export const userProfileTabs = [
    {
        id: 1,
        header: 'Money',
        item: [
            {
                id: 1,
                leftIcon: <Location size={Hp(3)} className="text-red-500" />,
                tabTitle: 'Manage Address',
                rightIcon: <CaretRight size={Hp(2.2)} className="text-slate-400" weight='bold' />,
                onPress: "manageAddress"
            },
            {
                id: 2,
                leftIcon: <Gift size={Hp(3)} className="text-blue-500" />,
                tabTitle: 'Refer and Earn',
                rightIcon: <CaretRight size={Hp(2.2)} className="text-slate-400" weight='bold' />,
                onPress: "refer"
            },

            // {
            //     id: 2,
            //     leftIcon: <Moneys size={Hp(3)} className="text-blue-500" />,
            //     tabTitle: 'My Wallet',
            //     rightIcon: <CaretRight size={Hp(2.2)} className="text-slate-400" weight='bold' />,
            //     onPress: "wallet"
            // },
            // {
            //     id: 3,
            //     leftIcon: <DiscountShape size={Hp(3)} className="text-emerald-500" />,
            //     tabTitle: 'Apply Coupons',
            //     rightIcon: <CaretRight size={Hp(2.2)} className="text-slate-400" weight='bold' />,
            //     onPress: "coupons"
            // },
        ]
    },
    {
        id: 2,
        header: 'Support & Help',
        item: [
            {
                id: 1,
                leftIcon: <Lock size={Hp(3)} className="text-purple-500" />,
                tabTitle: 'Privacy Policy',
                rightIcon: <CaretRight size={Hp(2.2)} className="text-slate-400" weight='bold' />,
                onPress: "privacyPolicy"
            },
            {
                id: 2,
                leftIcon: <RecoveryConvert size={Hp(3)} className="text-blue-500" />,
                tabTitle: 'Return & Refund Policy',
                rightIcon: <CaretRight size={Hp(2.2)} className="text-slate-400" weight='bold' />,
                onPress: "refundPolicy"
            },
            {
                id: 3,
                leftIcon: <CallCalling size={Hp(3)} className="text-fuchsia-500" />,
                tabTitle: 'Help Center',
                rightIcon: <CaretRight size={Hp(2.2)} className="text-slate-400" weight='bold' />,
                onPress: "helpCenter"
            },
        ]
    },
    {
        id: 3,
        header: 'Settings & Logout',
        item: [
            {
                id: 1,
                leftIcon: <Setting2 size={Hp(3)} className="text-orange-500" />,
                tabTitle: 'Settings',
                rightIcon: <CaretRight size={Hp(2.2)} className="text-slate-400" weight='bold' />,
                onPress: "setting"
            },
            {
                id: 2,
                leftIcon: <Power size={Hp(3)} className="text-red-500" weight="regular" />,
                tabTitle: 'Log Out',
                rightIcon: <CaretRight size={Hp(2.2)} className="text-slate-400" weight='bold' />,
                onPress: "logout"
            },
        ]
    },


]