import React from "react"
import ProductCard from "./Components/ProductCard"
import Products from "./Data"
import "./App.css"
import Header from './Header'
import Footer from './Footer'

function App(){
   return(
    <>
      
       <Header />
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
