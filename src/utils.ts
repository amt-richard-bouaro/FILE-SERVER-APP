import { GoFileDirectoryFill } from 'react-icons/go';
import { SiMicrosoftexcel,SiMicrosoftpowerpoint } from 'react-icons/si';
import { BsFillFileEarmarkWordFill,BsFileEarmarkPdf , BsFileEarmarkWord, BsFileEarmarkZip,BsFillFileEarmarkPdfFill} from 'react-icons/bs';
import { IconType } from 'react-icons/lib';

export const _file_size = (rawSize:number) : string => {
    
    if (rawSize < (1024 * 1024)) {
        let qoutient = Math.floor(rawSize / 1024);
        let reminder = Math.round(rawSize % 1024);

        if (reminder === 0) { 
            return `${qoutient} KB`;
        }

        const point = reminder.toString().split('')[0]

        return `${qoutient}.${point} KB`;
        
    }

      if (rawSize < (1024 * 1024 * 1024)) {
        let qoutient = Math.floor(rawSize / (1024 * 1024));
          let reminder = Math.round(rawSize % (1024 * 1024));
          
          if (reminder === 0) { 
            return `${qoutient} KB`;
        }

          const point = reminder.toString().split('')[0]
          
        return `${qoutient}.${point} MB`;
        
    }

     if (rawSize < (1024 * 1024 * 1024 * 1024)) {
        let qoutient = Math.floor(rawSize / (1024 * 1024 * 1024));
         let reminder = Math.round(rawSize % (1024 * 1024));
         
          if (reminder === 0) { 
            return `${qoutient} KB`;
        }

          const point = reminder.toString().split('')[0]
          
        return `${qoutient}.${point} GB`;
        
    }

return '0 KB';
}


export const _truncate = (text:string):string => {
    return text.length <= 50 ? text :`${text.slice(0, 50)}...`;
}


export const _extractTitle = (title: string): string => {
    
    const fileCode = title.slice(0, 10)
    const rest = title.slice(10, title.length);

    return rest

}

type determineFileTypeReturn = {
    icon: IconType;
    color: string;
    name: string;
}

export const determineFileType = (ext: string):determineFileTypeReturn => {
    
    switch (ext) {
        case 'doc':
        case 'docx':
           return {
                icon: BsFileEarmarkWord,
                color: '#FFFFFF',
                name:'Word'
            }
        case 'xlx':
        case 'xlsx':
           return {
                icon: SiMicrosoftexcel,
                color: '#FFFFFF',
                name:'Work Book'
            }
        case 'ppt':
        case 'pptx':
           return {
                icon: SiMicrosoftpowerpoint,
                color: '#FFFFFF',
                name:'Presentation'
            }
        case 'pdf':
           return {
                icon: BsFileEarmarkPdf,
                color: '#ffffff',
                name:'Pdf'
            }
        case 'zip':
           return {
                icon: BsFileEarmarkZip,
                color: '#FFFFFF',
                name:'Zip'
            }
    
        default:
            return {
                icon: GoFileDirectoryFill,
                color: '#FFFFFF',
                name:'Others'
            }
    }



}