import {useState} from 'react'
import {NavLink,Outlet,useNavigate} from 'react-router-dom'
import {useApp} from '../store.jsx'
const links=[['/dashboard','Dashboard'],['/recipes','My Recipe Book']]
export default function Layout(){
  const {user,logout}=useApp(),[open,setOpen]=useState(false),nav=useNavigate()
  return <div className="min-h-screen md:flex">
    <header className="noprint md:hidden flex items-center justify-between bg-blush px-4 py-3 sticky top-0 z-40">
      <span className="font-serif text-xl font-bold">BakeNote</span>
      <button className="btn-o" aria-label="Menu" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'}</button></header>
    <aside className={`noprint fixed md:sticky top-12 md:top-0 h-[calc(100vh-3rem)] md:h-screen w-64 shrink-0 bg-blush/90 p-5 z-30 flex flex-col transition-transform ${open?'':'-translate-x-full md:translate-x-0'}`}>
      <h2 className="hidden md:block font-serif text-2xl font-bold">BakeNote</h2><p className="hand text-xl text-caramel mb-5 hidden md:block">Every recipe has a story.</p>
      <nav className="flex flex-col gap-1 flex-1">{links.map(([to,l])=><NavLink key={to} to={to} onClick={()=>setOpen(false)} className={({isActive})=>`rounded-full px-4 py-2 text-sm ${isActive?'bg-cocoa text-cream':'hover:bg-cream'}`}>{l}</NavLink>)}</nav>
      <p className="text-sm mb-2">Baking as <b>{user.name}</b></p>
      <button className="btn-o" onClick={()=>{logout();nav('/')}}>Log out</button></aside>
    <main className="flex-1 p-5 md:p-10 min-w-0"><Outlet/></main></div>
}
