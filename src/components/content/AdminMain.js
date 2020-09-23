import React, { useEffect } from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important';
import MiniCardComponent from './MiniCardComponent';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


const styles = StyleSheet.create({
  cardsContainer: {
    marginRight: -30,
    marginTop: -90,
  },
  cardRow: {
    marginTop: 30,
    '@media (max-width: 768px)': {
      marginTop: 0,
    },
  },
  miniCardContainer: {
    flexGrow: 1,
    marginRight: 30,
    '@media (max-width: 768px)': {
      marginTop: 30,
      maxWidth: 'none',
    },
  },
  lastRow: {
    marginTop: 30,
  },
});

function AdminMain(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'FETCH_VOLUNTEER_COUNT',
    });
    dispatch({
      type: 'FETCH_IN_PROGRESS',
    });
    dispatch({
      type: 'FETCH_STUDENTS',
    });
    dispatch({
      type: 'FETCH_COMPLETED',
    });
  }, [dispatch]);

  return (
    <Column>
      <Row
        className={css(styles.cardsContainer)}
        wrap
        flexGrow={1}
        horizontal="space-between"
        breakpoints={{ 768: 'column' }}
      >
        <Row
          className={css(styles.cardRow)}
          wrap
          flexGrow={1}
          horizontal="space-between"
          breakpoints={{ 384: 'column' }}
        >
          <MiniCardComponent
            className={css(styles.miniCardContainer)}
            title="Completed Classes"
            value={props.store.completedCounter.count}
          />
          <MiniCardComponent
            className={css(styles.miniCardContainer)}
            title="Classes In Progress"
            value={props.store.progressCounter.count}
          />
        </Row>
        <Row
          className={css(styles.cardRow)}
          wrap
          flexGrow={1}
          horizontal="space-between"
          breakpoints={{ 384: 'column' }}
        >
          <MiniCardComponent
            className={css(styles.miniCardContainer)}
            title="Total Volunteers"
            value={props.store.volunteerCounter.count}
          />
          <MiniCardComponent
            className={css(styles.miniCardContainer)}
            title="Total Students Taught"
            value={props.store.studentCounter.sum}
          />
        </Row>
      </Row>

      <Row
        horizontal="space-between"
        className={css(styles.lastRow)}
        breakpoints={{ 1024: 'column' }}
      ></Row>
    </Column>
  )
}

export default connect(mapStoreToProps)(AdminMain);
