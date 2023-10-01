import axios from "axios"
import {useState} from "react"


export const Facts = () => {
    const [catFact, setCatFact] = useState("");

    const generateCatFact = () => {
        axios
            .get('https://catfact.ninja/fact')
            .then((response) => {
                const fact = response.data.fact
                setCatFact(fact);
                
            }).catch((error) => {
                console.error("Error fetching your cat, try again later", error)
                setCatFact("");
            })
    }
    return (
        <div>
            <h1>Hi, press the button below to render a cool/funny cat fact from the depths of the internet. Have fun!</h1>
            <button onClick={generateCatFact} className="factBtn">Generate Cat Fact</button><br></br>
            <p className="fact">{catFact}</p>

        </div>
    )
}