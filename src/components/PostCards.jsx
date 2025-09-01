import React from 'react'

const PostCards = ({post,onDismiss}) => {
  return (
    <div className='relative border rounded-lg p-4 ' >
      <button onClick={()=>onDismiss(post.id)} className='absolute -top-2 -right-1 w-6 bg-white rounded-full shadow-p-1 border hover:bg-rose-50' >
*
      </button>
      <h3 className='text-lg font-bold'>{post.title}</h3>
      <p className='text-sm'>{post.body}</p>
    </div>
  )
}

export default PostCards
