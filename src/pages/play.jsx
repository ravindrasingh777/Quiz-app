import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { maincontext } from '../components/context';


const Play = () => {
    const {alldata}=useContext(maincontext)
    const[next,setnext]=useState(0)

    const nexthandler=()=>{
        if(alldata.length -1 == next){
           return
        }
        setnext(next + 1)
    }
    const prevhandler=()=>{
        if(next == 0){
           return
        }
        setnext(next - 1)
    }

    return (
        <>
            <div className='shadow-lg w-[400px] h-[360px] flex flex-col justify-between p-4 mx-auto mt-5'>
            <Box quiz={alldata[next]}/>
           <div className='flex gap-2 mx-auto '>
           <button disabled={next == 0 && true}  className='bg-blue-500 disabled:bg-white p-2 rounded my-3 ml-1' onClick={prevhandler}>Previous</button>
           <button disabled={alldata.length - 1 == next && true} className='bg-blue-500 disabled:bg-white p-2 rounded my-3 ml-1' onClick={nexthandler}>Next</button>
           </div>
            </div>
        </>
    );
}

function Box({quiz}){

    const[ans,setans]=useState(null)

    function correctanswer(){
        setans(quiz.Correctoption);
    }

    useEffect(
        ()=>{
            setans(null)
        },[quiz]
    )

    return(
        <div>
            <h1 className='my-3 text-2xl'>{quiz?.Question}</h1>
                <div className='flex flex-col gap-3 text-xl'>
                    <div onClick={correctanswer} className={`${ans== '1' && 'bg-blue-600'}`}>(1) {quiz?.Option1}</div>
                    <div onClick={correctanswer} className={`${ans== '2' && 'bg-blue-600'}`}>(2) {quiz?.Option2}</div>
                    <div onClick={correctanswer} className={`${ans== '3' && 'bg-blue-600'}`}>(3) {quiz?.Option3}</div>
                    <div onClick={correctanswer} className={`${ans== '4' && 'bg-blue-600'}`}>(4) {quiz?.Option4}</div>
                </div>
        </div>
    )
}



export default Play;
