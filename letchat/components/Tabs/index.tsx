import React from 'react'

const index = () => {
  return (
       
 <div className="tabs items-center justify-around">
 <a
   className={`font-bold h-full text-xl text-black tab tab-lifted active:tab-active active:text-white mr-2`}
 >
   Completed
 </a>
 <a className={`font-bold h-full text-xl text-black tab tab-lifted active:tab-active active:text-white`}>
   In Progress
 </a>
</div>
  )
}

export default index