
import {
    // GoHome,
    GoFileDirectory,
    
} from "react-icons/go";
import { FaGripLinesVertical, FaTimes } from "react-icons/fa";


type drawerProps = {
  children: React.ReactNode,
  title: string
}

const Drawer = ({children, title}:drawerProps) =>{


    const handleClose = () => {
        const panel = document.getElementById('side-information-panel')! 

        panel.style.right = '-930px';

    }


return (

               <aside
                   className='side-information-panel'
                   id='side-information-panel'
    >
        
                   {/* <div className='grab-wrapper' id='panelDrager'>
                       <FaGripLinesVertical className='dragIcon' />
                   </div> */}
                   <div className='side-information-wrapper'>

            <div className='panel-header'>
                <div className="panel-header-left">
                    <span>{title}</span>
                </div>
                <div className="panel-header-right" id="close-panel" onClick={handleClose}>
                    <FaTimes />
                </div>

            </div>
            <div className='section-divider '></div>

                    {children}

                   </div>
               </aside>


)

}


export default Drawer;
