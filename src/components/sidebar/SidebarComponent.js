import React, { useCallback, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import LogoComponent from './LogoComponent';
import MenuItemComponent from './MenuItemComponent';
import IconOverview from '../../assets/icon-overview.js';
import IconContacts from '../../assets/icon-contacts';
import IconAgents from '../../assets/icon-agents';
import IconArticles from '../../assets/icon-articles';
import IconBurger from '../../assets/icon-burger';
import Volunteers from '../content/Volunteers';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './SidebarComponent.css';
// import UnresolvedTicketsComponent from '../content/UnresolvedTicketsComponent';
// import AddAdmin from '../AddAdmin/AddAdmin';

const styles = StyleSheet.create({
  burgerIcon: {
    cursor: 'pointer',
    position: 'absolute',
    left: 24,
    top: 34,
  },
  container: {
    backgroundColor: '#363740',
    color: '#61b42a',
    width: 255,
    paddingTop: 32,
    height: 'calc(100% - 32px)',
  },
  containerMobile: {
    transition: 'left 0.5s, right 0.5s',
    position: 'absolute',
    width: 255,
    height: 'calc(100% - 32px)',
    zIndex: 901,
  },
  mainContainer: {
    height: '100%',
    minHeight: '100vh',
  },
  mainContainerMobile: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  mainContainerExpanded: {
    width: '100%',
    minWidth: '100vh',
  },
  menuItemList: {
    marginTop: 52,
  },
  outsideLayer: {
    position: 'absolute',
    width: '100vw',
    minWidth: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.50)',
    zIndex: 900,
  },
  separator: {
    borderTop: '1px solid #DFE0EB',
    marginTop: 16,
    marginBottom: 16,
    opacity: 0.06,
  },
  hide: {
    left: -255,
  },
  show: {
    left: 0,
  },
});

function SidebarComponent({ onChange, selectedItem }) {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const input1 = useRef(null);

  const [, updateState] = React.useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  /**
   * This is to fix this issue:
   * https://github.com/llorentegerman/react-admin-dashboard/issues/8
   * I haven't been able to reproduce this bug in Safari 13.0.5 (14608.5.12)
   */
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    forceUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);

  const onAddAdmin = () => {
    window.location.href = `mailto:?, cc=?, &subject=Please join Junior Achievement as an Admin&body=Welcome!  We want to thank you for expressing interest in joining Junior Achievement of KC.  Please click the following link to register as an admin www.google.com`;
  };

  const onReportsClick = (item) => {
    setExpanded(false);
    console.log('Clicked Reports');
    return onChange(item);
  };

  const onVolunteersClick = (item) => {
    setExpanded(false);
    return onChange(item);
    //     return <button onClick={props.addTrip}>Add a trip</button>
    //   }

    // return onChange(item);
  };

  const onClassesClick = (item) => {
    setExpanded(false);
    console.log('Clicked Classes');
    return onChange(item);
  };

  const onImagesClick = (item) => {
    setExpanded(false);
    console.log('Clicked Images');
    return onChange(item);
  };

  const onAdministratorsClick = (item) => {
    setExpanded(false);
    console.log('Clicked Administrators');
    return onChange(item);
  };

  const toggleMenu = () => setExpanded(!expanded);

  const renderBurger = () => {
    return (
      <div onClick={toggleMenu} className={css(styles.burgerIcon)}>
        <IconBurger />
      </div>
    );
  };

  return (
    <div style={{ position: 'relative' }}>
      <Row
        componentRef={(element) => (input1.current = element)}
        className={css(styles.mainContainer)}
        breakpoints={{
          768: css(
            styles.mainContainerMobile,
            expanded && styles.mainContainerExpanded
          ),
        }}
      >
        {isMobile && !expanded && renderBurger()}
        <Column
          className={css(styles.container)}
          breakpoints={{
            768: css(
              styles.containerMobile,
              expanded ? styles.show : styles.hide
            ),
          }}
        >
          <LogoComponent />
          <Column className={css(styles.menuItemList)}>
            <Link className="link" to="/adminreports">
              <MenuItemComponent
                title="Reports"
                icon={IconOverview}
                onClick={() => onReportsClick('Reports')}
                active={selectedItem === 'Reports'}
              />
            </Link>
            <Link className="link" to="/images">
              <MenuItemComponent
                title="Images"
                icon={IconOverview}
                onClick={() => onImagesClick('Images')}
                active={selectedItem === 'Images'}
              />
            </Link>
            <Link className="link" to="/adminvolunteers">
              <MenuItemComponent
                title="Volunteers"
                icon={IconContacts}
                onClick={() => onVolunteersClick('Volunteers')}
                active={selectedItem === 'Volunteers'}
              />
            </Link>
            <Link className="link" to="/adminadministrators">
              <MenuItemComponent
                title="Administrators"
                icon={IconAgents}
                onClick={() => onAdministratorsClick('Administrators')}
                active={selectedItem === 'Administrators'}
              />
            </Link>
            <Link className="link" to="/adminclasses">
              <MenuItemComponent
                title="Classes and Training"
                icon={IconArticles}
                onClick={() => onClassesClick('Classes and Training Resources')}
                active={selectedItem === 'Classes and Training Resources'}
              />
            </Link>

            <div className={css(styles.separator)}></div>
          </Column>
        </Column>
        {isMobile && expanded && (
          <div className={css(styles.outsideLayer)} onClick={toggleMenu}></div>
        )}
      </Row>
    </div>
  );
}

export default connect(mapStoreToProps)(SidebarComponent);
