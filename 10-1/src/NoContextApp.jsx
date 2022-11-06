import React from "react";

function NoContextApp(){
    return (
        <Toolbar theme='yellow'/>
    )
}

function Toolbar(props){
    return(
        <div>
            <ThemeButton theme = {props.theme}/>
        </div>
    )
}

function ThemeButton(props){
    return(
        <div>
            <Button theme = {props.theme}/>
        </div>
    )
}

function Button(props){
    const myColor = props.theme;
    return(
        <div
            style={{
                backgroundColor: myColor,
                margin: 50,
                padding: 50,
            }}
        >
            <p>컨텍스트 없이 props만으로 데이터를 전달하는 예</p>
            <button>확인</button>
        </div>
    )
}
export default NoContextApp;