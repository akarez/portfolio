import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function PCBViewer({ objPath, mtlPath, posX, posY, posZ, zoom }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!objPath || !mtlPath) return;

    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    const aspect = width / height;
    const scale = 4;
    const camera = new THREE.OrthographicCamera(
      -scale * aspect, scale * aspect,
      scale, -scale,
      0.1, 100
    );
    camera.position.set(posX, posY, posZ);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(8, 8, 8);
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.target.set(0, 0, 0);
    controls.update();

    let animId;

    const mtlLoader = new MTLLoader();
    mtlLoader.load(mtlPath, (materials) => {
      materials.preload();

      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(objPath, (object) => {
        object.traverse((child) => {
          if (!child.isMesh) return;

          const mats = Array.isArray(child.material) ? child.material : [child.material];
          mats.forEach((mat) => {
            if (mat.name?.toLowerCase().includes('copper')) {
              mat.polygonOffset = true;
              mat.polygonOffsetFactor = 1;
              mat.polygonOffsetUnits = 1;
            }
            mat.side = THREE.DoubleSide;
          });

          child.castShadow = true;
          child.receiveShadow = true;
        });

        object.scale.set(zoom, zoom, zoom);
        scene.add(object);

        const animate = () => {
          animId = requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        };
        animate();
      });
    });

    return () => {
      cancelAnimationFrame(animId);
      controls.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [objPath, mtlPath, posX, posY, posZ, zoom]);

  return <div ref={containerRef} className="w-full h-full" />;
}

export default PCBViewer;
