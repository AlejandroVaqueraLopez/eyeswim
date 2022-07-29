// components
import CardActor from './CardActor'
import Label from './Label'

const SeasonsSection = ({ data }) => {
  return (
    <div className='card max-card my-5 p-5 br bs'>
      <div className='row my-4'>
        <div className='col-12 p-0'>
          <div className='accordion outline-none border-none' id='accordionExample'>
            <ul className='row p-0 m-0'>
              <Label text='Cast' />
              {
                data.map(actor => (
                  <li key={actor.person.id} className='list-style-none col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center'>
                    <CardActor data={actor} />
                  </li>
                ))
            }
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SeasonsSection
