import React, { useState } from 'react'
import './Home.css'
import Carousel from 'react-material-ui-carousel'
import { list } from '../utils/ImageList'
import { imageObject } from "../utils/CommonUtil"
import Product from "./Product"
import LocalizedStrings from 'react-localization';
import { intl } from '../utils/localised'
import { useStateValue } from '../context/StateProvider'
import SliderDiv from './SliderDiv';
import watchImg687 from '../img/wristwatch_200.jpg'
import watchImg1200 from '../img/wristwatch_1200.jpg'
import Backdrop from '@material-ui/core/Backdrop';
import ReactImageMagnify from 'react-image-magnify'

function Home() {
    let strings = new LocalizedStrings(intl)
    const [state, dispatch] = useStateValue();

    strings.setLanguage(state.lang);

    const [open, setOpen] = useState(false);
    const [initialProduct, setInitialPrdouct] = useState({});

    const onClick = (e, selectedId) => {
        //pass product id and fetch the data from the basket
        imageObject.map(item => {
            if (item.id === selectedId) {
                console.log(item);
                setInitialPrdouct(item);
            }
        })


        setOpen(true);
    }


    return (
        <div className="home">
            <div className="home__container">
                <Carousel autoPlay navButtonsAlwaysVisible={false} timeout={1000} indicators={false} animation="slide">
                    {
                        list.map((item, i) => <img src={item} key={i} className="home__image" />)
                    }
                </Carousel>
            </div>

            <div className="home__row">
                <Product
                    id="12321341"
                    title={strings.product_12321341}
                    price={29.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                />

                <Product
                    id="49538094"
                    title={strings.product_49538094}
                    price={239.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/91gRKbX%2BS8L._AC_SL1500_.jpg"
                />
                <Product
                    id="4903850"
                    title={strings.product_4903850}
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />

            </div>
            <div className="home__row">

                <div className="home__heading">
                    <h3>Top Trending Deal's</h3>

                    <div className="home__dealSection">


                        <div className="home__card">
                            <img src="/img/shoe.jpg" />
                            <div class="overlay"></div>
                            <button className="home__dealBtn" onClick={e => onClick(e, "9000")}> Quick Look</button>
                        </div>
                        <div className="home__card">
                            <img src="/img/bag.jpg" />
                            <div class="overlay"></div>
                            <button className="home__dealBtn" onClick={e => onClick(e, "9001")}> Quick Look</button>
                        </div>
                        <div className="home__card">
                            <img src="/img/tshirt.jpg" />
                            <div class="overlay"></div>
                            <button className="home__dealBtn" onClick={e => onClick(e, "9002")}> Quick Look</button>
                        </div>
                        <div className="home__card">
                            <img src="/img/dslr1.jpg" />
                            <div class="overlay"></div>
                            <button className="home__dealBtn" onClick={e => onClick(e, "9003")}> Quick Look</button>
                        </div>
                        <Backdrop open={open} onClick={e => setOpen(false)} style={{ zIndex: "2" }}>
                            <div className="home__backdropDetail">
                                <Product
                                    id={initialProduct.id}
                                    title={initialProduct.title}
                                    price={initialProduct.price}
                                    rating={initialProduct.rating}
                                    image={initialProduct.image}
                                />
                                <ReactImageMagnify
                                    {...{
                                        smallImage: {
                                            alt: 'Product Image',
                                            isFluidWidth: true,
                                            src: initialProduct.image,

                                        },
                                        largeImage: {
                                            src: initialProduct.image,
                                            width: 1200,
                                            height: 1800
                                        },
                                        lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
                                        shouldUsePositiveSpaceLens: true,
                                        imageClassName: "home__backdropDetailImg"
                                    }}

                                />

                            </div>
                        </Backdrop>

                    </div>

                </div>

            </div>
            <div className="home__row">
                <Product
                    id="23445930"
                    title={strings.product_23445930}
                    price={98.99}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product
                    id="3254354345"
                    title={strings.product_3254354345}
                    price={598.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="90829332"
                    title={strings.product_90829332}
                    price={1094.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
            </div>

        </div>
    )
}

export default Home
