import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightScale} from '../utils/utils'
import {colors} from '../utils/colors';

const Header = (props) => {
    const {page} = props;
    return (
        <View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{page.toUpperCase()}</Text>
            </View>
            <View style={styles.bottomView}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        alignItems: 'center', 
        paddingVertical: heightScale(15)
    },
    text: {
        color: colors.yellow
    },
    bottomView: {
        height: heightScale(2), 
        backgroundColor: colors.yellow
    }
})

export default Header