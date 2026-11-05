import { useState } from "react"

export default ({ funcao }) => {

    let tmp = {
        nome: "",
        apelido: "",
        cidade: "",
        email: "",
    }

    const [cliente, setCliente] = useState(tmp);




    return (
        <>
            <h3>Exercício 07</h3>
            <hr />
            <ul>
                <li>Nome: {cliente.nome}</li>
                <li>Apelido: {cliente.apelido}</li>
                <li>Cidade: {cliente.cidade}</li>
                <li>Email: {cliente.email}</li>
            </ul>
            <button onClick={() => {
                const c = { ...cliente }
                c.nome = 'Bruno'
                setCliente(c)
            }}>Nome</button>

            <button onClick={() => {
                const c = { ...cliente }
                c.apelido = 'Rodrigues'
                setCliente(c)
            }}>Apelido</button>

            <button onClick={() => {
                const c = { ...cliente }
                c.cidade = 'Orlando'
                setCliente(c)
            }}>Cidade</button>

            <button onClick={() => {
                const c = { ...cliente }
                c.email = 'bruno@gmail.com'
                setCliente(c)
            }}>Email</button>
        </>

    )
}