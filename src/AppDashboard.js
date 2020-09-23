import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from './redux/mapStoreToProps';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from './components/sidebar/SidebarComponent';
import HeaderComponent from './components/header/HeaderComponent';
import AdminMain from './components/content/AdminMain';
import './AppDashboard.css';

const styles = StyleSheet.create({
    container: {
        height: 300,
        minHeight: '100vh',
        width: '100%',
        marginRight: '2%',
        marginLeft: '0%',
        backgroundColor: '#a3a7a5',
    },
    content: {
        marginTop: 54
    },
    mainBlock: {
        backgroundColor: '#a3a7a5',
        padding: 30,

    },
    root: {
        width: '100%',
    },
});

class AppDashboard extends React.Component {

    state = { selectedItem: `Hi ${this.props.store.user.username}` };

    componentDidMount() {

        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize = () => this.forceUpdate();

    render() {
        const { selectedItem } = this.state;
        return (
            <div>
                <Row className={css(styles.container)}>
                    <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                    <Column flexGrow={1} className={css(styles.mainBlock)}>
                        <HeaderComponent title={selectedItem} />
                        <div className={css(styles.content)}>
                            <h1>{this.props.store.user.id}</h1>
                            <AdminMain />
                        </div>
                        <h1>{this.props.store.user.id}</h1>
                    </Column>
                    <h1>{this.props.store.user.id}</h1>
                </Row>
                <h1>{this.props.store.user.id}</h1>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(AppDashboard);


