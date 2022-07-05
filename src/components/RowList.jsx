import React from "react"
import Row from "./Row"
import movieCategories from "../utils/MovieCategories"

export default function RowList() {
  return (
    <div className="row-list">
      {movieCategories.map(category => {
        return <Row key={category.id} title={category.title} fetchUrl={category.link} />
      })}
    </div>
  )
}
