import React from 'react';
import '../App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

const SideMenu = ({isOpen, toggleSidebar, menuList, goToHome}) => {



return (
    <div className={`sidebar ${isOpen ? '' : 'closed'}`}>
        <button className="close-button" onClick={toggleSidebar}>
            <FontAwesomeIcon style={{fontSize: '1.5em'}} icon={faXmark}/>
        </button>

        <div onClick={goToHome}>
        <img width={100}
             src="https://cdn.icon-icons.com/icons2/2845/PNG/512/hm_logo_icon_181277.png"
             alt="H&M Logo"
        />
            </div>

        <ul>

            <ul className="">
                {menuList.map((menu, index) => <li key={index}>{menu}</li>)}
            </ul>
        </ul>
    </div>
)

}

export default SideMenu;