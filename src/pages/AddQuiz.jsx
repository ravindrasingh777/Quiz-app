import React, { useEffect } from 'react';
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';
import { Navigate, useNavigate } from 'react-router-dom';

const AddQuiz = () => {

    const navigate=useNavigate();

    const formhandler=(e)=>{
      e.preventDefault()

      const data={
        Question:e.target.question.value,
        Option1:e.target.option1.value,
        Option2:e.target.option2.value,
        Option3:e.target.option3.value,
        Option4:e.target.option4.value,
        Correctoption:e.target.correctoption.value
      }


      const quizid=uuidv4();
      const db = getDatabase();
      set(ref(db, 'quiz/' + quizid),data);

      e.target.reset()


    }

    useEffect(()=>{
        const lsuser=localStorage.getItem("user");
        if(lsuser == undefined){
          navigate("/login")
        }
    })

    return (
        <div className="w-full mt-1 bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={formhandler} >
          <div className="mb-4">
            <label htmlFor="question" className="block text-lg font-medium mb-2">
              Question:
            </label>
            <input
              id="question"
              type="text"
              name='question'
              placeholder="Enter your question"
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
              required
            />
          </div>
  
          {[1,2,3,4].map((option, index) => (
            <div key={index} className="mb-4">
              <label
                htmlFor={`option-${index}`}
                className="block text-md font-medium mb-1"
              >
                Option {index + 1}:
              </label>
              <input
                id={`option-${index}`}
                type="text"
                name={`option${option}`}
                placeholder={`Enter option ${index + 1}`}
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
                required
              />
            </div>
          ))}
  
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">
              Select the Correct Option:
            </label>
            <select
              name='correctoption'
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
              required
            >
              <option value="" disabled>
                -- Select an Option --
              </option>
              {[1,2,3,4].map((option, index) => (
                <option key={index} value={index + 1}>
                  Option {index + 1}
                </option>
              ))}
            </select>
          </div>
  
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring focus:ring-indigo-300"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };



export default AddQuiz;
