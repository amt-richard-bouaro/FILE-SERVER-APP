import { useStatsMutation } from '../../redux/slices/docsApiSlice';

import {AiOutlineTable} from "react-icons/ai";

import { PiListFill,PiSquaresFourBold,PiFolderSimpleBold,PiCaretDownBold } from "react-icons/pi";


import Content, { Body } from '../../layouts/component/Content';

import Header from '../../layouts/component/Header';
import FoldersGrid from '../../compnents/FoldersGrid';
import Table from '../../compnents/Table';
import { useEffect, useState } from 'react';



const Dasboard = () => {

const [folders, setFolders] = useState(null)
  const [performing, setPerforming] = useState(null)
  const [docStats] = useStatsMutation();

  const loadStats = async () => {

    try {

      const res = await docStats({}).unwrap();

      if (res.data) {

        setFolders(res.data.folders);

        setPerforming(res.data.performing)
      }
      

    } catch (error) {
      console.log(error);

    }


  }


  useEffect(() => {
    loadStats();
  }, [])
  

  
  

  return (
    <Content>

      <Header hideSearchBar/>
      <Body>


        <div className="breadcrumb">
          <div className="breadcrumb-left-items">
            <div className="breadcrumb-left-item addon">
              <PiFolderSimpleBold /><PiCaretDownBold />
            </div>
            <span>Dashboard</span>

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
         {folders &&  <FoldersGrid folders={folders} />}
       
        
        <div className="section-divider"></div>
        
        <div className="breadcrumb">
          <div className="breadcrumb-left-items">
            <div className="breadcrumb-left-item addon">
              <PiFolderSimpleBold /><PiCaretDownBold />
            </div>
            <span> Dashboard  &gt; Performing Files</span>

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
        {performing && <Table files={performing} />}
        

        
      </Body>
    </Content>
  )
}

export default Dasboard