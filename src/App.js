import React, {useEffect,useState} from 'react';
import Hero from './components/hero';
import './App.css';


const App=()=>{
  const API_KEY ="21208774-0542878d3d06d1e82723c409e";

  const [images,setImages]=useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const [search,setSearch]=useState('');
  const [inputVal,setInputVal]=useState('');

  useEffect(()=>{
    fetch('https://pixabay.com/api/?key=${API_KEY}&q=${search}&image_type=photo&per_page=9&page=${currentPage}&pretty=true')
    .then(res => res.json())
    .then(data=>console.log(data))
  },[]);

  return(
    <div className="App">
      <Hero/>
    </div>
  )
}

export default App;
