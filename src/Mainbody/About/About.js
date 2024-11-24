import React, { Component } from 'react';
import './About.css';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import myFont from '../../resources/Fonts/MyFont.json';

class About extends Component{

    componentDidMount() {
        const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
        renderer.domElement.id = "canvasWheel";
        this.mount.appendChild( renderer.domElement );
        let canvasEle = document.querySelector("#canvasWheel"); 
        const height = canvasEle.clientHeight;
        const width = canvasEle.clientWidth;
        renderer.setSize(width, height);
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
        camera.position.z = 130;
        camera.position.x = 5;

        const loader = new FontLoader();

        var font = loader.parse(myFont)
        const distance = 60;
        const cornerDistance = distance * Math.cos(Math.PI / 4);

        const centerGeometry = new THREE.Object3D();
        scene.add(centerGeometry);

        var textMaterial = new THREE.MeshBasicMaterial({color: "#3282B8"});

        const skills = ["HTML", 
                        "WebSockets", 
                        "AWS", 
                        "Golang", 
                        "C++", 
                        "ReactJs", 
                        "Python", 
                        "SQL",  
                        "Git", 
                        "Github", 
                        "JWT", 
                        "Nginx", 
                        "CSS", 
                        "JavaScript"];
        
        const skillCords = [[distance, 0, 0], 
                            [0, distance, 0], 
                            [0, 0, distance], 
                            [-distance, 0, 0], 
                            [0, -distance, 0], 
                            [0, 0, -distance], 
                            [cornerDistance, cornerDistance, cornerDistance], 
                            [-cornerDistance, cornerDistance, cornerDistance], 
                            [cornerDistance, -cornerDistance, cornerDistance], 
                            [-cornerDistance, -cornerDistance, cornerDistance], 
                            [cornerDistance, cornerDistance, -cornerDistance], 
                            [-cornerDistance, cornerDistance, -cornerDistance], 
                            [cornerDistance, -cornerDistance, -cornerDistance], 
                            [-cornerDistance, -cornerDistance, -cornerDistance]];
                    
        let skillMesh = [];
        let objectMesh = [];
        const totatEle = skillCords.length;

        for(let i = 0 ; i < totatEle ; i ++) {
            const skill = skills[i];
            const cords = skillCords[i];

            var geometry = new TextGeometry(skill, {
                font: font,
                size: 3.5,
                height: 1,
            });

            var textMesh = new THREE.Mesh(geometry, textMaterial);
            scene.add(textMesh);
            skillMesh.push(textMesh);

            const object = new THREE.Object3D();
            object.position.set(cords[0], cords[1], cords[2]);
            objectMesh.push(object);
            centerGeometry.add(object);
        }

        window.addEventListener("resize", () => {
            const parentEle = document.querySelector(".about-container-right-holder");
            const width = parentEle.clientWidth;
            const height = parentEle.clientHeight;
            const canvas = renderer.domElement;
            canvas.width = width;
            canvas.height = height;
        }, false)

        canvasEle.addEventListener("mousedown", function(e) {
            setRotateCoordinates(canvasEle, e);
        });

        let axisX = 1 / Math.sqrt(2);
        let axisY = 1 / Math.sqrt(2);
        let axisZ = 0;
        let theta = Math.atan(axisY / axisX);
        let alpha = 0;
        let angleIncrement = 0;
        let totalAngleCover = 0;
        const epsilon = Math.pow(10, -10);

        function setRotateCoordinates(canvas, event) {
            let rect = canvas.getBoundingClientRect();
            let x = (event.clientX - rect.left) - ((rect.right - rect.left) / 2);
            let y = ((rect.bottom - rect.top) / 2) - (event.clientY - rect.top);

            // perpendicular vector set
            const mag = Math.sqrt(x * x + y * y);
            const prevX = axisX;
            const prevY = axisY;
            const prevZ = axisZ;
            axisX = -y / mag;
            axisY = x / mag;
            axisZ = 0;

            // calculating angle between two axis using dot product of unit vector
            alpha = Math.acos(prevX * axisX + prevY * axisY + prevZ * axisZ);
            angleIncrement = alpha / 50;

            // check if angle is > 180
            if (Math.abs(axisX - Math.cos(theta + alpha)) >  epsilon || Math.abs(axisY - Math.sin(theta + alpha)) > epsilon) angleIncrement *= -1;

            totalAngleCover = theta + (50 * angleIncrement);
        }

        function resizeRendererToDisplaySize(renderer) {
            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const needResize = canvas.width !== width || canvas.height !== height;
            if (needResize) {   
                renderer.setSize(canvas.width, canvas.height, true);
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

            const rotX = Math.cos(theta + angleIncrement);
            const rotY = Math.sin(theta + angleIncrement);
            const rotZ = 0;
            theta += angleIncrement;
            if (Math.abs(theta - totalAngleCover) < epsilon) angleIncrement = 0;
            const axis = new THREE.Vector3(rotX, rotY, rotZ);
            centerGeometry.rotateOnAxis(axis, time);

            for(let i = 0 ; i < totatEle ; i ++) {
                skillMesh[i].position.setFromMatrixPosition(objectMesh[i].matrixWorld);
            }
            
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
                <p>Hii, I'm <strong>Nayan Thulkar</strong>, a passionate developer and programmer.<br></br>
                <strong>Fullstack developer</strong> having 2.5+ years of experience.<br></br> 
                My techstack mainly involve but not limited to <strong>HTML</strong>, <strong>CSS</strong>, <strong>JS</strong>, <strong>ReactJs</strong> for <strong>Front-End</strong> and <strong>Go</strong>, <strong>Python</strong>, <strong>C++</strong> for <strong>Back-End</strong>.<br></br>
                Also I have my hands on <strong>DevOps</strong>, which includes setting up <strong>CI-CD pipeline</strong>, deploying apps on <strong>AWS</strong> in <strong>EC2 instance</strong> with <strong>CloudFront</strong> and many more ...</p>
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