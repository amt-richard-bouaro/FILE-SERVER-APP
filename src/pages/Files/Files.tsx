import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUser } from '../../redux/slices/authSlice';
import { useLogoutMutation } from '../../redux/slices/usersApiSlice';

import { AiOutlineCloudServer as Logo, AiOutlinePlusSquare, AiOutlineAppstore, AiOutlineTable } from "react-icons/ai";
import { GoHome, GoFileDirectory, GoClock, GoGear, GoSearch, GoStar } from "react-icons/go";
import { PiListFill, PiSquaresFourBold, PiFolderSimpleBold, PiCaretDownBold, PiDotsThreeVerticalBold } from "react-icons/pi";
import { BsFillFileEarmarkPdfFill, BsFillFileEarmarkWordFill } from "react-icons/bs";
import Content, { Body } from '../../layouts/component/Content';
import Header from '../../layouts/component/Header';
import Drawer from '../../layouts/component/Drawer';
const Files = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logout, { isLoading, isSuccess }] = useLogoutMutation();

    const handleLogout = async () => {

        try {

            await logout({}).unwrap();

            dispatch(clearUser());

            navigate('/')

        } catch (error) {
            console.log(error);

        }


    }


  return (
      <>
          <Content>
              
              <Header/>
              <Body>
          

          <div className="breadcrumb">
              <div className="breadcrumb-left-items">
                  <div className="breadcrumb-left-item addon">
                      <PiFolderSimpleBold /><PiCaretDownBold />
                  </div>
                  <span>Home</span>

              </div>



              <div className="breadcrumb-right-items">
                  <div className="breadcrumb-right-item">

                      <PiListFill />
                  </div>
                  <div className="breadcrumb-right-item">

                      <PiSquaresFourBold />
                  </div>
                  <div className="breadcrumb-right-item">

                      <AiOutlineTable />
                  </div>


              </div>
          </div>

          <div className="files-container">
              <div className="file-card active">
                  <div className="file-card-top">
                      <GoStar />
                      <PiDotsThreeVerticalBold />
                  </div>
                  <div className="file-card-body">
                      <div className="file-icon">
                          <BsFillFileEarmarkPdfFill />
                      </div>
                      <div className="file-title">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit
                      </div>

                  </div>
                  <div className="section-divider"></div>
                  <div className="file-card-footer">
                      <div className="file-size">
                          <span className='file-size-text'>File Size</span>
                          <span className='readable-file-size'> 2.9 mb</span>
                      </div>
                      <div className="file-uploaded-at">
                          <span className='file-uploaded-at-text'>Date</span>
                          <span className='file-uploaded-at-date'>20/20/2020</span>
                      </div>
                  </div>
              </div>
              <div className="file-card">
                  <div className="file-card-top">
                      <GoStar />
                      <PiDotsThreeVerticalBold />
                  </div>
                  <div className="file-card-body">
                      <div className="file-icon">
                          <BsFillFileEarmarkWordFill />
                      </div>
                      <div className="file-title">
                          Lorem ipsum
                      </div>

                  </div>
                  <div className="section-divider"></div>
                  <div className="file-card-footer">
                      <div className="file-size">
                          <span className='file-size-text'>File Size</span>
                          <span className='readable-file-size'> 2.9mb</span>
                      </div>
                      <div className="file-uploaded-at">
                          <span className='file-uploaded-at-text'>Date</span>
                          <span className='file-uploaded-at-date'>20/20/2020</span>
                      </div>
                  </div>
              </div>

              <div className="file-card">
                  <div className="file-card-top">
                      <GoStar />
                      <PiDotsThreeVerticalBold />
                  </div>
                  <div className="file-card-body">
                      <div className="file-icon">
                          <BsFillFileEarmarkWordFill />
                      </div>
                      <div className="file-title">
                          Lorem ipsum
                      </div>

                  </div>
                  <div className="section-divider"></div>
                  <div className="file-card-footer">
                      <div className="file-size">
                          <span className='file-size-text'>File Size</span>
                          <span className='readable-file-size'> 2.9mb</span>
                      </div>
                      <div className="file-uploaded-at">
                          <span className='file-uploaded-at-text'>Date</span>
                          <span className='file-uploaded-at-date'>20/20/2020</span>
                      </div>
                  </div>
              </div>
              <div className="file-card">
                  <div className="file-card-top">
                      <GoStar />
                      <PiDotsThreeVerticalBold />
                  </div>
                  <div className="file-card-body">
                      <div className="file-icon">
                          <BsFillFileEarmarkWordFill />
                      </div>
                      <div className="file-title">
                          Lorem ipsum
                      </div>

                  </div>
                  <div className="section-divider"></div>
                  <div className="file-card-footer">
                      <div className="file-size">
                          <span className='file-size-text'>File Size</span>
                          <span className='readable-file-size'> 2.9mb</span>
                      </div>
                      <div className="file-uploaded-at">
                          <span className='file-uploaded-at-text'>Date</span>
                          <span className='file-uploaded-at-date'>20/20/2020</span>
                      </div>
                  </div>
              </div>
              <div className="file-card">
                  <div className="file-card-top">
                      <GoStar />
                      <PiDotsThreeVerticalBold />
                  </div>
                  <div className="file-card-body">
                      <div className="file-icon">
                          <BsFillFileEarmarkWordFill />
                      </div>
                      <div className="file-title">
                          Lorem ipsum
                      </div>

                  </div>
                  <div className="section-divider"></div>
                  <div className="file-card-footer">
                      <div className="file-size">
                          <span className='file-size-text'>File Size</span>
                          <span className='readable-file-size'> 2.9mb</span>
                      </div>
                      <div className="file-uploaded-at">
                          <span className='file-uploaded-at-text'>Date</span>
                          <span className='file-uploaded-at-date'>20/20/2020</span>
                      </div>
                  </div>
              </div>
              <div className="file-card">
                  <div className="file-card-top">
                      <GoStar />
                      <PiDotsThreeVerticalBold />
                  </div>
                  <div className="file-card-body">
                      <div className="file-icon">
                          <BsFillFileEarmarkWordFill />
                      </div>
                      <div className="file-title">
                          Lorem ipsum
                      </div>

                  </div>
                  <div className="section-divider"></div>
                  <div className="file-card-footer">
                      <div className="file-size">
                          <span className='file-size-text'>File Size</span>
                          <span className='readable-file-size'> 2.9mb</span>
                      </div>
                      <div className="file-uploaded-at">
                          <span className='file-uploaded-at-text'>Date</span>
                          <span className='file-uploaded-at-date'>20/20/2020</span>
                      </div>
                  </div>
              </div>
              <div className="file-card">
                  <div className="file-card-top">
                      <GoStar />
                      <PiDotsThreeVerticalBold />
                  </div>
                  <div className="file-card-body">
                      <div className="file-icon">
                          <BsFillFileEarmarkWordFill />
                      </div>
                      <div className="file-title">
                          Lorem ipsum
                      </div>

                  </div>
                  <div className="section-divider"></div>
                  <div className="file-card-footer">
                      <div className="file-size">
                          <span className='file-size-text'>File Size</span>
                          <span className='readable-file-size'> 2.9mb</span>
                      </div>
                      <div className="file-uploaded-at">
                          <span className='file-uploaded-at-text'>Date</span>
                          <span className='file-uploaded-at-date'>20/20/2020</span>
                      </div>
                  </div>
              </div>
              <div className="file-card">
                  <div className="file-card-top">
                      <GoStar />
                      <PiDotsThreeVerticalBold />
                  </div>
                  <div className="file-card-body">
                      <div className="file-icon">
                          <BsFillFileEarmarkWordFill />
                      </div>
                      <div className="file-title">
                          Lorem ipsum
                      </div>

                  </div>
                  <div className="section-divider"></div>
                  <div className="file-card-footer">
                      <div className="file-size">
                          <span className='file-size-text'>File Size</span>
                          <span className='readable-file-size'> 2.9mb</span>
                      </div>
                      <div className="file-uploaded-at">
                          <span className='file-uploaded-at-text'>Date</span>
                          <span className='file-uploaded-at-date'>20/20/2020</span>
                      </div>
                  </div>
              </div>
              <div className="file-card">
                  <div className="file-card-top">
                      <GoStar />
                      <PiDotsThreeVerticalBold />
                  </div>
                  <div className="file-card-body">
                      <div className="file-icon">
                          <BsFillFileEarmarkWordFill />
                      </div>
                      <div className="file-title">
                          Lorem ipsum
                      </div>

                  </div>
                  <div className="section-divider"></div>
                  <div className="file-card-footer">
                      <div className="file-size">
                          <span className='file-size-text'>File Size</span>
                          <span className='readable-file-size'> 2.9mb</span>
                      </div>
                      <div className="file-uploaded-at">
                          <span className='file-uploaded-at-text'>Date</span>
                          <span className='file-uploaded-at-date'>20/20/2020</span>
                      </div>
                  </div>
              </div>
              <div className="file-card">
                  <div className="file-card-top">
                      <GoStar />
                      <PiDotsThreeVerticalBold />
                  </div>
                  <div className="file-card-body">
                      <div className="file-icon">
                          <BsFillFileEarmarkWordFill />
                      </div>
                      <div className="file-title">
                          Lorem ipsum
                      </div>

                  </div>
                  <div className="section-divider"></div>
                  <div className="file-card-footer">
                      <div className="file-size">
                          <span className='file-size-text'>File Size</span>
                          <span className='readable-file-size'> 2.9mb</span>
                      </div>
                      <div className="file-uploaded-at">
                          <span className='file-uploaded-at-text'>Date</span>
                          <span className='file-uploaded-at-date'>20/20/2020</span>
                      </div>
                  </div>
              </div>

                  </div>
              </Body>
          </Content>

          <Drawer title='File Preview'>
              
            </Drawer>

      </>
  )
}

export default Files