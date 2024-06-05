import './App.css'
import TextEditorComponent from "./Components/TextEditorComponent.jsx";
import {useState} from 'react';
import CourseOverViewTextEditor from "./Components/CourseOverViewTextEditor.jsx";

function App() {
  const [content, setContent] = useState('');
  const [courseName, setCourseName] = useState('');
  const [overview, setOverview] = useState("")
  const [duration, setDuration] = useState(0);
  const [lectures, setLectures] = useState(0);
  const [language, setLanguage] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [quizzes, setQuizzes] = useState(0);
  const [access, setAccess] = useState("");

  const handleEditorData = (data) => {
    setContent(data)
  }

  const handleCourseOverViewChange = (overViewData) => {
    setOverview(overViewData)
  }

  const handleForm = (e) => {
    e.preventDefault();
    console.log('data')
  }

  return (
    <>
      <form onSubmit={handleForm}>
        <input onChange={(e) => setCourseName(e.target.value)} value={courseName} type="text"
               placeholder="Course Name"/>
        <br/>
        <input
          onChange={(e) => setDuration(parseInt(e.target.value))}
          value={duration}
          type="number"
          placeholder="Duration"
        />
        <br/>
        <input value={lectures} onChange={(e) => setLectures(parseInt(e.target.value))} type="number" placeholder="Lectures"/>
        <br/>
        <input value={language} onChange={(e) => setLanguage(e.target.value)} type="text" placeholder="Language"/>
        <br/>
        <input value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)} type="text"
               placeholder="Skill Level"/>
        <br/>
        <input value={quizzes} onChange={(e) => setQuizzes(parseInt(e.target.value))} type="number" placeholder="Quizzes"/>
        <br/>
        <input value={access} onChange={(e) => setAccess(e.target.value)} type="text" placeholder="Access"/>
        <br/>
        <br/>
        <CourseOverViewTextEditor data={overview} handleOverViewChange={handleCourseOverViewChange}/>
        <br/>
        <br/>
        <TextEditorComponent data={content} setData={handleEditorData}/>
        <br/>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
