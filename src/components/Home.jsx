import React from 'react';

function Home({setCountState, setCountRef}) {
  return (
    <>
      <h2>This is the Home Page</h2>

      <button onClick={() => setCountState()}>setState</button>
      <button onClick={() => setCountRef()}>setRef</button>
    </>
  )
}

export default Home;