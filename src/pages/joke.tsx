// joke.tsx
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

type JokeResponse = {
  value: string;
};

const fetcher = (url: string) =>
  axios(url).then((axiosResponse) => axiosResponse.data);

export function Joke() {
  const { category } = useParams();

  const queryParams = new URLSearchParams();
  if (category) {
    queryParams.set("category", category);
  }

  const { data, isValidating } = useSWR<JokeResponse>(
    `https://api.chucknorris.io/jokes/random?${queryParams.toString()}`,
    fetcher,
    {
      suspense: true
    }
  );

  if (!data) {
    return <p>Loading</p>;
  }

  const joke = data.value;

  return <p>{joke}</p>;
}
