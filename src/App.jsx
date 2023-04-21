import Stopwatch from './pages/stopwatch';
import {Routes, Route } from 'react-router-dom'
// const myAPI = window.myAPI;
const ipcRenderer = window.ipcRenderer

function App() {

  const close = () => {
    // myAPI.greet();
    ipcRenderer.send('close-window');
  }

  return (
    <>
      <div className='flex w-full justify-end mt-0 pt-2'>
        <img src="icon.png" alt="icon" className='w-16 h-15'/>
        <h1 className='text-2xl text-center text-blue-700 p-5 mx-16'>Stop Watch</h1>
        <button className='text-black text-2xl mr-5 cursor-pointer' onClick={close} id="close">X</button>
      </div>
      <hr className='w-96 ml-2 mt-5' />
      <Stopwatch/>
    </>
  )
}

export default App
