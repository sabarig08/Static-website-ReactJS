import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Table from './Component/Content';
import Form from './Component/Form';

function Website(){
  return(
    <div>
      <Header />
      <Table />
      <Form />
      <Footer />
    </div>
  )

}
ReactDOM.render(<Website/>,document.getElementById("root"));
