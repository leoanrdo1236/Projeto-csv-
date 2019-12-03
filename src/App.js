import React from 'react';
import logo from './logo.svg';
import './App.css';
import Papa from "papaparse";
import Table from "./Table";

class FileReader extends React.Component {
  constructor() {
    super();
    this.state = {
      csvfile: undefined
    };
    this.updateData = this.updateData.bind(this);
    fetch("data.csv")
    .then(function (response) {
      return response.text();
    })
    .then((myText) => {
      Papa.parse(myText, {
        complete: this.updateData,
        header: true,
      });
    });
  }

  importCSV = (event) => {
    const {csvfile} = this.state;
    Papa.parse(csvfile, {
      complete: this.updateData,
      header: true,
    });
  };

  updateData(result) {
    var data = result.data;
    this.setState({data})
  }

  render() {
    return (
        <div className="App">
          <h2>Importe CSV!</h2>
          <Table data={this.state.data}/>
        </div>
    );
  }
}

export default FileReader;