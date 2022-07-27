//hooks 
//dependencies
import { NavLink } from 'react-router-dom';

const CardSeries = ({ data }) => {

  //optional chaining
  const [id, name, premiered, summary, language, image] = [
    data?.id || Math.random(),
    data?.name || "No name",
    data?.premiered || "No date",
    data?.summary || "No summary",
    data?.language || "No language",
    data?.image?.original || data?.image?.medium || "https://estaticos.muyinteresante.es/uploads/images/gallery/5eb014125bafe80d70a6db24/curiosidades-reptiles_0.jpg"
  ];
  console.log(id)

  return (
    <NavLink className="nav-link" to={`/${id}`}>

      <div className="card bg-dark my-4">
        <img src={image} className="card-img-top" alt="" />
        <div className="card-body text-white">
          <h5 className="card-title line-clamp">{name}</h5>
          <h6 className="card-text">{summary}</h6>
          <h6 className="card-text">{language}</h6>
          <h6 className="card-text">{premiered}</h6>
        </div>
      </div>

    </NavLink>
  );
}

export default CardSeries;
