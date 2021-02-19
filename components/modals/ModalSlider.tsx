import React, { useEffect, useState } from 'react'
import ItemsCarousel from 'react-items-carousel';
import "react-multi-carousel/lib/styles.css"
import { Col } from 'react-bootstrap'
import HumanButton from '../button/Button'
import { useViewport } from "../../customHooks"

function ModalSlider(props) {

    const [numberOfSlides, setNumberOfSlides] = React.useState(0)
    const [activeItemIndex, setActiveItemIndex] = useState(0)
    const [modalShow, setModalShow] = React.useState(false)
    const { width } = useViewport()
    const breakpoint = 922;

    useEffect(() => {
        if (width < breakpoint) {
            setNumberOfSlides(1)
        } else {
            setNumberOfSlides(7)
        }
    }, [width])


    return (
    <ItemsCarousel
    infiniteLoop={false}
    gutter={10}
    alwaysShowChevrons={true}
    numberOfCards={numberOfSlides}
    slidesToScroll={2}
    showSlither={true}
    firstAndLastGutter={true}
    activeItemIndex={activeItemIndex}
    requestToChangeActive={setActiveItemIndex}
    rightChevron={width > breakpoint ? <img src={"right-arrow.png"} /> : null}
    leftChevron={width > breakpoint ? <img src={"left-arrow.png"}  /> : null}
    classes={{
        wrapper: "wrapper",
        itemsWrapper: "itemsWrapper",
        rightChevronWrapper: "rightChevronWrapper",
        leftChevronWrapper: "leftChevronWrapper"}}
        >
    {props.product.data.map(product =>
        <Col key={product.id} >
            <img  src='https://picsum.photos/id/163/250/300' alt="product-image" />
            <div >
                    <HumanButton
                        style={"mobile"}
                        text={"Je le veux!"}
                        buttonImage="shopping.png"
                        tooltip="Ajouter au panier" />
                    <HumanButton
                        style={"mobile"}
                        text={"Plus de détails"}
                        status="disabled"
                        buttonImage="stone.png"
                        tooltip="Voir les détails" 
                        onClick={() => setModalShow(true)}
                        />
            </div>
            <div >€{product.price},00</div>
        </Col>
    )}
</ItemsCarousel>
    )

}

export default ModalSlider
