// import React from 'react'
import cloudLoading from '../../assets/gifs/cloud-loading.gif'

// function Loading() {
//   return (
//       <div className='loading-container'>
//           <img src={cloudLoading} alt="" className='loading-img' />
//     </div>
//   )
// }
function Loading() {
  return (
      <div className='loading-card'>
      <div className="spinner">
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </div>
    </div>
  )
}

export default Loading