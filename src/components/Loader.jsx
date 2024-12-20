import React from "react";
import { Html, useProgress } from "@react-three/drei";
// this code is shown as fallback while <Suspense> is used in the parent component
// this code defines the loader component which is displayed while the 3D scene is loading
// the loader displays the loading progress as a percentage
// useProgress is a hook that provides the loading progress of the 3D scene
// Html component is used to render HTML content in the 3D scene as <span> and <p> are html tags used using Html component
// progress.toFixed(2) is used to display the loading progress rounded to 2 decimal places
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
