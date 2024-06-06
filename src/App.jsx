import './App.css'
import TextEditorComponent from "./Components/TextEditorComponent.jsx";
import {useState} from 'react';
import CourseOverViewTextEditor from "./Components/CourseOverViewTextEditor.jsx";

function App() {
  const [content, setContent] = useState('');
  const [courseName, setCourseName] = useState('');
  const [courseOverview, setCourseOverview] = useState("")
  const [duration, setDuration] = useState(0);
  const [lectures, setLectures] = useState(0);
  const [language, setLanguage] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [quizzes, setQuizzes] = useState(0);
  const [access, setAccess] = useState("");
  const [courseCategory, setCourseCategory] = useState("");

  function generateUUID() {
    let dt = new Date().getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }


  const handleEditorData = (data) => {
    setContent(data)
  }

  const handleCourseOverViewChange = (overViewData) => {
    setCourseOverview(overViewData)
  }

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(courseCategory)
    console.log({
      course_uuid: generateUUID(),
      course_name: courseName,
      course_overview: courseOverview,
      language: language,
      course_duration: duration,
      lectures: lectures,
      quizzes: quizzes,
      skill_level: skillLevel,
      access: access,
      course_description: content,
    })

    // const response = await fetch(`http://localhost:8000/api/v1/courses/${courseCategory}/`, {
    //   method: 'POST',
    //   'Content-Type': 'application/json',
    //   body: JSON.stringify({
    //     course_uuid: generateUUID(),
    //     course_name: courseName,
    //     course_overview: courseOverview,
    //     language: language,
    //     course_duration: duration,
    //     lectures: lectures,
    //     quizzes: quizzes,
    //     skill_level: skillLevel,
    //     access: access,
    //     course_description: content,
    //   })
    // })
    // const data = await response.json();
    // console.log(data)

  }

  const handleSelectChange = (e) => {
    if (e.target.value !== 'Select') {
      setCourseCategory(e.target.value);
    }
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <label htmlFor="courseSelect">Select a course Category: </label>
        <select id="courseSelect" name="courseSelect" value={courseCategory} onChange={handleSelectChange}>
          <option value="Select">Select...</option>
          <option value="English Courses">English Courses</option>
          <option value="Undergraduate Courses">Undergraduate Courses</option>
          <option value="Postgraduate Courses">Postgraduate Courses</option>
          <option value="Functional Skill Courses">Functional Skill Courses</option>
          <option value="Professional Courses">Professional Courses</option>
        </select>
        <br/>
        <label htmlFor="courseSelect">Course Name </label>
        <input onChange={(e) => setCourseName(e.target.value)} value={courseName} type="text"
               placeholder="Course Name"/>
        <br/>
        <label htmlFor="courseSelect">Duration </label>
        <input
          onChange={(e) => setDuration(parseInt(e.target.value))}
          value={duration}
          type="number"
          placeholder="Duration"
        />
        <br/>
        <label htmlFor="courseSelect">Lectures </label>
        <input value={lectures} onChange={(e) => setLectures(parseInt(e.target.value))} type="number"
               placeholder="Lectures"/>
        <br/>
        <label htmlFor="courseSelect">Language </label>
        <input value={language} onChange={(e) => setLanguage(e.target.value)} type="text" placeholder="Language"/>
        <br/>
        <label htmlFor="courseSelect">Skill Level </label>
        <input value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)} type="text"
               placeholder="Skill Level"/>
        <br/>
        <label htmlFor="courseSelect">Quizes </label>
        <input value={quizzes} onChange={(e) => setQuizzes(parseInt(e.target.value))} type="number"
               placeholder="Quizzes"/>
        <br/>
        <label htmlFor="courseSelect">Access </label>
        <input value={access} onChange={(e) => setAccess(e.target.value)} type="text" placeholder="Access"/>
        <br/>
        <br/>
        <label htmlFor="courseSelect">Overview </label>
        <CourseOverViewTextEditor data={courseOverview} handleOverViewChange={handleCourseOverViewChange}/>
        <br/>
        <br/>
        <label htmlFor="courseSelect">Course Description </label>
        <TextEditorComponent data={content} setData={handleEditorData}/>
        <br/>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
