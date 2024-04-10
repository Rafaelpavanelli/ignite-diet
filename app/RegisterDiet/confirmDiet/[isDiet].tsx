import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';
export default function IsDiet(){
    const { isDiet } = useLocalSearchParams();
    return(
        <>
        <Text>isDiet = {isDiet}</Text>
        </>
    )
}