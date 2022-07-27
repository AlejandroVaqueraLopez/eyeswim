// hooks
import { useRef, useEffect, useState } from 'react';
// assets

function App () {
  const searchRef = useRef(null);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = searchRef.current.value;
    setText(text);
  }

  return (
    <section className='container border border-white'>
      <h4 className="text-center">my title</h4>

      <form className="form" action="" onSubmit={ handleSubmit }>
        <div className="input-group">
          <input ref={ searchRef } className="form-control" type="search" placeholder="search by ..." />
        </div>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>

    </section>
  )
}

export default App
