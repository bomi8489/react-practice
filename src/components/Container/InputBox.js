import React from "react";
import {
    Inputbox,
    Subtitle,
    Input,
    Button
} from "../Presenter/InputboxPresenter"

const InputBox = React.memo(function InputBox({ listvalue, onChange, onCreate }) {
    return (
        <Inputbox>
            <Subtitle>아래 입력칸에 오늘 할일을 입력해주세요</Subtitle>
            <form>
                <Input 
                    name="inputbox"
                    onChange={onChange}
                    value={listvalue}
                    submit={onCreate}
                />
                <Button onClick={onCreate}></Button>
            </form>

        </Inputbox>
    )
})

export default React.memo(InputBox)