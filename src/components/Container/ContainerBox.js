import React from "react";
import InputList from "./InputList";
import { 
    Containerbox, 
    Contents,
    
} from "../Presenter/ContainerboxPresenter";

const ContainerBox = React.memo(function ContainerBox({ todoLists, onRemove }) {
    return (
        <Containerbox>
            <Contents>
                <h1>To Do List</h1>
                <ul>
                    <InputList
                        todoLists={todoLists}
                        onRemove={onRemove}
                    />
                </ul>
            </Contents>
        </Containerbox>
    )
});

export default React.memo(ContainerBox);