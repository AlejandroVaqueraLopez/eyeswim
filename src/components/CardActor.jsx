// where actors are shown

// components
import Tag from '../components/Tag'

const CardActor = ({ data }) => {
  // custom function to validate data from api
  const { person, character } = data

  const { name } = person
  const imgPerson = data?.person?.image?.original || data?.person?.image?.medium || 'https://distribuidoraatom.com/assets/images/no-found.png'
  const { name: characterName } = character

  return (
    <div className='card mini-card my-4 bs br'>
      <img src={imgPerson} className='card-img-top mini-card-img' alt='' />
      <div className='card-body text-white'>
        <div className='row'>
          <div className='col-12 d-flex flex-column justify-content-center'>
            <div className='d-flex'>
              <Tag data={name} background='#51557E' />
            </div>
            <div className='d-flex'>
              <Tag data={characterName} background='#816797' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardActor
