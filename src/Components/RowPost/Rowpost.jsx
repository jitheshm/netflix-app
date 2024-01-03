import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import instance from '../../axios'
import { baseImageURL } from '../../constants/constant'



function Rowpost({ title, url }) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    instance.get(url).then((result) => {
      setMovies(result.data.results);
      console.log(result.data.results[0]);
    })


  }, [])


  return (
    <section className="row-section">
      <div className="row-content">
        <h2 className="row-data-headline">{title}</h2>
        <div className="row-data">
          {
            movies.map((value, index) => {
              return (
                <div key={index} className="card col-5 col-md-4 col-xl-3">
                  <img className="col-12 row-img" src={`${value ? baseImageURL + value.backdrop_path : ""}`} />
                  <div className="card-body"><span>{value ? value.original_title : ""}
                  </span></div>
                </div>
              )

            })}


        </div>
      </div>
    </section>
  )
}

export default Rowpost