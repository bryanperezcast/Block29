import { useState } from "react";
import newPlayerHelper from "../players/NewPlayerHelper";

function Form() {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("field");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPlayer = {
      name,
      imageUrl,
      breed,
      status,
    };
    try {
      const response = await newPlayerHelper(newPlayer);
      if (response && response.data) {
        // Update state based on the response data
        setName(response.data.name);
        setBreed(response.data.breed);
        setStatus(response.data.status);
      }
      console.log("newPlayer added");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="create">
      <h1>Create Player</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Player Name
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Player Image
          <input
            type="text"
            required
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>

        <label>
          Breed
          <input
            type="text"
            required
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>

        <label>
          Position
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Field">Field</option>
            <option value="Bench">Bench</option>
          </select>
        </label>

        <button>Add Player</button>
      </form>
    </div>
  );
}

export default Form;
