// import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";


export default function ShowCreators() {
    // const { creators } = useLoaderData()

    // console.log(creators)
    return (
        <div className='container'>
            <h1>Content Creators</h1>
            <main className="flex flex-wrap gap-2">
                {
                    [1, 2, 3, 4, 5].map((creator) => {
                        return <Card key={creator} />
                    })
                }
            </main>
        </div>
    )
}