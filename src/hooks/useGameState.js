import {useEffect, useState} from "react";
import {utils} from "../Utils";

export default function useGameState() {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [available, setAvailable] = useState(utils.range(1, 9));
  const [candidates, setCandidates] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(20);

  useEffect(() => {
    if (secondsLeft > 0 && available.length > 0) {
      const timerId = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  });

  const setGameState = (newCandidates) => {
    if (utils.sum(newCandidates) !== stars) {
      setCandidates(newCandidates);
    } else {
      const newAvailable = available.filter(n => !newCandidates.includes(n));
      setStars(utils.randomSumIn(newAvailable, 9));
      setAvailable(newAvailable);
      setCandidates([]);
    }
  }

  return { stars, available, candidates, secondsLeft, setGameState };
}
