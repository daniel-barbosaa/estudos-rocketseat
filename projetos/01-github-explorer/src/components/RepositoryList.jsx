import { RespositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
import { useEffect, useState } from "react";

//https://api.github.com/users/daniel-barbosaa/repos

export function RespositoryList () {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/daniel-barbosaa/repos').then(response => response.json()).then(data => {
            setRepositories(data)
        })
    }, [])
    // useEffect recebe dois parametros, a primeira é a função que vai executar e o segundo parametro é quando ele deve ser executado, ou seja tudo que estiver dentro do array e for alterado por exemplo um variavel ai sim a função que é o primeiro parametro vai ser executado. Se você não passar o segundo parametro do useEffect ele vai ficar em loopingl.
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul> 
                {repositories.map(repository => (
                    <RespositoryItem key={repository.name} repository={repository}/>
                ))}
            </ul>
        </section>
    )
}