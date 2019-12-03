import React from 'react';

const style2 = {
  backgroundColor:"#CCEEFF",
};

class Table extends React.Component{
  render(){
    return  <div className="row" style={style2}>
      <div className="col" >
        <table className="table">
          <thead>
          <tr>
            <th scope="col">Sequencia</th>
            <th scope="col">Primeiro Nome</th>
            <th scope="col">Utimo Nome</th>
            <th scope="col">Idade</th>
            <th scope="col">Rua</th>
            <th scope="cool">Cidade</th>
            <th scope="col">Estado</th>
            <th scope="col">Cep</th>
            <th scope="col">Dollar</th>
            <th scope="col">Cor</th>
            <th scope="col">Data</th>
          </tr>
          </thead>
          <tbody>
          {(this.props.data ||[]).map(
              (row)=> {
                return  <tr>
                  <td>{row.seq}</td>
                  <td>{row["name/first"]}</td>
                  <td>{row["name/last"]}</td>
                  <td>{row.age}</td>
                  <td>{row.street}</td>
                  <td>{row.city}</td>
                  <td>{row.state}</td>
                  <td>{row.zip}</td>
                  <td>{row.dollar}</td>
                  <td>{row.pick}</td>
                  <td>{row.date}</td>
                </tr>
              }
          )}
          </tbody>
        </table>
      </div>
    </div>
  }
}
export default Table;