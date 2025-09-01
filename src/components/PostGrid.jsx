import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostCards from './PostCards'
import Pagination from './Pagination'

const PostGrid = () => {
    const dispatch = useDispatch()
    const {items, hiddenIds, currentPage,pageSize} = useSelector(s=>s.posts)
    console.log("items in postgrid",items)
    const visible = useMemo(()=> items.filter((p)=>!hiddenIds[p.id]),[items,hiddenIds])
    const totalPages = Math.max(1, Math.ceil(visible.length / pageSize))

    useEffect(()=>{
        if(currentPage>totalPages){
            dispatch(setPage(totalPages))
        }
    },[totalPages,currentPage,dispatch])
    const start = (currentPage-1)*pageSize
    const pageItems = visible.slice(start, start+pageSize)
    const handleDismiss = (id) =>{
        dispatch(dismissPost(id))
    }
    if(visible.length===0){
        return <div className='min-h-[50vh] grid place-items-center'>No posts to show.</div>}
  return (
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-6 p-4'>
        {pageItems.map((post)=>(
            <PostCards key={post.id} post={post} onDismiss={handleDismiss} />
        )
        
        )}
<Pagination totalItems={visible.length} />
    </div>
    
  )

}

export default PostGrid
