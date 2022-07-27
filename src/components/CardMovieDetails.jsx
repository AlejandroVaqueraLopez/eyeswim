//hooks 
//dependencies
import { useParams } from 'react-router-dom';

const CardMovieDetails = ({ data }) => {
  const {Title, Plot, Poster } = data;

  return (
      <div className="card bg-dark my-5">
        <img src={Poster} className="card-img-top" alt="" />
        <div className="card-body text-white">
          <h5 className="card-title line-clamp">{Title}</h5>
          <p className="card-text">{Plot}</p>
        </div>
      </div>
  );
}

export default CardMovieDetails;
