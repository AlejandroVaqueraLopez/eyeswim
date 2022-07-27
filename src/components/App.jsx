// hooks
import { useRef, useState } from 'react';
import useFetcher from "../components/useFetcher";//custom hook

// components
import Series from '../components/Series';
import Loading from '../components/Loading';
import Button from '../components/Button';

//native functions
import { getSeries } from '../utils/getSeries';
 
function App () {
  const searchRef = useRef(null);
  const [query, setQuery] = useState('music');

  const { response, loading } = useFetcher("https://api.tvmaze.com/search/shows",query, getSeries);

  //when search input is submited
  const handleSubmit = async (e) => {
    e.preventDefault();

    const searchInput = searchRef.current.value;
    setQuery(searchInput);

    e.target.reset();
  }

  return (
    <section className='container border border-white my-5'>

      <form className="form py-3" action="" onSubmit={ handleSubmit }>
        <div className="row ">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <h4 className="text-center fw-bold fs-5">What would you like to watch?</h4>
            <div className="input-group my-3 d-flex justify-content-center ">
              <input ref={ searchRef } className="form-control br bs txtInput" type="search" placeholder="example: Dr. House" />
            </div>
            <Button text="search" />
          </div>
        </div>
      </form> 

      {
        loading 
          ? <Loading /> 
          : (
            <section className="py-5">
              <Series data={ response }/>
            </section>
          )
      }

    </section>
  )
}

export default App;
