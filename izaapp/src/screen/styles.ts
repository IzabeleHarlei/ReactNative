import { StyleSheet} from "react-native";
import { theme} from '../global/styles/theme';
export const styles = StyleSheet.create({
    container: {
        flex: 1 ,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: theme.colors.background
    },
    image:{
        width: '100%',
        height:360
    },
    content:{
        marginTop:-40
    },
    title:{
        color: theme.colors.header,
        fontSize:40, 
        marginBottom: 16,
        textAlign: 'center'
    },
    subtitle:{
        color: theme.colors.header,
        fontSize:15,
        marginBottom:64
    }
});