import './App.css'
import TextEditorComponent from "./Components/TextEditorComponent.jsx";
import {useState} from "react";
import CourseOverViewTextEditor from "./Components/CourseOverViewTextEditor.jsx";

function App() {
  const [content, setContent] = useState('');
  const [courseName, setCourseName] = useState('');
  const [overview, setOverview] = useState("")

  const handleEditorData = (data) => {
    setContent(data)
  }

  const handleCourseOverViewChange = (overViewData) => {
    setOverview(overViewData)
  }

  return (
    <>
      <form>
        <input onChange={(e) => setCourseName(e.target.value)} value={courseName} type="text"/>
        <br/>
        <br/>
        <CourseOverViewTextEditor data={overview} handleOverViewChange={handleCourseOverViewChange} />
        <br/>
        <TextEditorComponent setData={handleEditorData}/>
      </form>
    </>
  )
}

export default App
