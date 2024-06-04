import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';

// eslint-disable-next-line react/prop-types
export default function TextEditorComponent({data, setData}) {
  const editorRef = useRef(null);

  const handleEditorChange = (content) => {
    setData(content);
  };



  return (
    <>
      <Editor
        apiKey='q9ik985j294lcwdzo5eop5uicv2d6stzfoc6cy9cfaeobass'
        onInit={(_evt, editor) => editorRef.current = editor}
        initialValue={data}
        init={{
          plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        }}
        onEditorChange={handleEditorChange}
      />
    </>
  );
}
