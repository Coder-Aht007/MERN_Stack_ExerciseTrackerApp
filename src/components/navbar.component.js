import React from "react"
import {Link} from "react-router-dom"


export default class Navbar extends React.Component{
    render()
    {
        return (
            <nav className="navbar navbar-light bg-light mt-2 navbar-expand-lg" style={{color:'black'}}>
                <Link to='/' className="navbar-brand"><button> <i class="fa fa-bars"></i></button></Link>
                <div className="navbar navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className='navbar-item'>
                        <Link to="/" className="nav-link">HOME</Link>
                        </li>
                        <li className='navbar-item'>
                        <Link to="/create" className="nav-link">SHOP</Link>
                        </li>
                        <li className='navbar-item'>
                        <Link to="/user" className="nav-link">MAGZINE</Link>
                        </li>
                    </ul>

                    <ul className='navbar-nav ml-auto'>
                        <li className='navbar-item mr-2'>
                            <button><i class="fa fa-shopping-cart fa-2x"></i></button>
                        </li>
                        <li className='navbar-item'>
                            <Link to="#" className="nav-link">LOGIN</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}