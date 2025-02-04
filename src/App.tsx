import './App.css'
import { Header } from './components/Header' 
import { events } from './data/events'
import { EventCard } from './components/EventCard'
import { formatDate } from './utils/formatDate'
import { eventTypes } from './data/eventTypes'
import { EventTypeDisplay } from './components/EventTypeDisplay'
import { useState } from 'react'

export function App() {
  const [] = useState("");

  function teste(eventoDeChange: { target: { value: any } }) {
    console.log(eventoDeChange.target.value) 
  }


  return (
    <>
      <Header />

      {/* <h1 className='title-app'>Crie momentos que vão durar a vida toda</h1> */}

      <div className='event-types-container'>
        {eventTypes.map(type => {
          return (
            <EventTypeDisplay
              key={type.name}
              name={type.name}
              image={type.image}
            />
          )
        })}
      </div>

      <div className='container'>
        <form>
          <div>
            <label htmlFor='nome'>Nome</label>
            <input onChange={teste} id='nome' type='text' placeholder='Digite seu nome' />
          </div>
          <div>
            <label htmlFor='data'>Data</label>
            <input id='data' type='datetime-local' />
          </div>
          <div className='label-imagem'>
            <label htmlFor='img'>Selecione uma imagem</label>
            <input id='img' type='file' />
          </div>

          <button>Criar evento</button>
        </form>

        <div className='container-eventos'>
          {events.map(event => {
            const formattedDate = formatDate(event.startDate)

            return (
              <EventCard 
                id={event.id}
                name={event.name}
                img={event.img}
                startDate={formattedDate}
                key={event.id} 
                />
            )
          })}
        </div>
      </div>
    </>
  )
}


