import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { maincontext } from '../components/context';
import { useContext } from 'react';


const ViewQuiz = () => {
    const navigate=useNavigate()

    const {alldata} = useContext(maincontext);

     useEffect(()=>{
        const lsuser=localStorage.getItem("user");
        if(lsuser == undefined){
          navigate("/login")
        }
    })
    
    return (
        <div className="relative overflow-x-auto mt-2">
        <table  className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                S.NO:-
              </th>
              <th scope="col" className="px-6 py-3">
                Question Name:-
              </th>
              <th scope="col" className="px-6 py-3">
                Option 1:-
              </th>
              <th scope="col" className="px-6 py-3">
              Option 2:-
              </th>
              <th scope="col" className="px-6 py-3">
                Option 3:-
              </th>
              <th scope="col" className="px-6 py-3">
              Option 4:-
              </th>
            </tr>
          </thead>
          <tbody>
           {
            alldata.map((d,i)=>{
              return(
                <tr className="bg-white border-b text-black text-lg ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                 {i+1}
                </th>
                <td className='px-6 py-4'>{d.Question}</td>
                <td className={`px-6 py-4 ${d.Correctoption == '1' && 'text-green-600 font-bold'}`}>{d.Option1}</td>
                <td className={`px-6 py-4 ${d.Correctoption == '2' && 'text-green-600 font-bold'}`}>{d.Option2}</td>
                <td className={`px-6 py-4 ${d.Correctoption == '3' && 'text-green-600 font-bold'}`}>{d.Option3}</td>
                <td className={`px-6 py-4 ${d.Correctoption == '4' && 'text-green-600 font-bold'}`}>{d.Option4}</td>
              </tr>
              )
            })
           }
           
          </tbody>
        </table>
      </div>
      
    );
}

export default ViewQuiz;
