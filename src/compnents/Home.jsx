import axios from "axios"
import { useEffect, useState } from "react"


export const Home = ()=>{
const [songs,setSongs] = useState([])
const [show,setShow] = useState([])

useEffect(()=>{
axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json")
.then(res => {console.log(res.data)
setShow(res.data)
setSongs(res.data)
})
},[])

    return(
        <div className="flex">
            <select className="absolute right-0 border-2 border-blue-400">
                <option value="all">Filter By Artist</option>
                <option>Atif Aslam</option>
                <option>Atif Aslam</option><option>Atif Aslam</option><option>Atif Aslam</option>
            </select>
        <div className="mt-5 grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">

   {
   show.map((e,id)=>{
    return <div className="bg-gray-100 p-6 rounded-lg m-4 hover:scale-110 hover:bg-slate-500" key={id}>
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