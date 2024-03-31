import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faBars, faSearch} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import SideMenu from "./SideMenu";

const NavigationBar = ({authenticated, setAuthenticated}) => {

    const menuList = [
        "여성", "Divided", "남성", "신생아/유아", "아동", "H&M Home", "Sale", "지속가능성",

    ];

    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/login')
    }
    const goToHome = () => {
        navigate('/')
    }

    const search = (event) => {
        if (event.key === 'Enter') {
            console.log('search')
            let keyword = event.target.value
            navigate(`/?q=${keyword}`)

        }

    }

    const logout = () => {
        setAuthenticated(false);
        navigate('/login')
    }

    const [isOpen, setIsOpen] = useState(false) // Change this line
    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>

            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className="sidebar-button">
                    <button className="mobile-button" onClick={toggleSidebar} style={{border:"none", backgroundColor:"transparent"}}>
                        <FontAwesomeIcon style={{fontSize: '1.5em'}} icon={faBars}/>
                    </button>
                    <SideMenu isOpen={isOpen} toggleSidebar={toggleSidebar} menuList={menuList} goToHome={goToHome}/>
                </div>
                <div className="login-button" onClick={authenticated ? logout : goToLogin}>
                    <FontAwesomeIcon icon={faUser} style={{marginTop: '4px', marginRight: '5px'}}/>
                    <div>{authenticated ? "로그아웃" : "로그인"}</div>
                </div>
            </div>
            <div className="nav-section" onClick={goToHome}>
                <img width={100}
                     src="https://cdn.icon-icons.com/icons2/2845/PNG/512/hm_logo_icon_181277.png"
                     alt="H&M Logo"/>

            </div>
            <div className="menu-area">
                <ul className="menu-list">
                    {menuList.map((menu, index) => <li key={index}>{menu}</li>)}
                </ul>

                <div className="search-bar">
                    <FontAwesomeIcon icon={faSearch}/>
                    <input type="text"
                           placeholder="Search Any Product.."
                           style={{
                               marginLeft: '10px',
                               // caretColor: 'transparent',
                               borderColor: 'transparent',
                               outline: 'none',
                           }}
                           onKeyPress={event => search(event)}
                    />
                </div>
            </div>
        </>

    )
}

export default NavigationBar