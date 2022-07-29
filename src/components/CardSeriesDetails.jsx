// components that shows details blocks

// components
import DetailsSection from './DetailsSection'
import SeasonsSection from './SeasonsSection'
import CastSection from './CastSection'

// native utils
import { validateSeriesData, validateSeasonData } from '../utils/validate'

const CardSeriesDetails = ({ seriesData, seasonData, castData }) => {
  // custom function to validate data from api
  const validatedSeriesData = validateSeriesData(seriesData)
  const validatedSeasonData = validateSeasonData(seasonData)

  return (
    <>
      <DetailsSection data={validatedSeriesData} />
      <SeasonsSection data={validatedSeasonData} />
      <CastSection data={castData} />
    </>
  )
}

export default CardSeriesDetails
