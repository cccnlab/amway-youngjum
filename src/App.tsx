import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import SSLanding from './pages/gameLanding/ssLanding/SSLanding';
import SSInstruction from './pages/gameInstruction/ssInstruction/SSInstruction';
import SSGame from './pages/game/ssGame/SSGame';
// import CJSLanding from './pages/gameLanding/cjsLanding/CJSLanding';
// import CJSInstruction from './pages/gameInstruction/cjsInstruction/CJSInstruction';
// import CJSGame from './pages/game/cjsGame/CJSGame';
import GNGLanding from './pages/gameLanding/gngLanding/GNGLanding';
import GNGInstruction from './pages/gameInstruction/gngInstruction/GNGInstruction';
import GNGGame from './pages/game/gngGame/GNGGame';
import LoadingSpinner from './components/loadingSpinner/LoadingSpinner';
import ParticipantForm from './pages/participantForm/participantForm';
import { getDataFromLocalStorage, saveDataToLocalStorage } from './uitls/offline';

function App() {
  const [userBirth, setUserBirth] = useState("XXXX");
  const [userAge, setUserAge] = useState("XXXX");
  const [userDegree, setUserDegree] = useState("XXXX");

  // get data from query param 
  function getQueryParamFromURL(param) {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(2)); // Remove the '#/' character 

    if (params.has(param)) {
      return params.get(param);
    }
  
    return null;
  }
  
  // call the function to extract data from the query string
  let userId = getQueryParamFromURL('userId');
  let refId = getQueryParamFromURL('ref');

  // check if the user and ref data still exist
  function checkQueryParam(){
    if (userId !== null && refId !== null) {
      saveDataToLocalStorage('userId', userId);
      saveDataToLocalStorage('ref', refId);
    } else {
        userId = getDataFromLocalStorage('userId');
        refId = getDataFromLocalStorage('ref');
    }
    // console.log(userId)
    // console.log(refId)
  }

  // call the function to check user and ref data
  let checkUserAndRef = checkQueryParam();
  
  useEffect(() => {
    const disablePinchZoom = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    }
    document.addEventListener("touchmove", disablePinchZoom, { passive: false })
    documentHeightWidth();
    window.addEventListener('resize', documentHeightWidth);
    window.addEventListener('orientationchange', documentHeightWidth);

    let birth = getDataFromLocalStorage('userBirth');
    let age = getDataFromLocalStorage('userAge');
    let degree = getDataFromLocalStorage('userDegree');
    if ((birth !== null && degree !== null && age !== null) && (birth !=="XXXX" && degree !== "XXXX" && age !== "XXXX")) {
      setUserBirth(birth);
      setUserAge(age);
      setUserDegree(degree);
      // window.location.replace(window.location.origin + "#/landing");
    } 
    
    // uncomment this when deploy
    // else {
    //   if (window.location.href === "https://cccnlab.co/amway-youngjum/"){
    //   } else {
    //     window.location.replace("https://cccnlab.co/amway-youngjum/");
    //   }
    // }
  }, [])
  
  function documentHeightWidth() {
    let calWidth = '' + document.documentElement.clientWidth;
    let calHeight = '' + document.documentElement.clientHeight;
    let calSum = (+calWidth) + (+calHeight);
    let vh = window.innerHeight * 0.01;
    
    getComputedStyle(document.documentElement).getPropertyValue('--this-width');
    getComputedStyle(document.documentElement).getPropertyValue('--this-height');
    getComputedStyle(document.documentElement).getPropertyValue('--this-sum');
    document.documentElement.style.setProperty('--this-width', calWidth + 'px');
    document.documentElement.style.setProperty('--this-height', calHeight + 'px');
    document.documentElement.style.setProperty('--this-sum', calSum + 'px');
    document.documentElement.style.setProperty('--vh', vh + 'px');
  }

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={< ParticipantForm setUserBirth={setUserBirth} setUserAge={setUserAge} setUserDegree={setUserDegree}/>}></Route>
            <Route path="/landing" element={< LandingPage />}></Route>
            <Route path="/spatial-span" element={<SSLanding />}></Route>
            <Route path="/spatial-span/instruction" element={<SSInstruction />}></Route>
            <Route path="/spatial-span/trial" element={<SSGame userBirth={userBirth} userAge={userAge} userDegree={userDegree}/>}></Route>
            {/* <Route path="/conjunction-search" element={<CJSLanding />}></Route> */}
            {/* <Route path="/conjunction-search/instruction" element={<CJSInstruction />}></Route> */}
            {/* <Route path="/conjunction-search/trial" element={<CJSGame />}></Route> */}
            <Route path="/go-nogo" element={<GNGLanding />}></Route>
            <Route path="/go-nogo/instruction" element={<GNGInstruction />}></Route>
            <Route path="/go-nogo/trial" element={<GNGGame userBirth={userBirth} userAge={userAge} userDegree={userDegree}/>}></Route>
          </Routes>
          <LoadingSpinner />
      </Router>
    </>
  );
}

export default App;
