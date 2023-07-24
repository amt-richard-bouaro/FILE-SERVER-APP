import { AiOutlineCloudServer as Logo, AiOutlinePlusSquare, AiOutlineAppstore, AiOutlineTable } from "react-icons/ai";
import { GoHome, GoFileDirectory, GoClock, GoGear, GoSearch, GoStar } from "react-icons/go";
import { PiListFill, PiSquaresFourBold, PiFolderSimpleBold, PiCaretDownBold, PiDotsThreeVerticalBold } from "react-icons/pi";
import { BsFillFileEarmarkPdfFill, BsFillFileEarmarkWordFill } from "react-icons/bs";
import { FILES_TYPE } from "./types";
import { _file_size, _truncate } from "../../utils";


type propsType = {
    file: FILES_TYPE,
    onClick: (event: React.MouseEvent<HTMLDivElement>, file: FILES_TYPE) => void
}






const File = ({file, onClick}: propsType) => {
  return (
      <div className="file-card" id={file._id} onClick={(event) => onClick(event, file)} >
          <div className="file-card-top">
              <GoStar />
              <PiDotsThreeVerticalBold />
          </div>
          <div className="file-card-body">
              <div className="file-icon">
                  <BsFillFileEarmarkPdfFill />
              </div>
              <div className="file-title">
                  {_truncate(file.title)}
              </div>

          </div>
          <div className="section-divider"></div>
          <div className="file-card-footer">
              <div className="file-size">
                  <span className='file-size-text'>File Size</span>
                  <span className='readable-file-size'> { _file_size(file.size)}</span>
              </div>
              <div className="file-uploaded-at">
                  <span className='file-uploaded-at-text'>Date</span>
                  <span className='file-uploaded-at-date'>20/20/2020</span>
              </div>
          </div>
      </div>
  )
}

export default File