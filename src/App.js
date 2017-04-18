import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Reactulator!</h1>
        <div className="box">
          <div className="title">
            <p>GA Instruments TI-WDI</p>
          </div>
          <div className="display">
            <input type="text" readOnly size="18" id="d"/>
          </div>
          <div className="App-button">
            <p class="buttonRow">
              <Button type="button" color="button gray" val="mrc" />
              <Button type="button" color="button gray" val="m-" />
              <Button type="button" color="button gray" val="m+" />
              <Button type="button" color="button pink" val="/" />
            </p>
            <p class="buttonRow">
              <Button type="button" color="button black" val="7" />
              <Button type="button" color="button black" val="8" />
              <Button type="button" color="button black" val="9" />
              <Button type="button" color="button pink" val="*" />
            </p>
            <p class="buttonRow">
              <Button type="button" color="button black" val="4" />
              <Button type="button" color="button black" val="5" />
              <Button type="button" color="button black" val="6" />
              <Button type="button" color="button gray" val="-" />
            </p>
            <p class="buttonRow">
              <Button type="button" color="button black" val="0" />
              <Button type="button" color="button black" val="." />
              <Button type="button" color="button black" val="C" />
              <Button type="button" color="button orange" val="=" />
            </p>
              </div>
            </div>
          </div>
    );
  }
}

export default App;
