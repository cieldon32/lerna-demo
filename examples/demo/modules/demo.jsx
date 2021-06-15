import {Router, Switch, Route, Link} from 'react-router';

export const Demo = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <div>首页</div>
                </Route>
                <Route path="/page1">
                    <div>page1</div>
                </Route>
                <Route path="/page2">
                    <div>page1</div>
                </Route>
            </Switch>
            <div>
                <Link to="/">首页</Link>
                <Link to="/page1">page1</Link>
                <Link to="/page2">page2</Link>
            </div>
        </Router>
    )
}