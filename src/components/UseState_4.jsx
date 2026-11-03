import "../components/css_state.css";
import UseState_04a from "./UseState_04a";


export default function UseState4() {
    return (
        <>
            <h4>Exercício 02</h4>
            <div className="layout">
                <UseState_04a unidades={1} />
                <UseState_04a unidades={5} />
                <UseState_04a unidades={10} />
            </div>
        </>
    )
}