import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Index from '../../views/index/Index.jsx';
import OutTime from '../../views/index/OutTime.jsx';
import UrlModel from '../../views/index/UrlModel.jsx';
import Redux from '../../views/index/Reducex.jsx';
import Reminder from '../../views/index/Reminder.jsx';

const IndexRouter = () => (
  <main>
  {/* exact 只有当路径名与路径路径完全匹配时，该路由才应匹配。 */}
    <Switch>
      <Route exact path='/' component={Index}/>
      <Route path='/index' component={Index}/>
      <Route replace path='/outTime/:id' component={OutTime}/>
      <Route replace path='/urlModel' component={UrlModel}/>
      <Route replace path='/redux' component={Redux}/>
      <Route replace path='/reminder' component={Reminder}/>
    </Switch>
  </main>
)

export default IndexRouter;