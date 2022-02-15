import React, { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const App = () => {
  return (
    // <div>howdy</div>
    <>
      <Container fluid className="text-center">
        <h1>ABA</h1>
      </Container>

      <Container fluid className='text-center align-middle'>
      <Card>
        Patient information placeholder!
      </Card>
      </Container>

    </>
  );
};

export default App;