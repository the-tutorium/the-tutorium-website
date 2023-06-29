import Typed from "typed.js";
import React, { Component } from "react";
import styled from "styled-components";

const Element = styled.span`
	text-align: center;
	white-space: pre;
`;

const words = ["Welcome to The Tutorium", "Accelerate your math learning", "Unleash your programming potential"];

class Typing extends React.Component {
	componentDidMount() {
		const options = {
			strings: words,
			typeSpeed: 30,
			backSpeed: 30,
			loop: true,
			showCursor: true,
			cursorChar: "|",
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
					ref={(el) => {
						this.el = el;
					}}
				/>
			</>
		);
	}
}

export default Typing;
