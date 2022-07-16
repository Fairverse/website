import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/webbuild.loader.js",
    dataUrl: "build/webbuild.data",
    frameworkUrl: "build/webbuild.framework.js",
    codeUrl: "build/webbuild.wasm",
  });
  
  return <Unity unityProvider={unityProvider} />;
}

export default Game;
