import React, { useEffect, useState } from 'react'

function QuestionTimer({timeOut, onTimeOut}) {
    const [timer, setTimer]= useState(timeOut)
    useEffect(()=>{
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
        setTimeout(onTimeOut,timeOut) //onTimeOut is a function itself
    }, [onTimeOut,timeOut])
  return (
    <div>
        <progress value={timer}/>
    </div>
  )
}

export default QuestionTimer