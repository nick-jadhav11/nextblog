import React, { useState } from 'react'
import BlogItem from './BlogItem'
import blog_data from '@/Assets/blog_data'

const BlogList = () => {

    const [menu, setMenu] = useState("All")
      
  return (
    <div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {blog_data.filter((item)=> menu==="All"?true:item.category===menu).map((item,index)=>{
                return <BlogItem key={index} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category} />
            })}
        </div>
    </div>
  )
}

export default BlogList