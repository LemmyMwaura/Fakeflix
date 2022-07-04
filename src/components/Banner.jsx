import React from "react"

export default function Banner() {
  const truncate = (str, maxLength) => {
    if (str?.length > maxLength) {
      return str.substring(0, maxLength) + "..."
    }
    return str
  }

  return (
    <div
      className="home-banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWUKZrbq4b_VanaYIN0xGPi7ZGWn93nrs7vQ&usqp=CAU)",
      }}
    >
      <div className="banner-details">
        <h1 className="banner-title">Title</h1>
        <p className="banner-description">{truncate("Description", 100)}</p>
        <div className="banner-buttons">
          <button className="btn btn-primary">Play</button>
          <button className="btn btn-sec">More Info</button>
        </div>
      </div>
      <div className="banner-fade-bottom"></div>
    </div>
  )
}
