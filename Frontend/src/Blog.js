import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import Navbar from "./Components/header";
const Blog = () => {
    const navigate = useNavigate();
    const handleRead = () => {
     navigate("/single"); 
    }
    const posts = [
    {
      id: 1,
      title: "Test Blog 1",
      desc: "Content will come up soon",
      img: "https://media.istockphoto.com/id/1290220631/photo/human-heart-with-ecg-graph.jpg?s=1024x1024&w=is&k=20&c=HxtFwmThp5WeE5djC_hlpJeZDQlqqdqBHkPv1tWfJXo=",
    },
    {
      id: 2,
      title: "Test Blog 2",
      desc: "Content will come up soon",
      img: "https://media.istockphoto.com/id/1168199832/photo/close-up-of-a-cancer-cell-3d-illustration.jpg?s=1024x1024&w=is&k=20&c=kHrrBOXSSL6cwYUncoGDOGUDJqyrT-U5Dx5d7FhraXQ=",
    },
    {
      id: 3,
      title: "Test Blog 3",
      desc: "Content will come up soon",
      img: "https://media.istockphoto.com/id/1388994501/photo/human-lungs-healthcare-and-medical-abstract-background.jpg?s=1024x1024&w=is&k=20&c=d_1NRMTb9GTU_vtzTnedK9i1JxyUy792cVAU3TRBuXA=",
    },
    {
      id: 4,
      title: "Test Blog 4",
      desc: "Content will come up soon",
      img: "https://media.istockphoto.com/id/1288913695/photo/the-development-of-a-human-embryo-inside-the-womb-during-pregnancy-little-baby-3d-illustration.jpg?s=1024x1024&w=is&k=20&c=t1espgeY92qoh4a3kTTjO5aDl3CVchrOOZJ5oNt0bK0=",
    },
  ];

  return (
    <div className='blogs'>
        <Navbar></Navbar>
        <div className='posts'>
            {posts.map(post=>(
                <div className='post' key={post.id}>
                    <div className='img'>
                        <img src={post.img} alt='' />
                    </div>
                    <div className='content'>
                        <Link className='link' to={`/blog/${post.id}`}>
                        <h1>{post.title}</h1>
                        </Link>
                        <p>{post.desc}</p>
                        <button onClick={handleRead}>Read More</button>
                        </div>
                    </div>
            ))}
        </div>
    </div>
  )
}

export default Blog