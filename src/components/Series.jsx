//components
import CardSeries from "./CardSeries";
import { FaBeer } from "react-icons/fa";
import Label from './Label';

const Series = ({data}) => {
  return (
        (data.length != 0)
          ?(
            <div className="row p-0 m-0">
              <Label text="Recommended"/>

              <ul className="row p-0 m-0 border border-blue">
                {data.map((serie) => (
                  <li key={serie.imdbID} className="border border-black list-style-none col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center">
                    <CardSeries data={serie}/>
                  </li>
                ))}
              </ul>

            </div>
          ): (
            <div className="row">
              <p className="text-center">No results</p>
            </div>
          )
  );
}

export default Series;
