const express = require('express');
const axios = require('axios');


const getMovies = (req, res ) => {
    // get axios
    // make a request to star wars endpoint
    // get the result
    // return the result
    axios.get('https://swapi.dev/api/films')
        .then(function (response) {
            // handle success
            return res.status(200).json({
                status: 'success',
                data: response.data
            });
        })
        .catch(function (error) {
            // handle error
            return res.status(500).json({
                message: 'An error occurred trying to process your request ',
                
            });
        })   
}

module.exports = {
    getMovies
};