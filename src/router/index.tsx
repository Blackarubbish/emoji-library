import { Routes, Route } from "react-router-dom";

import React from 'react'

import Home from "../pages/Home";
import Smile from "../pages/Smile";
import Activity from "../pages/Activity";
import Animal from "../pages/Animal";
import Flag from "../pages/Flag";
import Food from "../pages/Food";
import Goods from "../pages/Goods";
import Person from "../pages/Person";
import Skin from "../pages/Skin";
import Symbol from "../pages/Symbol";
import Travel from "../pages/Travel";


export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="smile" element={<Smile />}></Route>
        <Route path="activity" element={<Activity />}></Route>
        <Route path="animal" element={<Animal />}></Route>
        <Route path="flag" element={<Flag />}></Route>
        <Route path="food" element={<Food />}></Route>
        <Route path="goods" element={<Goods />}></Route>
        <Route path="person" element={<Person />}></Route>
        <Route path="skin" element={<Skin />}></Route>
        <Route path="symbol" element={<Symbol />}></Route>
        <Route path="travel" element={<Travel />}></Route>
    </Routes>
  )
}
