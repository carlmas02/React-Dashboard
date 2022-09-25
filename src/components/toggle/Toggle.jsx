import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './toggle.scss'

const Toggle = ({configure,state}) => {

    
  return (
    <div className='toggle' >
        {state  ?
            <button onClick={()=>configure(false) } > <MenuIcon />  </button>
                :
            <button onClick={()=>configure(true) } > <MenuIcon />  </button>  }

    </div>
  )
}

export default Toggle