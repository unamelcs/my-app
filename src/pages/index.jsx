import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { FirstPage } from './firstPage/'
import { SecondPage } from './secondPage/'
import { ThirdPage } from './thirdPage/'

const routes = [
    { path: '/first', component: FirstPage },
    { path: '/second', component: SecondPage },
    { path: '/third', component: ThirdPage },
    { path: '/first', redirect: true }
  ]

const CreateRouter = routes => () => (
    <Switch>
        {routes.map(route => {
        const { path, children, redirect, component } = route

        if (redirect)
            return <Redirect key={path + redirect} to={path} path="/" />

        return <Route key={path + redirect} path={path} component={children ? CreateRouter(children) : component} />
        })}
    </Switch>
)
  
export const Pages = CreateRouter(routes)