import React,{useState,useEffect} from 'react';
import './App.css'
import { Header } from './components/Header'
import { Card } from './components/Card'

function App() {
  const [data, setData] = useState(null);

  async function getData() {
    const res = await fetch('https://pressure-data-98365-default-rtdb.firebaseio.com/test.json?auth=AIzaSyA7a3jJYk6SZx2XHew43MrGojCaBKRtA0Y');
    return res.json();
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      getData().then(fetchedData => {
        setData(fetchedData);
        console.log(fetchedData);
      });
    }, 5000); 

  
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Header />
      <div className='flex gap-[8rem] justify-center items-center p-4'>
      <Card data={data} property="pressure" text="Pressure"/>
      <Card data={data} property="temp" text="Temperature" />
      </div>
    </>
  )
}

export default App
