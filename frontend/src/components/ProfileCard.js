// ProfileCard.js
import React, { useState } from 'react';
import style from './CSS/ProfileCard.module.css';
import whiteDot from '../assets/WhiteDot.png';
import downArrow from '../assets/downarrow.png';
import whiteDownArrow from '../assets/white-down-arrow.png';
import whiteUpArrow from '../assets/white-up-arrow.png';
import editIcon from '../assets/edit-icon.png';
import pen from '../assets/pen.png';

const ProfileCard = ({ title }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className={style.profile_card}>
            <div className={style.profile_header} >
                <img src={whiteDot} alt="" className={style.white_dot}/>
                <h3 className={style.title}>{title}</h3>
                <img src={isVisible ? whiteUpArrow : whiteDownArrow} alt="" className={style.down_arrow} onClick={() => setIsVisible(!isVisible)}/>
                <img src={pen} alt="" className={style.edit_icon}/>
            </div>
            {isVisible && (
                <div className={style.profile_content}>
                    <p className={style.profile_info}>Hello I am doing great. How have you been? Are you alright? I hope you are dead. Okay, goodbye goodnight.</p>
                </div>
            )}
        </div>
    );
}

export default ProfileCard;
