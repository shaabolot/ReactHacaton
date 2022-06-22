import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/header';
import Home from './components/Home';
import Product from './components/product';
import Product_item from './components/product_item';
import Info from './components/Info';

const App = () => {

  const [cate, setCate] = useState([])
  const [val, setVal] = useState([])
  const [ctye, setCtye] = useState([])
  const [sear, setSear] = useState([])
  const [info, setInfo] = useState([])
  const [spin, setSpin] = useState(false)
  const [cart, setCart] = useState([])
  const length = cart.length

  const btnKor = (item) => {
    console.log('Cart >>>>', item)
    const elem = val.find(elem => elem.idMeal === item)
    const newArr = [...cart, elem]
    setCart(newArr)
  }

  const btnUdl = (id) => {
    setCart([
      ...cart.filter((index) => index.idMeal !== id)
    ])
  }

  const btnSear = () => {
    setSpin(true)
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${sear}`)
      .then((cty => {
        setCtye(cty.data.meals);
        console.log('home_stran >>>', cty.data.meals)
      }))
    setSpin(false)
  }

  const InfoClick = (item) => {
    console.log(item);
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item}`)
      .then((info => {
        console.log('Info >>', info)
        setInfo(info.data.meals)
      }))
  }

  const keyPress = (e) => e.key === 'Enter' ? btnSear() : '';

  return (
    <>
      <Header
        setSear={setSear}
        btnSear={btnSear}
        spin={spin}
        keyPress={keyPress}
        length={length}
      />

      <Routes>
        <Route path="/home" element={<Home
          setCate={setCate}
          cate={cate}
          setVal={setVal}
          setSpin={setSpin}
          spin={spin}
          sear={sear}
          ctye={ctye}
        />} />

        <Route path="/product" element={<Product
          val={val}
          sear={sear}
          spin={spin}
          ctye={ctye}
          btnKor={btnKor}
          InfoClick={InfoClick}
        />} />

        <Route path='/korzina' element={<Product_item
          cart={cart}
          spin={spin}
          btnUdl={btnUdl}
        />} />

        <Route path='/info' element={<Info
          info={info}
        />} />
      </Routes>
    </>
  );
}

export default App;