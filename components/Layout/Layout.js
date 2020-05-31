import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";
import ChooseCampus from '../AddCampus/ChooseCampus';
import AddCampus from '../AddCampus/AddCampus';
import Error from '../../pages/error/Error';

// context
import { useLayoutState } from "../../context/LayoutContext";
import Temperatures from "../../pages/temperatures/Temperatures";
import Counters from "../../pages/counters/Counters";
// import EditUsersPanel from "../../pages/editUsers/EditUsersPanel";


function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/tables" component={Tables} />
              <Route
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/icons" />}
              />
              <Route path="/app/ui/maps" component={Maps} />
              <Route path="/app/ui/icons" component={Icons} />
              <Route path="/app/ui/choosecampus" component={ChooseCampus} />
              <Route path="/app/ui/charts" component={Charts} />
              <Route path="/app/ui/temperatures" component={Temperatures} />
              <Route path="/app/ui/counters" component={Counters} />
              <Route path="/app/ui/addcampus" component={AddCampus} />
              <Route path="/app/ui/error" component={Error} />
              {/* <Route path="/app/ui/editpage" component={EditUsersPanel} /> */}
            </Switch>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
