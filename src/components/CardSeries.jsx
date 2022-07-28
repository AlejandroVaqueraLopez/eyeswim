//Home page where all shows are shown

//components
import Tag from "../components/Tag";

//dependencies
import { NavLink } from 'react-router-dom';

//native utils
import { validateSeriesData } from '../utils/validate';

const CardSeries = ({ data }) => {

  //custom function to validate data from api
  const { id, name, premiered, ended, summary, language, genres, rating, image, url } = validateSeriesData(data);

  return (
    <NavLink className="nav-link" to={`/${id}`}>

      <div className="card mini-card my-4 bs br">
        <img src={image} className="card-img-top mini-card-img" alt="" />
        <div className="card-body text-white">
          <h5 className="card-title line-clamp">{name}</h5>

          <div className="row">
            <div className="col-12 d-flex">
              <h6 className="card-text">
                <Tag data={language} background="#816797" />
              </h6>
              <h6 className="card-text">
                <Tag data={premiered} background="#51557E" />
              </h6>
            </div>
          </div>

        </div>
      </div>

    </NavLink>
  );
}

export default CardSeries;
