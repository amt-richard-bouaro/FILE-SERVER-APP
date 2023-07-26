import { _file_size } from "./utils";


export interface ErrorResponse {
  status: number;
  data: {
    code: string;
    message: string;
    stack: string;
  };
}


export type FILE_TYPE =   {
      _id: string,
    title: string,
    description: string,
    name: string,
    size: number,
    downloaded_count: number,
    emailed_count: number,
    ext:string,
    created_at: string,
    updated_at: string,
               
            }


