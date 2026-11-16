import { useState, useEffect } from "react";

export default () => {

    const [valor, setValor] = useState(0);
    const [nome, setNome] = useState("");

    function incremento() {
        setValor(valor + 1);
    }

    function definirNome() {
        setNome("Bruno")
    }

    useEffect(() => {
        console.log("Executar apenas do arranque do componente")
    }, [])

    useEffect(() => {
        console.log("Executar apenas na alteração do VALOR")
    }, [valor])

    useEffect(() => {
        console.log("Executar apenas na alteração do VALOR")
    }, [nome])

    useEffect(() => {
        console.log("Executar sempre que VALOR e NOME forem alterados")
    }, [valor, nome])



    return (
        <>

            <h3>UseEffect 01</h3>
            <button onClick={incremento}>Incremento</button>
            <h3>{valor}</h3>

            <button onClick={definirNome}>Definir Nome</button>
            <h3>{nome}</h3>



        </>
    )
}