import { useEffect, useState } from 'react'

function Stopwatch() {
    const [time, setTime] = useState(0)
  const [isRunning,setIsRunning] = useState(false)
  useEffect(() => {
    let id
    if(isRunning)
    {
      id = setInterval( () => {
           setTime((prev)=>prev+1)
        },10)
    }
    return () => clearInterval(id);
  },[isRunning])

  const format = () => {
    const cs = ('0'+time).slice(-2);
    const sec = ('0'+Math.floor(time/100)%60).slice(-2)
    const min = ('0'+Math.floor(time/6000)%60).slice(-2)
    const hour = ('0'+Math.floor(time/360000)%24).slice(-2)
    const day = ('0'+Math.floor(time/8640000)%365).slice(-2)
    return `${day} : ${hour} : ${min} : ${sec} : ${cs}`
  }

    return ( 
        <>
        <div className='flex flex-col gap-5 py-10 text-center justify-center items-center'>
            <h1 className='text-6xl text-gray-900 mt-24'>Stop Watch!</h1>
            <span className='text-3xl'>{format()}</span>
                <div className='text-2xl'>
                    {isRunning ? <button className='border-solid border-2 border-blue-400 pb-2 px-5 bg-blue-500 rounded-2xl hover:bg-blue-400 mr-10' onClick={()=>setIsRunning(!isRunning)}>Stop</button>
                    : time!=0 ? <button className='border-solid border-2 border-blue-400 pb-2 px-5 bg-blue-500 rounded-2xl hover:bg-blue-400 mr-10' onClick={()=>setIsRunning(!isRunning)}>Continue</button> 
                    : <button onClick={()=>setIsRunning(!isRunning)} className='border-solid border-2 border-blue-400 pb-2 px-5 bg-blue-500 rounded-2xl hover:bg-blue-400 mr-10'>Start</button> }
                    <button onClick={()=>{setTime(0)
                        setIsRunning(false)}} className='border-solid border-2 border-blue-400 pb-2 px-5 bg-blue-500 rounded-2xl hover:bg-blue-400 text-2xl mr-10 mb-24'>Reset</button>
                </div>
        </div>
        </>
     );
}

export default Stopwatch;