import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppContext } from './context/contextAPI';

import Header from './components/Header';
import Feed from './components/Feed';
import SearchResult from './components/SearchResult';
import VideoDetails from './components/VideoDetails';

const App = () => {
  return (
    <AppContext>
      <Router>
        <div className='flex flex-col h-full'>
          <Header />
          <Routes>
            <Route path='/' exact element={<Feed />} />
            <Route path='/searchResult/:searchQuery' element={<SearchResult />} />
            <Route path='/video/:id' element={<VideoDetails />} />
          </Routes>
        </div>
      </Router>
    </AppContext>
  )
}

export default App
