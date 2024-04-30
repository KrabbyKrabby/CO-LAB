import React, { useState } from 'react';
import style from './CSS/ProfileCard.module.css';
import whiteDot from '../assets/WhiteDot.png';
import whiteDownArrow from '../assets/white-down-arrow.png';
import whiteUpArrow from '../assets/white-up-arrow.png';
import pen from '../assets/pen.png';
import saveIcon from '../assets/done.png';  // Assuming you have a save icon in your assets
import ReactMarkdown from 'https://esm.sh/react-markdown@9'

const ProfileCard = ({ title }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [profileInfo, setProfileInfo] = useState("Hello I am doing great. How have you been? Are you alright? I hope you are dead. Okay, goodbye goodnight.");

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
        if (!isVisible) {
            // When making content visible, also ensure editing is not active
            setIsEditing(false);
        }
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleProfileInfoChange = (event) => {
        setProfileInfo(event.target.value);
    };

    const saveEdit = () => {
        setIsEditing(false);
    };

    return (
        <div className={style.profile_card}>
            <div className={style.profile_header}>
                <img src={whiteDot} alt="" className={style.white_dot}/>
                <h3 className={style.title}>{title}</h3>
                <img src={isVisible ? whiteUpArrow : whiteDownArrow} alt="" className={style.down_arrow} onClick={toggleVisibility}/>
                {isVisible && !isEditing && 
                    <img src={pen} alt="Edit" className={style.edit_icon} onClick={toggleEdit}/>
                }
                {isEditing && 
                    <img src={saveIcon} alt="Save" className={style.edit_icon} onClick={saveEdit}/>
                }
            </div>
            {isVisible && (
                <div className={style.profile_content}>
                        {isEditing ? (<textarea value={profileInfo} onChange={handleProfileInfoChange} className={style.profile_textarea} />) : ( <ReactMarkdown className={style.profile_info}>{profileInfo}</ReactMarkdown>)}
                </div>
            )}
        </div>
    );
}

export default ProfileCard;
