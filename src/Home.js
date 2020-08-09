import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
    const [DataFilm, setDataFilm] = useState(null);

    useEffect(() => {
        if (DataFilm === null) {
          axios
            .get(`http://backendexample.sanbercloud.com/api/movies`)
            .then((res) => {
                setDataFilm(
                res.data.map((el) => {
                  return {
                    id: el.id,
                    title: el.title,
                    year: el.year,
                    duration: el.duration,
                    genre: el.genre,
                    rating: el.rating,
                    desc: el.description,
                    created: el.created_at,
                    updated: el.updated_at,
                  };
                })
              );
            });
        }
      }, [DataFilm]);
      if (DataFilm !== null) {
      DataFilm.sort(function(a, b){
        var x = a.rating;
        var y = b.rating;
        if (x < y) {return 1;}
        if (x > y) {return -1;}
        return 0;
      });
    }
      return (
        <>
        <section>
            <h1>Daftar Film Film Terbaik</h1>
            <div id="article-list">
            {   
                DataFilm !== null &&
                DataFilm.map((val)=>{
                  return(  
                      <>           
                    <div className="row">
                    <a><h3>{val.title}</h3></a>
                    <p><strong>Rating : {val.rating}.0</strong></p>
                    <p><strong>Durasi : {val.duration}</strong></p>
                    <p><strong>Genre : {val.genre}</strong></p>
                    <p><strong>Deskripsi : </strong>{val.desc}</p>
                    </div>
                    </>
                  )
                })
            }
            </div>
            </section>
            <footer>
            <h5>copyright &copy; 2020 by Sanbercode</h5>
            </footer>
            </>
    )
}

export default Home;
