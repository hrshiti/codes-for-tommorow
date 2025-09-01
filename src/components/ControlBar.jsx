import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../features/postsSlice'

const ControlBar = () => {
    const dispatch = useDispatch()
    const hiddenIds = useSelector((s)=>s.posts.hiddenIds|| {})
    const hiddenCount = Object.keys(hiddenIds).length
    
  return (
    <div className='flex justify-between items-center p-4 border-b'>
      <div className='text-2xl font-bold'>Posts</div>
        <div>Hidden: <span>{hiddenCount}</span></div>
        <div>
            <button onClick={()=>dispatch(reset())} className='px-3 py-1 rounded-full border text-sm hover:bg-neutral-100'>Reset</button>
        </div>
      </div>
    
  )
}

export default ControlBar
