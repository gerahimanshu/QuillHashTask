import React from 'react'
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import images from '../../images/index'
import {heightScale, widthScale} from '../../utils/utils';

const PortfolioItem = ({item}) => {
    const {
        title,
        category,
        royaltiesEarned,
        tokensHeld,
        zc,
        imageUrl
    } = item
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.leftContainer}>
                <View>
                    <Image source={{uri: imageUrl}} style={styles.image}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitleCategory}>{title}</Text>
                    <Text style={styles.textTitleCategory}>{category}</Text>
                    <Text style={styles.textRoyalties}>{`ROYALTIES EARNED: ${royaltiesEarned}`}</Text>
                    <Text style={styles.textTokens}>{`TOKENS HELD: ${tokensHeld}`}</Text>
                </View>
            </View>
            <View>
                <Image source={images.arrow} style={styles.arrowImage}/>
                <View style={styles.zcContainer}>
                    <Text style={styles.textZc}>{`ZC: ${zc}`}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        backgroundColor: colors.black, 
        marginHorizontal: widthScale(5), 
        marginVertical: heightScale(7), 
        borderRadius: 4
    },
    leftContainer: {
        flexDirection: 'row'
    },
    image: {
        height: heightScale(80), 
        width: widthScale(80), 
        borderTopLeftRadius: 4, 
        borderBottomLeftRadius: 4
    },
    textContainer: {
        marginHorizontal: widthScale(15), 
        justifyContent: 'center'
    },
    textTitleCategory: {
        color: colors.lightGray, 
        fontSize: widthScale(12)
    },
    textRoyalties: {
        color: colors.yellow, 
        marginTop: heightScale(7), 
        fontSize: widthScale(10)
    },
    textTokens: {
        color: colors.white, fontSize: 10
    },
    arrowImage: {
        marginRight: widthScale(5), 
        marginTop: heightScale(5), 
        height: heightScale(15), 
        width: widthScale(15), 
        alignSelf: 'flex-end'
    },
    zcContainer: {
        marginTop: heightScale(10),
        paddingHorizontal: widthScale(10), 
        paddingVertical: heightScale(5), 
        borderTopLeftRadius: 10, 
        borderBottomLeftRadius: 10, 
        backgroundColor: colors.yellow
    },
    textZc: {
        color: colors.black, 
        fontSize: widthScale(10), 
        fontWeight: 'bold'
    }
})

export default PortfolioItem;