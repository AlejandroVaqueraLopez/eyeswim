//components
import CardSeries from "./CardSeries";
import { FaBeer } from "react-icons/fa";
import Label from './Label';
import NoResults from './NoResults';

const Series = ({ data }) => {
  return (
        (data.length != 0)
          ?(
            <div className="row p-0 m-0">

              <ul className="row p-0 m-0 border border-blue">
                <Label text="Series"/>
                {data.map(({show}) => (
                  <li key={show.id} className="border border-black list-style-none col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center">
                    <CardSeries data={show}/>
                  </li>
                ))}
              </ul>

            </div>
          ): (
            <NoResults />
          )
  );
}

export default Series;
