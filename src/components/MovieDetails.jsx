//hooks 
import { useParams } from 'react-router-dom';
import useFetcher from './useFetcher';
//components
import CardMovieDetails from './CardMovieDetails';
import Loading from './Loading';

//native functions
import { getMovie } from "../utils/getMovies";

const MovieDetails = () => {
  //hooks
  const { movieId } = useParams();
  const { response, loading } = useFetcher(movieId, getMovie);
  
  return (
    loading ? <Loading />
    : (
      <section className="py-4">
        <CardMovieDetails data={ response }/>
      </section>
    )
  );
}

export default MovieDetails;
