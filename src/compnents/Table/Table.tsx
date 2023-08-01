import moment from 'moment'
import { FILE_TYPE } from '../../types'

type FILES = {
    files: (FILE_TYPE & {
        downloaded_count: number,
        emailed_count: number,
        downloaded_emailed: number
    })[]
}

const Table = ({ files }: FILES) => {
    return (

        <div className='table-wrapper'>
            <table className='files-table'>
                <thead>
                    <tr><th>No</th>
                        <th>Title</th>
                        <th>Since</th>
                        <th>Downloads</th>
                        <th>Email Requests</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        files && files.map((file, idx) => (<tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{file.title}</td>
                            <td>{moment(file.created_at).fromNow()}</td>
                            <td>{file.downloaded_count}</td>
                            <td>{file.emailed_count}</td>
                            <td>{file.downloaded_emailed}</td>
                        </tr>))
                    }
                </tbody>
            </table>
        </div>


    )
}

export default Table