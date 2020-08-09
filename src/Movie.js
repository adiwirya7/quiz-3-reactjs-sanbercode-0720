import React, { useState, useEffect } from "react";
import axios from "axios";

const Movie = () => {
  const [DataFilm, setDataFilm] = useState(null);
  const [InputTitle, setInputTitle] = useState("");
  const [InputRating, setInputRating] = useState("");
  const [InputYear, setInputYear] = useState("");
  const [InputDuration, setInputDuration] = useState("");
  const [InputGenre, setInputGenre] = useState("");
  const [InputDesc, setInputDesc] = useState("");
  const [selectedID, setSelectedID] = useState(0);
  const [statusForm, setStatusForm] = useState("create");

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

  const handleDelete = (event) => {
    let idMovie = parseInt(event.target.value);
    let newDataFilm = DataFilm.filter((el) => el.id !== idMovie);
    axios
      .delete(`http://backendexample.sanbercloud.com/api/movies/${idMovie}`)
    setDataFilm([...newDataFilm]);
    alert("Data Berhasil Dihapus")
  };

  const handleEdit = (event) => {
    let idMovie = parseInt(event.target.value);
    let Film = DataFilm.find((el) => el.id === idMovie);
    console.log(Film);
    setInputTitle(Film.title);
    setInputRating(Film.rating);
    setInputYear(Film.year);
    setInputDuration(Film.duration);
    setInputGenre(Film.genre);
    setInputDesc(Film.desc);
    setSelectedID(idMovie);
    setStatusForm("edit");
  };

  const handleChangeTitle = (event) => {
    const newValue = event.target.value;
    setInputTitle(newValue);
  };
  const handleChangeRating = (event) => {
    const newValue = event.target.value;
    setInputRating(newValue);
  };
  const handleChangeYear = (event) => {
    const newValue = event.target.value;
    setInputYear(newValue);
  };
  const handleChangeDuration = (event) => {
    const newValue = event.target.value;
    setInputDuration(newValue);
  };
  const handleChangeGenre = (event) => {
    const newValue = event.target.value;
    setInputGenre(newValue);
  };
  const handleChangeDesc = (event) => {
    const newValue = event.target.value;
    setInputDesc(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    let title = InputTitle;
    let rating = InputRating;
    let year = InputYear;
    let duration = InputDuration;
    let genre = InputGenre;
    let desc = InputDesc;

    if ( title.replace(/\s/g, "") === "" || rating.toString().replace(/\s/g, "") === "" || year.toString().replace(/\s/g, "") === "" || duration.toString().replace(/\s/g, "") === "" || genre.replace(/\s/g, "") === "" || desc.replace(/\s/g, "") === ""){
        alert("Input tidak boleh ada yang Kosong");
    } else{
      if (statusForm === "create") {
        axios
          .post(`http://backendexample.sanbercloud.com/api/movies`, {
            title,
            rating,
            year,
            duration,
            genre,
            desc,
          })
          .then((res) => {
            setDataFilm([
              ...DataFilm,
              { id: res.data.id, title: title, rating: rating, year: year, desc: desc, genre: genre, duration: duration, created: dateTime, updated: dateTime },
            ]);
            alert("Data Berhasil Ditambahkan")
          });
      } else if (statusForm === "edit") {
        axios
          .put(
            `http://backendexample.sanbercloud.com/api/movies/${selectedID}`,
            {
                title,
                rating,
                year,
                duration,
                genre,
                desc,
            }
          )
          .then((res) => {
            let dataFilm = DataFilm.find((el) => el.id === selectedID);
            dataFilm.title = title;
            dataFilm.rating = rating;
            dataFilm.year = year;
            dataFilm.duration = duration;
            dataFilm.genre = genre;
            dataFilm.desc = desc;
            dataFilm.updated = dateTime;
            setDataFilm([...DataFilm]);
            alert("Data Berhasil Diubah")
          });
      }

      setStatusForm("create");
      setSelectedID(0);
      setInputTitle("");
      setInputRating("");
      setInputYear("");
      setInputDuration("");
      setInputGenre("");
      setInputDesc("");
    }
  };

  return (
    <>
      <div className="content">
          <div className="box">
              <div style={{padding:"2%"}}>
                <h1 style={{textAlign:"center"}}>Tabel Data Film</h1>
                    <table style={{width:"100%"}}>
                    <thead>
                        <tr>
                        <th>Title</th>
                        <th>Rating</th>
                        <th>Year</th>
                        <th>Duration</th>
                        <th>Genre</th>
                        <th>Description</th>
                        <th>Created_at</th>
                        <th>Updated_at</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        DataFilm !== null &&
                        DataFilm.map((val,index)=>{
                        return(                    
                            <tr key={index}>
                            <td>{val.title}</td>
                            <td>{val.rating}</td>
                            <td>{val.year}</td>
                            <td>{val.duration}</td>
                            <td>{val.genre}</td>
                            <td>{val.desc}</td>
                            <td>{val.created}</td>
                            <td>{val.updated}</td>
                            <td><button onClick={handleEdit} value={val.id} style={{borderRadius:5, marginRight :"5%",marginLeft :"5%",border:"1px white solid",padding:5}}>edit</button>
                            <button onClick={handleDelete} value={val.id} style={{padding:5,border:"1px white",backgroundColor:"red", color:"white", borderRadius:5, marginRight :"5%",marginLeft :"5%"}}>delete</button></td>
                            </tr>
                            )
                            })
                        }
                    </tbody>
                    </table>
                    <div>
                    <h1 style={{textAlign:"center",}}>Form Penambahan Film</h1>
                    <form style={{textAlign:"center"}} onSubmit={handleSubmit}>
                    <label>
                        Masukkan Judul Film:
                    </label>          
                    <input type="text" title='InputTitle' placeholder="Masukkan Judul film" value={InputTitle} onChange={handleChangeTitle} required/>
                    <br/>
                    <label>
                        Masukkan Rating Film:
                    </label>          
                    <input type="number" name='InputRating' placeholder="Nilai 1-10" value={InputRating} onChange={handleChangeRating} required/>
                    <br/>
                    <label>
                        Masukkan Tahun Film:
                    </label>          
                    <input type="number" name='InputYear' placeholder="Masukkan tahun rilis film" value={InputYear} onChange={handleChangeYear} required/>
                    <br/>
                    <label>
                        Masukkan Durasi Film:
                    </label>          
                    <input type="number" name='InputDuration' placeholder="Masukkan durasi film" value={InputDuration} onChange={handleChangeDuration} required/>
                    <br/>
                    <label>
                        Masukkan Genre Film:
                    </label>          
                    <input type="text" name='InputGenre' placeholder="Masukkan genre film" value={InputGenre} onChange={handleChangeGenre} required/>
                    <br/>
                    <label>
                        Masukkan Deskripsi Film : 
                    </label>          
                    <textarea rows="2" cols="30" name='InputDesc' placeholder="Masukkan deskripsi film" value={InputDesc} onChange={handleChangeDesc} required/>
                    <br/><br/>
                    <button style={{backgroundColor:"green",borderRadius:5,padding:10 ,border:"1px white solid", width:"10%"}}>submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Movie;
