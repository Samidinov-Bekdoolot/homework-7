import React from 'react'
import './Card.css'
import '../../app.css'


export const Card = ({data}) => {
    return <div className="cardPage">
    <div className="container">

        <div style={{background: data.color}} className="card">
          {data.title}
        </div>
    </div>
</div>
}
