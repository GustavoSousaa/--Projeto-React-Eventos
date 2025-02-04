import './styles.css'
import { Trash } from 'phosphor-react'

interface EventCardProps {
    id: string;
    name: string;
    startDate: string | undefined; /* startDate?: string */
    img: string;
}

/* {
    name: tal,
    img: tal,
    startDate: tal
} */

export function EventCard({ id, img, name, startDate }: EventCardProps) {

    /* if(!startDate) return <h2>Evento sem data definida</h2> 
     renderização condicional total
    */

    return (
        <div className='card'>
            <img src={img} alt={`${name} event image`} />

            <div className='event-infos'>
                <div>
                    <h2>{name}</h2>
                    {/* <p>{startDate ? startDate : "Data indefinida"}</p> */} 
                    
                    { startDate && <p>{startDate}</p> }
                </div>
                
                <button className='delete-event-btn'>
                    <Trash />
                </button>
            </div>
        </div>
    )
}