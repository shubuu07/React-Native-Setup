import { CallCalling, Gift, Location, Lock, Setting2, RecoveryConvert } from "phosphor-react-native";
import { Colors, Hp } from "../../Constants/Theme";
import { CaretRight, Power } from "phosphor-react-native";
import CustomIcons from "../../Helper/CustomIcons";

export const userProfileTabs = [
    {
        id: 1,
        header: 'Profile',
        item: [
            {
                id: 1,
                leftIcon: <CustomIcons name={"user-add-line"} size={Hp(2.8)} color={Colors.slateGray500} />,
                tabTitle: 'Edit Profile',
                rightIcon: <CaretRight size={Hp(2.2)} color={Colors.slateGray500} weight='bold' />,
                onPress: "editProfile"
            },
            {
                id: 1,
                leftIcon: <CustomIcons name={"history-line"} size={Hp(2.8)} color={Colors.slateGray500} />,
                tabTitle: 'My Bookings',
                rightIcon: <CaretRight size={Hp(2.2)} color={Colors.slateGray500} weight='bold' />,
                onPress: "manageAddress"
            },
            {
                id: 2,
                leftIcon: <CustomIcons name={"gift-2-line"} size={Hp(2.8)} color={Colors.slateGray500} />,
                tabTitle: 'Refer And Earn',
                rightIcon: <CaretRight size={Hp(2.2)} color={Colors.slateGray500} weight='bold' />,
                onPress: "refer"
            },

            // {
            //     id: 2,
            //     leftIcon: <Moneys size={Hp(2.8)} color={Colors.slateGray500} className="text-blue-500" />,
            //     tabTitle: 'My Wallet',
            //     rightIcon: <CaretRight size={Hp(2.2)} color={Colors.slateGray500} weight='bold' />,
            //     onPress: "wallet"
            // },
            // {
            //     id: 3,
            //     leftIcon: <DiscountShape size={Hp(2.8)} color={Colors.slateGray500} className="text-emerald-500" />,
            //     tabTitle: 'Apply Coupons',
            //     rightIcon: <CaretRight size={Hp(2.2)} color={Colors.slateGray500} weight='bold' />,
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
                leftIcon: <CustomIcons name={"git-repository-private-line"} size={Hp(2.8)} color={Colors.slateGray500} />,
                tabTitle: 'Privacy Policy',
                rightIcon: <CaretRight size={Hp(2.2)} color={Colors.slateGray500} weight='bold' />,
                onPress: "privacyPolicy"
            },
            {
                id: 2,
                leftIcon: <CustomIcons name={"customer-service-2-line"} size={Hp(2.8)} color={Colors.slateGray500} />,
                tabTitle: 'Contact Us',
                rightIcon: <CaretRight size={Hp(2.2)} color={Colors.slateGray500} weight='bold' />,
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
                leftIcon: <CustomIcons name={"settings-2-line"} size={Hp(2.8)} color={Colors.slateGray500} />,
                tabTitle: 'Settings',
                rightIcon: <CaretRight size={Hp(2.2)} color={Colors.slateGray500} weight='bold' />,
                onPress: "setting"
            },
            {
                id: 2,
                leftIcon: <CustomIcons name={"user-shared-2-line"} size={Hp(2.8)} color={Colors.slateGray500} />,
                tabTitle: 'Log Out',
                rightIcon: <CaretRight size={Hp(2.2)} color={Colors.slateGray500} weight='bold' />,
                onPress: "logout"
            },
        ]
    },
]


