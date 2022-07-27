import axios from "axios";

const apikey = "bf7d0c70";
const url = `http://www.omdbapi.com/?apikey=${apikey}`;

//search by query
export const getMovies = async ( query ) => {
    const { data } = await axios.get(`${url}&s=${query}`);
    return data.Response === "True" ? data.Search : [];
}

//search by id
export const getMovie = async ( id ) => {
    const { data } = await axios.get(`${url}&i=${id}`);
    return data.Response === "True" ? data : {};
}
