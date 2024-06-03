import React from 'react';
import './addcard.css';

function AddCard(props) {
    return (
        //в пропсы перекидываю функцию клика и id + по условию отображаю ту или иную кнопку
        props.isTrue ?
            <>
                <button className={'add-card'} onClick={props.clickAdd} id={props.id}>
            <span className={'add-card-plus'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M14 7H9V2C9 1.448 8.552 1 8 1C7.448 1 7 1.448 7 2V7H2C1.448 7 1 7.448 1 8C1 8.552 1.448 9 2 9H7V14C7 14.552 7.448 15 8 15C8.552 15 9 14.552 9 14V9H14C14.552 9 15 8.552 15 8C15 7.448 14.552 7 14 7Z" fill="#5E6C84"/>
                </svg>
            </span>
                    <span className={'add-card-text'}>Add card</span>
                </button>
             </>
            :
            <>
                <button className={'submit-card'} onClick={props.clickSubmit} id={props.id}>
                    <span className={'submit-card-text'}>Submit</span>
                </button>
            </>
    )
}

export default AddCard;