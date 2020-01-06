import React from 'react';
import './App.css';
import TableList from './views/table/Table'
import Tag from './views/tag/Tag'
// import Login from './views/login/Login'
import Echarts from './views/echatrs/Echarts'
import 'antd/dist/antd.css';
import { HashRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import { Card } from 'antd'


function App() {
  return (
    <div className="App">
      <Card title="大标题" bordered={false} hoverable={true}>

        <Router>
          <NavLink activeClassName="is-active" to='/tableList'>表格</NavLink>
          <NavLink activeClassName="is-active" to='/tag'>标签页</NavLink>
          <NavLink activeClassName="is-active" to='/echarts'>图表</NavLink>
          {/* <NavLink activeClassName="is-active" to='/login'>登录</NavLink> */}
          <Switch>
            <Route path='/tableList' component={TableList}></Route>
            <Route path='/tag' component={Tag}></Route>
            <Route path='/echarts' component={Echarts}></Route>
            {/* <Route path='/login' component={Login}></Route> */}
            <Redirect path='/' to='/tableList'></Redirect>
          </Switch>
        </Router>
      </Card>


      {/* <TableList></TableList> */}
    </div>
  );
}

export default App;
