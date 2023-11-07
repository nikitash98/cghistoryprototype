import logo from './logo.svg';
import './App.css';
import { createRoot } from 'react-dom/client'
import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import Model from './Model';
import { Grid, Image } from 'semantic-ui-react'
import data from "./data.json"
import { Dropdown, Radio } from 'semantic-ui-react'

function App() {
  const [currentModel, setCurrentModel] = useState("bunny.glb")


  const [wireframe, setWireframe] = useState(false)
  const [points, setPoints] = useState(false)


  const friendOptions = [
    {
      key: 'bunny.glb',
      text: 'Bunny',
      value: 'bunny.glb',
      image: { avatar: true, src: data['bunny.glb'].img},
    },
    {
      key: 'teapot.glb',
      text: 'Teapot',
      value: 'teapot.glb',
      image: { avatar: true, src: data['teapot.glb'].img},
    },
    {
      key: 'cornellBox.glb',
      text: 'Cornell',
      value: 'cornellBox.glb',
      image: { avatar: true, src: data['cornellBox.glb'].img },
    },
    {
      key: 'dragon.glb',
      text: 'Dragon',
      value: 'dragon.glb',
      image: { avatar: true, src: data['dragon.glb'].img},
    },
    {
      key: 'head.glb',
      text: 'Head',
      value: 'head.glb',
      image: { avatar: true, src: data['head.glb'].img},
    },
    {
      key: 'vw.glb',
      text: 'VW',
      value: 'vw.glb',
      image: { avatar: true, src: data['vw.glb'].img},
    },
    {
      key: 'matsphere.glb',
      text: 'MatSphere',
      value: 'matsphere.glb',
      image: { avatar: true, src: data['matsphere.glb'].img},
    },
    {
      key: 'conference_room.glb',
      text: 'Conference Room',
      value: 'conference_room.glb',
      image: { avatar: true, src: data['conference_room.glb'].img},
    },
    {
      key: 'buddha.glb',
      text: 'Buddha',
      value: 'buddha.glb',
      image: { avatar: true, src: data['buddha.glb'].img},
    },
    {
      key: 'soma.glb',
      text: 'SOMA',
      value: 'soma.glb',
      image: { avatar: true, src: data['soma.glb'].img},
    },
  ]
  let f = "bunny.glb"



  return (
    <>
    <div className="App">
      <Canvas>
        <ambientLight intensity={1.5} color={"white"}/>
        <directionalLight color="white" position={[0, 0, 5]} />
        <directionalLight color="white" position={[0, 0, -5]} />

        <Suspense fallback = {
          <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={'orange'} />

          </mesh>
        }>
          <Model filename = {currentModel} scale = {data[currentModel].scale} wireframe = {wireframe} points = {points}/>
        </Suspense>
        <OrbitControls/>
      </Canvas>,
    </div>

    <div className='overlay'>
      <Grid className='grid'>
        <Grid.Row className='top_row'>
          <Grid.Column width={4}>
            <div className='infobox'>
              <h1>
                {data[currentModel].title}
              </h1>
              <img src = {data[currentModel].img}/>
              <p>
                {data[currentModel].text}
              </p>

            </div>
          </Grid.Column>
          <Grid.Column width={12}>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className='bottom_row'>
          <Grid.Column width={3}>
            <Radio className='radio_button' toggle label='Wireframe'  
            
            
            onChange={()=> {setWireframe(!wireframe)}}
            checked={wireframe}
            />
            <br/>
            <br/>
            <Radio className='radio_button'  toggle label='Points'  
                        onChange={()=> {setPoints(!points)}}
                        checked={points}
            
            
            />

          </Grid.Column>
          <Grid.Column width={10}>
          </Grid.Column>
          <Grid.Column width={3}>
          <Dropdown
          className='drop'
            placeholder='Select Friend'
            fluid
            selection
            options={friendOptions}
            value = {currentModel}
            onChange={(e, data)=> {setCurrentModel(data.value)}}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    {/*
      <div className=''>

      </div>
    */}

    </div>  
    </>

  );
}

export default App;
