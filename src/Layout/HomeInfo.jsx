import React from "react"
import { homeInfoDetails } from "../utils/HomeInfo"

const HomeInfo = () => {
  return (
    <div className="info">
      <div className="info-container">
        {homeInfoDetails.map((detail) => {
          return (
            <div className={`info-wrapper ${detail.switch && 'reverse'}`} key={detail.id}>
              <div className="info-text">
                <h2>{detail.title}</h2>
                <p>{detail.description}</p>
              </div>
              <img className="info-image" src={detail.image} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HomeInfo
