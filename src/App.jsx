import { Navbar } from './components/Navbar'
import { ThemeProvider } from './theme/Theme'

const App = () => {
  return (
    <ThemeProvider>
        <Navbar />
    </ThemeProvider>
  )
}

export default App