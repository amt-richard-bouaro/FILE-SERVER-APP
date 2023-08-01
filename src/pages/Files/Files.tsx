import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useDocumentsMutation, useDeleteMutation, useUpdateMutation, useDownloadMutation, useSearchMutation, useEmailMutation } from '../../redux/slices/docsApiSlice';
import { setDocuments, setSelectedDocument, clearSelectedDocument } from '../../redux/slices/docsSlice';

import { AiOutlineTable } from "react-icons/ai";
import { BsFillFileEarmarkWordFill } from "react-icons/bs";
import { GoDownload, GoShare, GoPencil } from "react-icons/go";
import { PiListFill, PiSquaresFourBold, PiFolderSimpleBold, PiCaretDownBold, PiFolderOpenBold } from "react-icons/pi";

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'

import Content, { Body } from '../../layouts/component/Content';
import Header from '../../layouts/component/Header';
import Drawer from '../../layouts/component/Drawer';
import FilesGrid, { File } from '../../compnents/FilesGrid';
import { DOCS_TYPE } from './types';
import { _extractTitle, _file_size, determineFileType } from '../../utils';
// import { drawer } from '../../layouts/layoutScript';
import { RootState } from '../../redux/store/store';
import Button from '../../compnents/button';
import { DOC_INFO } from '../NewFile/types';
import { FieldGroup } from '../../compnents/form-input';

import moment from 'moment';
import Feedback from '../../compnents/FeedBacks';
import { IconType } from 'react-icons/lib';


const fileIcon = (ext: string) => { 
    const t = determineFileType(ext)

    return <t.icon/>
}


const Files = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [getDocuments] = useDocumentsMutation();

    const [updateDocuments] = useUpdateMutation();
    const [deleteDocument] = useDeleteMutation();
    const [downloadDocument] = useDownloadMutation();
    const [searchDocument] = useSearchMutation();
    const [emailDocument] = useEmailMutation();
    // const [documents, setDocuments] = useState<DOCS_TYPE[]>([])

    const [emailDownloadFeedback, setEmailDownloadFeedback] = useState<{type: 'error'|'success', message:string} | null>(null);

    const [feedback, setFeedback] = useState<{type:'error'|'success', message:string} | null>(null);

    const [allowEdit, setAllowEdit] = useState(false)

    const { user } = useSelector((state: RootState) => state.auth);

    const { selectedDocument, documents } = useSelector((state: RootState) => state.documents);


    const { register, handleSubmit,setValue, formState: { errors } } = useForm<DOC_INFO>({
        resolver: zodResolver(DOC_INFO)
    });

    

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

        localStorage.setItem('s_doc', JSON.stringify({ _id }));

      
    }


    const handleEditFileSubmit: SubmitHandler<DOC_INFO> = async (data) => {

        try {


            const docID = selectedDocument?._id

            if (typeof docID !== "undefined") {

                const response = await updateDocuments({ data, _id: docID }).unwrap();

                if (response.code === 'DOCUMENT_MODIFIED') {
                    setFeedback({ type: 'success', message: response.message })
                    
                    setTimeout(() => {
                        setFeedback(null);
                    }, 5000);
                } else {
                    setFeedback({ type: 'error', message: response.message })
                }

                
                markDocAsActive(docID);
                setAllowEdit(false);

                const updatedDocuments = documents.map(doc => 

                    doc._id === docID ? {...doc, title:`${doc.title.slice(0, 10)} ${data.title}`, description:data.description} : doc
                )

                dispatch(setDocuments(updatedDocuments))


            }
            
            

        } catch (error) {

        setFeedback({ type: 'error', message: 'Error: Something went wrong' })

        }




    }

    const handleDeleteFileSubmit = async (_id: string) => {
        try {
            
            const response = await deleteDocument(_id).unwrap();
            

            const newDocuments = documents.filter(d=>d._id !== _id);
            dispatch(setDocuments(newDocuments));
            dispatch(clearSelectedDocument());

        } catch (error) {
            console.log(error);
            
        }

    }


    const handleDownloadDocument = async (_id:string) => {
        
        const response = await downloadDocument(_id) 
        console.log(response);
        
        
    }
    const handleEmailDocument = async (_id:string) => {
        
        const response = await emailDocument(_id).unwrap();

       
           setEmailDownloadFeedback({ type: response.code === 'DOCUMENT_SENT_TO_MAIL'?'success':'error', message: response.message });

           setTimeout(() => {
            setEmailDownloadFeedback(null)
           }, 5000);
     
        
    }

    const handleSearch = async (e:React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value);
