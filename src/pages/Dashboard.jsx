import {Link} from 'react-router-dom'
import {useApp} from '../store.jsx'
import {Title,Empty,RecipeCard} from '../components/ui.jsx'
export default function Dashboard(){
  const {user,data}=useApp(),stats=[['Recipes',data.recipes.length],['Favorites',data.recipes.filter(r=>r.fav).length]]
  return <div><Title sub="Here's what's cooking in your notebook." action={<Link className="btn" to="/recipes/new">New recipe</Link>}>Hello, {user.name}</Title>
    <div className="grid grid-cols-2 lg:grid-cols-2 max-w-md gap-4 mb-8">{stats.map(([l,v])=><div key={l} className="card p-5"><p className="text-4xl font-serif font-bold">{v}</p><p className="text-sm">{l}</p></div>)}</div>
    <h2 className="text-2xl font-bold mb-3">Recent recipes</h2>
    {data.recipes.length?<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">{data.recipes.slice(0,3).map(r=><RecipeCard key={r.id} r={r}><Link className="btn-o" to={'/recipes/'+r.id}>Open</Link></RecipeCard>)}</div>
    :<Empty>No recipes yet. <Link className="underline" to="/recipes/new">write your own</Link>.</Empty>}</div>
}
