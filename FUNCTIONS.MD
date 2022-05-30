	//import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
	
/*
  var url = "./assets/Objs/Build_05.mtl";
  mtlLoader.load( url, function( materials ) {
  
	  materials.preload();
  
	  var objLoader = new OBJLoader();
	  objLoader.setMaterials( materials );
	  objLoader.load( './assets/Objs/Build_05.obj', function ( object ) {
  
		  object.position.x = 800;
		  //scale the object
		  object.scale.set(10, 10, 10);
		  scene.add( object );
  
	  }, undefined, function ( error ) {
  
		console.error( error );
	
	});
  
  });
  */



	//fun with controls
				/*
				controls = new MapControls( camera, renderer.domElement );
				controls.enableDamping = true;
				//controls.dampingFactor = 0.25;
				controls.screenSpacePanning = false;
				controls.minDistance = 100;
				controls.maxDistance = 500;
				//controls.maxPolarAngle = Math.PI / 2;
				//controls.minPolarAngle = Math.PI / 2;
				controls.rotateSpeed = 0.5;
				controls.panSpeed = 0.5;
				controls.zoomSpeed = 0.5;
				//controls.autoRotate = true;
				//controls.autoRotateSpeed = 0.5;
				controls.target.set( 0, 20, 0 );
				*/


	// world
				/* 
				const geometry = new THREE.BoxGeometry( 1, 1, 1 );
				geometry.translate( 0, 0.5, 0 );
				const material = new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } );

				for ( let i = 0; i < 500; i ++ ) {

					const mesh = new THREE.Mesh( geometry, material );
					mesh.position.x = Math.random() * 1600 - 800;
					mesh.position.y = 0;
					mesh.position.z = Math.random() * 1600 - 800;
					mesh.scale.x = 20;
					mesh.scale.y = Math.random() * 80 + 10;
					mesh.scale.z = 20;
					mesh.updateMatrix();
					mesh.matrixAutoUpdate = false;
					scene.add( mesh );

				}
				*/
				/*
				//fun with planes
				const geometry = new THREE.PlaneGeometry( 1, 8, 1 );
				geometry.translate( 0, 0.5, 0 );
				const material = new THREE.MeshPhongMaterial( { color: 0xff0000, flatShading: true } );

				for ( let i = 0; i < 500; i ++ ) {

					const mesh = new THREE.Mesh( geometry, material );
					mesh.position.x = Math.random() * 1600 - 800;
					mesh.position.y = 0;
					mesh.position.z = Math.random() * 1600 - 800;
					mesh.scale.x = 20;
					mesh.scale.y = Math.random() * 80 + 10;
					mesh.scale.z = 20;
					mesh.updateMatrix();
					mesh.matrixAutoUpdate = false;
					scene.add( mesh );
				}
				*/


				/*const gui = new GUI();
				gui.add( controls, 'screenSpacePanning' );
				*/



//ray1
			/*
			function resetMaterial() {
				for(let i = 0; i < scene.children.length; i++){
					if(scene.children[i].material && camera.position.distanceTo(scene.children[i].position) < 300){
						scene.children[i].material.opacity = 1;
					}
				}

			}
			*/


//console.log(camera.position);






// fun with spheres	
				/*
				const geometry = new THREE.BoxBufferGeometry( 0.1, 0.3, 0.3 );
				geometry.translate( 0, 0.5, 0 );
				const material = new THREE.MeshPhongMaterial( { color: 0xff0000, flatShading: true } );

				for ( let i = 0; i < 500; i ++ ) {	
					const mesh = new THREE.Mesh( geometry, material );
					mesh.position.x = Math.random() * 1600 - 800;
					mesh.position.y = 0;
					mesh.position.z = Math.random() * 1600 - 800;
					mesh.scale.x = 10;
					mesh.scale.y = Math.random() * 80 + 10;
					mesh.scale.z = 10;
					mesh.updateMatrix();
					mesh.matrixAutoUpdate = false;
					scene.add( mesh );
				}
				*/







//fbx model loader

				var mtlLoader = new MTLLoader();
 
  var url = "./assets/Objs/Build_01.mtl";
  mtlLoader.load( url, function( materials ) {
  
	  materials.preload();
  
	  var objLoader = new OBJLoader();
	  objLoader.setMaterials( materials );
	  objLoader.load( './assets/Objs/Build_01.obj', function ( object ) {
  
		  object.position.y = 100;
		  //scale the object
		  object.scale.set(10, 10, 10);
		  //light material 

		  scene.add( object );
  
	  }, undefined, function ( error ) {
  
		console.error( error );
	
	});
  
  });

/*
  var url = "./assets/Objs/10.mtl";
  mtlLoader.load( url, function( materials ) {
  
	  materials.preload();
  
	  var objLoader = new OBJLoader();
	  objLoader.setMaterials( materials );
	  objLoader.load( './assets/Objs/10.obj', function ( object ) {
  
		  object.position.x = 800;
		  
		  object.scale.set(100, 100, 100);
		  
		  scene.add( object );
  
	  }, undefined, function ( error ) {
  
		console.error( error );
	
	});
  
  });

 */