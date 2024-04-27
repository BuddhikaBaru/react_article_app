import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import AboutPage from './pages/AboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
          {/* heading of the app */}
          <NavBar/> 
          <div id="page-body">
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/articles' element={<ArticlesListPage/>}/>
            <Route path='/articles/:articleId' element={<ArticlePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
            <Route path='/login' element={<LoginPage></LoginPage>}/>
            <Route path='/createaccount' element={<CreateAccountPage/>}/>

          </Routes>

          </div>

    </div>

    </BrowserRouter>
  );
}

export default App;
