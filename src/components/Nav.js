/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import "../styles/Nav.css"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChildCareIcon from '@mui/icons-material/ChildCare';


function Nav() {

    //^ the default state will be false
    const [show, handleShow] = useState(false);

    const history = useHistory();


    //^ transition animation function
    const transitionNav = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false)
        }
    }

    //^ on the scroll event we call the transitionNav function and once it hits 100 px the handleShow function set the show variable state to true and the transition applies in the component, based on a conditional rendering
    useEffect(() => {
        window.addEventListener("scroll", transitionNav);

        return () => window.removeEventListener('scroll', transitionNav)
    }, [])





    return (
        <div className={`nav ${show && 'nav__black'}`}>
            {/*up here we conditional render the nav based on the show variable */}
            <div className="nav__contents">

                <div className="left__container">
                    <img
                        onClick={() => history.push('/')} 
                        className="nav__logo"
                        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                    />

                    <ul className="nav__items">
                        <li className="nav__item"><a href="/" className="nav__link">Homepage</a></li>
                        <li className="nav__item"><a href="/" className="nav__link">Re-watch</a></li>
                        <li className="nav__item"><a href="/" className="nav__link">Series</a></li>
                        <li className="nav__item"><a href="/"className="nav__link">Films</a></li>
                        <li className="nav__item"><a href="/" className="nav__link">New and popular</a></li>
                        <li className="nav__item"><a href="/" className="nav__link">My List</a></li>
                    </ul>
                </div>
               
                

                <div className="right__container">
                    <SearchIcon className="icon"/>
                    <ChildCareIcon className="icon"/>
                    <NotificationsIcon className="icon"/>
                    
                    <img 
                        onClick={() => history.push('/profile')}
                        className="nav__avatar"
                        src="https://tse2.mm.bing.net/th?id=OIP.7DASfuq_r3rOiq4AAs75igAAAA&pid=Api&P=0&w=300&h=300" 
                    />
                </div>

            </div>
        </div>
    )
}

export default Nav
