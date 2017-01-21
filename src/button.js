import { h, Component } from 'preact/src/preact';
import register from './register';
import css from './style';

const Styled = css`
.button {
	border-radius: 3px;
	cursor: pointer;
	display: inline-block;
	font-weight: 600;
	line-height: 13px;
	outline: 0;
	position: relative;
	text-align: center;
	text-transform: uppercase;
	transition: background-color .3s, padding .3s, font-size .3s, border-color .3s, color .3s;
	vertical-align: middle;
	color: rgba(0,0,0,0.6);
	border: 1px solid rgba(0,0,0,0.2);
	background-color: rgba(255,255,255,0.5);
  overflow: hidden;
  letter-spacing: 0.5px;
	-webkit-font-smoothing: antialiased;
	user-select: none;
	padding: 9px 12px 8px 12px;
	font-size: 12px;
	min-width: auto;
}
.button::before {
	transform: scale(0);
	transform-origin: center center;
	background: #000;
	border-radius: 50%;
	content: "";
	height: 100px;
	left: 50%;
	margin-left: -50px;
	margin-top: -50px;
	opacity: .1;
	position: absolute;
	top: 50%;
	width: 100px;
}
.button:focus::before {
	transform: scale(1);
	z-index: -1000;
	opacity: 0;
	transition: -webkit-transform .3s ease-out, transform .3s ease-out, opacity .6s ease-out;
}
.button:hover {
	background-color: #f8f8f8;
}
.button:active {
	background-color: #e6e6e6;
}

.button[theme="alt"] {
	color: rgba(0,0,0,0.6);
	border-color: transparent;
	background-color: transparent;
}
.button[theme="alt"]:hover {
	background-color: #f8f8f8;
}
.button[theme="alt"]:active {
	background-color: #e6e6e6;
}

.button[theme="primary"] {
	color: white;
	border-color: #fc9927;
	background-color: #fc8f13;
}
.button[theme="primary"]:hover {
	background-color: #fc8f13;
}
.button[theme="primary"]:active {
	background-color: #ed8003;
}
`;

export default class Button extends Component {
	constructor(...args) {
		super(...args);
		this.clickHandler = this.clickHandler.bind(this);
	}
	clickHandler(e) {
		const event = new Event('custom');
		console.log(event);
		this.emit(event);
	}
	render({tabindex = '1', theme = 'default', children}, state) {
		return (
			<Styled>
				<button class='button' theme={theme} tabindex={tabindex} onClick={this.clickHandler}>
					{children}
				</button>
			</Styled>
		);
	}
}

function createdCallback() {
	this._vdomComponent.prototype.emit = this.dispatchEvent.bind(this);
}

register(Button, 'x-domo-button', createdCallback);
