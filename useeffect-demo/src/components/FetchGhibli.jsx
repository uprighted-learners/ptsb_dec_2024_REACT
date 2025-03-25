import { useEffect, useState } from "react";

const FetchGhibli = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("films");

  // Set up useeffect to execute code on initial mount
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal

    const fetchResults = async () => {
      setLoading(true);
      try {
        console.log("test");
        // fetch here
        let results = await fetch(
          `https://ghibliapi.vercel.app/${selectedOption}`, {
            signal: signal
          }
        );
        let data = await results.json();
        // set data to state
        setResults(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();

    return () => controller.abort()
    
  }, [selectedOption]);

  const options = ["films", "people", "locations", "species", "vehicles"];

  const displayResults = () => {
    return results.map((item) => {
      return (
        <div style={{ border: ".2em solid blue" }}>
          <img src={item.movie_banner} />
          <h4>{item.name}</h4>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      );
    });
  };

  return (
    <div>
      <h2>Studio Ghibli</h2>
      <h3>{selectedOption}</h3>

      <select
        onChange={(e) => {
          setSelectedOption(e.target.value);
        }}
      >
        {options.map((str) => (
          <option>{str}</option>
        ))}
      </select>

      {loading ? <h1>Loading</h1> : displayResults()}
    </div>
  );
};

export default FetchGhibli;
