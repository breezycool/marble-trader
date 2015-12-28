import React from 'react';
import THREE from 'three';
import THREEx from '../../third-party/THREEx/THREEx'
var OrbitControls = require('three-orbit-controls')(THREE)

export default class Scene extends React.Component {
	render() {
		initGraphics();

		return (
			<div></div>
		)
  }
}

// TRANSLATE EVERYTHING BELOW TO REACT

/********************/
/* Global Variables */
/********************/
var scene, camera, renderer; // Essentials
var controls, stats, mouse; // Plugins - mouse control and CPU status




// Initializes setup for ThreeJS scene including renderer
function initGraphics() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 125, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 75;
    
    mouse = new THREE.Vector2();
    


    /* ------->>>>>>  FIX: SETUP DETECTOR */

    // Detect Browser Type - Set renderer accordingly
    //if ( Detector.webgl )
		renderer = new THREE.WebGLRenderer( {antialias:true, alpha: true} );
	//else
	//	renderer = new THREE.CanvasRenderer( {alpha: true} ); 
    
    renderer.setSize( window.innerWidth, window.innerHeight );
    
    document.getElementById("ThreeJS").appendChild( renderer.domElement );
    
    // add directional light for scene
    var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    directionalLight.position.set( 0, 1, 0 );
    scene.add(directionalLight);

	// setup all controls and initial view
    initControls();

    var sphereGeom =  new THREE.SphereGeometry( 40, 32, 16 ); 
    var marbleTexture = THREE.ImageUtils.loadTexture( './assets/images/marble-yellow.jpg' );
	var marbleMaterial = new THREE.MeshLambertMaterial( { map: marbleTexture } );
	var marble = new THREE.Mesh( sphereGeom.clone(), marbleMaterial );
	marble.position.set(0, 0, 0);
	scene.add( marble );

    render();
}


function render() {
	requestAnimationFrame( render );
	
	// Update plugin controls
	controls.update();
	
	renderer.render( scene, camera );

}

// Initializes controls for ThreeJS scene
function initControls() {
    // Events - Resizing
	THREEx.WindowResize(renderer, camera);
	THREEx.FullScreen.bindKey({ charCode : 'm'.charCodeAt(0) });
	
	// Controls - Mouse Control
	controls = new OrbitControls( camera, renderer.domElement );
}