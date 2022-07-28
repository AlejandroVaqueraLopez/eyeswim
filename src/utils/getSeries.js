import axios from "axios";


//search by query
export const getSeries = async ( url, query ) => {
    const  {data}  = await axios.get(`${url}?q=${query}`);
    console.log(data);
    return data.length !== 0 ? data : [];
}


//search by id
export const getSerie = async (url, id ) => {
    const { data,status } = await axios.get(`${url}/${id}`);
    return data;
}

//search episodes of a season
export const getSeason = async (url, id ) => {
    console.log(url, id)
    const { data,status } = await axios.get(`${url}/${id}`);
    return data;
}