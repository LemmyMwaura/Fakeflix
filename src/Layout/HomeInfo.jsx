import React from "react"
import { homeInfoDetails } from "../utils/HomeInfo"

//Images
import tvImage from "../assets/images/home-tv.jpg"
import mobileImage from "../assets/images/home-mobile.jpg"
import imacImage from "../assets/images/home-imac.jpg"
import kidsImage from "../assets/images/home-kids.png"
import shadowImage from "../assets/images/home-shadow.jpg"

const images = [tvImage, mobileImage, imacImage, kidsImage, shadowImage]

const HomeInfo = () => {
  return (
    <div className="info">
      <div className="info-container">
        {homeInfoDetails.map((detail, index) => {
          return (
            <div
              className={`info-wrapper ${detail.switch && "reverse"}`}
              key={detail.id}
            >
              <div className="info-text">
                <h2>{detail.title}</h2>
                <p>{detail.description}</p>
              </div>
              <img className="info-image" src={images[index]} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HomeInfo
