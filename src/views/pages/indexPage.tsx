import React, { useState } from 'react'

function ChatBar() {
    const [placeHolderMessage, setPlaceholderMessage] = useState("What's on your mind?... ");

    return (
        <div>
            <input type="text" placeholder={placeHolderMessage} />
        </div>
    )
}

export default function IndexPage() {
    const [messages, setMessages] = useState([])

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
