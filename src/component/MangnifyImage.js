import React from 'react'
import watchImg687 from '../img/wristwatch_200.jpg'
import watchImg1200 from '../img/wristwatch_1200.jpg'
import ReactImageMagnify from 'react-image-magnify';

function MangnifyImage() {
    return (
        <ReactImageMagnify className="product__image"
            {...{
                smallImage: {
                    alt: 'Product Image',
                    isFluidWidth: true,
                    src: watchImg687,

                },
                largeImage: {
                    src: watchImg1200,
                    width: 1200,
                    height: 1800
                },
                lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
                shouldUsePositiveSpaceLens: true
            }}

        />
    )
}

export default MangnifyImage
