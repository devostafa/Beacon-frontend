import React, { useState } from 'react'
import ChatBar from "../components/chatBar.tsx";



export default function IndexPage() {
    const [messages, setMessages] = useState([])


  useState(() => {
    fetch('https://localhost:3000/messages')
      .then(response => response.json())
      .then(data => setMessages(data))
  })

    return (
        <div className='index-page'>
            <section className='section-nav'>
                <div className='nav-menu'>
                    <link></link>


                </div>
            </section>
            <section className='section-chat'>
                <div className='interactions'>
                    <button className='chat-btn' id='menu-btn'>
                        <img src="" alt="" />
                    </button>
                    <button className='chat-btn' id='new-btn'>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className='chat-window'>

                </div>
                <ChatBar />
            </section>
        </div>
    )
}
