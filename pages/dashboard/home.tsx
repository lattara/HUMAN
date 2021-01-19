import React, { Children, Component } from 'react'
import styles from '../../styles/Dash.home.module.scss'
import { Row, Col } from 'react-bootstrap';
import dashNavItems from '../../components/dashboard/dashNavItems.list'
import Link from 'next/link';

function dashboard() {

  let today = new Date()
  let hours = today.getHours()

  let getCustomGreetMessage=()=>{
    if (today.getMonth()=== 0 && today.getDate()===20 ){ // personal message for Char birthday
      return "Joyeux anniversaire ƪ(ړײ)‎ƪ​​"
    }
    if (hours < 18){
      return "Bonsoir chouette de nuit 	(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧"
    } 
    if (hours > 18){
      return "Bonjour Charlotte -`ღ´-"
    }
  }

  console.log(today.getMonth()=== 0 && today.getDate()===19)
  return (
    <Row className={styles.dashboardBackground}>
      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <h2>{getCustomGreetMessage()}</h2>
        <span>Sélectionnez une case pour commencer à modifier ton site Web</span>
        </Col>
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
