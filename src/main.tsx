import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@picocss/pico'
import './card.css'
import { BrowserRouter } from 'react-router-dom'
import { supabase } from './client.ts'

// https://reactrouter.com/en/main/start/tutorial#loading-data
// export async function loader() {
//   const creators = await supabase.from('creators').select('*')
//   console.log(creators)
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
