import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from '../sidebar/SidebarComponent';
import HeaderComponent from '../header/HeaderComponent';
import AdminMain from '../content/AdminMain';
import TabClassTraining from '../content/TabClassTraining';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    minHeight: '100vh',
    width: '100%',
    marginRight: '2%',
    marginLeft: '0%',
  },
  content: {
    marginTop: 54,
  },
  mainBlock: {
    backgroundColor: '#a3a7a5',
    padding: 30,
  },
});

class AdminClasses extends React.Component {
  state = { selectedItem: 'Classes and Training Resources' };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.props.dispatch({
      type: 'FETCH_PROGRAMS',
    });
    this.props.dispatch({
      type: 'FETCH_LEARNING_MATERIALS',
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => this.forceUpdate();

  render() {
    const { selectedItem } = 'Classes and Training Resources';
    return (
      <Row className={css(styles.container)}>
        <SidebarComponent
          selectedItem={selectedItem}
          onChange={(selectedItem) => this.setState({ selectedItem })}
        />
        <Column flexGrow={1} className={css(styles.mainBlock)}>
          <HeaderComponent title={selectedItem} />
          <div className={css(styles.content)}>
            <AdminMain />
            <TabClassTraining />
          </div>
        </Column>
      </Row>
    );
  }
}

export default connect(mapStoreToProps)(AdminClasses);
