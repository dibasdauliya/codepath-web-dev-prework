import React, { useState } from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { CreatorData } from '../creatorTypes';
import { FaXTwitter } from 'react-icons/fa6';

interface CreatorFormProps {
    title: string;
    creatorData?: CreatorData;
    handleSubmit: (formData: CreatorData) => void;
}

export default function CreatorForm({
    title,
    creatorData,
    handleSubmit
}: CreatorFormProps) {
    const [details, setDetails] = useState(creatorData || {
        name: '',
        title: '',
        description: '',
        instagram: '',
        twitter: '',
        youtube: '',
        imageURL: ''
    });

    function handleFormSubmit(e: React.FormEvent) {
        e.preventDefault();
        handleSubmit(details);
    }

    return (
        <div className='container'>
            <h1>{title}</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Name
                    <input required name='name' type="text" value={details.name} onChange={e => setDetails({ ...details, name: e.target.value })} />
                </label>

                <label htmlFor="title">Title
                    <input required name='title' type="text" value={details.title} onChange={e => setDetails({ ...details, title: e.target.value })} />
                </label>

                <label htmlFor="description">Description
                    <textarea required name='description' value={details.description} onChange={e => setDetails({ ...details, description: e.target.value })} />
                </label>

                <label htmlFor="imageURL">Image URL
                    <input required name='imageURL' type="text" value={details.imageURL} onChange={e => setDetails({ ...details, imageURL: e.target.value })} />
                </label>

                <label htmlFor="instagram">Instagram <FaInstagram />
                    <input name='instagram' placeholder='@username' type="text" value={details.instagram} onChange={e => setDetails({ ...details, instagram: e.target.value })} />
                </label>

                <label htmlFor="twitter">X (formally Twitter) <FaXTwitter />
                    <input name='twitter' placeholder='username' type="text" value={details.twitter} onChange={e => setDetails({ ...details, twitter: e.target.value })} />
                </label>

                <label htmlFor="youtube">YouTube <FaYoutube />
                    <input name='youtube' placeholder='@username' type="text" value={details.youtube} onChange={e => setDetails({ ...details, youtube: e.target.value })} />
                </label>

                <button type="submit">{details.id ? "Update" : "Add"} Creator</button>
            </form>
        </div>
    )
}