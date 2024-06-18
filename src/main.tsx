import React from 'react'
import ReactDOM from 'react-dom/client'
import '@picocss/pico'
import './card.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { supabase } from './client.ts'
import ShowCreators from './pages/ShowCreatprs.tsx'
import EditCreator from './pages/EditCreator.tsx'
import AddCreator from './pages/AddCreator.tsx'
import ViewCreator from './pages/ViewCreator.tsx'
import { loader as viewCreatorLoader } from './pages/ViewCreator.tsx'
import { loader as editCreatorLoader } from './pages/EditCreator.tsx'

// https://reactrouter.com/en/main/start/tutorial#loading-data
export async function loader() {
  const creators = await supabase.from('creators').select('*')
  console.log(creators)
  return { creators }
}

const router = createBrowserRouter([
  {
    path: "/",
    loader,
    Component: ShowCreators
  },
  {
    path: "creator/:creatorID",
    loader: viewCreatorLoader,
    element: <ViewCreator />,
  },
  {
    path: "/edit/:creatorID",
    element: <EditCreator />,
    loader: editCreatorLoader
  },
  {
    path: "/add",
    Component: AddCreator
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
