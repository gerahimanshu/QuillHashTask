import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { colors } from '../../utils/colors';
import portFolioData from '../../utils/portfolioData';
import PortfolioItem from './PortfolioItem';
import { widthScale, heightScale } from '../../utils/utils'
import images from '../../images/index'

class Portfolio extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={portFolioData}
                    renderItem={({ item }) => (
                        <PortfolioItem
                            item={item}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
                <View style={styles.walletContainer}>
                    <View>
                        <Text style={{ color: colors.lightGray, fontSize: 14 }}>WALLET</Text>
                        <Text style={{ color: colors.white, fontSize: 18 }}>Zeptacoins</Text>
                    </View>
                    <View>
                        <Image source={images.arrow} style={styles.arrowImage} />
                        <View style={styles.zcContainer}>
                            <Text style={styles.textZc}>34000</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkGray
    },
    text: {
        color: colors.white
    },
    walletContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.black,
        marginHorizontal: widthScale(5),
        marginTop: heightScale(12),
        paddingVertical: heightScale(10),
        paddingLeft: widthScale(10),
        borderRadius: 4
    },
    arrowImage: {
        marginRight: widthScale(5), 
        height: heightScale(15), 
        width: widthScale(15), 
        alignSelf: 'flex-end'
    },
    zcContainer: {
        marginTop: heightScale(10),
        paddingHorizontal: widthScale(30), 
        paddingVertical: heightScale(5), 
        borderTopLeftRadius: 10, 
        borderBottomLeftRadius: 10, 
        backgroundColor: colors.greyBlue
    },
    textZc: {
        color: colors.black, 
        fontSize: widthScale(10), 
        fontWeight: 'bold'
    }
})

export default Portfolio;