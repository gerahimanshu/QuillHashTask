import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {heightScale, widthScale} from '../utils/utils'
import {colors} from '../utils/colors';
import images from '../images/index'

const Header = (props) => {
    const {page, onHeaderButtonPressed} = props;
    return (
        <View>
            <View style={styles.innerView}>
                <View style={styles.emptyView}></View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{page.toUpperCase()}</Text>
                </View>
                <TouchableOpacity style={styles.arrowView} onPress={() => onHeaderButtonPressed()}>
                    <Image source={images.dropdown} style={styles.arrowImage}/>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomView}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    innerView: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    emptyView: {
        flex: 0.2
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
        paddingVertical: heightScale(15)
    },
    arrowView: {
        justifyContent: 'center', 
        marginRight: widthScale(10)
    },
    arrowImage: {
        alignSelf: 'flex-end', 
        height: heightScale(20), 
        width: widthScale(20)
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