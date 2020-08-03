import React, {
  useState,
  useEffect
} from 'react';
import { endPath } from './TheQuiz';
import axios from 'axios';
import Results from './Results';

const BASE_URL = "https://www.dnd5eapi.co/api/races/";

const GetRace = () => {
  const [data, setData] = useState(null)
  async function searchRace() {
    try {
      let response = await axios.get(BASE_URL + endPath)
      setData(response.data)
      // console.log(response.data)
    } catch (error) {
      console.error("Erm... something went wrong...", error.message)
    }
  }

  useEffect(() => {
    searchRace();
  }, [])

  // console.log("This is data:", data)

  // console.log("this is endPath,", endPath)
  return ( 
    data ? 
      <div >
        <Results 
          index={data.index}
          description={data.size_description}
          race={data.name}
          language_desc={data.language_desc}
          speed={data.speed}
          languages={data.languages}
        />
      </div> : <div>Nothing to see here</div>
  );
};

export default GetRace;