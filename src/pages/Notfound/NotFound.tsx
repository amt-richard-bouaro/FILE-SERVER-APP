import {useNavigate} from 'react-router-dom'
import { useTheme } from '../../context/ThemeProvider'
import { FaArrowLeft } from 'react-icons/fa';
const NotFound = () => {

  const { theme } = useTheme();

  const navigate = useNavigate();

  return (
    <div className='container-404' style={{...theme}}>
   
      <div className="items-404">
        
        <div className="display-404">
        <h1>404</h1>
      </div>
      <div className="display-404-message">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequatur.
      </div>
      <div className="display-404-redirect">
          <button className="btn btn-go-back" onClick={()=>navigate(-1)}>< FaArrowLeft className='go-back-icon' /> {" " }Go back</button>
      </div>
      </div>
      

    </div>
  )
}

export default NotFound