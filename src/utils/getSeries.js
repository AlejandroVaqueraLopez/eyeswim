import axios from 'axios'

// search by query
export const getSeries = async (url, query) => {
  const { data } = await axios.get(`${url}?q=${query}`)
  return data.length !== 0 ? data : []
}

// search by id
export const getSerie = async (url, id) => {
  const { data } = await axios.get(`${url}/${id}`)
  return data
}

// search season list of a show
export const getSeasons = async (url, id) => {
  const { data } = await axios.get(`${url}/${id}/seasons`)
  return data
}

// search all episodes of a season
export const getEpisodes = async (url, id) => {
  const { data } = await axios.get(`${url}/${id}/episodes`)
  return data
}

// search all cast of show
export const getCast = async (url, id) => {
  const { data } = await axios.get(`${url}/${id}/cast`)
  return data
}
