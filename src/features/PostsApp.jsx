import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postsSlice'



import ControlBar from '../components/ControlBar'
import PostGrid from '../components/PostGrid'
import Loading from '../components/Loading'
import AppShell from '../components/AppShell'


export default function PostsApp() {
const dispatch = useDispatch()
const { status } = useSelector((s) => s.posts)
const [showSplash, setShowSplash] = useState(true)


useEffect(() => {
dispatch(fetchPosts()).then((res)=>{console.log("response",res)})
const t = setTimeout(() => setShowSplash(false), 5000)
return () => clearTimeout(t)
}, [dispatch])


if (showSplash || status === 'loading') return <Loading />


if (status === 'failed')
return (
<AppShell>
<div className="min-h-[50vh] grid place-items-center">Failed to load posts.</div>
</AppShell>
)


return (
<AppShell>
<ControlBar />
<PostGrid />
</AppShell>
)
}
