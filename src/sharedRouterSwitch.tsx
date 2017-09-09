import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePageContainer } from './components/home';
import { AboutPage } from './components/about';
import { FaqPage } from './components/faq';
import { DonePageContainer } from './components/done';
import { MoreIssuesContainer } from './components/issues';
import { CallPageContainer } from './components/call';
import { MyImpactPageContainer } from './components/myimpact';
import { GroupPageContainer } from './components/groups';

export const SharedRouterSwitch = (
  <Switch>
    <Route path="/" exact={true} component={HomePageContainer} />
    <Route path="/issue/:id" exact={true} component={CallPageContainer} />
    <Route path="/done/:id" exact={true} component={DonePageContainer} />
    <Route path="/impact" exact={true} component={MyImpactPageContainer} />
    <Route path="/more" exact={true} component={MoreIssuesContainer} />
    <Route path="/group/:id" exact={true} component={GroupPageContainer} />
    <Route path="/faq" exact={true} component={FaqPage} />
    <Route path="/about" exact={true} component={AboutPage} />
    <Route path="*" component={HomePageContainer} />
  </Switch>
);
