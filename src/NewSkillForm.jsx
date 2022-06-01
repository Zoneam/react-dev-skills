import React from 'react';
import './NewSkillForm.css'

 export default function NewSkillForm(){
    return(
        <form className='NewSkillForm'>
            <label htmlFor="skill">Skill</label>
            <input type="text" name="skill" />
            <label htmlFor="skillLevel">Skill</label>
            <select id="skillLevel" name="skillLevel">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <button type="submit">Add Skill</button>
        </form>
    )
}