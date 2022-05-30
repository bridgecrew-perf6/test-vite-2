/*
<script src="https://unpkg.com/three@0.110.0/build/three.js"></script>
<script src="https://unpkg.com/three@0.110.0/examples/js/loaders/OBJLoader.js"></script>
<script src="https://unpkg.com/three@0.110.0/examples/js/loaders/MTLLoader.js"></script>
*/		

			import './style.css';
			
			import * as THREE from 'three';

			import { MapControls } from 'three/examples/jsm/controls/OrbitControls'

			import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

			import {FontLoader} from 'three/examples/jsm/loaders/FontLoader.js';
			
			import Stats from 'three/examples/jsm/libs/stats.module';

			import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

			import {MTLLoader} from 'three/examples/jsm/loaders/MTLLoader.js';

			import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader.js';

			import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader.js';
			
			const stats = Stats();
			document.body.appendChild(stats.dom);
		
			var camera, controls, scene, renderer, raycaster, mouse;
			




			

				
				scene = new THREE.Scene();
				scene.background = new THREE.Color( 0x87ceeb  );
				
				//Add light
				//var light = new THREE.AmbientLight(0x111111);
				//scene.add(light);		

				
				//POINT LIGHT
				var pointLight = new THREE.DirectionalLight(0xffffff, 0.3, 0.5);
				pointLight.position.set(100, 100, 50);
				scene.add(pointLight);

				//ADD LIGHT HELPER
				var lightHelper = new THREE.PointLightHelper( pointLight, 5 );
				scene.add( lightHelper );	
				


				//nebbia
				//scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );
				scene.fog = new THREE.FogExp2( 0x8b1cf0, 0.0009 );


				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );

				//ray1
				mouse = new THREE.Vector2();
				raycaster = new THREE.Raycaster();



				//camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
				camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.set( 400, 200, 0 );
				
				

				// controls

				controls = new MapControls( camera, renderer.domElement );

				//controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

				controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
				controls.dampingFactor = 0.05;

				controls.screenSpacePanning = false;

				controls.minDistance = 100;
				controls.maxDistance = 500;

				controls.maxPolarAngle = Math.PI / 2;

			

				
				const geometry = new THREE.BoxBufferGeometry( 0.1, 0.3, 0.3 );




				// text
				const fontLoader = new FontLoader();
				fontLoader.load ('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
   
       			 	const textGeometry = new TextGeometry("ALESSIO BENVENUTI", {
            			font: font,
            			size: 60,
            			height: 15,
    
        			} );
  
    				const textMesh = new THREE.Mesh(textGeometry, 
    					[	
        				new THREE.MeshPhongMaterial({ color: 0xffa940, flatShading: true }), // front
        				new THREE.MeshPhongMaterial({ color: 0xffa940, flatShading: true }), // side
    					]
    				);
    				textMesh.position.set(0, 0, 400);
   					scene.add(textMesh);
    				//textMesh.rotation.x = Math.PI / 2;
					textMesh.rotation.y = Math.PI/2;
					//textMesh.rotation.z = Math.PI/4;

				});



				// text
			
				fontLoader.load ('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
   
       			 	const textGeometry = new TextGeometry("22 YEARS OLD", {
            			font: font,
            			size: 10,
            			height: 2,
    
        			} );
  
    				const textMesh = new THREE.Mesh(textGeometry, 
    					[	
        				new THREE.MeshPhongMaterial({ color: 0xA13221, flatShading: true }), // front
        				new THREE.MeshPhongMaterial({ color: 0xA13221, flatShading: true }), // side
    					]
    				);
    				textMesh.position.set(100, 0, 400);
   					scene.add(textMesh);
    				//textMesh.rotation.x = Math.PI / 2;
					textMesh.rotation.y = Math.PI/2;
					//textMesh.rotation.z = Math.PI/4;

				});



				// work experience
				fontLoader.load ('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
   
       			 	const textGeometry = new TextGeometry("WORK EXPERIENCE", {
            			font: font,
            			size: 30,
            			height: 5,
    
        			} );
  
    				const textMesh = new THREE.Mesh(textGeometry, 
    					[	
        				new THREE.MeshPhongMaterial({ color: 0xfbfbfb, flatShading: true }), // front
        				new THREE.MeshPhongMaterial({ color: 0xfbfbfb, flatShading: true }), // side
    					]
    				);
    				textMesh.position.set(-500, 0, 700);
   					scene.add(textMesh);
    				//textMesh.rotation.x = Math.PI / 2;
					textMesh.rotation.y = Math.PI/2;
					//textMesh.rotation.z = Math.PI/4;

				});


				// work experience 2019-2021
				fontLoader.load ('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
   
       			 	const textGeometry = new TextGeometry("Sicurtek 2+ YEARS", {
            			font: font,
            			size: 10,
            			height: 1,
    
        			} );
  
    				const textMesh = new THREE.Mesh(textGeometry, 
    					[	
        				new THREE.MeshPhongMaterial({ color: 0xff0000, flatShading: true }), // front
        				new THREE.MeshPhongMaterial({ color: 0xff0000, flatShading: true }), // side
    					]
    				);
    				textMesh.position.set(-720, 0, 450);
   					scene.add(textMesh);
    				//textMesh.rotation.x = Math.PI / 2;
					textMesh.rotation.y = Math.PI/2;
					//textMesh.rotation.z = Math.PI/4;

				});

				// work experience
				fontLoader.load ('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
   
       			 	const textGeometry = new TextGeometry("Verisure ITALY 1 YEAR", {
            			font: font,
            			size: 10,
            			height: 1,
    
        			} );
  
    				const textMesh = new THREE.Mesh(textGeometry, 
    					[	
        				new THREE.MeshPhongMaterial({ color: 0xff0000, flatShading: true }), // front
        				new THREE.MeshPhongMaterial({ color: 0xff0000, flatShading: true }), // side
    					]
    				);
    				textMesh.position.set(-720, 0,700);
   					scene.add(textMesh);
    				//textMesh.rotation.x = Math.PI / 2;
					textMesh.rotation.y = Math.PI/2;
					//textMesh.rotation.z = Math.PI/4;

				});

				//florence
				fontLoader.load ('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
   
       			 	const textGeometry = new TextGeometry("Florence ITALY", {
            			font: font,
            			size: 30,
            			height: 5,
    
        			} );
  
    				const textMesh = new THREE.Mesh(textGeometry, 
    					[	
        				new THREE.MeshPhongMaterial({ color: 0xd9564f, flatShading: true }), // front
        				new THREE.MeshPhongMaterial({ color: 0xea463e , flatShading: true }), // side
    					]
    				);
    				textMesh.position.set(-840, 0, -400);
   					scene.add(textMesh);
    				//textMesh.rotation.x = Math.PI / 2;
					textMesh.rotation.y = Math.PI/2;
					//textMesh.rotation.z = Math.PI/4;

				});





				// Instruction
				fontLoader.load ('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
   
       			 	const textGeometry = new TextGeometry("Education", {
            			font: font,
            			size: 30,
            			height: 5,
    
        			} );
  
    				const textMesh = new THREE.Mesh(textGeometry, 
    					[	
        				new THREE.MeshPhongMaterial({ color: 0xFFFF00, flatShading: true }), // front
        				new THREE.MeshPhongMaterial({ color: 0xAABB00, flatShading: true }), // side
    					]
    				);
    				textMesh.position.set(220, 0,950);
   					scene.add(textMesh);
    				//textMesh.rotation.x = Math.PI / 2;
					textMesh.rotation.y = Math.PI/2;
					//textMesh.rotation.z = Math.PI/4;

				});

				// Instruction 2
				fontLoader.load ('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
   
       			 	const textGeometry = new TextGeometry("ITIS MEUCCI FLORENCE (High school)", {
            			font: font,
            			size: 10,
            			height: 2,
    
        			} );
  
    				const textMesh = new THREE.Mesh(textGeometry, 
    					[	
        				new THREE.MeshPhongMaterial({ color: 0xFFFFFF, flatShading: true }), // front
        				new THREE.MeshPhongMaterial({ color: 0xFFFFFF, flatShading: true }), // side
    					]
    				);
    				textMesh.position.set(120, 5,970);
   					scene.add(textMesh);
    				//textMesh.rotation.x = Math.PI / 2;
					textMesh.rotation.y = Math.PI/2;
					//textMesh.rotation.z = Math.PI/4;

				});




				//contact me
				fontLoader.load ('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
   
       			 	const textGeometry = new TextGeometry("CONTACT ME", {
            			font: font,
            			size: 30,
            			height: 2,
    
        			} );
  
    				const textMesh = new THREE.Mesh(textGeometry, 
    					[	
        				new THREE.MeshPhongMaterial({ color: 0x0000ff, flatShading: true }), // front
        				new THREE.MeshPhongMaterial({ color: 0x0000ff, flatShading: true }), // side
    					]
    				);
    				textMesh.position.set(-500, 0, 1300);
   					scene.add(textMesh);
    				//textMesh.rotation.x = Math.PI / 2;
					textMesh.rotation.y = Math.PI/2;
					//textMesh.rotation.z = Math.PI/4;

				});




				//add hearth 3d model
				const loader = new GLTFLoader();

