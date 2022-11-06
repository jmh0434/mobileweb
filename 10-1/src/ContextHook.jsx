import React from "react";
import { useContext } from "react"; // useContext 사용

const ThemeContext = React.createContext('light');

function ContextHook(){ // 컨텍스트 객체 생성
    return(
        <ThemeContext.Provider value = 'lavender'>
            <Toolbar />
        </ThemeContext.Provider>
    )
}

function Toolbar(){ // 컨텍스트 제공
    return(
        <div>
            <ThemeButton />
        </div>
    )
}

function ThemeButton(){
    return(
        <div>
            <Button />
        </div>
    )
}

function Button(){
    const value = useContext(ThemeContext); // useContext Hook을 사용하여 컨텍스트 구독 요청
    return (
        <div
            style={{
                margin: 50,
                padding: 50,
                backgroundColor: value,
            }}
        >
            <p>컨텍스트를 가지고 데이터를 전달하는 예</p>
            <button>확인</button>
        </div>
    )
}
export default ContextHook;