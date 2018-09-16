import React from 'react'
import { InstantSearch, Configure, Hits, SearchBox, Highlight, Pagination } from 'react-instantsearch-dom';

const App = () => (
  <InstantSearch
    appId="QQ4OC1OUOJ"
    apiKey="189583dc48a145bd10e8eb851f568d4d"
    indexName="tedtalksvideos"
    urlSync= "true"
  >
    {/* Search widgets will go there */}
    <SearchBox />
    <Configure hitsPerPage={16} />
    <Hits hitComponent={Product} />
    <Pagination />
  </InstantSearch>
)

function Product({ hit }) {
  return (
    <div style={{ marginTop: '10px' }}>
      <a className="hit-name" href={hit.url} target="_blank">
        <Highlight attribute="name" hit={hit} />
      </a>
    </div>
  );
}

export default App;
