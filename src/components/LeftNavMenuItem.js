import React from 'react'

const LeftNavMenuItem = (props) => {
  // const { text, icon, className, action } = props;

  return (
    <div 
      className={"text-white text-text-sm cursor-pointer flex items-center h-12 px-4 mb-[1px] rounded-lg hover:bg-white/[0.15]"+ props.className}
      onClick={props.action}>
      <span className='text-xl mr-5'>
        {props.icon}
      </span>
      {props.text}
    </div>
  )
}
export default LeftNavMenuItem