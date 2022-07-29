const Loading = () => {
  return (
    <div className='row' style={{ height: '300px', width: '100%' }}>
      <div className='col-12 d-flex justify-content-center align-items-center'>
        <div className='spinner-border text-light' style={{ width: '90px', height: '90px', fontSize: '50px' }} role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    </div>
  )
}

export default Loading
