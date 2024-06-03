import React, { useState, useContext } from 'react'
import './item.css'
import {Context} from "../Context";
import { Link } from 'react-router-dom';

function Item (props) {

    let {openPage, setOpenPage, currentTask, setCurrentTask} = useContext(Context);

    function clickS(event) {
        //открываю окно с задачей и записываю в состояние текущего таска его название
        openPage = !openPage;
        setOpenPage(openPage);
        setCurrentTask(props.children);
    }

    return (
        //отображаю все переданные элементы в children
        <div className='item-element' onClick={clickS}>
           {props.children}
        </div>
    )
}

export default Item;
