import React from 'react'
import SimpleSlider from '../components/SimpleSlider';
import Arrival from '../components/Arrival';
// import Popular from '../components/Popular';

const Home = ({ products, searchQuery }) => {
  return (
    <div>
     <SimpleSlider/>
    <Arrival  products={products} searchQuery={searchQuery} />
    {/* <Popular/> */}

    </div>
  )
}

export default Home;
