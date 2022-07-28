//the details page

//hooks 
import { useParams } from 'react-router-dom';
import useFetcher from './useFetcher';
//components
import CardSeriesDetails from './CardSeriesDetails';
import Loading from './Loading';

//native functions
import { getSerie, getSeasons } from "../utils/getSeries";

const SerieDetails = () => {
  //hooks
  const { id } = useParams();
  const { response: seriesData, loading } = useFetcher(`https://api.tvmaze.com/shows`, id, getSerie);
  const { response: seasonData } = useFetcher(`https://api.tvmaze.com/shows`, id, getSeasons);
  
  return (
    loading ? <Loading />
    : (
      <section className="py-4 border border-white">
        <CardSeriesDetails seriesData={ seriesData } seasonData={ seasonData } />
      </section>
    )
  );
}

export default SerieDetails;
