import { useLoaderData, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { CreatorData } from "../creatorTypes";


export default function ShowCreators() {
    const navigate = useNavigate()
    // @ts-ignore
    const { creators } = useLoaderData()

    if (creators.error || creators.status !== 200) {
        return <div>There was an error loading the data</div>
    }
    return (
        <div className='container'>
            <h1>Favorite Content Creators</h1>
            <main className="flex flex-wrap gap-2">
                {
                    creators.data.map((creator: CreatorData) => {
                        return <Card key={creator.id} imageURL={creator.imageURL}
                            instagram={creator.instagram} twitter={creator.twitter}
                            youtube={creator.youtube} name={creator.name} title={creator.title}
                            description={creator.description}
                            id={creator.id}
                        />
                    })
                }
            </main>
            <button onClick={() => navigate('add')}>
                Add More Creator
            </button>
        </div>
    )
}