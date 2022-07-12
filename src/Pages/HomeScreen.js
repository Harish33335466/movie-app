import React from 'react';
import "./HomeScreen.css";
import HomeNav from '../Components/HomeNav';
import Banner from '../Components/Banner/Banner';
import requests from "../api/request";
import Row from '../Components/Row/Row';

const HomeScreen = () => {
  return (
    <div className='homeScreen' style={{backgroundColor:"#222",height:"200%"}}>
        <HomeNav />
        <Banner />
        <Row
        title="POPCORNFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now"isLargeRow fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" isLargeRow fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" isLargeRow fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" isLargeRow fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" isLargeRow fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" isLargeRow fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" isLargeRow fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen