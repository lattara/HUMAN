import React, { Children, Component } from 'react'
import styles from '../../styles/Dash.home.module.scss'
import { Row, Col } from 'react-bootstrap';
import dashNavItems from '../../components/dashboard/dashNavItems.list'

function dashboard() {
  return (
    <Row noGutters className={styles.dashboardBackground}>
      {
        dashNavItems.filter(item => item.id !== 1).map(
          item =>
            <Col xs={8} sm={8} md={8} lg={{ span: 10, offset: 1 }} xl={{ span: 10, offset: 1 }} className={styles.columnBlock}>
              <Row className={styles.blockContent}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2} className={styles.iconContainer}><img className={styles.icon} src={item.icon} /></Col>
                <Col xs={6} sm={6} md={8} lg={8} xl={8} >
                  <span className={styles.label} >{item.label}</span>
                  <p className={styles.tooltip}>{item.tooltip}</p>
                </Col>
              </Row>
            </Col>
        )
      }
    </Row>
  )
}

export default dashboard
