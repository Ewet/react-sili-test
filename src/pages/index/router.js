import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Index from '../../views/index/Index.jsx';

const IndexRouter = () => (
  <main>
    <Switch>
    {/* exact 只有当路径名与路径路径完全匹配时，该路由才应匹配。 */}
      <Route exact path='/index' component={Index}/>
    </Switch>
  </main>
)

export default IndexRouter;