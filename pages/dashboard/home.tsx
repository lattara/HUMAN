import React, { Children, Component } from 'react'
import styles from '../../styles/Dash.home.module.scss'
import { Row, Col } from 'react-bootstrap';
import dashNavItems from '../../components/dashboard/dashNavItems.list'
import Link from 'next/link';

function dashboard() {

  let today = new Date()
  let hours = today.getHours()

  let getCustomGreetMessage = () => {
    if (today.getMonth() === 10 && today.getDate() === 11) {
      return <span>Joyeux anniversaire <br /> ƪ(ړײ)‎ƪ​</span>
    }
    if (hours < 18) {
      return <span>Bonjour Charlotte <br /> (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧</span>
    }
    if (hours > 18) {
      return <span>Bonsoir Charlotte <br /> -`ღ´-</span>
    }
  }

  return (
    <>
      <div className={styles.dashboardBackground}>
      </div>
        <Row  className={styles.blockContainer}>
          <Col xs={10} sm={10} md={10} lg={8} xl={8} className={styles.greeting}>{getCustomGreetMessage()}</Col><br/>
          <Col xs={10} sm={10} md={10} lg={8} xl={8} className={styles.greeting}>Sélectionnez une case pour commencer à modifier ton site Web</Col>
          {
            dashNavItems.filter(item => item.id !== 1).map(
              item =>
                <Link href={item.link}>
                  <Col xs={4} sm={4} md={4} lg={6} xl={4} className={styles.columnBlock}>
                    <Row noGutters className={styles.blockContent}>
                      <Col xs={12} sm={12} md={12} lg={12} xl={12} className={styles.iconContainer}><img className={styles.icon} src={item.icon} /></Col>
                      <Col>
                        <span className={styles.label} >{item.label}</span>< br/>
                        <span className={styles.tooltip}>{item.tooltip}</span>
                      </Col>
                    </Row>
                  </Col>
                </Link>
            )}
        </Row>
    </>
  )
}

export default dashboard
