import { RespositoryItem } from "./RepositoryItem";

export function RespositoryList () {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RespositoryItem/>
                <RespositoryItem/>
                <RespositoryItem/>
                <RespositoryItem/>
            </ul>
        </section>
    )
}