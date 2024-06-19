import { useLoaderData, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import CreatorForm from '../components/Form';
import { CreatorData } from '../creatorTypes';

// https://reactrouter.com/en/6.23.1/start/tutorial#url-params-in-loaders
export async function loader({ params }: { params: { creatorID?: string } }) {
    const creator = await supabase.from('creators').select('*').eq('id', params.creatorID).single()
    return { creator }
}

export default function EditCreator() {

    // @ts-ignore
    const { creator } = useLoaderData()

    const navigate = useNavigate();

    if (creator.error || creator.status !== 200) {
        return <div>There was an error loading the data</div>
    }

    async function handleSubmit(formData: CreatorData) {
        const {id, ...data} = formData
        const res = await supabase.from('creators').update(data).eq('id', id)
        if (res.status === 204) {
            alert('Creator updated successfully')
            navigate('/creator/' + id)
        } else {
            console.log('Supabase response:', res)
            alert('There was an error updating the creator')
        }
    }

    return (
        <CreatorForm title='Edit' creatorData={creator.data} handleSubmit={handleSubmit}/>
    )
}