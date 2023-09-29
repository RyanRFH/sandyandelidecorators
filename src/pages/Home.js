import React from "react"

import '../styling/Home.css'

import img1 from "../resources/work_images/340078528_3465254913717183_2014099130808656391_n.jpg"
import img2 from "../resources/work_images/340236116_2544627039025523_5350044887685715958_n.jpg"

import img3 from "../resources/work_images/322179521_612408750648479_9055949165633037179_n.jpg"
import img4 from "../resources/work_images/322383275_760025312133043_3309659167942817247_n.jpg"

import img5 from "../resources/work_images/311112602_177119294838039_7770649718407190026_n.jpg"


import img6 from "../resources/work_images/286898252_151066560776646_3999805167406394404_n.jpg"
import img7 from "../resources/work_images/286837629_151066587443310_8581878356440909639_n.jpg"


import img8 from "../resources/work_images/278571382_141163665100269_6044949128933156402_n.jpg"
import img9 from "../resources/work_images/278759728_141163605100275_3008526236278052588_n.jpg"

const Home = () => {
    return (
        <div id="homeContainer">
            <div id="homeGalleryCont">

            <div id="homeGalleryImgWrap">
                <img className="homeGalleryImg" src={img2} alt="img2"/>
                <img className="homeGalleryImg" src={img1} alt="img1"/>
            </div>

            <div id="homeGalleryImgWrap">
                <img className="homeGalleryImg" src={img6} alt="img6"/>
                <img className="homeGalleryImg" src={img7} alt="img7"/>
            </div>

            <div id="homeGalleryImgWrap">
                <img className="homeGalleryImg" src={img8} alt="img8"/>
                <img className="homeGalleryImg" src={img9} alt="img9"/>
            </div>

            <div id="homeGalleryImgWrapTall">
                <img className="homeGalleryImg homeGalleryImgTall" src={img4} alt="img4"/>
                <img className="homeGalleryImg homeGalleryImgTall" src={img3} alt="img3"/>
            </div>

            <div id="homeGalleryImgWrap">
                <img className="homeGalleryImg" src={img5} alt="img5"/>
            </div>

            </div>

        </div>

    )
}

export default Home