/*
loader.load( './assets/heart.glb', function ( gltf ) {

//apply texture
  //const shoptexture = new THREE.TextureLoader().load( './assets/heart.png' );
  scene.add( gltf.scene );
  gltf.scene.scale.set(100, 100, 100);
	gltf.scene.position.set(500, 0, 0);
	gltf.scene.rotation.y = Math.PI/2;

}, undefined, function ( error ) {

	console.error( error );

} );
*/


  loader.load( './assets/Home.glb', function ( gltf ) {

	gltf.scene.scale.set(10, 10, 10);
	  gltf.scene.position.set(-840, 0, -350);
	//rotate 90
	gltf.scene.rotation.y = Math.PI/2;
	  scene.add( gltf.scene );
	
  
  }, undefined, function ( error ) {
  
	  console.error( error );
  
  } );

  loader.load( './assets/Company.glb', function ( gltf ) {

	gltf.scene.scale.set(10, 10, 10);
	  gltf.scene.position.set(-800, 0, 650);
	  gltf.scene.rotation.y = Math.PI/2;

	scene.add( gltf.scene );
	
  
  }, undefined, function ( error ) {
  
	  console.error( error );
  
  } );

loader.load( './assets/Business.glb', function ( gltf ) {

	gltf.scene.scale.set(25, 25, 25);
	  gltf.scene.position.set(-800, 0, 400);
	  gltf.scene.rotation.y = Math.PI/2;
	scene.add( gltf.scene );
	
  
  }, undefined, function ( error ) {
  
	  console.error( error );
  
  } );
  


  loader.load( './assets/school.glb', function ( gltf ) {

	gltf.scene.scale.set(10, 10, 10);
	  gltf.scene.position.set(60, 0,920);
	  gltf.scene.rotation.y = Math.PI/2;
	scene.add( gltf.scene );
	
  
  }, undefined, function ( error ) {
  
	  console.error( error );
  
  } );
  
 
  				//add contact me cube 
				const Cubegeometry = new THREE.BoxGeometry( 0.5, 2.5, 26 );
				//geometry.translate( 0, 0.5, 0 );
				const Cubematerial = new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: false,wireframe: true } );
				const cube = new THREE.Mesh( Cubegeometry, Cubematerial );
				cube.position.set(-500, 15, 1170);
				cube.scale.x = 10;
				cube.scale.y = 10;
				cube.scale.z = 10;
				cube.updateMatrix();
				cube.visible = false;
				cube.matrixAutoUpdate = false;
				cube.name="ContactMe";
				scene.add( cube );
		/*		
				


				//add 2 cubes
				const Cubegeometry2 = new THREE.BoxGeometry( 10, 10, 10 );
				geometry.translate( 0, 0.5, 0 );
				const Cubematerial2 = new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: false,wireframe: false } );
				const cube2 = new THREE.Mesh( Cubegeometry2, Cubematerial2 );
				cube2.position.x = -300;
				cube2.position.y = 100;
				cube2.position.z = 0;
				cube2.scale.x = 10;
				cube2.scale.y = 10;
				cube2.scale.z = 10;
				cube2.name="cube2"
				cube2.updateMatrix();
				cube2.matrixAutoUpdate = false;
				scene.add( cube2 );


			
				//add 3 cubes
				const Cubegeometry3 = new THREE.BoxGeometry( 10, 10, 10 );
				geometry.translate( 0, 0.5, 0 );
				const Cubematerial3 = new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: false,wireframe: false } );
				const cube3 = new THREE.Mesh( Cubegeometry3, Cubematerial3 );
				cube3.position.x = 0;
				cube3.position.y = 100;
				cube3.position.z = 300;
				cube3.scale.x = 10;
				cube3.scale.y = 10;
				cube3.scale.z = 10;
				cube3.name="cube3"
				cube3.updateMatrix();
				cube3.matrixAutoUpdate = false;
				scene.add( cube3 );
				//hide cube 3
				cube3.visible=false;

*/
			

				//plane
				const plane = new THREE.PlaneBufferGeometry( 20000, 20000 );
				const planeMaterial = new THREE.MeshPhongMaterial( { color: 0xa9c6de, flatShading: true } );
				const mesh = new THREE.Mesh( plane, planeMaterial );
				mesh.rotation.x = - Math.PI / 2;
				scene.add( mesh );


				// lights

				const dirLight1 = new THREE.DirectionalLight( 0xffffff );
				dirLight1.position.set( 1, 1, 1 );
				scene.add( dirLight1 );

				const dirLight2 = new THREE.DirectionalLight( 0x002288 );
				dirLight2.position.set( - 1, - 1, - 1 );
				scene.add( dirLight2 );

				const ambientLight = new THREE.AmbientLight( 0x222222 );
				scene.add( ambientLight );

				

				window.addEventListener( 'resize', onWindowResize );


				
			
				
			


			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			//ray1
			function onMouseClick(event) {
 
				// calculate mouse position in normalized device coordinates
				// (-1 to +1) for both components
			 
				mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
				mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
			 
			}
			 
			window.addEventListener('click', onMouseClick, false);
			



			//ray1
			function resetMaterial() {
				for(let i = 0; i < scene.children.length; i++){
					if(scene.children[i].material){
						scene.children[i].material.opacity = 1;
					}
				}

			}

			
			//ray1
			function hoverPieces(){
				raycaster.setFromCamera( mouse, camera );
				const intersects = raycaster.intersectObjects( scene.children,true );
				for( let i = 0; i < intersects.length; i++ ) {
					//intersects[ i ].object.material.transparent = true;
					intersects[i].object.material.opacity = 0.5;
					
				


					//display name of the piece
					console.log(intersects[0].object.name);

					/*
					if (intersects[0].object.name == "cube2"){
						
						//display cube3 
						cube3.visible=true;
						
						//get id of div

				
						var x = document.getElementById("info");
    					x.style.display = "block";
						console.log("block"); 
					//render 
					}

					*/


					switch(intersects[0].object.name){
					case "10":
						var x = document.getElementById("first-work-experience");
    					x.style.display = "block";
						console.log("block"); 
						break;
					case "7":
						var x = document.getElementById("verisure-work-experience");
    					x.style.display = "block";
						console.log("block"); 
						break;

					case "1":
						var x = document.getElementById("education");
						x.style.display = "block";
						console.log("block");
						break;
					
					case "ContactMe":
						
						var x = document.getElementById("education");
						x.style.display = "block";
						console.log("block");
						break;
						
					}

					//intersects[i].object.material.color.set(0xffff00);
				}


			}



			var Pgeometry = new THREE.PlaneGeometry(3, 2, 1, 1);
			//var Pgeometry = new THREE.PlaneGeometry();
			var Ptexture = new THREE.TextureLoader().load( './assets/florence.png' );
			var Pmaterial = new THREE.MeshLambertMaterial( { map: Ptexture } );
			var PplaneMesh= new THREE.Mesh( Pgeometry, Pmaterial );
			//increase mesh size
			PplaneMesh.scale.set(100,100,100);
			//move mesh to the right position
			PplaneMesh.position.set(-880,100,-550);
			//rotate mesh
			PplaneMesh.rotation.set(0,Math.PI/2,0);
			//add mesh to the scene
			scene.add(PplaneMesh);


			






			function animate() {
				
				

				controls.update();
				
				requestAnimationFrame( animate );

				//PplaneMesh.rotation.y += 0.01;
				render();

				stats.update();

			}

				
			function render() {

				resetMaterial();
				hoverPieces();
				renderer.render( scene, camera );

				
			}

			
			
			animate();