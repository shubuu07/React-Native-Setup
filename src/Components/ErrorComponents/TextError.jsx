import { Text } from "react-native";
import { Hp } from "../../Constants/Theme";
import Snackbar from "react-native-snackbar";

export default function TextError({ title }) {
    return (
        <Text type="error" className="text-red-500 px-2 py-1 mx-1  font-intMed" style={{ fontSize: Hp(1.6) }}>
            {title}
        </Text>
    )
}


export const showSnackbar = (message, backgroundColor) => {
    Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_SHORT,
        fontFamily: "Inter-SemiBold",
        textColor: "#fff",
        backgroundColor: backgroundColor
    });
};