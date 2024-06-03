import React, { useState, useRef } from 'react';
import './itemslist.css'
import Item from "../Item/Item";
import AddCard from "../AddCard/AddCard";
import SelectList from "../SelectList/SelectList";


function ItemsList(props) {
    //задаю переменную для кнопки добавления
    let [isTrue, setIsTrue] = useState('true');
    let listElements = useRef();

    //эту функцию передаю в компонент AddCard для добавления нового элемента
    function addTask() {
        if (setIsTrue){
            let newItem = '';
            props.set([...props.list, newItem]);

            //меняю значение кнопки добавления на обратное
            setIsTrue(!isTrue);
        }

    }

    //эту функцию передаю в компонент AddCard для смены кнопки
    // function submitTask() {
    //     //получаю последний элемент списка и его текст, чтобы добавить в массив и обновить его состояние
    //     let newItem = listElements.current.lastChild.textContent;
    //     if (newItem === '') {
    //         alert('Вы пытаетесь добавить пустую задачу');
    //         //если задача пустая, то удаляю последний элемент и обновляю состояние
    //         props.list.splice(props.list.length - 1, 1);
    //         props.set([...props.list]);
    //     }
    //     else {
    //         //удаляю последний элемент списка (т.к. он пустой - берется из функции addTask при добавлении) и заменяю его на уже заполненный элемент
    //         props.list.splice(props.list.length - 1, 1, newItem);
    //         //обновляю состояние
    //         props.set([...props.list]);
    //         setIsTrue(!isTrue);
    //     }
    // }
    
    //создаю пустой input для того, чтобы вписать задачу
    function createInputTask() {
        let newInputTask = document.createElement('input');
        newInputTask.classList.add('new-task-element');
        let newInputTask2 = document.createElement('input');
        listElements.current.appendChild(newInputTask);
        if (setIsTrue){
            //меняю значение кнопки добавления на обратное
            setIsTrue(!isTrue);
        }
    }


    function submitTask(){
        //получаю значение последнего элемента - добавленного при помощи кнопки Add
        let newItem = listElements.current.lastChild.value;
        //проверяю его, не является ли значение пустым
        if (newItem === ''){
            alert('Вы пытаетесь добавить пустую задачу');
        }
        else {
            //удаляю добавленный инпут и добавляю его значение в список задач
            listElements.current.removeChild(listElements.current.lastChild);
            //обновляю состояние
            props.set([...props.list, newItem]);
            setIsTrue(!isTrue);
        }

    }


    return (
        //записываю в key название списка и далее присваюиваю каждому его элементу уникальный key, равный индексу
        <div className="items-list-wrap" id={props.listHeader} key={props.listHeader}>
            <span className="list-header">{props.listHeader}</span>
            <div className="item-list" ref={listElements}>
                {
                    //перебираю массив для отображения в списке
                    props.list.map(
                        //прохожу по самим элементам и индексу - индекс нужен для уникального key,
                        (element, index) => {
                            return(
                                <Item key={index}>{element}</Item>
                            )
                        }
                    )
                }
            </div>
            <SelectList select={props.select} list={props.list} list2={props.list2} set={props.set} set2={props.set2}/>
            <AddCard clickAdd={createInputTask} clickSubmit={submitTask} id={props.listHeader + '-button'} isTrue={isTrue}/>
        </div>
    )
}

export default ItemsList;