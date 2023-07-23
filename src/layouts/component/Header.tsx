
import {
    AiOutlineCloudServer as Logo,
    AiOutlinePlusSquare,
} from "react-icons/ai";
import {
    GoSearch,
    GoStar,
} from "react-icons/go";





const Header = () =>{


return (
  <div className='content-header'>
      <div className='headers'>
          <span className='app-name'>Lizzy</span>
          <div className='other-headers-items'>
              <div className='search-bar-wrapper'>
                  <input type='search' name='' id='item-search' />
                  <label htmlFor='item-search'>
                      <GoSearch />
                  </label>
              </div>
              <div className='items-group-wrapper'>
                  <div className='item-wrapper'>
                      <AiOutlinePlusSquare />
                  </div>
                  <div className='item-wrapper'>
                      <GoStar />
                  </div>
              </div>
          </div>
      </div>
      <div className='section-divider '></div>
  </div>
)

}


export default Header;
