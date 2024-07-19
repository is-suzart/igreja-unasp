import { getMembers } from "../services/home";

export default async function Members({categories}:{categories:number[]}){
    const members = await getMembers(categories);
    return (
        <div>
            <p>{JSON.stringify(members)}</p>
        </div>
    )
}