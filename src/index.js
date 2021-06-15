import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import './index.css'
function App() {
    return <div>
            <Button type="primary">Demo2</Button>
            <Button type="success">Demo2</Button>
    </div>
 }
ReactDOM.render( <App/> , document.getElementById('app'));