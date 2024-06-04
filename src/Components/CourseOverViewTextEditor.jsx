import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CourseOverViewTextEditor({data, handleOverViewChange}) {


  return <ReactQuill theme="snow" value={data} onChange={handleOverViewChange} />;
}

export default CourseOverViewTextEditor