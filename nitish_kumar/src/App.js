import './App.css';

function App() {


  return (
    <div className="main">
      <div className="circle">
        <div className='name-tag'>I'm Nitish</div>
      </div >
      <div className="Items">
        <div id="mercury-orbit">
          <div id="mercury" ></div>
        </div>

        <div id="venus-orbit">
          <div id="venus"></div>
        </div>

        <div id="earth-orbit">
          <div id="earth" ></div>

        </div>
      </div>

      <div className='info'>
        This is for my information...<br></br>
        This is for my information...<br></br>
        This is for my information...<br></br>
        This is for my information...
      </div>
    </div>
  );
}

export default App;
