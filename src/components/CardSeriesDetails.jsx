// components that shows details blocks

//components
import DetailsSection from "./DetailsSection";
import SeasonsSection from "./SeasonsSection";

//native utils
import { validateSeriesData, validateSeasonData } from '../utils/validate';

const CardSeriesDetails = ({ seriesData, seasonData }) => {

  //custom function to validate data from api
  const validatedSeriesData = validateSeriesData(seriesData);
  const validatedSeasonData = validateSeasonData(seasonData);

  return (
    <>
      <DetailsSection data={validatedSeriesData}/>
      <SeasonsSection data={validatedSeasonData}/>
    </>
  );
}

export default CardSeriesDetails;
