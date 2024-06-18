import React, { useCallback, useEffect, useRef,useState } from 'react'
import style from './CSS/ProfileCard.module.css';
import whiteDot from '../assets/WhiteDot.png';
import whiteDownArrow from '../assets/white-down-arrow.png';
import whiteUpArrow from '../assets/white-up-arrow.png';
import pen from '../assets/pen.png';
import saveIcon from '../assets/done.png';  // Assuming you have a save icon in your assets
// import ReactMarkdown from 'https://esm.sh/react-markdown@9'

const ProfileCard = ({ title,TechStack,ProfileInfo,handleEdit }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [profileInfo, setProfileInfo] = useState(ProfileInfo);

    //expanding text area
    const inputRef = useRef(null);
    useEffect(() => {
        if (inputRef.current) {
            const lines = inputRef.current.value.split('\n').length;
            console.log('lines');
            console.log( lines * 5 + 20);
            inputRef.current.style.height = `${Math.max(50, lines * 20 + 20)}px`;
        }
    }, [profileInfo]);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
        if (!isVisible) {
            // When making content visible, also ensure editing is not active
            setIsEditing(false);
        }
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
        handleEdit();
    };

    const handleProfileInfoChange = (event) => {
        setProfileInfo(event.target.value);
    };

    const saveEdit = () => {
        setIsEditing(false);
        handleEdit();
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
                ProfileInfo ? (
                    <div className={style.profile_content}>
                        {isEditing ? (<textarea ref={inputRef} value={profileInfo} onChange={handleProfileInfoChange} className={style.profile_textarea}
                        s />) : (<div className={style.profile_info}>{profileInfo}</div>)}
                    </div>
                ) : (TechStack && <div className={style.TechStackContainer}><TechStack /></div>)
            )}
        </div>
    );
}

export default ProfileCard;
