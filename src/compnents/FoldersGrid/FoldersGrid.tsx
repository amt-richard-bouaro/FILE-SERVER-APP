
import Folder from "./Folder";



type foldersType = {
  folders: {
    ext: string;
    count: number;
    total_size: number;
    
    }[]
}

const FoldersGrid = ({ folders }: foldersType) => {
    return (
        <div className="folders-grid">
        {folders.map((folder, index) =>
          <Folder ext={folder.ext} count={folder.count} total_size={folder.total_size} key={index} />)
          }  
        </div>
  )
}

export default FoldersGrid