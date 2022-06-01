import './App.css';
import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';
import './style.css'

function App() {

  const skills = [
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ];

  return (
    <div className="App teal-text padding-0">
      <h1>React Dev Skills</h1>
      <SkillList skills={skills}/>
      <hr/>
      <NewSkillForm/>
    </div>
  );
}

export default App;
