import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GetQuotes,  } from '../pages';
import Home from '../pages/home.index';

export const RoutesPages: React.FC = () => {
      return (
            <Router>
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/getquotes" element={<GetQuotes />} />
                  </Routes>
            </Router>
      );
};


