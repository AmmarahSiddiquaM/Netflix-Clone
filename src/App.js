import React from 'react'
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import './App.css'
import Nav from './Nav'

const App = () => {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row isLargeRow title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />    
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Mystery" fetchUrl={requests.fetchMystery} />    
      <Row title="Science Fiction" fetchUrl={requests.fetchSciFi} />
      <Row title="Western" fetchUrl={requests.fetchWestern} />
      <Row title="Animation" fetchUrl={requests.fetchAnimation} />
      <Row title="TV" fetchUrl={requests.fetchTV} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default App
