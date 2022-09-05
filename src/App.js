import React from 'react'
import img from "./image/beaty.png"
import "./App.css";

const App = () => {

  const submitHandler = e => {
    e.preventDefault();
    alert("Form Data Submitted");
  }
  return (
    <div>
      <main class="main-block">
        <section className="container1">
          <span className="content">
            <div id="round-circle"></div>
            <div id="content" className="content">BASE <br /> APPAREL</div>
          </span>

          <div>
            <h1 id="div-h1">WE'RE</h1>
            <p id="div-p1">COMING</p>
            <p id="div-p2">SOON</p>
            <p id="div-p3"> <span>Lorem Ipsum is simply dummy text of the printing </span>  <span> and typesetting industry. Lorem psum has </span> <span> been the industry’s standard
              dummy Lorem </span> <span> Ipsum is simply dummy text of the </span>  <span> printing and typesetting industry. </span> </p>
            <form onSubmit={submitHandler}>
              <input type="email"  placeholder="Email Address" id='input' required />
              <button type="submit" id="btn"> &gt; </button>
            </form>
            {/* pattern=".+@gmail\.com" */}
          </div>
        </section>
        <section>
          <img src={img} alt='no-img' />
        </section>
      </main>
    </div>
  )
}

export default App