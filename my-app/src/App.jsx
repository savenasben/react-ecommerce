import React from "react"
import ProductCard from "./Components/ProductCard"
import Products from "./Data"
import "./App.css"
import Header from './Header'
import Footer from './Footer'
import NavBar from "./NavBar"

function App(){
   return(
    <>
      
       <Header />
       <NavBar />
       <div className="container">
       {Products.map((Product) => (
        <ProductCard key={Product.id}{...Product}/>
       ))}
      </div>
      <Footer /> 
    </>
   )
}
export default App
