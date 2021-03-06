import React from 'react';
import AppHeader from "../app-header";
import TodoList from "../todo-list";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";

const App = () => {

    const todoData = [
        {label: "Drink coffee", id: 1},
        {label: "Make Awesome App", important: false, id: 2},
        {label: "Build React App", important: true, id: 3}
    ]

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList todos={todoData}/>
        </div>
    );
}

export default App;