import React, { useState } from 'react'
import ReactMarkDown from 'react-markdown'

const MarkDownEditor = () => {
    const[markDown,setMarkDown] = useState("");


  return (
    <div>
      <textarea  className='textarea' value={markDown} onChange={(e)=>setMarkDown(e.target.value)} placeholder='write here'/>
        <div className='preview'>
            <ReactMarkDown>{markDown}</ReactMarkDown>
        </div>
    </div>
  )
}

export default MarkDownEditor
