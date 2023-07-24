import { useEffect, useState } from 'react'
import { AiOutlineTable } from "react-icons/ai";

import { PiListFill, PiSquaresFourBold, PiFolderSimpleBold, PiCaretDownBold, PiFileDashedBold } from "react-icons/pi";

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'

import Content, { Body } from '../../layouts/component/Content';

import Header from '../../layouts/component/Header';
import { FieldGroup } from '../../compnents/form-input';
import Button from '../../compnents/button';
import { DOC_INFO } from './types';



const NewFile = () => {

  const [file, setFile] = useState<File | null>(null)
  
  const { register, handleSubmit, formState: { errors } } = useForm<DOC_INFO>({
    resolver: zodResolver(DOC_INFO)
  });


  const handleFileSubmit:SubmitHandler<DOC_INFO> = async(data) => {
    const fileAccepted = document.getElementById('fileAccepted')!

    
    try {

      if (file === null) {
        fileAccepted.innerText = 'File not uploaded'
        fileAccepted.classList.add('danger')
        throw new Error('File not uploaded')
      }

      console.log(data, file);
      
    } catch (error) {

      console.log(error);
      
    }

   
    

  }



useEffect(() => {
  
  const droparea = document.getElementById('file-drop-area')
  const fileAccepted = document.getElementById('fileAccepted')!

  const fileReceiver = document.getElementById('doc')! as HTMLInputElement


  
  
  const active = () => {
    droparea?.classList.add('file-drop-active');
  }

  const inActive = () => {
    droparea?.classList.remove('file-drop-active');
  }

  const preventDefault = (e: Event) => e.preventDefault();

  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(event => {
    droparea?.addEventListener(event, preventDefault)
  });

  ['dragenter', 'dragover'].forEach(event => {
    droparea?.addEventListener(event, active)
  });

  ['dragleave', 'drop'].forEach(event => {
    droparea?.addEventListener(event, inActive)
  });

  droparea?.addEventListener('drop', handleDrop)

  function handleDrop(e: DragEvent) {
    const dt = e.dataTransfer;

    const files = dt?.files;

    if (files) {
      // console.log(files[0]);
      
        setFile(files[0])
      fileAccepted.innerText = `${files[0].name}`
      fileAccepted.classList.add('success')
    }
   

  }

  

  if (fileReceiver) {
    fileReceiver.addEventListener('change', handleFileSelect);
  }
  function handleFileSelect(e: Event) {
    
    const fileReceiver = e.target as HTMLInputElement;

    const selectedFile = fileReceiver.files?.[0];


    if (selectedFile) {
      setFile(selectedFile)
      // console.log(selectedFile);
      fileAccepted.innerText = `${selectedFile.name}`
      fileAccepted.classList.add('success')
    }
  }

}, [])


  return (
    <Content>

      <Header />
      <Body>


        <div className="breadcrumb">
          <div className="breadcrumb-left-items">
            <div className="breadcrumb-left-item addon">
              <PiFolderSimpleBold /><PiCaretDownBold />
            </div>
            <span>New File</span>

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

        <form onSubmit={handleSubmit(handleFileSubmit)} className="new-file-form-wrapper" id='newFileForm'>
          <label className="form-file-upload" id="file-drop-area" htmlFor='doc'>
            <input type="file" id="doc" style={{display:'none'}} />
            <PiFileDashedBold size={35}/>
            <p>Drop file here</p>
            <span><PiFileDashedBold size={15} /> <span id='fileAccepted'>  </span> </span>
          </label>
          <div className="form-title-desc">
            <FieldGroup label="File Title" id="title">
              <input type="text" className='form-title-desc field-input' {...register('title')} />
              {errors.title &&
                <span className='field-validation'>
                  {errors.title?.message}
                </span>}
            </FieldGroup>
            <FieldGroup label="Description" id="description">
              <textarea id="" {...register('description')} className='field-textarea'></textarea>
              {errors.description &&
                <span className='field-validation'>
                  {errors.description?.message}
                </span>}
            </FieldGroup>
            <Button
              className='btn btn-primary'
              text='Save File'
              id='new_file_submit'
              type="submit"
              form="newFileForm"
            />
          </div>
        </form>

      </Body>
    </Content>
  )
}

export default NewFile