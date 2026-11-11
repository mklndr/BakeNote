import {Link} from 'react-router-dom'
export default function Landing(){
  return <div className="p-6 md:p-12 max-w-3xl">
    <nav className="flex justify-between items-center mb-16"><b className="text-xl">BakeNote</b><div className="flex gap-2"><Link className="btn-o" to="/login">Sign in</Link><Link className="btn" to="/register">Create account</Link></div></nav>
    <h1 className="text-5xl font-bold">BakeNote</h1><p className="text-xl mt-2">Every recipe has a story.</p>
    <p className="mt-4">A personal baking journal and recipe manager. Create an account to start saving your recipes.</p>
    <Link to="/register" className="btn mt-6">Get started</Link>
    <p className="mt-16 text-sm text-cocoa/60">Work in progress – more features coming soon.</p></div>
}
