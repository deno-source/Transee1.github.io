import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import './index.css'
function App() {
    return <div>
            <Button type="primary">Button</Button>
    </div>
 }
ReactDOM.render(<App />, document.getElementById('app'));