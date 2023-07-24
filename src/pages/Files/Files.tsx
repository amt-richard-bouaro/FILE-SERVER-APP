import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'
import { useDocumentsMutation } from '../../redux/slices/docsApiSlice';

import { AiOutlineTable } from "react-icons/ai";
import { BsFillFileEarmarkWordFill } from "react-icons/bs";
import { GoDownload, GoShare } from "react-icons/go";
import { PiListFill, PiSquaresFourBold, PiFolderSimpleBold, PiCaretDownBold, } from "react-icons/pi";

import Content, { Body } from '../../layouts/component/Content';
import Header from '../../layouts/component/Header';
import Drawer from '../../layouts/component/Drawer';
import FilesGrid, { File } from '../../compnents/FilesGrid';
import { DOCS_TYPE } from './types';
import { _file_size } from '../../utils';
import { drawer } from '../../layouts/layoutScript';
import { RootState } from '../../redux/store/store';

const data = [
    {
        "_id": "94724387-687b-48e1-adfc-21b38fee4894",
        "title": "LCF-10842: Different you different me",
        "description": "Everyone is different in their own way",
        "name": "LCF-10842-gctu.jpg",
        "size": 21133,
        "downloaded_count": 0,
        "emailed_count": 0,
        "user_id": "1abd52de-d7b5-48e9-b03b-be56ab07eb2a",
        "location": "src\\Uploads\\LCF-10842-gctu.jpg",
        "created_at": "2023-07-18T18:45:42.941Z",
        "updated_at": "2023-07-18T18:45:42.941Z",
        "mime_type": "image/jpeg"
    },
    {
        "_id": "c45428fa-8ff9-438e-9746-d6e11649751e",
        "title": "LCF-64055: Different you different me",
        "description": "Everyone is different in their own way",
        "name": "LCF-64055-Introduction to Java Programming.pptx",
        "size": 1475702,
        "downloaded_count": 0,
        "emailed_count": 0,
        "user_id": "1abd52de-d7b5-48e9-b03b-be56ab07eb2a",
        "location": "src\\Uploads\\LCF-64055-Introduction to Java Programming.pptx",
        "created_at": "2023-07-18T18:45:25.386Z",
        "updated_at": "2023-07-18T18:45:25.386Z",
        "mime_type": "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    },
    {
        "_id": "7233d4d1-749b-43cc-b6ba-29d6dc48564a",
        "title": "LCF-81472: Different you different me",
        "description": "Everyone is different in their own way",
        "name": "LCF-81472-word.docx",
        "size": 52314,
        "downloaded_count": 0,
        "emailed_count": 0,
        "user_id": "1abd52de-d7b5-48e9-b03b-be56ab07eb2a",
        "location": "src\\Uploads\\LCF-81472-word.docx",
        "created_at": "2023-07-18T18:44:49.527Z",
        "updated_at": "2023-07-18T18:44:49.527Z",
        "mime_type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    },
    {
        "_id": "666257ce-4d45-4b0c-8dc6-8df5b3b5000f",
        "title": "LCF-84351: Different you different me",
        "description": "Everyone is different in their own way",
        "name": "LCF-84351-tut.pdf",
        "size": 1272254,
        "downloaded_count": 0,
        "emailed_count": 0,
        "user_id": "1abd52de-d7b5-48e9-b03b-be56ab07eb2a",
        "location": "src\\Uploads\\LCF-84351-tut.pdf",
        "created_at": "2023-07-18T18:43:34.448Z",
        "updated_at": "2023-07-18T18:43:34.448Z",
        "mime_type": "application/*"
    },
    {
        "_id": "0d24b662-deda-45a9-80b2-0116cc709b6e",
        "title": "LCF-59764: Different you different me",
        "description": "Everyone is different in their own way",
        "name": "LCF-59764-wallpaperflare.com_wallpaper (2).jpg",
        "size": 190997,
        "downloaded_count": 0,
        "emailed_count": 0,
        "user_id": "1abd52de-d7b5-48e9-b03b-be56ab07eb2a",
        "location": "src\\Uploads\\LCF-59764-wallpaperflare.com_wallpaper (2).jpg",
        "created_at": "2023-07-18T05:03:30.956Z",
        "updated_at": "2023-07-18T18:15:32.636Z",
        "mime_type": "image/jpeg"
    },
    {
        "_id": "42637310-5f21-40da-9b14-92ab4d74c66a",
        "title": "LCF-68274: something makes me laugh",
        "description": "describing something laughing",
        "name": "LCF-68274-wallpaperflare.com_wallpaper (2).jpg",
        "size": 190997,
        "downloaded_count": 0,
        "emailed_count": 0,
        "user_id": "1abd52de-d7b5-48e9-b03b-be56ab07eb2a",
        "location": "src\\Uploads\\LCF-68274-wallpaperflare.com_wallpaper (2).jpg",
        "created_at": "2023-07-18T05:02:37.635Z",
        "updated_at": "2023-07-18T18:15:32.636Z",
        "mime_type": "image/jpeg"
    },
    {
        "_id": "f2fde312-c23c-4ff9-b765-7d10a64b7dc0",
        "title": "LCF-60825:Just checking how it works",
        "description": "Description too has been modified for no reason. AH!",
        "name": "LCF-60825-wallpaperflare.com_wallpaper (2).jpg",
        "size": 190997,
        "downloaded_count": 0,
        "emailed_count": 0,
        "user_id": "1abd52de-d7b5-48e9-b03b-be56ab07eb2a",
        "location": "src\\Uploads\\LCF-60825-wallpaperflare.com_wallpaper (2).jpg",
        "created_at": "2023-07-18T03:16:59.851Z",
        "updated_at": "2023-07-18T18:15:32.636Z",
        "mime_type": "image/jpeg"
    }
]

const Files = () => {

    const navigate = useNavigate();

    const [getDocuments, { isLoading, isSuccess }] = useDocumentsMutation();

    const [documents, setDocuments] = useState<DOCS_TYPE[] | null>(null)

    const [selectedDoc, setSelectedDoc] = useState<DOCS_TYPE | null>(null);

    const { user } = useSelector((state: RootState) => state.auth);
    

    const docs = async () => {

        try {

            const docArray = await getDocuments({}).unwrap();

            console.log(docArray);


        } catch (error) {
            console.log(error);

        }

    }

   
    const markDocAsActive = (_id:string) => {
        const doc = document.getElementById(_id)! as HTMLDivElement;
        const docs = document.querySelector('.file-card.active');
        const panel = document.getElementById('side-information-panel')! as HTMLDivElement

       if (docs) {
        docs.classList.remove('active');
       }
       if (doc) {
        doc.classList.add('active');
        }
        
        panel.style.right = '0px';

        localStorage.setItem('s_doc', JSON.stringify({_id}));
        
    }

    useEffect(() => {      
        
        const s_doc = localStorage.getItem('s_doc');

        if (typeof s_doc === 'string') {

            const previousSelectedDoc =  JSON.parse(s_doc);

            const doc = data.filter(d => d._id === previousSelectedDoc._id);
            if (doc.length > 0) {
                setSelectedDoc(doc[0]);
                markDocAsActive(doc[0]._id)
            }
        }

        

       
       
        docs();
        drawer();

    }, [])


    return (
        <>
            <div className="modal-overlay">
                <div className="modal">
                    <div className="modal-title">Edit </div>
                    <div className="section-divider"></div>
                    <div className="modal-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur sed esse vel molestias voluptates in est cupiditate! Consectetur, asperiores!
                    </div>
                    <div className="section-divider"></div>
                    <div className="modal-footer">
                        <button id='btn'>Cancel</button>
                        
                    </div>
                </div></div>
            <Content>
 
                <Header />
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

                   
                    

                    <FilesGrid >
                        {

                            data.map((file, index) =>
                                <File key={index} file={file} onClick={(e, file) => {
                                    // console.log(e, file);
                                markDocAsActive(file._id)
                                setSelectedDoc(file);   
                                }} />
                            )
                        }

                    </FilesGrid>
                </Body>
            </Content>

            <Drawer title='File Preview'>
                {
                    selectedDoc ? (<>
             
                        <div className='panel-preview-file-icon'>
                            <BsFillFileEarmarkWordFill />
                        </div>
                        <div className="panel-preview-file-name-size">
                            <h4 className='panel-preview-file-name'>{selectedDoc.name}</h4>
                            <span className='panel-preview-file-size'> {_file_size(selectedDoc.size)}</span>
                        </div>

                        <div className='section-divider '></div>
                        <div className='preview-file-detail'>
                            <h4>Title</h4>
                            <p>{selectedDoc.title}

                            </p>
                        </div>
                        <div className='preview-file-detail'>
                            <h4>File Decription</h4>
                            <p>{selectedDoc.description}

                            </p>
                        </div>
                        <div className='preview-file-detail'>
                            <h4>Uploaded On</h4>
                            <p>Monday 20th December 2023

                            </p>
                        </div>
                        <div className='preview-file-detail'>
                            <h4>Last Update</h4>
                            <p>Monday 20th December 2023

                            </p>
                        </div>

                        <div className='section-divider '></div>

                        <div className="file-download-email-stats">
                        <div className="stats">
                                <div className="stats-item">
                                    Downloads <span>{selectedDoc.downloaded_count}</span>
                                </div>   
                            </div>
                            <div className="stats">
                                <div className="stats-item">
                                    Email requests <span>{selectedDoc.emailed_count}</span>
                                </div>
                            </div>
                        </div>

                        <div className='section-divider '></div>

                        <div className="preview-file-actions">
                            <h4 className="preview-file-title">Get Access</h4>
                            <div className="preview-file-action">
                                <div className="action-icon-wrapper share">
                                    <GoShare />
                                </div>
                                <span>Share with me<br />
                                    <span>{user?.email}</span>

                                </span>
                            </div>
                            <div className="preview-file-action">
                                <div className="action-icon-wrapper download">
                                    <GoDownload />
                                </div>
                                <span>Download


                                </span>
                            </div>
                        </div>
                        <div className='section-divider '></div>
                        <div className="preview-file-actions" id=''>
                            <h4 className="preview-file-title">More</h4>
                            <div className="preview-file-action">
                                <div className="action-icon-wrapper share">
                                    <GoShare />
                                </div>
                                <span>Edit

                                </span>
                            </div>
                            <div className="preview-file-action mg-t-20">
                                <div className="action-icon-wrapper download delete-bg">
                                    <GoDownload />
                                </div>
                                <span>Delete File

                                </span>
                            </div>
                        </div>
                    
                    
                    </>) : null
                 }       
            </Drawer>

        </>
    )
}

export default Files