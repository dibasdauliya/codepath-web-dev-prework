import React, { useState } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

interface CreatorData {
    name: string;
    title: string;
    description: string;
    insta: string;
    twitter: string;
    youtube: string;
}

interface CreatorFormProps {
    title: string;
    creatorData?: CreatorData;
}

export default function CreatorForm({
    title,
    creatorData
}: CreatorFormProps) {
    const [details, setDetails] = useState(creatorData || {
        name: '',
        title: '',
        description: '',
        insta: '',
        twitter: '',
        youtube: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <div className='container'>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name
                    <input type="text" value={details.name} onChange={e => setDetails({ ...details, name: e.target.value })} />
                </label>

                <label htmlFor="title">Title
                    <input type="text" value={details.title} onChange={e => setDetails({ ...details, title: e.target.value })} />
                </label>

                <label htmlFor="description">Description
                    <textarea value={details.description} onChange={e => setDetails({ ...details, description: e.target.value })} />
                </label>

                <label htmlFor="insta">Instagram <FaInstagram />
                    <input placeholder='@username' type="text" value={details.insta} onChange={e => setDetails({ ...details, insta: e.target.value })} />
                </label>

                <label htmlFor="twitter">Twitter <FaTwitter />
                    <input placeholder='@username' type="text" value={details.twitter} onChange={e => setDetails({ ...details, twitter: e.target.value })} />
                </label>

                <label htmlFor="youtube">YouTube <FaYoutube />
                    <input placeholder='@username' type="text" value={details.youtube} onChange={e => setDetails({ ...details, youtube: e.target.value })} />
                </label>

                <button type="submit">Update Creator</button>
            </form>
        </div>
    )
}