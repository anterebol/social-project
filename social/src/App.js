import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import Music from './components/Music/Music'
import {BrowserRouter, Route} from 'react-router-dom';






const App = (props) => {


  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <NavBar navBar={props.appState.navBar}/>
      <div className='content'>
        <Route path='/dialogs' render={() => <Dialogs 
          DialogData={props.appState.messegePage.DialogData} 
          messegesData={props.appState.messegePage.messegesData}
          dispatch={props.dispatch} newTextMessege={props.appState.messegePage.newTextMessege}/>}
           />
        <Route path='/profile' render={() => <Profile   
          postsData={props.appState.profilePage.postsData} 
          dispatch={props.dispatch}
          newPostText = {props.appState.profilePage.newPostText} />}/>
        <Route path='/news' component={News}/>
        <Route path='/settings' component={Settings}/>
        <Route path='/music' component={Music}/>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
