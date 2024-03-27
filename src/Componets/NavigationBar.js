import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

const NavigationBar = () => {

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

    return (
        <>
            <div>
                <div className="login-button" onClick={goToLogin}>
                    <FontAwesomeIcon icon={faUser}/>
                    <div>로그인</div>
                </div>
            </div>
            <div className="nav-section" >
                <img width={100}
                     src="https://cdn.icon-icons.com/icons2/2845/PNG/512/hm_logo_icon_181277.png"
                     alt="H&M Logo"
                     className="logo"
                onClick={goToHome}/>
            </div>
            <div className="menu-area">
                <ul className="menu-list">
                    {menuList.map((menu, index) => <li key={index}>{menu}</li>)}
                </ul>

                <div className="search-bar">
                    <FontAwesomeIcon icon={faSearch}/>
                    <input type="text" style={{
                        marginLeft: '5px',
                        borderColor: 'grey black black grey',
                        borderStyle: 'solid'
                    }}/>
                </div>
            </div>
        </>

    )
}

export default NavigationBar