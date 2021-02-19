import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function ModalSlider() {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="https://picsum.photos/300/400?img=1" />
                </div>
                <div>
                    <img src="https://picsum.photos/300/400?img=2" />
                </div>
                <div>
                    <img src="https://picsum.photos/300/400?img=3" />
                </div>
                <div>
                    <img src="https://picsum.photos/300/400?img=3" />
                </div>
                <div>
                    <img src="https://picsum.photos/300/400?img=3" />
                </div>
                <div>
                    <img src="https://picsum.photos/300/400?img=3" />
                </div>
            </Carousel>

        </div>
    )
}

export default ModalSlider
