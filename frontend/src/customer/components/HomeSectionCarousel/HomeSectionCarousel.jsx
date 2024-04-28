import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';

const HomeSectionCarousel = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    console.log(activeIndex);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 4 },
    };

    const sliderPrev = () => setActiveIndex(activeIndex - 1)
    const sliderNext = () => setActiveIndex(activeIndex + 1)

    const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item => <HomeSectionCard />))

    const syncActiveIndex = ({ item }) => setActiveIndex(item)

    return (
        <div className='border'>
            <div className='relative p-5 '>
                < AliceCarousel
                    items={items}
                    disableButtonsControls
                    infinite
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length - 4 &&
                    <Button variant='contained' className='z-50 bg-white'
                        onClick={sliderNext}
                        sx={{
                            position: "absolute",
                            top: "8rem", right: "0rem", transform: "translateX(50%) rotate(90deg)",
                            bgcolor: "white"
                        }} aria-label='next'>
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>}

                {activeIndex > 4 &&
                    <Button variant='contained' className='z-50 bg-white'
                        onClick={sliderPrev} sx={{
                            position: "absolute",
                            top: "8rem", left: "0rem",
                            transform: "translateX(-50%) rotate(-90deg)",
                            bgcolor: "white"
                        }} aria-label='next'>
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>}
            </div>
        </div>
    )
}

export default HomeSectionCarousel