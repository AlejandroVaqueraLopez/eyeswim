// components
import Tag from '../Tag'

// native utils
import { cleanSummary } from '../../utils/cleaner'

const AccordionItem = ({ data }) => {
  const { id, name, summary, image, runtime, airdate } = data
  const imgEpisode = image?.original || image?.medium || 'https://distribuidoraatom.com/assets/images/no-found.png'
  const cleanedSummary = cleanSummary(summary)
  return (
    <div className='accordion-item'>

      <h2 className='accordion-header' id='headingOne'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target={`#element${id}`}>
          {name}
        </button>
      </h2>

      <div id={`element${id}`} className='accordion-collapse collapse' aria-labelledby='headingOne' data-bs-parent='#accordionExample'>
        <div className='accordion-body'>
          <div className='row'>
            <div className='col-12 col-md-5'>
              <img className='br' src={imgEpisode} style={{ width: '100%', minHeight: '230px', objectFit: 'cover' }} alt='' />
            </div>
            <div className='col-12 col-md-7 py-0 d-flex flex-column align-items-start'>
              <p>{cleanedSummary}</p>
              <div className='d-flex'>
                <Tag data={airdate} background='#51557E' />
                <Tag data={`${runtime} min`} background='#816797' />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default AccordionItem
