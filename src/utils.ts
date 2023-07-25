

export const _file_size = (rawSize:number) : string => {
    
    if (rawSize < (1024 * 1024)) {
        let qoutient = Math.floor(rawSize / 1024);
        // let reminder = Math.round(rawSize % 1024);

        // if (reminder === 0) { 
        //     return `${qoutient} KB`;
        // }

        return `${qoutient} KB`;
        
    }

      if (rawSize < (1024 * 1024 * 1024)) {
        let qoutient = Math.floor(rawSize / (1024 * 1024));
        // let reminder = Math.round(rawSize % (1024*1024));
        return `${qoutient} MB`;
        
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