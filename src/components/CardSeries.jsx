//hooks 
//dependencies
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const CardSeries = ({ data }) => {

  //optional chaining
  const [Poster, Title, Type, Year] = [
    data?.Poster || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZc2ak60GYlraruLrL0csnJ4gS4CV30WNSvoPJLnqZEgiUY2ri-qOmoOuYQW2SKpqHAac&usqp=CAU",
    data?.Title || "No title",
    data?.Type || "No type",
    data?.Year || "No year"
  ];

  return (
    <NavLink className="nav-link" to={data.imdbID}>

      <div className="card bg-dark my-4">
        <img src={Poster} className="card-img-top" alt="" />
        <div className="card-body text-white">
          <h5 className="card-title line-clamp">{Title}</h5>
          <h6 className="card-text">{Type}</h6>
          <h6 className="card-text">{Year}</h6>
        </div>
      </div>

    </NavLink>
  );
}

export default CardSeries;
