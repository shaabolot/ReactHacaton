import React from 'react';
import { Link } from 'react-router-dom';



const Header = (props) => {
    
    const {setSear,btnSear, spin, keyPress, length} = props

    return (
        <>
            <nav>
                <div className="container">
                    <div className="navbar">
                        <div><img src="" alt="" /></div>
                        <div className='name_nav'>
                            <span><Link className='link' to='/home'>Home</Link></span>
                            <span><Link className='link' to='/korzina'>Basket {length}</Link></span>
                            <input className='input' placeholder='Search' type="text" onKeyPress={(e) => keyPress(e)} onChange={(e) => setSear(e.target.value)} />
                            <button disabled={spin} className='btn' onClick={() => btnSear()}><Link className='p' to='/product'> Search </Link> </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header