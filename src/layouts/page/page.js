import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Page = (props) => {
  return(
    <>
      <Header />
      { props.children }
      <Footer/>
    </>
  )
}


export default Page;
