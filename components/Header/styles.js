import {StyleSheet} from 'react-native';
// import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal:20

    },

    logo: {
        width: 100,
        height: 20,
        resizeMode: 'center'
    },

    menu: {
        width: 25,
        height: 25,
        resizeMode: 'center'
    }

});

export default styles;
