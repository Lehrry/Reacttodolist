import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <body>
    <section>
      <p>Hello there!</p>
      <div className='cont'>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </div>
    </section>
  </body>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// ReactDOM.render(<App></App>, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
