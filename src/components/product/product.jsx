import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


const Product = (props) => {

    const { val, spin, ctye, btnKor,InfoClick  } = props

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
                            val.map((item, i) => {
                                return (
                                    <>
                                        <div className="category_cart">
                                            <img key={i} style={{ width: 200, height: 200, padding: 5, }} src={item.strMealThumb} alt="" />
                                            <Link to='/info' className='p'><p key={i} onClick={() => InfoClick(item.idMeal)}>{item.strMeal} </p></Link>
                                            <button  className='btn' onClick={() => btnKor(item.idMeal)}> Выбрать </button>
                                        </div>
                                    </>
                                )
                            })
                        }
                        {
                        spin === true
                        ?
                        <h1 className='p'>Идет Загруска</h1>
                        :
                            ctye.map((item, i) => {
                                return (
                                    <> 
                                        <div className="category_cart">
                                            <img key={i} style={{ width: 200, height: 200, padding: 5, }} src={item.strMealThumb} alt="" />
                                            <p key={i}>{item.strMeal} </p>
                                            <button  className='btn' onClick={() => btnKor(item.idMeal)}> Выбрать </button>
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

export default Product;