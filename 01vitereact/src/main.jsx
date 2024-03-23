import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// case-1
function MyApp(){
    return (
        <div>
            <h1>this is my app</h1>
        </div>
    )
}

// case-2 this will not work
// const reactElement = {
//     type : 'a',
//     props : {
//         href : 'https://google.com',
//         target : '_blank'
//     },
//     children : 'Click here to visit google'
// }

// case-3
const anotherElement = (
    <a href='http://google.com' target='_blank'>visit here</a>
)

const anotherUser = "Ram"
// case-4
const reactElement = React.createElement(
    'a',
    {href : 'https://google.com', target : '_blank'},
    'Click here to visit google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />

    // <MyApp/>
    // MyApp()

    // reactElement

    // anotherElement
    
)
