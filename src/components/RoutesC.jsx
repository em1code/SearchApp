import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';

import { Results } from './Results';


export const RoutesC = () =>{

  return(
  <div className="p-4">
    <Routes>
      <Route path="/" element={<Navigate replace to= '/search'/>}/>
      <Route path="/image" element={<Results />}/>
      <Route path="/news" element={<Results />}/>
      <Route path="/videos" element={<Results/>}/>
      <Route exact path="/search" element={<Results/>}/>
    </Routes>
  </div>
  )
}
