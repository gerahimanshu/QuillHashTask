import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widthScale, heightScale} from '../utils/utils';
import {colors} from '../utils/colors';

const SelectedTab = (props) => {
    const {name} = props;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{name.toUpperCase()}</Text>
        </View>
    )
}  

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black, 
        borderRadius: widthScale(15), 
        paddingHorizontal: widthScale(7),
        paddingVertical: widthScale(7)
    },
    text: {
        color: colors.yellow,
        fontSize: widthScale(10)
    }
})

export default SelectedTab;