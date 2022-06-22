import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = (props) => {

    const { setVal, cate, setCate, setSpin, spin } = props

    useEffect (() => {
        setSpin(true)
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((eat => {
                setCate(eat.data.categories);
                console.log('home_cart >>>', eat.data.categories)
            }))
            setSpin(false)
    }, [])

const btnCart = (item) => {
    setSpin(true)
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${item.strCategory}`)
    .then((res => {
        setVal(res.data.meals);
        console.log('btnCart >>>' ,res.data.meals)
    }))
    setSpin(false)
}

    return (    
        <>
            <div className="container">
                <div className="content_home">
                    <div className="home_box">
                        {
                        spin === true
                        ?
                        <h1 className='p'>Идет Загруска</h1>
                        :
                            cate.map((item, i) => {
                                return (
                                    <>
                                        <div className="category_cart">
                                            <img key={i} style={{ width: 200, height: 200, padding: 5, }} src={item.strCategoryThumb} alt="" />
                                            <p onClick={() => btnCart(item)} ><Link className='p' to='/product'>{item.strCategory} </Link></p>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;