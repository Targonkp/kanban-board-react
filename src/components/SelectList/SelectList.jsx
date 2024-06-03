import React, { useState, useContext } from 'react'
import {Context} from "../Context";
import './selectlist.css';

function SelectList (props) {

    //функция для получения значения выбранного select
    function itemContent (event) {
        //получаю новый массив, элементы которого не равны выбранному элементу
        let newArr = props.list2.filter(element => element !== event.target.value);
        console.log(newArr);
        //добавляю выбранный элемент в массив
        props.set([...props.list, event.target.value]);
        //обновляю массив, из которого удален элемент
        props.set2([...newArr]);

    }

    return(
        <div className='select-wrap'>
            <select className='select-list' onChange={itemContent} style={props.select === 'invisible' ? {display:"none"} : {display: "block"} }>
                <option selected="selected"  disabled="disabled">Выберите задачу</option>
                {
                    props.list2.map(
                        (element, index) =>
                        {
                          return (<option key={index}>{element}</option>)
                        }
                    )
                }
            </select>
        </div>
    )
}


export default SelectList;