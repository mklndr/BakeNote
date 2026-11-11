import {Routes,Route,Navigate} from 'react-router-dom'
import {useApp} from './store.jsx'
import Layout from './components/Layout.jsx'
import Landing from './pages/Landing.jsx'
import Auth from './pages/Auth.jsx'
import Dashboard from './pages/Dashboard.jsx'
import {Recipes,RecipeDetail,RecipeForm} from './pages/Recipes.jsx'
const Guard=({children})=>useApp().user?children:<Navigate to="/login" replace/>
export default function App(){
  const {user}=useApp()
  return <Routes>
    <Route path="/" element={user?<Navigate to="/dashboard" replace/>:<Landing/>}/>
    <Route path="/login" element={<Auth/>}/><Route path="/register" element={<Auth register/>}/>
    <Route element={<Guard><Layout/></Guard>}>
      <Route path="/dashboard" element={<Dashboard/>}/><Route path="/recipes" element={<Recipes/>}/>
      <Route path="/recipes/new" element={<RecipeForm/>}/><Route path="/recipes/:id" element={<RecipeDetail/>}/><Route path="/recipes/:id/edit" element={<RecipeForm/>}/>
    </Route>
    <Route path="*" element={<Navigate to="/" replace/>}/>
  </Routes>
}
