import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Index from '../../views/index/Index.jsx';
import OutTime from '../../views/index/OutTime.jsx';
import UrlModel from '../../views/index/UrlModel.jsx';

const IndexRouter = () => (
  <main>
    <Switch>
    {/* exact 只有当路径名与路径路径完全匹配时，该路由才应匹配。 */}
      <Route exact path='/' component={Index}/>
      <Route path='/index' component={Index}/>
      <Route replace path='/outTime/:id' component={OutTime}/>
      <Route replace path='/urlModel' component={UrlModel}/>
    </Switch>
  </main>
)

export default IndexRouter;