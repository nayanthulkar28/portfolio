import React, { Component } from 'react';
import './About.css';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import myFont from '../../resources/Fonts/MyFont.json';

class About extends Component{

    componentDidMount() {
        const height = 800;
        const width = 800;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({alpha:true, antialias: true});
        renderer.setSize(width, height);
        renderer.domElement.id = "canvasWheel";
        this.mount.appendChild( renderer.domElement );
        camera.position.z = 130;

        const loader = new FontLoader();

        var font = loader.parse(myFont)
        const distance = 60;

        const centerGeometry = new THREE.Object3D();
        scene.add(centerGeometry);

        var textMaterial = new THREE.MeshBasicMaterial({color: "#3282B8"});

        var textGeometryHTML = new TextGeometry('HTML', {
            font: font,
            size: 3,
            height: 1,
        });

        var textMeshHTML = new THREE.Mesh(textGeometryHTML, textMaterial);
        scene.add(textMeshHTML);

        const objectHTML = new THREE.Object3D();
        objectHTML.position.set(distance, 0, 0);
        centerGeometry.add(objectHTML);

        var textGeometryCSS = new TextGeometry('CSS', {
            font: font,
            size: 3,
            height: 1,
        });

        var textMeshCSS = new THREE.Mesh(textGeometryCSS, textMaterial);
        scene.add(textMeshCSS);

        const objectCSS = new THREE.Object3D();
        objectCSS.position.set(0, distance, 0);
        centerGeometry.add(objectCSS)

        var textGeometryJAVASCRIPT = new TextGeometry('JAVASCRIPT', {
            font: font,
            size: 3,
            height: 1,
        });

        var textMeshJAVASCRIPT = new THREE.Mesh(textGeometryJAVASCRIPT, textMaterial);
        scene.add(textMeshJAVASCRIPT);

        const objectJAVASCRIPT = new THREE.Object3D();
        objectJAVASCRIPT.position.set(0, 0, -distance);
        centerGeometry.add(objectJAVASCRIPT);

        var textGeometryGOLANG = new TextGeometry('GOLANG', {
            font: font,
            size: 3,
            height: 1,
        });

        var textMeshGOLANG = new THREE.Mesh(textGeometryGOLANG, textMaterial);
        scene.add(textMeshGOLANG);

        const objectGOLANG = new THREE.Object3D();
        objectGOLANG.position.set(-distance, 0, 0);
        centerGeometry.add(objectGOLANG);

        var textGeometryCPP = new TextGeometry('C++', {
            font: font,
            size: 3,
            height: 1,
        });

        var textMeshCPP = new THREE.Mesh(textGeometryCPP, textMaterial);
        scene.add(textMeshCPP);

        const objectCPP = new THREE.Object3D();
        objectCPP.position.set(0, -distance, 0);
        centerGeometry.add(objectCPP);

        var textGeometryPYTHON = new TextGeometry('PYTHON', {
            font: font,
            size: 3,
            height: 1,
        });

        var textMeshPYTHON = new THREE.Mesh(textGeometryPYTHON, textMaterial);
        scene.add(textMeshPYTHON);

        const objectPYTHON = new THREE.Object3D();
        objectPYTHON.position.set(0, 0, distance);
        centerGeometry.add(objectPYTHON);

        // const centerAxis = new THREE.AxesHelper(40);
        // centerGeometry.add(centerAxis);
        // const HTMLAxis = new THREE.AxesHelper(10);
        // textMeshHTML.add(HTMLAxis);
        // const CSSAxis = new THREE.AxesHelper(10);
        // textMeshCSS.add(CSSAxis);

        let canvasEle = document.querySelector("#canvasWheel");
        console.log(canvasEle);
        canvasEle.addEventListener("mousemove", function(e) {
            setRotateZ(canvasEle, e);
        });

        let rotateX = 1 / Math.sqrt(2);
        let rotateY = 1 / Math.sqrt(2);
        let rotateZ = 0;

        function setRotateZ(canvas, event) {
            let rect = canvas.getBoundingClientRect();
            let x = (event.clientX - rect.left) - ((rect.right - rect.left) / 2);
            let y = ((rect.bottom - rect.top) / 2) - (event.clientY - rect.top);
            // perpendicular vector set
            const mag = Math.sqrt(x * x + y * y);
            rotateX = -y / mag;
            rotateY = x / mag;
            rotateZ = 0;
            // rotateZ = ((x < 0) ? Math.atan(y / x) : Math.PI + Math.atan(y / x)) - Math.PI;
        }

        function resizeRendererToDisplaySize(renderer) {
            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const needResize = canvas.width !== width || canvas.height !== height;
            if (needResize) {
                renderer.setSize(width, height, false);
            }
            return needResize;
        }

        function render(time) {
            time *= 0.001;

            if (resizeRendererToDisplaySize(renderer)) {
                const canvas = renderer.domElement;
                camera.aspect = canvas.clientWidth/canvas.clientHeight;
                camera.updateProjectionMatrix();
            }

            var emptyQuat = new THREE.Quaternion();
            centerGeometry.setRotationFromQuaternion(emptyQuat);

            const axis = new THREE.Vector3(rotateX, rotateY, rotateZ);
            centerGeometry.rotateOnAxis(axis, time);
            // centerGeometry.rotation.set(0, time, rotateZ);

            textMeshHTML.position.setFromMatrixPosition(objectHTML.matrixWorld);
            textMeshCSS.position.setFromMatrixPosition(objectCSS.matrixWorld);
            textMeshJAVASCRIPT.position.setFromMatrixPosition(objectJAVASCRIPT.matrixWorld);
            textMeshGOLANG.position.setFromMatrixPosition(objectGOLANG.matrixWorld);
            textMeshCPP.position.setFromMatrixPosition(objectCPP.matrixWorld);
            textMeshPYTHON.position.setFromMatrixPosition(objectPYTHON.matrixWorld);
            
            renderer.render(scene, camera);
            requestAnimationFrame(render);
        }

        requestAnimationFrame(render);
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