// joke-categories.tsx
import axios from "axios";
import { useEffect, useState } from "react";

export function JokeCategories() {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    axios<string[]>("https://api.chucknorris.io/jokes/categories").then(
      (response) => setCategories(response.data)
    );
  }, []);

  return <>
    CATEGORIES
    {/* TODO */}
  </>;
}