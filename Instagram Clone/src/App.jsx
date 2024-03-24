import { useState } from 'react';
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [page, setPage] = useState(true);
  const toggle = ()=>{
    setPage(!page)
  }

  return (
    <>
      {page ? <Signup onclick={toggle}/> : <Login onclick={toggle}/>}
    </>
  )
}

export default App
