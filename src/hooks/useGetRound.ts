import axios from "axios";
import { useEffect, useState } from "react";

// // http://api.football-data.org/v4/competitions/2013/matches?matchday=5

const REACT_APP_API = ""
const useGetRound = (roundId: number) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Render...");
    const getRound = async (roundId: number) => {
      console.log("Get Round...");
      setLoading(true);
      
      const { data } = await axios.get(`${REACT_APP_API}/${roundId}`);

      setLoading(false);
      console.log({ data });

      setGames(data.matches);
    };

    if (roundId) {
      getRound(roundId);
    }
  }, [roundId]);

  return { games, loading };
};

export default useGetRound;
