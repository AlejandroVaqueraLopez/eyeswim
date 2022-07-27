//hooks 
//dependencies
import { useParams } from 'react-router-dom';

const CardSeriesDetails = ({ data }) => {

  //optional chaining
  const [id, name, premiered, summary, language, image] = [
    data?.id || Math.random(),
    data?.name || "No name",
    data?.premiered || "No date",
    data?.summary || "No summary",
    data?.language || "No language",
    data?.image?.original || data?.image?.medium || "https://estaticos.muyinteresante.es/uploads/images/gallery/5eb014125bafe80d70a6db24/curiosidades-reptiles_0.jpg"
  ];

  return (
      <div className="card bg-dark my-5">
        <img src={image} className="card-img-top" alt="" />
        <div className="card-body text-white">
          <h5 className="card-title line-clamp">{name}</h5>
          <p className="card-text">{summary}</p>
        </div>
      </div>
  );
}

export default CardSeriesDetails;
