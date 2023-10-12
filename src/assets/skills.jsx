import cards from "../json/bcards.json"
import Card from "../assets/bodycards"

export default ()=>(
    cards.map((contact, index) => (
        <div key={index} className="card">
            <ul className="ul">
                <li><h3>{contact.Title}</h3></li>
            </ul>
            {contact.content.map((item, itemIndex) => (
                <Card
                    key={itemIndex}
                    lang={item.lang}
                    lrating={item.lrating}
                    tools={item.tools}
                    trating={item.trating}
                    framework={item.framework}
                    frating={item.frating}
                    llang={item.llang}
                    rating={item.rating}
                />
                ))}
        </div>
    ))
)