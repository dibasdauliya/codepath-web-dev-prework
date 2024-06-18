import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { CreatorData } from '../creatorTypes';


export default function Card({
    name, title, description, instagram, twitter, youtube, imageURL, id
}: CreatorData) {
    const navigate = useNavigate();

    function handleEdit(id: number) {
        navigate(`/edit/${id}`)
    }
    return (
        <article style={{ width: "300px" }}>
            <header className='flex justify-between flex-wrap'>
                <div className='flex flex-col gap-2'>
                    <img src={imageURL} alt={name} style={{ width: "100%" }} />
                    <a href={`/creator/${id}`}>
                        <strong>
                            {name}
                        </strong>
                    </a>
                    <p>
                        {title}
                    </p>
                </div>
                <div className='flex gap-2 align-center'>
                    <button onClick={() => handleEdit(id)}>Edit</button>
                    <button>Delete</button>
                </div>
            </header>
            <p>
                {description}
            </p>
            <footer className='flex gap-2'>
                <a href={`https://instagram.com/${instagram}`}>
                    <FaInstagram />
                </a>
                <a href={`https://twitter.com/${twitter}`}>
                    <FaTwitter />
                </a>
                <a href={`https://youtube.com/${youtube}`}>
                    <FaYoutube />
                </a>
            </footer>
        </article>
    )
}