export const activities = [
    {
        id: 1,
        title: 'Basketball',
        color: "#ef4444",
        backgroundColor: "#fee2e2",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M243.31,81.37,190.63,28.69a16,16,0,0,0-22.63,0L60.69,136a16,16,0,0,0,0,22.63l20.68,20.68-47,47a8,8,0,0,0,11.32,11.32l47-47,20.68,20.68a16,16,0,0,0,22.63,0L243.31,104a16,16,0,0,0,0-22.63ZM124.69,200,104,179.31l29.66-29.65a8,8,0,0,0-11.32-11.32L92.69,168,72,147.31,107.31,112H160v52.69ZM232,92.69l-56,56V104a8,8,0,0,0-8-8H123.31l56-56L232,92.68ZM60,88A28,28,0,1,0,32,60,28,28,0,0,0,60,88Zm0-40A12,12,0,1,1,48,60,12,12,0,0,1,60,48Z"></path></svg>,
        onPress: "basketball"
    },
    {
        id: 2,
        title: 'Cricket',
        color: "#a855f7",
        backgroundColor: "#f3e8ff",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M243.31,81.37,190.63,28.69a16,16,0,0,0-22.63,0L60.69,136a16,16,0,0,0,0,22.63l20.68,20.68-47,47a8,8,0,0,0,11.32,11.32l47-47,20.68,20.68a16,16,0,0,0,22.63,0L243.31,104a16,16,0,0,0,0-22.63ZM124.69,200,104,179.31l29.66-29.65a8,8,0,0,0-11.32-11.32L92.69,168,72,147.31,107.31,112H160v52.69ZM232,92.69l-56,56V104a8,8,0,0,0-8-8H123.31l56-56L232,92.68ZM60,88A28,28,0,1,0,32,60,28,28,0,0,0,60,88Zm0-40A12,12,0,1,1,48,60,12,12,0,0,1,60,48Z"></path></svg>,
        onPress: "cycling"
    },
    {
        id: 3,
        title: 'Pickleball',
        color: "#3b82f6",
        backgroundColor: "#dbeafe",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M243.31,81.37,190.63,28.69a16,16,0,0,0-22.63,0L60.69,136a16,16,0,0,0,0,22.63l20.68,20.68-47,47a8,8,0,0,0,11.32,11.32l47-47,20.68,20.68a16,16,0,0,0,22.63,0L243.31,104a16,16,0,0,0,0-22.63ZM124.69,200,104,179.31l29.66-29.65a8,8,0,0,0-11.32-11.32L92.69,168,72,147.31,107.31,112H160v52.69ZM232,92.69l-56,56V104a8,8,0,0,0-8-8H123.31l56-56L232,92.68ZM60,88A28,28,0,1,0,32,60,28,28,0,0,0,60,88Zm0-40A12,12,0,1,1,48,60,12,12,0,0,1,60,48Z"></path></svg>,
        onPress: "Pickleball"
    },
    {
        id: 4,
        title: 'Football',
        color: "#22c55e",
        backgroundColor: "#dcfce7",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M243.31,81.37,190.63,28.69a16,16,0,0,0-22.63,0L60.69,136a16,16,0,0,0,0,22.63l20.68,20.68-47,47a8,8,0,0,0,11.32,11.32l47-47,20.68,20.68a16,16,0,0,0,22.63,0L243.31,104a16,16,0,0,0,0-22.63ZM124.69,200,104,179.31l29.66-29.65a8,8,0,0,0-11.32-11.32L92.69,168,72,147.31,107.31,112H160v52.69ZM232,92.69l-56,56V104a8,8,0,0,0-8-8H123.31l56-56L232,92.68ZM60,88A28,28,0,1,0,32,60,28,28,0,0,0,60,88Zm0-40A12,12,0,1,1,48,60,12,12,0,0,1,60,48Z"></path></svg>,
        onPress: "football"
    },
    {
        id: 5,
        title: 'Tennis',
        color: "#f97316",
        backgroundColor: "#ffedd5",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M243.31,81.37,190.63,28.69a16,16,0,0,0-22.63,0L60.69,136a16,16,0,0,0,0,22.63l20.68,20.68-47,47a8,8,0,0,0,11.32,11.32l47-47,20.68,20.68a16,16,0,0,0,22.63,0L243.31,104a16,16,0,0,0,0-22.63ZM124.69,200,104,179.31l29.66-29.65a8,8,0,0,0-11.32-11.32L92.69,168,72,147.31,107.31,112H160v52.69ZM232,92.69l-56,56V104a8,8,0,0,0-8-8H123.31l56-56L232,92.68ZM60,88A28,28,0,1,0,32,60,28,28,0,0,0,60,88Zm0-40A12,12,0,1,1,48,60,12,12,0,0,1,60,48Z"></path></svg>,
        onPress: "tennis"
    },
    {
        id: 6,
        title: 'Badminton',
        color: "#d946ef",
        backgroundColor: "#fae8ff",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M243.31,81.37,190.63,28.69a16,16,0,0,0-22.63,0L60.69,136a16,16,0,0,0,0,22.63l20.68,20.68-47,47a8,8,0,0,0,11.32,11.32l47-47,20.68,20.68a16,16,0,0,0,22.63,0L243.31,104a16,16,0,0,0,0-22.63ZM124.69,200,104,179.31l29.66-29.65a8,8,0,0,0-11.32-11.32L92.69,168,72,147.31,107.31,112H160v52.69ZM232,92.69l-56,56V104a8,8,0,0,0-8-8H123.31l56-56L232,92.68ZM60,88A28,28,0,1,0,32,60,28,28,0,0,0,60,88Zm0-40A12,12,0,1,1,48,60,12,12,0,0,1,60,48Z"></path></svg>,
        onPress: "badminton"
    },
] 