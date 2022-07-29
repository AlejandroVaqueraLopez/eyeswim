const styles = {
  backgroundColor: '#51557E',
  width: '250px',
  height: '50px',
  fontWeight: 'bold'
}

const Button = ({ text }) => {
  return (
    <button style={styles} className='btn btn-dark fs-5 br bs ' type='submit'>{text}</button>
  )
}

export default Button
