import React from 'react'
import '../styles/HomeScreen.css'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Row from '../components/Row'
import requests from "../Requests";
import toast from 'react-hot-toast';

function HomeScreen() {

    toast('This is a landing page demo')

    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
            
            <Row 
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />

            <Row 
                title="Top Rated"
                fetchUrl={requests.fetchTopRated}
            />

            <Row 
                title="Action Movies"
                fetchUrl={requests.fetchActionMovies}
            />

            <Row 
                title="Comedy Movies"
                fetchUrl={requests.fetchComedyMovies}
            />

            <Row 
                title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}
            />

            <Row 
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />

            <Row 
                title="Documentaries"
                fetchUrl={requests.fetchDocumentaries}
            />
        </div>
    )
}

export default HomeScreen
