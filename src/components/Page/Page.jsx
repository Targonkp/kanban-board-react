import React, { useState, useContext, useEffect } from 'react'
import './page.css';
import {Context} from "../Context";

function Page () {

    let {openPage, setOpenPage, currentTask, setCurrentTask, taskDescription, setTaskDescription} = useContext(Context);
    //состояние, от которого зависит, редактируется text-area или нет
    let [editTask, setEditTask] = useState(true);
    //состояние для value поля с описанием задачи
    let [areaValue, setAreaValue] = useState('');


    useEffect(() => {
        fillDescription();
    }, [])



    function closePage() {
        //закрываю окно с задачей
        openPage = !openPage;
        setOpenPage(openPage);
    }

    function saveDescription() {
        //сохраняю измения и закрываю возможность редактирования
        editTask = !editTask;
        setEditTask(editTask);

        if (!editTask){

            //проверяю и перезаписываю описание
            setTaskDescription(
                oldArrayTask => {
                    let ok = false;
                    const newElement = oldArrayTask.map(
                        element => element.name === currentTask
                        ? (ok = true, {...element, description: areaValue})
                        : element
                    )
                    return ok ? newElement : [...oldArrayTask, {name: currentTask, description: areaValue}]
                }
            )

        }
    }

    //функция для заполнения полей с описанием задачи
    function fillDescription () {
        taskDescription.forEach(
            element => {
                if (element.name === currentTask) {
                    setAreaValue(element.description);
                }
            }
        )
    }

    return (
        <div className={openPage === true ? 'page-wrap page-wrap-active' : 'page-wrap'}>
            <h1>Задача {currentTask}</h1>
            <h2>Добавить описание</h2>
            <textarea name="task-description" value={areaValue} onChange={(event) => setAreaValue(event.target.value)} className={editTask === true ? 'page-area' : 'page-area-disabled'}></textarea>
            <button className='task-description-save' onClick={saveDescription}>{editTask === true ? 'Сохранить' : 'Редактировать'}</button>
            <span className='closePage' onClick={closePage}>X</span>
        </div>
    )
}


export default Page;


