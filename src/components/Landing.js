import React from 'react'
import Banner from './Banner';
import Popularbrands from './Popularbrands';
import ProductList from "./ProductList"
import Readablearticles from './Readablearticles';
import Suggestion from './Suggestion';
import BackgroundLanding from "../img/freestocks-_3Q3tsJ01nc-unsplash.jpg";
import Navbar from "./Navbar";
const Landing = () => {
  return (
    <div>
      <Navbar position="fixed" />
      <Banner image={BackgroundLanding} />
      <ProductList />
      <Suggestion />
      <Popularbrands />
      <Readablearticles />
    </div>
  )
}

export default Landing;