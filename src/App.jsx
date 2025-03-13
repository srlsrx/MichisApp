import './App.css'

function App() { 

  return (
    <>
        <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/adopt" element = {<Adopt />} />
            <Route path="*" element = {< Navigate to = "/" />} />
        </Routes>
      
    </>
  )
}

export default App
