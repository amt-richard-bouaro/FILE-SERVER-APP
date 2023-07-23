


type childrenType = {
  children: React.ReactNode
}


export const Body = ({ children }: childrenType)=>{

  return (
    <div className='content-body'>
      {children}
    </div>
  )
}



const Content = ({ children }: childrenType) =>{


return (

               <div className='contents'>
                {children}
               </div>



)

}


export default Content;
