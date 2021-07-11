import { Route, Switch } from "react-router-dom";
import { Feedback } from "./Feedback";
import { Login } from "./Login";
import { Profile } from "./Profile";
import { Signup } from "./Signup";

export default function Main() {
    return (
        <div className="container">
           <Switch>
               <Route exact path="/" component={Login}/>
               <Route exact path="/signup" component={Signup}/>
               <Route exact path="/profile" component={Profile}/>
               <Route exact path="/feedback/:username" component = {Feedback}/>

                    
               
           </Switch>
        </div>
    )
}