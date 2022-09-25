import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const Sidebar = ({configure,setDark}) => {

    
  return (
    <div className='sidebar'>
        
        <div className="top">
             <span className='logo' >Logo</span>
        </div>
        <hr></hr>
        <div className="center">
            
            <ul>

                <p className="title">MAIN 
                
                    <div style={{cursor:'pointer'}} onClick={()=>configure(false)}  className="hide-icon"> <ChevronRightIcon  /> </div> 
                
                
                </p>  

                <li>
                    <DashboardIcon className = 'icon'/>
                    <span>Dashboard</span>
                </li>
                <li>
                    <PeopleAltIcon className = 'icon'></PeopleAltIcon>
                    <span>Users</span>
                </li>
                <li>
                    <Inventory2Icon className = 'icon'/>


                    <span>Products</span>
                </li>

                <p className="title">MISC</p>

                <li>
                    <span>Orders</span>
                </li>
                <li>
                    <span>Stats</span>
                </li>
                <li>
                    <span>Settings</span>
                </li>
            </ul>


        </div>
        <div className="bottom">

            <div className="colorOption"></div>
            <div className="colorOption"></div>
            {/* <div className="colorOption"></div> */}

        </div>

    </div>

  )
}

export default Sidebar