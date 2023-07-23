// import React from 'react'
import cloudLoading from '../../assets/gifs/cloud-loading.gif'

function Loading() {
  return (
      <div className='loading-container'>
          <img src={cloudLoading} alt="" className='loading-img' />
    </div>
  )
}

export default Loading