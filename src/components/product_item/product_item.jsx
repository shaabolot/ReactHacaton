import React from 'react'

const Product_item = (props) => {
  const { cart, spin, btnUdl } = props

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
                cart.map((item, i) => {
                  return (
                    <>
                      <div className="category_cart">
                        <img key={i} style={{ width: 200, height: 200, padding: 5, }} src={item.strMealThumb} alt="" />
                        <p key={i}>{item.strMeal}</p>
                        <button  className='btn' onClick={() => btnUdl(item.idMeal)}> Удалить </button>
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

export default Product_item;