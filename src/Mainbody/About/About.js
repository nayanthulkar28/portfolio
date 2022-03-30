import React, { Component } from 'react';
import './About.css';
import * as THREE from 'three';

class About extends Component{

    componentDidMount() {
        const height = this.divElement.clientHeight;
        const width = this.divElement.clientWidth;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
        const renderer = new THREE.WebGL1Renderer();
        renderer.setSize(width, height);
        this.mount.appendChild( renderer.domElement );
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({color: 0xBBE1FA});
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        const animate = function() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();
    }
  render() {
  return (
    <div className = 'about-container' id = 'about-container'>
        <div className = 'about-container-left'>
            <div className = 'about-container-left-holder'>
                <h1>Myself</h1>
                <p>I'm Nayan Thulkar, full-stack developer located in chandrapur, Maharashtra. I'm passionate about developing software. Also, I do competitive programing.</p>
            </div>
        </div>
        <div className = 'about-container-right'>
            <div className = 'about-container-right-holder' ref={ref=>(this.mount=ref)} >
            </div>
        </div>
    </div>
  )
  }
}
export default About;