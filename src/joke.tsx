import axios from "axios";
import { useEffect, useState } from "react";

type JokeResponse = {
  value: string;
}

export function Joke() {

  const [joke, setJoke] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadJoke();
  }, []);
  
  async function loadJoke() {
    setIsLoading(true);
    try {
      const response = await axios<JokeResponse>('https://api.chucknorris.io/jokes/random');
      setJoke(response.data.value);
    } finally {
      setIsLoading(false);
    }
  }

  return <>
    {isLoading && '🕰️'}
    {joke}
    <button disabled={isLoading} onClick={loadJoke}>Load next</button>
  </>
}
