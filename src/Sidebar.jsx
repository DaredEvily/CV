import { _sidebar } from "./style/sidestyle"
import cards from "./json/scards.json"
import Card from "./assets/sidecards"
import getRatingStars from "./assets/rating"

export default ()=>
    {
        return(
        <_sidebar>
        <div class="contain">
            <h1>Ahmad G</h1>
        </div> 
            <div class="sidebarlittercontain">
                <div class="sidebarinside">
                    <h2>Personal details</h2>
                    {cards.map((contact)=>(
                        <Card icon={contact.Link} title={contact.Title} des={contact.Des} url={contact.url}/>
                    ))}

                    <h2 className="h22">Languages</h2>
                        <ul>
                            <li>Arabic</li>
                            <div className="rate">{getRatingStars(5)}</div>
                        </ul>
                        <ul>
                            <li>english</li>
                            <div className="rate">{getRatingStars(3)}</div>
                        </ul>
                </div>
            </div>
        
    </_sidebar>
        )
    }