import { useEffect } from 'react';
import './App.css';
import { fetchUserList } from './redux/actions/Login';
import {useDispatch} from 'react-redux';


function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
dispatch(fetchUserList());
  },[dispatch])

  return (
    <>
    <h1>Helloworld</h1>
    </>
  );
}

export default App;
