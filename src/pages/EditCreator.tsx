import { useLoaderData } from 'react-router-dom';
import { supabase } from '../client';
import CreatorForm from '../components/Form';

// https://reactrouter.com/en/6.23.1/start/tutorial#url-params-in-loaders
export async function loader({ params }: { params: { creatorID?: string } }) {
    const creator = await supabase.from('creators').select('*').eq('id', params.creatorID).single()
    return { creator }
}

export default function EditCreator() {

    // @ts-ignore
    const { creator } = useLoaderData()

    if (creator.error || creator.status !== 200) {
        return <div>There was an error loading the data</div>
    }



    return (
        <CreatorForm title='Edit' creatorData={creator.data} />
    )
}