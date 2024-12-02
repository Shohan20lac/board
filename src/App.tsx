import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TaskBoard from './pages/TaskBoard';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'light'
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/task-board" element={<TaskBoard />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App