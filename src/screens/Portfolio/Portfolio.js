import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../utils/colors';
import portFolioData from '../../utils/portfolioData';
import PortfolioItem from './PortfolioItem';
import { widthScale, heightScale } from '../../utils/utils'
import images from '../../images/index'
import { connect } from 'react-redux';
import menuData from '../../utils/portFolioMenuData';

class Portfolio extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedMenuIndex: 0,
            
        }
    }

    onMenuItemPress = (index) => {
        this.setState({selectedMenuIndex: index})
    }

    renderMenuItem = (item, index) => {
        if(index === this.state.selectedMenuIndex){
            return (
                <View style={styles.menuRow}>
                    <View style={{...styles.menuCircleView, backgroundColor: colors.yellow}}>
                        <View style={styles.menuInnerCicleView}></View>
                    </View>
                    <Text style={{...styles.menuText, color: colors.yellow}}>{item.name.toUpperCase()}</Text>
                </View>
            )
        }else{
            return (
                <TouchableOpacity style={styles.menuRow} onPress={() => this.onMenuItemPress(index)}>
                    <View style={{...styles.menuCircleView, backgroundColor: colors.lightGray}}>
                        <View style={styles.menuInnerCicleView}></View>
                    </View>
                    <Text style={{...styles.menuText, color: colors.lightGray}}>{item.name.toUpperCase()}</Text>
                </TouchableOpacity>
            )
        }
    }

    render() {
        const {isMenuOpened} = this.props;
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
                {
                    isMenuOpened &&
                    <View style={styles.menuContainer}>
                        <FlatList
                            data={menuData}
                            renderItem={({ item, index }) => this.renderMenuItem(item, index)}
                            keyExtractor={item => item.id}
                            extraData={this.state}
                        />
                    </View>
                }
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
    menuContainer: {
        backgroundColor: colors.black, 
        alignSelf: 'flex-end',
        top: heightScale(-15),
        right: widthScale(10),
        position: 'absolute',
        borderRadius: 10,
        borderColor: colors.white,
        borderWidth: widthScale(0.5),
        paddingHorizontal: widthScale(10),
        paddingVertical: heightScale(10)
    },
    menuRow: {
        flexDirection: 'row',
        marginVertical: heightScale(2.5)
    },
    menuText: {
        marginLeft: widthScale(20),
        fontSize: widthScale(10),
        alignSelf: 'center',
    },
    menuCircleView: {
        height: heightScale(18), 
        width: widthScale(18), 
        borderRadius: 10, 
        alignSelf: 'center', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    menuInnerCicleView: {
        height: heightScale(13), 
        width: widthScale(13), 
        borderRadius: 10, 
        backgroundColor: colors.black, 
        alignSelf: 'center'
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

const mapStateToProps = (state) => {
    return {
        isMenuOpened: state.dashboard.isMenuOpened
    }
}

export default connect(mapStateToProps)(Portfolio);