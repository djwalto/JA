import React from 'react';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import Logo from '../../assets/icon-logo';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


const styles = StyleSheet.create({
    container: {
        marginLeft: 32,
        marginRight: 32
    },
    title: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 22,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        color: 'white',
        opacity: 0.7,
        marginLeft: 12
    }
});

function LogoComponent() {
    console.log(this);



    return (
        <Row className={css(styles.container)} horizontal="center" vertical="center">

            <span className={css(styles.title)}>JA Connect</span>
        </Row>
    );
}

export default connect(mapStoreToProps)(LogoComponent);