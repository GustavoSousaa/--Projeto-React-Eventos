import './styles.css'

interface EventTypeDisplayProps {
    image: string;
    name: string;
}

export function EventTypeDisplay({ image, name }: EventTypeDisplayProps) {
    return (
        <div className='event-type'>
            <img src={image} />
            <p>{name}</p>
        </div>
    )
}