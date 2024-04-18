import { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import getAllStarships from "./services/swapi";

export default function App() {
  const [starships, setStarships] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllStarships();
        setStarships(data.results);
      } catch (error) {
        console.error("Error fetching starships:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="container">
        {starships.map((starship) => (
          <Card key={starship.uid} starship={starship} />
        ))}
      </div>
    </div>
  );
}
