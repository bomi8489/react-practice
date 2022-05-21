import React from "react"
import ContainerBox from "./ContainerBox"
import InputBox from "./InputBox"
import Todolist from "../Presenter/TodolistPresenter"

function OutlineBox({ listvalue, todoLists, onChange, onCreate, onRemove, loadList }) {
    return (
        <Todolist>
            <ContainerBox
                todoLists={todoLists}
                onRemove={onRemove}
                loadList={loadList}
            />
            <InputBox
                listvalue={listvalue}
                onChange={onChange}
                onCreate={onCreate}
            />
        </Todolist>
    )
}

export default OutlineBox