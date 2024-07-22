import { Star } from 'phosphor-react-native';
import { View, Text } from 'react-native';
import { Hp } from '../Constants/Theme';

const StarRating = ({ rating }) => (
    <View className="flex-row items-center space-x-[1px]">
        {[...Array(5)].map((_, index) => (
            <Star
                key={index}
                size={Hp(2.2)}
                color={index < rating ? 'gold' : 'gray'}
                weight={index < rating ? 'fill' : 'thin'}
            />
        ))}
        <Text className="text-black font-semibold pl-1" style={{ fontSize: Hp(1.7) }}>{rating}</Text>
    </View>
);

export default StarRating;
