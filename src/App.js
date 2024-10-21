import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Postlist from './components/Postlist';
import PostListProvider from './store/post-list-store';
import About from './components/About';
import Home from './components/Home';
import Routes from './components/Routes';
import Login1 from './components/login1';


function App() {
    const [selectedTab, setSelectedTab] = useState("Createpost");

    return (
        <PostListProvider>
            <div className="App">
                <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                {selectedTab === "Contact" && <Login />}
                {selectedTab === "graviance" && <Postlist></Postlist>}
                {selectedTab === "About" && <About/>}
                {selectedTab === "Home" && <Home />}
                {selectedTab === "Routes" && <Routes />}
                {selectedTab==="Login" && <Login1></Login1>}
              
                <Footer />
            </div>
        </PostListProvider>
    );
}

export default App;
