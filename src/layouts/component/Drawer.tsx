
import {
    // GoHome,
    GoFileDirectory,
    
} from "react-icons/go";
import { FaGripLinesVertical } from "react-icons/fa";


type drawerProps = {
  children: React.ReactNode,
  title: string
}

const Drawer = ({children, title}:drawerProps) =>{


return (

               <aside
                   className='side-information-panel'
                   id='side-information-panel'
               >
                   <div className='grab-wrapper' id='panelDrager'>
                       <FaGripLinesVertical className='dragIcon' />
                   </div>
                   <div className='side-information-wrapper'>

                       <div className='panel-header'>
                           <GoFileDirectory />
                           <span>{title}</span>
                       </div>
                       <div className='section-divider '></div>

                    {children}

                   </div>
               </aside>


)

}


export default Drawer;
