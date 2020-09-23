import React from 'react';
import { Column } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        border: '1px solid #DFE0EB',
        borderRadius: 4,

        height: 140,
        maxWidth: 350,
        padding: '24px 32px 24px 32px',
        ':hover': {
            borderColor: '#e7a011',
            ':nth-child(n) > span': {
                color: '#e7a011'
            }
        }
    },
    title: {
        color: '#9FA2B4',
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 19,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        marginBottom: 12,
        minWidth: 102,
        textAlign: 'center'
    },
    value: {
        color: '#252733',
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 40,
        letterSpacing: '1px',
        lineHeight: '50px',
        textAlign: 'center'
    }
});

function MiniCardComponent({ className = '', title, value }) {
    const composedClassName = `${css(styles.container)} ${className}`;
    return (
        <Column flexGrow={1} className={composedClassName} horizontal="center" vertical="center">
            <span className={css(styles.title)}>{title}</span>
            <span className={css(styles.value)}>{value}</span>
        </Column>
    );
}

export default MiniCardComponent;