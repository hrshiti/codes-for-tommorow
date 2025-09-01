import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../features/postsSlice'
import { useMemo } from 'react'
const Pagination = (totalItems) => {
    const [posts, setPosts] = useState([])
    const dispatch = useDispatch()
    const {currentPage, pageSize} = useSelector(s=>s.posts)
    
const totalPages = Math.max(1, Math.ceil(totalItems / pageSize))
const goTo = (p) => dispatch(setPage(Math.min(Math.max(1,p),totalPages)))
const pages = useMemo(()=>{
    const out = []
    if(totalPages<=7){
        for(let i=1;i<=totalPages;i++) out.push(i)
            return out
    }
    const left = Math.max(1,currentPage-2)
    const right = Math.min(totalPages, currentPage+2)
    const set = new Set([1,left-1,left,currentPage,right,right+1,totalPages]

    )
    return Array.from(set).filter((n)=>n>=1 && n<=totalPages).sort((a,b)=>a-b)
,[currentPage,totalPages]})
  return (
    <div>
      <div>
        <button onClick={()=>goTo(currentPage-1 )}
            disabled={currentPage<=1} className='px-3 py-1 rounded-full border text-sm hover:bg-neutral-100'
            >Prev</button>
        {pages.filter((p)=> Number.isFinite(p)).map((p, idx)=>{
            const prev = pages[idx -1]
            const gap = prev && p-prev>1
            return (
               <React.Fragment key={p}>

{gap && <span className='px-1'>...</span>}
<button onClick={()=>goTo(p)}

className={`px-3 py-1 rounded-full border text-sm ${p===currentPage ? 'bg-blue-500 text-white' : 'bg-white hover:bg-neutral-100'}`}>{String(p)}</button>
                </React.Fragment>
            )

})}
      </div>
      <button onClick={()=>goTo(currentPage+1)} disabled={currentPage>=totalPages} className='px-3 py-1 rounded-full border text-sm hover:bg-neutral-100'>Next</button>
    </div>
  )
}

export default Pagination
