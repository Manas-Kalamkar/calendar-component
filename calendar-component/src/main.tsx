import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import CalendarView from './components/Calendar/CalendarView'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CalendarView />
  </StrictMode>,
)
