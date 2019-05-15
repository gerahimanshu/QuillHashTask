import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

class Home extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>HOME</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.darkGray
    },
    text: {
        color: colors.white
    }
})

export default Home;