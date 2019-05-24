import React from 'react';
import {Button} from 'antd';
import './App.scss';
export default class App extends React.Component{
    render(){
        return (
            <div className="App">
                <Button type="primary" className="myBtn">Button</Button>
            </div>
        )
    }
};