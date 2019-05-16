import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Tabs from 'react-native-tabs';
import { colors } from '../utils/colors';
import { heightScale, widthScale } from '../utils/utils';
import images from '../images/index';
import SelectedTab from '../components/SelectedTab';
import Home from './Home/Home';
import Leaderboard from './Leaderboard/Leaderboard';
import Portfolio from './Portfolio/Portfolio';
import Profile from './Profile/Profile';
import Header from '../components/Header';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/dashboard';

class Dashboard extends Component {

    onHeaderButtonPressed = () => {
        this.props.dispatch(actions.changeMenuOpenStatus(!this.props.dashboard.isMenuOpened))
    }

    render() {
        const {page} = this.props.dashboard;
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Header page={page} onHeaderButtonPressed={this.onHeaderButtonPressed}/>
                    {
                        page === 'home' ? 
                        <Home/> :
                        page === 'leaderboard' ? 
                        <Leaderboard/> : 
                        page === 'portfolio' ?
                        <Portfolio/> :  
                        <Profile/>
                    }
                </View>
                <Tabs selected={page} style={styles.tabContainer} onSelect={el => this.props.dispatch(actions.changePage(el.props.name))}>
                    {
                        page === 'home' ?
                            <SelectedTab name='home' /> :
                            <Image name="home" source={images.home} style={styles.iconImageStyle} />
                    }
                    {
                        page === 'leaderboard' ?
                            <SelectedTab name='leaderboard' /> :
                            <Image name="leaderboard" source={images.leaderboard} style={styles.iconImageStyle} />
                    }
                    {
                        page === 'portfolio' ?
                            <SelectedTab name='portfolio' /> :
                            <Image name="portfolio" source={images.portfolio} style={styles.iconImageStyle} />
                    }
                    {
                        page === 'profile' ?
                            <SelectedTab name='profile' /> :
                            <Image name="profile" source={images.profile} style={styles.iconImageStyle} />
                    }
                </Tabs>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkGray,
    },
    innerContainer: {
        flex: 1, 
        backgroundColor: colors.black,
        marginBottom: heightScale(45)
    },
    tabContainer: {
        backgroundColor: colors.yellow
    },
    iconImageStyle: {
        height: heightScale(20),
        width: widthScale(20)
    }
});

const mapStateToProps = (state) => {
    return {
        dashboard: state.dashboard
    }
}

export default connect(mapStateToProps)(Dashboard);