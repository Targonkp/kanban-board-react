import React, {useState, useContext } from 'react'
import './app.css';
import Header from '../Header/Header'
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import {Context} from "../Context";

function App() {
    //создаю массивы и каждый из них передаю в хук состояния
    let Backlog = ['task1', 'task2', 'task3', 'task4', 'task5'];
    let [theBacklog, setTheBacklog] = useState(Backlog);
    let Ready = [];
    let [theReady, setTheReady] = useState(Ready);
    let InProgress = [];
    let [theInProgress, setTheInProgress] = useState(InProgress);
    let Finished = [];
    let [theFinished, setTheFinished] = useState(Finished);
    //состояние клика для открытия окна с заданием
    let [openPage, setOpenPage] = useState(false);
    //текущая задача - при открытии окна с описанием
    let [currentTask, setCurrentTask] = useState();
    //общий объект с описанием задач
    let taskDescriptionArray = [
        {
            name: '',
            description: ''
        }
    ]
    let [taskDescription, setTaskDescription] = useState(taskDescriptionArray);
  return (
      ////использую провайдер, чтобы передавать данные во все дочерние компоненты
      <Context.Provider value={{theBacklog, setTheBacklog, theReady, setTheReady, theInProgress, setTheInProgress, theFinished, setTheFinished, openPage, setOpenPage, currentTask, setCurrentTask, taskDescription, setTaskDescription}}>
      <div className="App">
            <Header mainHeader={'Awesome Kanban Board'}/>
            <Main/>
            <Footer/>
      </div>
      </Context.Provider>
  )
}

export default App;
