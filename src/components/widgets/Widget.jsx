import React from 'react'
import './widgets.scss'
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WalletIcon from '@mui/icons-material/Wallet';

const Widgets = ({type}) => {

  let constants = data[type];

  
  return (
    <div className='widget  '>
        <div className="top">
          <div className="title">{constants.title}</div>
          
          <div className="profit positive ">
            
            <KeyboardArrowUpIcon/>
            20 %
            
          </div>
        </div>
        
        <div className="mid">

          <h3>1000</h3>

        </div>

        <div className="bottom">
          <div className="more">{constants.link}</div>

          {constants.icon}


        </div>

    </div>
  )
}

export default Widgets


let data = {'user' :{title:"USERS",
                    isMoney : false,
                    link :'See all users',
                    icon : <PersonIcon className='icon' style={{backgroundColor :"lightblue"}} />},
            'order':{title:"ORDERS",
                    isMoney : false,
                    link :'View all orders',
                    icon : <ShoppingCartIcon className='icon' style={{backgroundColor :"yellow"}} />},
            'earning':{title:"EARNINGS",
                    isMoney : true,
                    link :'View earnings',
                    icon : <AttachMoneyIcon className='icon' style={{backgroundColor :"orange"}} />},      
            'balance':{title:"BALANCE",
                    isMoney : true,
                    link :'View balance',
                    icon : <WalletIcon className='icon' style={{backgroundColor :"pink"}} />},      
                  
                  
                  }