try {
   dispatch(clearSelectedDocument());

        let val = e.target.value;

        const response = await searchDocument({search:val}).unwrap();

        dispatch(setDocuments(response.data));  
} catch (error) {

    console.log(error);
    
    
}
        
        
    }

    const docs = async () => {

        try {

            const docArray = await getDocuments({}).unwrap();


            if (docArray.data) {
                 dispatch(setDocuments(docArray.data)) 
            }
         
            
        } catch (error) {
            console.log(error);

        }

    }


    useEffect(() => {
        docs();
      
    }, []);

   

    useEffect(() => {

        const s_doc = localStorage.getItem('s_doc');

        if (s_doc) {

            const previousSelectedDoc = JSON.parse(s_doc);

            const docs = documents.filter(d => d._id === previousSelectedDoc._id);
            
            
            if (docs.length > 0) {

                let doc = docs[0];
                setValue('title', _extractTitle(doc.title));
                setValue('description', doc.description);
                dispatch(setSelectedDocument(doc))
                // setSelectedDoc(doc);
                markDocAsActive(doc._id)
            }
        }

        console.log('2 useeffects');
        


    }, [documents, selectedDocument, setValue])

    let t;


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

                <Header onSearch={(e)=>handleSearch(e)} />
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

                    
        {documents.length > 0 ?
                    <FilesGrid >
                        {
                            
                            documents.map((file, index) =>
                                <File key={index} file={file} onClick={(e, file) => {
                                   
                                    markDocAsActive(file._id)
                                    setAllowEdit(false);
                                    setValue('title', _extractTitle(file.title));
                                    setValue('description', file.description);
                                    dispatch(setSelectedDocument(file))
                                    // setSelectedDoc(file);
                                }} />
                                ) 
                                
                        }

                        </FilesGrid>
                        
                        : (

                            <div className="documents-empty">
                                <PiFolderOpenBold className='empty-icon' size={50}/>
                                <p>No Available Document Found</p>
                            </div>
                        )
                    }

                </Body>
            </Content>

            <Drawer title='File Preview'>
                {
                    selectedDocument ?  ( <>

                        <div className='panel-preview-file-icon'>
                            {fileIcon(selectedDocument.ext)}
                        </div>
                        <div className="panel-preview-file-name-size">
                            <h4 className='panel-preview-file-name'>{selectedDocument.name}</h4>
                            <span className='panel-preview-file-size'> {_file_size(selectedDocument.size)}</span>
                        </div>

                        <div className='section-divider '></div>
                        <div className='preview-file-detail'>
                            <h4>Title</h4>
                            <p>{selectedDocument.title}

                            </p>
                        </div>
                        <div className='preview-file-detail'>
                            <h4>File Decription</h4>
                            <p>{selectedDocument.description}

                            </p>
                        </div>
                        <div className='preview-file-detail'>
                            <h4>Uploaded On</h4>
                            <p>
                                {moment(selectedDocument.created_at).format('LLLL')}

                            </p>
                        </div>
                        <div className='preview-file-detail'>
                            <h4>Last Update</h4>
                            <p>{moment(selectedDocument.updated_at).format('LLLL')}

                            </p>
                        </div>
                        {
                            user.role === 'admin' && <>
                            
                            <div className='section-divider '></div>

                        <div className="file-download-email-stats">
                            <div className="stats">
                                <div className="stats-item">
                                    Downloads <span>{selectedDocument.downloaded_count}</span>
                                </div>
                            </div>
                            <div className="stats">
                                <div className="stats-item">
                                    Email requests <span>{selectedDocument.emailed_count}</span>
                                </div>
                            </div>
                        </div>
                            
                            </>
}
                        

                        <div className='section-divider '></div>

                        <div className="preview-file-actions">
                            <h4 className="preview-file-title">Get Access</h4>
                            
                            {emailDownloadFeedback ? <Feedback type={emailDownloadFeedback.type} message={emailDownloadFeedback.message} /> : null}
                            <div className="preview-file-action mg-t-20" onClick={() => handleEmailDocument(selectedDocument._id)}>
                                <div className="action-icon-wrapper share">
                                    <GoShare />
                                </div>
                                <span>Share with me<br />
                                    <span>{user?.email}</span>

                                </span>
                            </div>
                            <div className="preview-file-action" onClick={() => handleDownloadDocument(selectedDocument._id)} >
                                <div className="action-icon-wrapper download">
                                    <GoDownload  />
                                </div>
                                <span >Download


                                </span>
                            </div>
                        </div>

                        {
                        user.role === 'admin' &&  <>
                        <div className='section-divider '></div>
                        <section className="edit-file-section">
                            <div className="trigger-edit-wrapper" id='trigger-edit' onClick={()=>setAllowEdit(true)}>
                                <span>Edit This File </span>
                                <GoPencil id='trigger-edit'/>
                                    </div>
                                    
                                    {feedback ? <Feedback type={feedback.type} message={feedback.message} /> : null}
                            <form onSubmit={handleSubmit(handleEditFileSubmit)} className="edit-file-form-wrapper" id='editFileForm'>

                                <div className="form-title-desc">
                                            <FieldGroup label={allowEdit ? 'Title' : ''} id="editTitle">
                                        <input type="text"
                                            id="editTitle"
                                            placeholder='Enter file title'
                                            disabled={!allowEdit}
                                                    className='form-title-desc field-input ' {...register('title')} />
                                        {errors.title &&
                                            <span className='field-validation'>
                                                {errors.title?.message}
                                            </span>}
                                    </FieldGroup>
                                            <FieldGroup label={allowEdit ? 'Description':''} id="editDescription">
                                        <textarea id="editDescription" {...register('description')}
                                            placeholder='Provide file description'
                                            disabled={!allowEdit}
                                            className='panel field-textarea'></textarea>
                                        {errors.description &&
                                            <span className='field-validation'>
                                                {errors.description?.message}
                                            </span>}
                                    </FieldGroup>
                                    <Button
                                        className={`btn btn-primary ${!allowEdit ? 'btn-disabled' : ''}`}
                                        text='Update File'
                                        id='edit_file_submit'
                                        type="submit"
                                        form="editFileForm"
                                        // disabled={!allowEdit}
                                    />
                                </div>
                            </form>
                        </section>
                        <div className='section-divider '></div>
                        <Button
                            className='btn btn-delete'
                            text='Delete File'
                            id='delete_file_submit'
                            type="submit"
                            onClick={()=>handleDeleteFileSubmit(selectedDocument._id)}
                            /></>       
}


                    </>) : <div className="no-doc-selected">No document Selected</div>
                }
            </Drawer>

        </>
    )
}

export default Files