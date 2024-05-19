import Checkbox from "expo-checkbox";
import { View } from "react-native";

const Form = () => {
    return (
        <View>
            {/* TODO: Add group for search and sort */}
            <Checkbox value={true} style={{ margin: 8 }} />
        </View>
    );
};

export default Form;
