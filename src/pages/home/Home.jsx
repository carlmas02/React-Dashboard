import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.scss'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widgets/Widget'
import Feature from '../../components/featured/Feature'
import Toggle from '../../components/toggle/Toggle'

const Home = ({setDark}) => {

  const [visible ,setVisibility] = useState(true);


  return (
    <div className='home' >

        {visible ? <Sidebar configure = {setVisibility } state = {visible} /> : null}

        <div className='homeContainer'>
          <Navbar/>

          <Toggle configure = {setVisibility } state = {visible} />

          <div  className="widgets">
              <Widget type = 'user'  />
              <Widget type = 'order'  />
              <Widget type = 'earning' />
              <Widget type = 'balance' />

          </div>

          <div className="charts">

              <Feature/>
              
             
              
              
              

          </div>


        </div>

        


    </div>
  )
}

export default Home