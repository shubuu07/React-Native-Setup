import { Text } from "react-native";
import { Hp } from "../../Constants/Theme";

export default function TextError({ title }) {
    return (
        <Text type="error" className="text-red-500 px-2 py-1 mx-1  font-intMed" style={{ fontSize: Hp(1.6) }}>
            {title}
        </Text>
    )
}