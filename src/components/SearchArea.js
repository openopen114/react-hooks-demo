import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import { useDataApi } from "./dataService.js";

export const SearchArea = () => {
  const initialUrl = "https://api.icndb.com/jokes/random/3";
  const initialData = { value: [] };
  const [queryNumber, setQueryNumber] = useState(3);
  const { data, isLoading, isError, doGet } = useDataApi(
    initialUrl,
    initialData
  );


  return (
    <Fragment>
      {/* Search Form */}
      <form
        onSubmit={event =>
          doGet(event, `https://api.icndb.com/jokes/random/${queryNumber}`)
        }
      >
        <input
          type="number"
          value={queryNumber}
          onChange={event => setQueryNumber(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Error Alert */}
      {isError && <div>Something went wrong ...</div>}

      {/* Display Data */}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ol>
          {data.value.map(item => (
            <li key={item.id} >
              {item.joke}
            </li>
          ))}
        </ol>
      )}
    </Fragment>
  );
};
