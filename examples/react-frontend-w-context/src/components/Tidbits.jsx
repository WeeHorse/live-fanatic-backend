import { useContext } from "react";
import GlobalContext from "../GlobalContext";

export default function Tidbits(){

    const { tidbits } = useContext(GlobalContext);

    return <section id="tidbits">
        <h2>Tidbits</h2>
        {tidbits.map(tidbit => <article key={tidbit.id}>
            <h3>{tidbit.subject}</h3>
            <p>{tidbit.content}</p>
        </article>)}
    </section>
}