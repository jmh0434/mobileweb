import React from "react";

const ThemeContext = React.createContext('light'); // 컨텍스트 객체 생성

function ContextApp(){ // 컨텍스트 제공
    return(
        <ThemeContext.Provider value = "lavender">
            <Toolbar/>
        </ThemeContext.Provider>
    )
}

function Toolbar(){
    return(
        <div>
            <ThemeButton/>
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

function Button(){ // 컨텍스트 구독 요청
    return(
        <div>
            <ThemeContext.Consumer>
                {value => (<div
                            style={{
                                margin: 50,
                                padding: 50,
                                backgroundColor: value,
                            }}>
                                <p>컨텍스트를 가지고 데이터를 전달하는 예</p>
                                <button>확인</button>
                            </div>)}
            </ThemeContext.Consumer>
        </div>
    )
}

export default ContextApp;