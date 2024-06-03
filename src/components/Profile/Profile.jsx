import React, { useState, useRef } from 'react'
import './profile.css'

function Profile() {
    //получаю ссылку на элемент с меню
    let listMenu = useRef();

    const closeOpen = (event) => {
        //получаю родительский элемент и через него получаю доступ к нужным дочерним элементам, чтобы менять класс
        event.currentTarget.children[1].classList.toggle('open');
        //меняю класс у меню
        listMenu.current.classList.toggle('nonactive');
    }

    return (
        <div className='profile'>
        <div className='profile-wrap' onClick={closeOpen}>
            <div className='profile-image'>
                <svg width="28" height="35" viewBox="0 0 28 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.9464 23.4224C17.8296 22.1328 17.8744 21.2328 17.8744 20.0544C18.4584 19.748 19.5048 17.7944 19.6816 16.144C20.1408 16.1064 20.8648 15.6584 21.0768 13.8896C21.1912 12.94 20.7368 12.4056 20.46 12.2376C21.2072 9.99041 22.7592 3.03841 17.5896 2.32001C17.0576 1.38561 15.6952 0.912811 13.9248 0.912811C6.84161 1.04321 5.98721 6.26161 7.54001 12.2376C7.26401 12.4056 6.80961 12.94 6.92321 13.8896C7.13601 15.6584 7.85921 16.1064 8.31841 16.144C8.49441 17.7936 9.58241 19.748 10.168 20.0544C10.168 21.2328 10.212 22.1328 10.0952 23.4224C9.08641 26.1344 3.90561 26.3464 0.916809 28.9616C4.04161 32.108 9.10561 34.3584 14.4496 34.3584C19.7936 34.3584 26.0752 30.1392 27.1208 28.988C24.1504 26.3488 18.9576 26.144 17.9464 23.4224Z" fill="black"/>
                </svg>
            </div>
            <div className='profile-arrow'>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.415 0.209991L6 4.79499L10.585 0.209991L12 1.62499L6 7.62499L0 1.62499L1.415 0.209991Z" fill="white"/>
                </svg>
            </div>
        </div>
            <div ref={listMenu} className='profile-list nonactive'>
                <ul className='profile-list-menu'>
                    <li>Мой профиль</li>
                    <li>Редактировать</li>
                    <li>Настройки</li>
                    <li>Выйти</li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;