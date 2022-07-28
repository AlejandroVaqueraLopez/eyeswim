//native utils
import { cleanDate, cleanSummary } from "./cleaner";

//optional chaining validations
export const validateSeriesData = (data) => {

    const cleanedSummary = data.summary != null ? cleanSummary(data.summary) : "No summary available";
    const cleanedPremiered = data.premiered != null ? cleanDate(data.premiered) : "x";
    const cleanedEnded = data.ended != null ? cleanDate(data.ended) : "now";

  //optional chaining
  let [id, name, premiered, ended, summary, language, genres, rating, image, url] = [
    data?.id || Math.floor(Math.random() * 10000),
    data?.name || "No name available",
    cleanedPremiered,
    cleanedEnded,
    cleanedSummary,
    data?.language || "No language available",
    data?.genres || ["No genres available"],
    data?.rating?.average || "No rating available",
    data?.image?.original || data?.image?.medium || "https://distribuidoraatom.com/assets/images/no-found.png",
    data?.url || "No visit link available"
  ];

  return { id, name, premiered, ended, summary, language, genres, rating, image, url };
}

export const validateSeasonData = (data) => {
    const cleanedSummary = data.summary != null ? cleanSummary(data.summary) : "No summary available";
    const cleanedPremiered = data.premiered != null ? cleanDate(data.premiered) : "x";
    const cleanedEnded = data.ended != null ? cleanDate(data.ended) : "now";

  //optional chaining
  let [id, name, premiered, ended, summary, language, genres, rating, image, url] = [
    data?.id || Math.floor(Math.random() * 10000),
    data?.name || "No name available",
    cleanedPremiered,
    cleanedEnded,
    cleanedSummary,
    data?.language || "No language available",
    data?.genres || ["No genres available"],
    data?.rating?.average || "No rating available",
    data?.image?.original || data?.image?.medium || "https://distribuidoraatom.com/assets/images/no-found.png",
    data?.url || "No visit link available"
  ];

  return { id, name, premiered, ended, summary, language, genres, rating, image, url };
}

