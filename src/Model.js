import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three';
import { useEffect } from 'react';

function Model(props) {
    const gltf = useLoader(GLTFLoader, 'Objects/' + props.filename)

    console.log(gltf.materials)
    let material = new THREE.PointsMaterial({ color: 0xFF0000, size: 0.01 })

    if(gltf) {
        if(gltf.materials){
            for(var key in gltf.materials) {
                console.log(key)
                console.log(gltf.materials[key])
                gltf.materials[key].side = THREE.DoubleSide;
                if(props.wireframe) {
                    gltf.materials[key].wireframe = true;
                        
                }
                gltf.materials[key] = material
            }
            //gltf.materials.forEach((element) => console.log(element));
            for(var otherkey in gltf.nodes) {
                let geo = gltf.nodes[otherkey].geometry
                let mesh = new THREE.Points(geo, material)
                gltf.scene.add(mesh)
                
            }

        }
    }
    useEffect(()=> {
        if(gltf.materials){
            for(var key in gltf.materials) {
                console.log(key)
                console.log(gltf.materials[key])
                gltf.materials[key].side = THREE.DoubleSide;
                if(props.wireframe) {
                    gltf.materials[key].wireframe = true;

                } else {
                    gltf.materials[key].wireframe = false;
                }
            } 

            

            for(var object in gltf.scene.children) {
                console.log(gltf.scene.children[object])
                if(gltf.scene.children[object].isMesh) {
                    if(props.points) {
                        gltf.scene.children[object].visible = false;
                    } else {

                        gltf.scene.children[object].visible = true;
                    }
                    if(props.wireframe) {
                        gltf.scene.children[object].material.wireframe = true;
                    } else {
                        gltf.scene.children[object].material.wireframe = false;

                    }
                } 





                if(gltf.scene.children[object].isPoints) {
                    if(props.points) {

                    } else {
                        gltf.scene.children[object].visible = false;

                    }
                }

            }

            //gltf.materials.forEach((element) => console.log(element));
        }

    })
    return <group scale={props.scale}>
            <primitive object={gltf.scene} />
        </group>
  }
  
export default Model