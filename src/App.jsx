import React,{useState,useEffect} from 'react'
import Sidemenu from './components/sidemenu/Sidemenu'
import Content from './components/content/Content.jsx'
import Phonemenu from './components/phonemenu/Phonemenu.jsx'
import Phonecontent from './components/Phonecontent/Phonecontent.jsx'
import useWindowWidth from './components/hooks/useWidth.js'
function App() {

  const width = useWindowWidth();

 
    if(width>768){
      return(
        <div className='flex'>
        <Sidemenu basis='lg:basis-[25%] md:basis-[30%]'/>
        <Content basis = 'lg:basis-[75%] md:basis-[70%] '/>
        </div>
      )
     
    }
    else{
      return(
        <div className=''>
        <Phonecontent/>
        <Phonemenu/>
        </div>
        
      )
    }
   
  
}

export default App