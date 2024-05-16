import { TouchableOpacity, Text, ViewStyle, TextStyle } from "react-native";

interface ButtonProps {
    onPress: () => void;
    containerClasses: string;
    title: string;
    textClasses: string;
}

const Button = ({
    onPress,
    title,
    containerClasses,
    textClasses
}: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} className={containerClasses}>
            <Text className={textClasses}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
