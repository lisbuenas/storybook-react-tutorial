import { useEffect, useState } from "react";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const useGetRound = (roundId: number) => {
  const [games, setGames] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Render mocks...");
    console.log("roundId", roundId);

    const getRound = (roundId: number) => {
      setLoading(true);
      sleep(3000);
      setGames([
        {
          area: {
            id: 2032,
            name: "Brazil",
            code: "BRA",
            flag: "https://crests.football-data.org/764.svg",
          },
          competition: {
            id: 2013,
            name: "Campeonato Brasileiro Série A",
            code: "BSA",
            type: "LEAGUE",
            emblem: "https://crests.football-data.org/764.svg",
          },
          season: {
            id: 1557,
            startDate: "2023-04-15",
            endDate: "2023-12-03",
            currentMatchday: 1,
            winner: null,
          },
          id: 432400,
          utcDate: "2023-05-10T22:00:00Z",
          status: "TIMED",
          matchday: 5,
          stage: "REGULAR_SEASON",
          group: null,
          lastUpdated: "2023-04-05T16:20:12Z",
          homeTeam: {
            id: 6685,
            name: "Santos FC",
            shortName: "Santos",
            tla: "SAN",
            crest: "https://crests.football-data.org/6685.png",
          },
          awayTeam: {
            id: 1777,
            name: "EC Bahia",
            shortName: "Bahia",
            tla: "BAH",
            crest: "https://crests.football-data.org/1777.png",
          },
          score: {
            winner: null,
            duration: "REGULAR",
            fullTime: {
              home: null,
              away: null,
            },
            halfTime: {
              home: null,
              away: null,
            },
          },
          odds: {
            msg: "Activate Odds-Package in User-Panel to retrieve odds.",
          },
          referees: [],
        },
      ]);

      setLoading(false);
    };

    getRound(roundId);
  }, [roundId]);

  return { games, loading };
};

export default useGetRound;
