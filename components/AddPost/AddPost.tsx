import React, { useState} from 'react';
import { addPost } from '../../utils/api';



const AddPost: React.FC= () => {
//add post
  const [addText, setAddText] = useState<string>("");
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAddText(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    AddPostFunction()
  };
 
  async function AddPostFunction() {
    try {
      debugger
      const addItem = await addPost(addText);
      console.log(addItem)
    } catch (error) {
      console.error('Error adding:', error);
    }
   
  }
  return (
    <div className="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800 w-full max-w-2xl mx-auto" >
    <form onSubmit={handleSubmit}>
    <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">

    <div className="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">

        <label htmlFor="editor" className="sr-only">
          Add post
        </label>
        <textarea
          id="editor"
          rows={8}
          value={addText}
          onChange={handleTextChange}
          className="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
          placeholder="Write an article..."
          required
        ></textarea>
        </div>
        </div>
         <button
      type="submit"
      className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
    >
      Publish post
    </button>
  </form>
   
    </div>
  );
};

export default AddPost;
