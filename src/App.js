import React from "react";
import RecordPageComponent from "./RecordingPageComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signin from "./components/Signin"
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route exact path="/signin" element={<Signin/>} />
      <Route exact path="/signup" element={<Signup/>} />
      <Route exact path="/" element={
              <ProtectedRoute>
                <RecordPageComponent />
              </ProtectedRoute>
            }/>
      
     
    </Routes>
    </BrowserRouter>
 
  );
}
 

export default App;
