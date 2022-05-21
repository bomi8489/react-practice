import React from "react";
import {
    Inputlist, 
    Button,
    Contentsvalue,
} from "../Presenter/InputlistPresenter"

const ListBox = React.memo(function ListBox({ todoList, onRemove }) {
    return(
        <Inputlist>
            <Contentsvalue>{todoList.listvalue}</Contentsvalue>
            <Button onClick={() => onRemove(todoList.id)}>삭제</Button>
        </Inputlist>
    )
})

const InputList = React.memo(function InputList({ todoLists, onRemove }) {
    return (
        <>
        {todoLists.map(todoList => (
            <ListBox todoList={todoList} key={todoList.id} onRemove={onRemove} />
        ))}
        </>

    )
})

export default React.memo(InputList)