import { Link, useLoaderData } from "react-router-dom";
import { supabase } from "../client"
import Card from "../components/Card";
import { FaLongArrowAltLeft } from "react-icons/fa";

// https://reactrouter.com/en/6.23.1/start/tutorial#url-params-in-loaders
export async function loader({ params }: { params: { creatorID?: string } }) {
    const creator = await supabase.from('creators').select('*').eq('id', params.creatorID).single()
    return { creator }
}

export default function ViewCreator() {
    // @ts-ignore
    const { creator } = useLoaderData();

    if (creator.error || creator.status !== 200) {
        return <div>There was an error loading the data</div>
    }

    const creatorData = creator.data

    return (
        <section className="container">
            <Link to="/">
                <FaLongArrowAltLeft /> View All Creators
            </Link>
            <Card imageURL={creatorData.imageURL}
                instagram={creatorData.instagram} twitter={creatorData.twitter}
                youtube={creatorData.youtube} name={creatorData.name} title={creatorData.title}
                description={creatorData.description}
                id={creatorData.id}
            />
        </section>
    )
}