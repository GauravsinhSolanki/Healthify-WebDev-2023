import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value,setValue] = useState('');
  const [title, setTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSave = () => {
    if (title.trim() === '') {
      setErrorMessage('Please fill out the title field.');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
      setSuccessMessage('');
    } else {
      setSuccessMessage('Blog saved successfully!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);
      setErrorMessage('');
    }
  };

  return (
   <div className='add'>
     <div className='content'>
      <input type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}/>
      <div className='editorContainer'>
        <ReactQuill theme='snow' value={value} onChange={setValue}/>
      </div>
      <button onClick={handleSave}>Save</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
     </div>
   </div>
  )
}

export default Write