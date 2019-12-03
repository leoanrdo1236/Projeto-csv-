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
  .then(function(response) {
      return response.text();
    })
    .then((myText)=> {
      Papa.parse(myText, {
        complete:  this.updateData,
        header: true,

      });
    });

  }




  handleChange = event => {
    this.setState({
      csvfile: event.target.files[0]

    });
  };

  importCSV = (event) => {
    const { csvfile } = this.state;
    // noinspection JSUnresolvedFunction
    Papa.parse(csvfile, {
      complete: this.updateData,
      header: true,

    });
  };

  updateData(result) {
    var data = result.data;
    // console.log(data);
    this.setState({data})
  }

  render() {
    return (
        <div className="App">
          <h2>Importe CSV!</h2>
          {/*<input*/}
          {/*    className="csv-input"*/}
          {/*    type="file"*/}
          {/*    ref={input => {*/}
          {/*      this.filesInput = input;*/}
          {/*    }}*/}
          {/*    name="file"*/}
          {/*    placeholder={null}*/}
          {/*    onChange={this.handleChange}*/}
          {/*/>*/}
          {/*<p/>*/}
          {/*<button onClick={this.importCSV}> Carregar</button>*/}
    <Table data={this.state.data}/>

        </div>
    );
  }
}

export default FileReader;