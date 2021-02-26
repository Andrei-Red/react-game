import { Switch, Route} from "react-router-dom"
import { StatisticPage } from "./pages/StatisticPage/StatisticPage"
import { MainPage } from "./pages/MainPage/MainPage"
import { SettingsPage } from "./pages/SettingsPage/SettingsPage"
//import {  } from 'react-router-dom'

export const Routes = () => {
  return (
    <Switch>
      <Route path="/main" exact>
        <MainPage />
      </Route>
      <Route path="/settings" exact>
        <SettingsPage />
      </Route>
      <Route path="/statistic" exact>
        <StatisticPage />
      </Route>
    </Switch>
  )  
} 