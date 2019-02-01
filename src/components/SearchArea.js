import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import { useDataApi } from "./dataService.js";

export const SearchArea = () => {
  const initialUrl = "http://hn.algolia.com/api/v1/search?query=redux";
  const initialData = { hits: [] };
  const [query, setQuery] = useState("redux");
  const { data, isLoading, isError, doGet } = useDataApi(
    initialUrl,
    initialData
  );

  return (
    <Fragment>
      {/* Search Form */}
      <form
        onSubmit={event =>
          doGet(event, `http://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Error Alert */}
      {isError && <div>Something went wrong ...</div>}

      {/* Display Data */}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};
