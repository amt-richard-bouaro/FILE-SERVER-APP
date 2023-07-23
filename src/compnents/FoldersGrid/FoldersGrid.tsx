
import Folder from "./Folder";



type filesByType = {
    folders: {}[]
}

const FoldersGrid = ({ folders }: filesByType) => {
    return (
        <div className="folders-grid">
            {folders.map(folder => <Folder />)
          }  
        </div>
  )
}

export default FoldersGrid