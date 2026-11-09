import { useState } from "react"
import "./css_state_11.css"

export default () => {


    const [state, setState] = useState(true);
    const class1 = "classUm";
    const class2 = "classDois";

    return (
        <>
            <h3>Conditional rendering - Change CSS Class</h3>
            <button onClick={() => setState(!state)}>Alterar Parágrafo</button>
            <p className={`paragrafo ${state ? class1 : class2}`}>teste</p>
        </>

    )
}