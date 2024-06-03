import React, { useState, useContext } from 'react'
import {Context} from "../Context";
import './main.css'
import ItemsList from "../ItemList/ItemsList";
import Page from "../Page/Page";

function Main(){
    //получаю массивы
    let {theBacklog, setTheBacklog, theReady, setTheReady, theInProgress, setTheInProgress, theFinished, setTheFinished} = useContext(Context);

    //передаю массивы, их названия и состояния в пропсы
    return(
        <div className='main-wrap'>
            <ItemsList listHeader={'Backlog'} list={theBacklog} list2={theBacklog} set={setTheBacklog} select={'invisible'}/>
            <ItemsList listHeader={'Ready'} list={theReady} list2={theBacklog} set={setTheReady} set2={setTheBacklog} select={'visible'}/>
            <ItemsList listHeader={'In Progress'} list={theInProgress} list2={theReady} set={setTheInProgress} set2={setTheReady} select={'visible'}/>
            <ItemsList listHeader={'Finished'} list={theFinished} list2={theInProgress} set={setTheFinished} set2={setTheInProgress} select={'visible'}/>
       <Page/>
        </div>
    )
}

export default Main;