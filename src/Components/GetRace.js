import React, {
  useState,
  useEffect
} from 'react';
import { endPath } from './TheQuiz';
import axios from 'axios';

const BASE_URL = "https://www.dnd5eapi.co/api/";

const path = BASE_URL + "races";


const GetRace = () => {
  const [data, setData] = useState(null)
  async function searchRace() {
    try {
      let response = await axios.get(path/endPath)
      setData(response.data)
    } catch (error) {
      console.error("Erm... something went wrong...", error.message)
    }
  }

  useEffect(() => {
    searchRace();
  }, [])

  console.log("This is data:", data)
  console.log("This is the url:", path)

  return ( 
    <div >
      {data}
    </div>
  );
};

export default GetRace;