import React from 'react'

const Backdrop = (props)=>{
    return(
        <div onClick={props.onExitBackdrop} className='fixed top-0 w-full h-[100vh] bg-[#00000040] z-10'>
        </div>
    );
}

export default Backdrop;