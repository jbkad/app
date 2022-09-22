import getRandomCountry from './App';
const fetch = require('isomorphic-fetch');

let flagAndCountry:any = {};
let newFlag: any;

export default function flagAPI() {
    // const fetchAPI =
    fetch("https://restcountries.com/v3.1/all")
    .then ((response:any) => response.json())
    .then ((data:any) => {
        for(let i = 0; i < data.length; i++) {
            let flag = data[i].flags.png
            let country = data[i].name.common
            flagAndCountry[flag] = country
        }
        console.log(flagAndCountry)
        // getRandomCountry()
    })

};
