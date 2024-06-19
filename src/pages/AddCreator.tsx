import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import CreatorForm from '../components/Form';
import { CreatorData } from '../creatorTypes';

export default function AddCreator() {

    const navigate = useNavigate();

    async function handleSubmit(formData: CreatorData) {
        console.log('Form data:', formData);
        const res  = await supabase.from('creators').insert(formData)
        // console.log('Supabase response:', res)
        if (res.status === 201) {
            alert('Creator added successfully')
            navigate('/')
        } else {
            // console.log('Supabase response:', res)
            alert('There was an error adding the creator')
        }
    }

    return (
        <CreatorForm title='Add' handleSubmit={handleSubmit} />
    )
}