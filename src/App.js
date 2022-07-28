import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import myimage from './components/myimage.svg'

function App() {
  return (
    <>
      <Navbar />
      <div id="content" className=" d-flex" style={{ height: "100vh" }}>
        <div id="loginpart" className='d-flex justify-content-center align-items-center' style={{ width: "40%" }}>
          <div id="mainbox" className=' d-flex-column justify-content-center' style={{ width: "80%", height: "60%", marginTop: "7rem" }}>
            <h1 className='text-center fw-bold' style={{lineHeight:"1.5rem"}}>Welcome Back</h1>
            <p className='text-center text-dark mt-0'>Sub-title text goes here</p>
            <div className='d-flex justify-content-center mt-4' style={{ height: "15%" }}>
              <input id="email" type="email" className='ps-2' placeholder='Email Address *' style={{ height: "100%", width: "90%", borderRadius: "0.5rem", border: "0.15rem solid #8080804f",fontSize:"1.2rem" }} />
            </div>
            <div className='d-flex justify-content-center mt-2' style={{ height: "15%" }}>
              <input id="password" type="password" autoComplete='false' className='ps-2' placeholder='Password *' style={{ height: "100%", width: "90%", borderRadius: "0.5rem",fontSize:"1.2rem", border: "0.15rem solid #8080804f" }} />
            </div>
            <div className='d-flex justify-content-center mt-2' style={{ height: "15%" }}>
              <button className='text-white' style={{ height: "100%", width: "90%", borderRadius: "0.5rem", border: "none", backgroundColor: "#16395c",fontSize:"1.2rem", }}>Login</button>
            </div>
            <div className='d-flex justify-content-between mt-2 mx-auto' style={{ width: "90%", height: "15%" }} >
              <div className="d-flex justify-content-top">
              <label htmlFor='checkbox' id="rp" style={{ color: "#16395c", textDecoration: "none", fontWeight: "bold" }}><input type="checkbox" id="cb" style={{accentColor:"#16395c",height:"1rem",width:"1rem"}}/> Remember Password</label>
              </div>
              <a href='#' style={{ color: "#16395c", textDecoration: "none", fontWeight: "bold" }}>Forgot Password?</a>
            </div>
          </div>
        </div>
        <div id="imagepart" className='' style={{ width: "60%", backgroundColor: "#16395c" }}>
          <img src={myimage} alt="..." height="100%" width="100%" style={{ objectFit: "contain" }} />
        </div>
      </div>

    </>
  );
}

export default App;
