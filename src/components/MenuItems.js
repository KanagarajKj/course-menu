import React from 'react'

const MenuItems = ({ courseFilter,courseItems }) => {
  let menuitems = courseItems.map((course) => course.category)
 menuitems = ['All',...new Set(menuitems)]
  return (
       <div className='btn_container'>
        {menuitems.map((category,index)=>{
          return(
            <button className='menu_btn' key = {index} onClick = {()=>courseFilter(category)}>{category}</button>
          )
        })}
       </div>
  )
};

export default MenuItems