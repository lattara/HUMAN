import React, { Children, Component } from 'react'
import styles from '../../styles/Dash.home.module.scss'
import { Row, Col } from 'react-bootstrap';
import dashNavItems from '../../components/dashboard/dashNavItems.list'
import Link from 'next/link';

function dashboard() {
  return (
    <Row className={styles.dashboardBackground}>
      {
        dashNavItems.filter(item => item.id !== 1).map(
          item =>
          <Link href={item.link}>
            <Col xs={12} sm={12} md={4} lg={2} xl={4} className={styles.columnBlock}>
              <Row noGutters className={styles.blockContent}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2} className={styles.iconContainer}><img className={styles.icon} src={item.icon} /></Col>
                <Col xs={6} sm={6} md={8} lg={8} xl={8} >
                  <span className={styles.label} >{item.label}</span>
                  <p className={styles.tooltip}>{item.tooltip}</p>
                </Col>
              </Row>
            </Col>
            </Link>
        )
      }
    </Row>
  )
}

export default dashboard
