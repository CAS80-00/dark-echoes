import { useState } from "react";
import { episodeList as initialEpisodes } from "./data";

function EpisodesList({ episodes, onSelectEpisode }) {
  return (
    <div className="episode-List">
      <h2>Episodes</h2>
      <ul>
        {episodes &&
          episodes.map((episode) => (
            <li key={episode.id}>
              <button onClick={() => onSelectEpisode(episode)}>
                {episode.title}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
//if no episode is selected
function EpisodeDetails({ selectEpisode }) {
  if (!selectEpisode) {
    return (
      <div className="episode-details placeholder">
        <p>Please select an episode from the list to view the details!</p>
      </div>
    );
  }
  //if an episode is selected
  return (
    <div className="episode-details">
      <h2>{selectEpisode.title}</h2>
      <h3>Episode Number: {selectEpisode.id}</h3>
      <p className="description">{selectEpisode.description}</p>
      <button className="watch-btn">Watch Now!</button>
    </div>
  );
}
//main app
export default function App() {
  const [episodes, setEpisodes] = useState(initialEpisodes);
  const [selectEpisode, setSelectedEpisode] = useState(null);

  return (
    <div className="app-container">
      <h1>Dark Echoes</h1>
      <div className="app-layout">
        <EpisodesList
          episodes={episodes}
          onSelectEpisode={setSelectedEpisode}
        />
        <EpisodeDetails selectEpisode={selectEpisode} />
      </div>
    </div>
  );
}
