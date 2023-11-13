import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './i18n'
import App from './App'
import Main from 'components/pages/Main'
import Game from 'components/pages/Game'
import MagicWays from 'components/pages/MagicWays'
import MagicWay from 'components/pages/MagicWay'
import DevRoad from 'components/pages/DevRoad'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='MagicWorld' element={<Main />} />
          <Route path='game' element={<Game />} />
          <Route path='ways-of-magic' element={<MagicWays />} />
          <Route path='ways-of-magic/:way' element={<MagicWay />} />
          <Route path='dev-road' element={<DevRoad />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
