import React, {useRef, useState, useMemo, useCallback} from 'react';
import './App.css';
import OutlineBox from "./components/Container/OutlineBox";

function App() {
  //let todos = [];
  const [inputs, setInputs] = useState({   // 입력창 상태 관리
    listvalue: ''
  });
  
  const { listvalue } = inputs;
  const onChange = useCallback ( e => {
    const { value } = e.target;
    setInputs({
      ...inputs,
      listvalue: value
    });
  }, []);

  const [todoLists, setTodoLists] = useState([]); // todolist 상태관리
  const nextId = useRef(0);
  const onCreate = useCallback ((e) => {
    e.preventDefault();
    const todoList = {
      id: nextId.current,
      listvalue
    };
    setTodoLists([...todoLists, todoList]);

    setInputs({
      listvalue: ''
    });
    nextId.current += 1;
    //todos.push(todoLists)
    //saveList()
  }, [listvalue]);

  const onRemove = useCallback (id => {
    setTodoLists(todoLists.filter(todoList => todoList.id !== id));
  }, []);

  // function saveList() { // 리스트 저장함수
  //   localStorage.setItem("todo", JSON.stringify(todos));
  // }

  function loadList() {
    const loadedList = localStorage.getItem("todo");
    if(loadedList !== null){
        const parsedData = JSON.parse(loadedList);
        parsedData.forEach(function(toDo){
          //onCreate(toDo);
          //console.log(toDo)
        });
    }
  }

  //loadList()

  return (
    <OutlineBox 
      listvalue = {listvalue}
      todoLists={todoLists}
      onChange={onChange}
      onCreate={onCreate}
      onRemove={onRemove}
      loadList={loadList}
    />
  );
}

export default App;