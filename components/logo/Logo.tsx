import React from 'react'
import styles from "./Logo.module.scss"
import Typewriter from 'typewriter-effect';
import { Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Tooltip from "@material-ui/core/Tooltip";

function Logo(props) {

    const renderMainPage =
        <Row className={styles.logoMain}>
            <Typewriter options={{
                cursorClassName: 'cursor',
                autoStart: true,
            }}
                onInit={(typewriter) => {
                    typewriter.typeString('HUMAN')
                        .pauseFor(700)
                    typewriter.typeString('.')
                        .pauseFor(2500)
                        .start()
                }}
            />
            <Link href={"https://www.instagram.com/human_bijoux/"}>
                <Tooltip
                    title={"Lien vers Instagram"}
                    placement="top">
                    <img className={styles.insta} src="/instagram-bw.png" alt="" />
                </Tooltip>
            </Link>
            <Col xs={12} className={styles.dividerMain}></Col>
            <div>
                <Col xs={12} className={styles.secondTitleMain}>Bijoux au pieres natureles
            <Link href={"https://www.etsy.com/fr/shop/HumanBijouxCreations"}>
                        <Tooltip
                            title={"Lien vers Etsy"}
                            placement="bottom">
                            <img className={styles.etsy} src="/etsy.png" alt=""
                            />
                        </ Tooltip>
                    </Link>
                </Col>
            </div>
        </Row>

    const renderOtherPage =
        <Row noGutters className={styles.logoOtherPages}>
            <Col xs={0} sm={0} md={6} lg={3} xl={3} className={styles.presentationImage}>
                <img
                    src={props.imageLink}
                    alt="Necklace presentation photo" />
            </Col>
            <Col xs={12} sm={12} md={6} lg={8} xl={8}>
                <Row noGutters className={styles.logoText}>
                    <Col xs={4} sm={4} md={6} lg={6} xl={4}>HUMAN</Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2} className={styles.productCategory}>{props.productCategory}</Col>
                </Row>
                <Col className={styles.dividerOtherPages}></Col>
                <Col className={styles.undertitle}>{props.undertitle}</Col>
            </Col>
        </Row>
    return (
        <React.Fragment>
            {props.isMain ? renderMainPage : renderOtherPage}
        </React.Fragment>

    )
}

export default Logo
