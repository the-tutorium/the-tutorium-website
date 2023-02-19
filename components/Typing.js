import Typed from 'typed.js';
import React, { Component } from 'react';
import styled from 'styled-components';

const Element = styled.span`
  text-align: center;
`;

const words = ["Welcome to Mathverse Tutoring", "Accelerate your math learning"];

class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 30,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <>
        <Element
          style={{ whiteSpace: 'pre' }}
          ref={(el) => {
            this.el = el;
          }}
        />
      </>
    );
  }
}

export default Typing;
