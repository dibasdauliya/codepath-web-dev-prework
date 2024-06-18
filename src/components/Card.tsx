import React from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";


export default function Card() {
    const navigate = useNavigate();

    const handleEdit = () => {
        console.log('Edit')
        navigate('/edit')
    }
    return (
        <article style={{ width: "300px" }}>
            <header className='flex justify-between flex-wrap'>
                <div className='flex flex-col gap-2'>
                    <img src="https://via.placeholder.com/150" alt="placeholder" />
                    <a href="">
                        <strong>
                            Robert Denero
                        </strong>
                    </a>
                    <p>
                        YouTuber
                    </p>
                </div>
                <div className='flex gap-2 align-center'>
                    <button onClick={handleEdit}>Edit</button>
                    <button>Delete</button>
                </div>
            </header>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ea laborum nam facilis provident doloremque veritatis sit, fugiat consequuntur praesentium?
            <footer className='flex gap-2'>
                <a href="">
                    <FaInstagram />
                </a>
                <a href="">
                    <FaTwitter />
                </a>
                <a href="">
                    <FaYoutube />
                </a>
            </footer>
        </article>
    )
}
