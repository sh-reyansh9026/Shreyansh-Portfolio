import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
{
  /*useGLTF is a react hook used to access GLTF model's components like meshes,materials animations etc.
  const computer = useGLTF('./desktop_pc/scene.gltf'); here this is used to animate a picture of computer given in the path.i.e in public folder
  */
}

{
  /*
    This setup creates a 3D scene where the "computer" model is illuminated by the lights, ensuring it is visible and aesthetically pleasing.

    <mesh> -> it is a container for 3d objects
              it grps objects together but doesn't have geometry or material assigned directly 
              
    <hemsiphereLight> -> a type of light that emits light from sky and ground simultaneously
                        with intensity={0.15} and groundColor="black" indicates the color of light coming from below or ground

    <pointLight> -> a light that emits light from a single point in all directions       
    
    <primitive> -> it is used to render a 3d object from a GLTF file
                   computer.scene is used to render the object of computer from the computer object using GLTF file
  */
}
const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />

      <pointLight intensity={1} />

      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  // this code is written for mobile devices as if user switches to mobile devices then it will be responsive
  // this cod only changes isMobile variable value true or false base on mediaQuery if it is true then it is mobile device
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size

    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the isMobile state variable

    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // <Canvas> sets up the 3D rendering environment
  // frameloop="demand" -> the canvas will only render when needed or when there are changes in the scene ,optimizing performance
  // shadows -> enables shadows in the scene
  // camera -> sets up the camera position and field of view
  // gl={{ preserveDrawingBuffer: true }}: Keeps the rendering buffer intact, useful for saving screenshots or consistent rendering.

  // <Suspense> -> wraps components that need to wait for resources to load and dispalys a fallback component until then

  // <OrbitControls> -> allows the user to move the camera  or to add interactive controls to the camera
  // min and maxPolar angle restricts the camera movement to a certain angle in vertical direction
  // <Preload all /> optimizes performance by preloading all the resources before rendering the scene
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
