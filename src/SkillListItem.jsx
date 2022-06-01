import React from 'react';
import './SkillListItem.css'

export default function SkillListItem({skill}){
    console.log(skill)
    return (
        <li className='SkillListItem'>{skill.name} <span className='level'>Level <strong>{skill.level}</strong></span></li>
    )
}