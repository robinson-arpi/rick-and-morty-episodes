import React, { useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Episodes from "./components/Episodes";
import Pagination from "./components/Pagination";
import * as XLSX from 'xlsx'

function App() {
  const [episodes, setEpisodes] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/episode";

  const fetchEpisodes = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setEpisodes(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

    // Función para descargar el Excel
    const handleDownloadExcel = () => {
      const data = episodes.map(item => ({
        Episode: item.episode,
        Name: item.name,
        OnAir: item.air_date,
        Created: item.created,
      }));
  
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Episodes');
      XLSX.writeFile(workbook, 'episodes.xlsx');
    };

  const onPrevious = () => {
    fetchEpisodes(info.prev);
  };

  const onNext = () => {
    fetchEpisodes(info.next);
  };

  useEffect(() => {
    fetchEpisodes(initialUrl);
  }, []);

  return (
    <>
      <Navbar
        brand="Rick and Morty episodes"
        image_route="./img/Rick_and_Morty.svg"
        handleDownloadExcel={handleDownloadExcel}
      />

      <div className="container pt-4">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Episodes episodes={episodes} 
        
        />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  );
}

export default App;
