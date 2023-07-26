import { GoFileDirectory } from "react-icons/go";
import { _file_size, determineFileType } from "../../utils";

type folderType = {

    ext: string;
    count: number;
    total_size: number;

  
}

const Folder = ({ext, count, total_size }: folderType) => {
  
    const t = determineFileType(ext);


  return (
      
          <div className="folder">
              <div className="folder-icon">
              <t.icon style={{ color: t.color }} /> 
              </div>
          <h2>{t.name}</h2>
      <p>{count} Files ({_file_size(total_size)})</p>
          </div>

     
  )
}

export default Folder