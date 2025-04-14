import React, { useEffect, useState } from 'react'

function QuestionTimer({timeOut, onTimeout}) {
    const [timer, setTimer]= useState(timeOut)
    useEffect(()=>{
        console.log('timeout')
        const interval = setInterval(()=>{
            setTimer((prevState)=>{
                 prevState -10
            })
        },timeOut)
        return ()=>{
            clearInterval(interval)
        }
    }, [])
    useEffect(()=>{
        console.log('timeout')
        const time = setTimeout(onTimeout,timeOut) //onTimeOut is a function itself

        return()=>{
            clearTimeout(time)
        }
    }, [onTimeout,timeOut])
 
       return <progress id="question-time" max={timeOut} value={timer} />;

}

export default QuestionTimer