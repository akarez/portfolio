import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function PCBViewer({objPath, mtlPath, pos_x, pos_y, pos_z, zoom}) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!objPath || !mtlPath) {
            console.error('Missing objPath or mtlPath');
            return;
        }

        console.log('OBJ Path:', objPath);
        console.log('MTL Path:', mtlPath);

        const container = containerRef.current;
        if (!container) {
            console.error('Container not found');
            return;
        }

        const width = container.clientWidth;
        const height = container.clientHeight;

        // Create Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xF3F4F6); // tailwind gray-100

        // Create Orthographic Camera
        const scale = 4;
        const aspect = width / height;
        const camera = new THREE.OrthographicCamera(
            -scale * aspect,
            scale * aspect,
            scale,
            -scale,
            0.1,
            100
        );

        // Create Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio
        renderer.shadowMap.enabled = false; // Enable shadows
        renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Soft shadows
        container.appendChild(renderer.domElement);

        // Add Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(8, 8, 8);
        directionalLight.castShadow = false;
        directionalLight.shadow.mapSize.width = 512;
        directionalLight.shadow.mapSize.height = 512;
        scene.add(directionalLight);

// Load Materials and OBJ
const mtlLoader = new MTLLoader();
mtlLoader.load(
  mtlPath,
  (materials) => {
    materials.preload();
    const objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load(
      objPath,
      (object) => {
        // Traverse the loaded object to adjust materials
        object.traverse((child) => {
          if (child.isMesh) {
            // Check if the material is an array or single material
            const materialsArr = Array.isArray(child.material)
              ? child.material
              : [child.material];

            materialsArr.forEach((mat) => {
              // Detect copper material by name and apply polygon offset
              if (mat.name && mat.name.toLowerCase().includes('copper')) {
                mat.polygonOffset = true;
                mat.polygonOffsetFactor = 1;  // tweak these values as needed
                mat.polygonOffsetUnits = 1;
              }
              // Optionally keep double-sided rendering for the soldermask
              mat.side = THREE.DoubleSide;
            });

            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        // Scale the object and add to the scene
        object.scale.set(zoom, zoom, zoom);
        object.position.set(0, 0, 0);
        scene.add(object);
        renderer.render(scene, camera); // Initial render
      },
      undefined, // onProgress callback
      (error) => console.error('Error loading OBJ:', error)
    );
  },
  undefined, // onProgress callback
  (error) => console.error('Error loading MTL:', error)
);


        // Add Orbit Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // Smooth rotation
        controls.dampingFactor = 0.25;
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.target.set(0, 0, 0);
        camera.position.set(pos_x, pos_y, pos_z);
        controls.update();

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup
        return () => {
            container.removeChild(renderer.domElement);
        };
    }, [objPath, mtlPath]);

    return <div ref={containerRef} className="w-full h-full"></div>;
}

export default PCBViewer;