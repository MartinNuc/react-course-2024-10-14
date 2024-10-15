// joke.tsx
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type JokeResponse = {
  value: string;
};

export function Joke() {
  const [joke, setJoke] = useState<string | null>(null);
  const { category } = useParams();

  useEffect(() => {
    const queryParams = new URLSearchParams();
    if (category) {
      queryParams.set('category', category);
    }
    axios<JokeResponse>(
      `https://api.chucknorris.io/jokes/random?${queryParams.toString()}`
    ).then((response) => setJoke(response.data.value));
  }, [category]);

  return <p>{joke}</p>;
}