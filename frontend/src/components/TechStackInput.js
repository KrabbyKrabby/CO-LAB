import React, { useState, useRef, useEffect } from 'react';
import style from './CSS/TechStackInput.module.css';  

const TagInput = ( {selectedTechStack, setTechStack, canEdit} ) => {
    const [input, setInput] = useState('');
    const [matches, setMatches] = useState([]);
    const inputRef = useRef(null);
    const [selectedItems, setSelectedItems] = useState(selectedTechStack);

    const data = ["Python","C/C++","Java","JavaScript","React","Flutter","Spring Boot","FastAPI","CSS","Dart","HTML","Node.js","Express.js","MongoDB","SQL","PostgreSQL","Firebase","AWS","GCP","Azure","Heroku","Netlify","Docker","Kubernetes","Git","GitHub","GitLab","Bitbucket","Jira","Trello","Slack","Discord","Zoom","Google Meet","Microsoft Teams","VS Code","IntelliJ IDEA","PyCharm","Eclipse","Android Studio","Xcode","WebStorm","Data Structures","Algorithms","Machine Learning","Deep Learning","Computer Vision","Natural Language Processing","Data Science","Artificial Intelligence","Blockchain","Cybersecurity","Cloud Computing","Internet of Things","Quantum Computing","Big Data","DevOps","Full Stack Development","Frontend Development","Backend Development","Mobile Development","Game Development","UI/UX Design","Product Management","Digital Marketing","Content Writing","Blogging","Video Editing","Graphic Design","Photography","Music Production","3D Modelling","Animation","AR/VR Development","Robotics","Automation","Ethical Hacking","Bug Bounty","Competitive Programming","Open Source","Research","Technical Writing","Public Speaking","Community Building","Mentorship","Freelancing","Internship","Job","Startup","Entrepreneurship","Career Guidance","Interview Preparation","Resume Building","Networking","Skill Development","Learning","Certification","Hackathon","Workshop","Conference","Seminar","Event","Meetup","Bootcamp","Course","Tutorial","Blog","Podcast","Video","Book","Newsletter","Forum","Community","Social Media","Website","App","Software","Tool","Library","Framework","Extension","API","Database","Server","Cloud","Platform","Operating System","Device","Gadget","Tech Company","Tech Product","Tech Service","Tech Policy","Tech News","Tech Event","Tech Trend","Tech Culture","Tech History","Tech Future","Tech Ethics","Tech Career","Tech Education","Tech Industry","Tech Ecosystem","Tech Stack","Tech Skill","Tech Role","Tech Task","Tech Challenge","Tech Solution","Tech Project","Tech Team","Tech Company","Tech Startup","Tech Community","Tech Society","Tech World","Tech Universe","Tech Galaxy","Tech Planet","Tech Earth","Tech Life","Tech Journey","Tech Adventure","Tech Revolution","Tech Evolution","Tech Innovation","Tech Disruption","Tech Transformation","Tech Impact","Tech Benefit","Tech Risk","Tech Challenge","Tech Opportunity","Tech Problem","Tech Solution","Tech Idea","Tech Concept","Tech Theory","Tech Principle","Tech Practice",];

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.style.width = `${Math.max(50, inputRef.current.value.length * 8 + 20)}px`;
        }
    }, [input]);

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);
        updateMatches(value);
    };

    const updateMatches = (value) => {
        if (!value.trim()) {
            setMatches([]);
        } else {
            const regex = new RegExp(value.split('').join('.*?'), 'i');
            setMatches(data.filter(item => item.match(regex) && !selectedItems.includes(item)));
        }
    };

    const handleSelect = (item) => {
        setSelectedItems(prevItems => [...prevItems, item]);
        setInput('');
        setMatches([]);
        // setTimeout(() => inputRef.current.focus(), 0);  // Refocus on the input after selection
        setTechStack(prevItems => [...prevItems, item]);
    };

    const handleDeselect = (item) => {
        setSelectedItems(prevItems => prevItems.filter(i => i !== item));
    };

    return (
        <div className={style.tag_input}>
            <div className={style.tags}>
                {selectedItems.map((item, index) => (
                    <span key={index} className={style.tag}>
                        {item} <span className={style.remove_tag} onClick={() => handleDeselect(item)}>✖</span>
                    </span>
                ))}
                { true && (
                    <input 
                        ref={inputRef}
                        className={style.editable_input}
                        type="text"
                        value={input}
                        onChange={handleChange}
                        disabled = {!canEdit}
                    />
                )}
            </div>
            {matches.length > 0 && (
                <ul className={style.matches}>
                    {matches.map((item, index) => (
                        <li key={index} onClick={() => handleSelect(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TagInput;