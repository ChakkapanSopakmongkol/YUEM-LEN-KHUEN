import {createBrowserRouter} from 'react-router-dom'
import Login from "./pages/login";
import Logindata from './pages/logindata';
import Forgetpass from './pages/Forgetpass';
import Systemyum from './pages/Systemyum';
import Member from './pages/Member';
import Home from './pages/Home';
import Yuem from './pages/Yuem.';
import Yunyan from './pages/Yunyan';
import Status from './pages/Status';
import Stus from './pages/Stus';
import Khuen from './pages/Khuen';

const App = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <Login/>,
  },
  {
    path: "/logindata",
    element: <Logindata/>
  },
  {
    path: "/Forgetpass",
    element: <Forgetpass/>
  },
  {
    path: "/Systemyum",
    element: <Systemyum/>
  },
  {
    path: "/Member",
    element: <Member/>
  },
  {
    path: "/Home",
    element: <Home/>
  },
  {
    path: "/Yuem",
    element: <Yuem/>
  },
  {
    path: "/Yunyan",
    element: <Yunyan/>
  },
  {
    path: "/Status",
    element: <Status/>
  },
  {
    path: "/Stus",
    element: <Stus/>
  },
  {
    path: "/Khuen",
    element: <Khuen/>
  }
])

export default App;
