import React from 'react'
import css from './Main.module.css'


export const MainPage = () => {


    return <div className={css.mainPage}>
        <div className={ css.container}>
            <nav>
                <h3>Thrivetalk</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Blog</li>
                </ul>
                <a className={css.button} href="#">CONTACT US</a>
            </nav>
            <div className={css.mainBlock}>
                <div className={css.firstBlock}>
                    <h3>Thrivetalk</h3>
                    <h1>HELPING YOU THRIVE <br></br> IN ALL AREAS OF LIFE</h1>
                    <p>Our highly talented therapists can help you<br></br> with a range of
                    issues including relationships,<br></br> sex, PTSD, depression, social
                    anxiety, or even<br></br> just caring for yourself more.</p>
                    <div className={css.buttons}>
                        <a href="#">WHO AM I</a>
                        <a href="#">WHAT DO I DO</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
}