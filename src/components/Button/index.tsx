import { TouchableOpacity, Text } from "react-native";

interface ButtonProps {
    isDisabled?: boolean;
    onPress: () => void;
    containerClasses: string;
    title: string;
    textClasses: string;
}

const Button = ({
    isDisabled,
    onPress,
    title,
    containerClasses,
    textClasses
}: ButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className={containerClasses}
            disabled={isDisabled ?? false}
        >
            <Text className={textClasses}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
