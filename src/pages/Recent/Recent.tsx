import { useDispatch, useSelector } from 'react-redux';

import { useState, useEffect } from 'react'
import { useRecentsMutation, useDownloadMutation,  useEmailMutation } from '../../redux/slices/docsApiSlice';
import { setRecents, setSelectedRecent, clearSelectedRecent } from '../../redux/slices/docsSlice';

import { AiOutlineTable } from "react-icons/ai";

import { GoDownload, GoShare } from "react-icons/go";
import { PiListFill, PiSquaresFourBold, PiFolderSimpleBold, PiCaretDownBold, PiFolderOpenBold } from "react-icons/pi";

import Content, { Body } from '../../layouts/component/Content';
import Header from '../../layouts/component/Header';
import Drawer from '../../layouts/component/Drawer';
import FilesGrid, { File } from '../../compnents/FilesGrid';

import {  _file_size, determineFileType } from '../../utils';

import { RootState } from '../../redux/store/store';

import moment from 'moment';
import Feedback from '../../compnents/FeedBacks';
import { baseUrl } from '../../redux/slices/apiSlice';
const fileIcon = (ext: string) => {
    const t = determineFileType(ext)

    return <t.icon />
}

const Recent = () => {

  
    const dispatch = useDispatch()

    const [getRecents] = useRecentsMutation();

    const [downloadDocument] = useDownloadMutation();

    const [emailDocument] = useEmailMutation();
   

    const [emailFeedback, setEmailFeedback] = useState<{ type: 'error' | 'success', message: string } | null>(null);

    const { user } = useSelector((state: RootState) => state.auth);

    const { selectedRecent, recents } = useSelector((state: RootState) => state.documents);

    const [backup, setBackup] = useState<{title:string, description:string, name:string }[]|null>(null)


    const markDocAsActive = (_id: string) => {
        const doc = document.getElementById(_id)! as HTMLDivElement;
        const docs = document.querySelector('.file-card.active');
        const panel = document.getElementById('side-information-panel')!

        panel.style.right = '0px';

        if (docs) {
            docs.classList.remove('active');
        }
        if (doc) {
            doc.classList.add('active');
        }

        panel.style.right = '0px';

        localStorage.setItem('s_rec', JSON.stringify({ _id }));


    }


    const handleDownloadDocument = async (_id: string) => {

        const downloadLink = document.createElement('a');
        downloadLink.href = `${baseUrl}/api/documents/download/${_id}`
        document.body.appendChild(downloadLink);
        downloadLink.click();

        document.body.removeChild(downloadLink);
    }
    const handleEmailDocument = async (_id: string) => {

        const response = await emailDocument(_id).unwrap();


        setEmailFeedback({ type: response.code === 'DOCUMENT_SENT_TO_MAIL' ? 'success' : 'error', message: response.message });

        setTimeout(() => {
            setEmailFeedback(null)
        }, 5000);


    }

   
    const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value);
        try {
            dispatch(clearSelectedRecent());

            let val = e.target.value;

            const reqex = new RegExp(val, 'i');
            if (backup) {
                const data = backup.filter(file => reqex.test(file.title) || reqex.test(file.description) || reqex.test(file.name));
            
                    dispatch(setRecents(data));
                }
           
        } catch (error) {

            console.log(error);


        }


    }

    const docs = async () => {

        try {

            const docArray = await getRecents({}).unwrap();


            if (docArray.data) {
                dispatch(setRecents(docArray.data));
                setBackup(docArray.data);
            }


        } catch (error) {
            console.log(error);

        }

    }


    useEffect(() => {
        docs();

    }, []);



    useEffect(() => {

        const s_rec = localStorage.getItem('s_rec');

        if (s_rec) {

            const previousSelectedDoc = JSON.parse(s_rec);

            const docs = recents.filter(d => d._id === previousSelectedDoc._id);


            if (docs.length > 0) {

                let doc = docs[0];
               
                dispatch(setSelectedRecent(doc))
                // setSelectedDoc(doc);
                markDocAsActive(doc._id)
            }
        }


    }, [selectedRecent, recents])




    return (
        <>
        
            <Content>

                <Header onSearch={(e) => handleSearch(e)} />
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


                    {recents.length > 0 ?
                        <FilesGrid >
                            {

                                recents.map((file, index) =>
                                    <File key={index} file={file} onClick={(e, file) => {

                                        markDocAsActive(file._id)
                                        dispatch(setSelectedRecent(file))
                                        // setSelectedDoc(file);
                                    }} />
                                )

                            }

                        </FilesGrid>

                        : (

                            <div className="documents-empty">
                                <PiFolderOpenBold className='empty-icon' size={50} />
                                <p>No Recent Document Found</p>
                            </div>
                        )
                    }

                </Body>
            </Content>

            <Drawer title='File Preview'>
                {
                    selectedRecent ? (<>

                        <div className='panel-preview-file-icon'>
                            {fileIcon(selectedRecent.ext)}
                        </div>
                        <div className="panel-preview-file-name-size">
                            <h4 className='panel-preview-file-name'>{selectedRecent.name}</h4>
                            <span className='panel-preview-file-size'> {_file_size(selectedRecent.size)}</span>
                        </div>

                        <div className='section-divider '></div>
                        <div className='preview-file-detail'>
                            <h4>Title</h4>
                            <p>{selectedRecent.title}

                            </p>
                        </div>
                        <div className='preview-file-detail'>
                            <h4>File Decription</h4>
                            <p>{selectedRecent.description}

                            </p>
                        </div>
                        <div className='preview-file-detail'>
                            <h4>Uploaded On</h4>
                            <p>
                                {moment(selectedRecent.created_at).format('LLLL')}

                            </p>
                        </div>
                        <div className='preview-file-detail'>
                            <h4>Last Update</h4>
                            <p>{moment(selectedRecent.updated_at).format('LLLL')}

                            </p>
                        </div>
                      

                        <div className='section-divider '></div>

                        <div className="preview-file-actions">
                            <h4 className="preview-file-title">Get Access</h4>

                            {emailFeedback ? <Feedback type={emailFeedback.type} message={emailFeedback.message} /> : null}
                            <div className="preview-file-action mg-t-20" onClick={() => handleEmailDocument(selectedRecent._id)}>
                                <div className="action-icon-wrapper share">
                                    <GoShare />
                                </div>
                                <span>Share with me<br />
                                    <span>{user?.email}</span>

                                </span>
                            </div>
                            <div className="preview-file-action" onClick={() => handleDownloadDocument(selectedRecent._id)} >
                                <div className="action-icon-wrapper download">
                                    <GoDownload />
                                </div>
                                <span >Download


                                </span>
                            </div>
                        </div>


                    </>) : <div className="no-doc-selected">No document Selected</div>
                }
            </Drawer>

        </>
    )
}

export default Recent