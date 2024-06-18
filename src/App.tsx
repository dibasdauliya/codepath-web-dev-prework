import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useRoutes } from 'react-router-dom';
import ShowCreators from './pages/ShowCreatprs';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';
import { loader } from './main';

function App() {
  let element = useRoutes([
    {
      path: "/",
      loader,
      element: <ShowCreators />,
    },
    {
      path: ":creatorId",
      element: <ViewCreator />,
    },
    { path: "/edit", element: <EditCreator /> },
    { path: "add", element: <AddCreator /> },
  ]);

  return element;
}

export default App
