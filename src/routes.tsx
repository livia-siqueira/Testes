import { Follower } from "./pages/follower";
import { Followers } from "./pages/listFollowers";
import { Repositorys } from "./pages/listRepository";
import { Perfil } from "./pages/perfil";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { DashBoard } from "./components/Dashboard";
import { UserProvider } from "./context";
import { Following } from "./pages/listFollowing";


export function Routes() {
    return (
        <BrowserRouter>
            <UserProvider>
                <Switch>
                    <Route path="/" exact component={DashBoard} />
                    <Route path="/Perfil" component={Perfil} />
                    <Route path="/listFollowers" component={Followers} />
                    <Route path="/follower" component={Follower} />
                    <Route path="/listRepositorys" component={Repositorys} />
                    <Route path="/listFollowings" component={Following} />
                </Switch>
            </UserProvider>
        </BrowserRouter>
    )
}