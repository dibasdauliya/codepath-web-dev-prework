import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link, useNavigate } from "react-router-dom";
import { CreatorData } from '../creatorTypes';
import { supabase } from '../client';


export default function Card({
    name, title, description, instagram, twitter, youtube, imageURL, id
}: CreatorData) {
    const navigate = useNavigate();

    function handleEdit() {
        navigate(`/edit/${id}`)
    }

    async function handleDelete() {
        if (confirm('Are you sure you want to delete this creator?')) {

            const res = await supabase.from('creators').delete().eq('id', Number(id))
    
            if (res.status === 204) {
                alert('Creator deleted successfully')
                navigate('/')
            } else {
                alert('There was an error deleting the creator')
             }
        }
    }

    return (
        <article style={{ width: "300px" }}>
            <header className='flex justify-between flex-wrap'>
                <div className='flex flex-col gap-2'>
                    <img src={imageURL} alt={name} style={{ width: "100%" }} />
                    <Link to={`/creator/${id}`}>
                        <strong>
                            {name}
                        </strong>
                    </Link>
                    <p>
                        {title}
                    </p>
                </div>
                <div className='flex gap-2 align-center'>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </header>
            <p>
                {description}
            </p>
            <footer className='flex gap-2'>
                {
                    instagram &&
                    <a href={`https://instagram.com/${instagram}`}>
                        <FaInstagram />
                    </a>
                }
                {
                    twitter &&
                    <a href={`https://twitter.com/${twitter}`}>
                        <FaTwitter />
                    </a>
                }
                {
                    youtube &&
                    <a href={`https://youtube.com/${youtube}`}>
                        <FaYoutube />
                    </a>
                }
            </footer>
        </article>
    )
}
