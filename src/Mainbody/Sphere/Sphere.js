import React, { Component } from 'react'
import './Sphere.css'
import * as THREE from 'three';
import img from '../../resources/grass.jpg';

export default class Sphere extends Component {
    componentDidMount() {
        const scene = new THREE.Scene()
        const width = 1650
        const height = 950
        const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000)
        const renderer = new THREE.WebGL1Renderer({antialias: true})
        renderer.setSize(width, height)
        renderer.setPixelRatio(window.devicePixelRatio)
        this.mount.appendChild(renderer.domElement)

        const geometry = new THREE.SphereGeometry(5, 50, 50)
        const texture = new THREE.TextureLoader().load(img)
        const material = new THREE.MeshBasicMaterial({map: texture})
        const sphere = new THREE.Mesh(geometry, material)

        scene.add(sphere)
        camera.position.z = 10

        function animate() {
            requestAnimationFrame(animate)
            renderer.render(scene, camera)
        }
        animate()
    }
  render() {
    return (
      <div ref={ref=>{this.mount=ref}}></div>
    )
  }
}
