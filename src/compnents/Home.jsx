import axios from "axios"
import { useEffect, useState } from "react"

export const Home = ()=>{
const [songs,setSongs] = useState([])
const [show,setShow] = useState([])

useEffect(()=>{
axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json")
.then(res => {
setShow(res.data)
setSongs(res.data)
})
},[])

function handleChange(event) {
    let value =event.target.value
    if(value === "all"){
        setShow(songs)
    }else{
       var arr = songs.filter((e)=>{
        let artist = e.artists.split(", ")
        for(let i = 0; i < artist.length; i++){
            if(artist[i] === value){
                return true
            }
        }
       })
       setShow(arr)
    }
  }

  document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] !== e.target){
            audios[i].pause();
        }
    }
}, true);

    return(
        <div className="flex">
            <select onChange={handleChange} className="absolute right-0 border-2 border-blue-400">
                <option value="all" >Filter By Artist</option>
                <option value="Atif Aslam">Atif Aslam</option>
                <option value="Amjad Sabri">Amjad Sabri</option>
                <option>Rahat Fateh Ali Khan</option>
                <option>Saieen Zahoor</option>
            </select>
        <div className="mt-5 grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">

   {
   show?.map((e,id)=>{
    return <div className="bg-gray-100 p-6 rounded-lg m-4 hover:scale-110 transition border-2 hover:bg-blue-100" key={id}>
    <img className="h-60 rounded w-full object-cover object-center mb-6" src={e.cover_image} alt="content" />
    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Artists:{e.artists}</h3>
    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Song:{e.song}</h2>
    <audio className="m-auto" controls src={e.url}></audio>
  </div>
   })
  
  }
  
        </div>
        </div>
    )
}