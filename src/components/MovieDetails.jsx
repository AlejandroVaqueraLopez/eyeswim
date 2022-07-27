//hooks 
import { useParams } from 'react-router-dom';
import useFetcher from './useFetcher';
//components
import CardSeriesDetails from './CardSeriesDetails';
import Loading from './Loading';

//native functions
import { getSerie } from "../utils/getSeries";

const SerieDetails = () => {
  //hooks
  const { id } = useParams();
  const { response, loading } = useFetcher(`https://api.tvmaze.com/shows`, id, getSerie);
  
  return (
    loading ? <Loading />
    : (
      <section className="py-4">
        <CardSeriesDetails data={ response }/>
      </section>
    )
  );
}

export default SerieDetails;
