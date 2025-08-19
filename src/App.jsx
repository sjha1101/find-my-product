import './assets/css/Login.css'
function App() {

  return (
    <div className="form">
    <form>
      <h1 className='title'>Sign In</h1>
    <input type="text" placeholder="Enter your username"/>
    <input type="password" placeholder="Enter your password" />
    <button className="submit">Login</button>
    </form>
    </div>
  )
}

export default App
