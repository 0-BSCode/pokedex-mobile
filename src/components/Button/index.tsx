import { TouchableOpacity, Text, ViewStyle, TextStyle } from "react-native";

interface ButtonProps {
    onPress: () => void;
    containerStyles: ViewStyle;
    title: string;
    textStyles: TextStyle;
}

const Button = ({
    onPress,
    title,
    containerStyles,
    textStyles
}: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={containerStyles}>
            <Text style={textStyles}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
