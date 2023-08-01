
type FILES_PROPS_TYPES = {
  children: React.ReactNode
}

const FilesGrid = ({ children }: FILES_PROPS_TYPES) => {
    return (
        <div className="files-container">

          {children}

        </div>
    )
}

export default FilesGrid