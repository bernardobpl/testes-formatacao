import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Download from './Download'
import axios from 'axios'
import ReactImageMagnify from 'react-image-magnify'

function App() {


  return (
    <div className="App">
      <div style={{width: '300px', height: '300px'}}>

      <ReactImageMagnify 
        isHintEnabled
        enlargedImagePosition="over"
        smallImage={{
          alt: 'Wristwatch by Ted Baker London',
          isFluidWidth: true,
          src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png"
        }}
        largeImage={{
          src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png",
          width: 900,
          height: 1350
        }}
      />
      </div>
    </div>
  )
}

export default App
