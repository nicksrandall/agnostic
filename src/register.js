import { h, render } from 'preact/src/preact';

const Empty = () => null;

export default function register(Component, tagName) {
	let prototype = Object.create(HTMLElement.prototype);
	let self = this;
	prototype._vdomComponent = Component;
	prototype.attachedCallback = prototype.attributeChangedCallback = renderElement;
	prototype.detachedCallback = unRenderElement;
	prototype.createdCallback = setup;
	Component.prototype.emit = function (name, e) {
		console.log(this, self);
	}.bind(prototype);
	return document.registerElement(
		tagName || Component.displayName || Component.name,
		{ prototype }
	);
}

function renderElement() {
	this._root = render(
		toVdom(this, this._vdomComponent),
		this.shadowRoot || this.createShadowRoot(),
		this._root
	);
}

function setup() {
	console.log('setup', this);
	this._vdomComponent.prototype.emit = this.dispatchEvent.bind(this);
}

function unRenderElement() {
	render(h(Empty), this.shadowRoot, this._root);
}

function toVdom(element, nodeName) {
	if (element.nodeType===3) return element.nodeValue;
	if (element.nodeType!==1) return null;
	let children=[], props={}, i=0, a=element.attributes, cn=element.childNodes;
	for (i=a.length; i--; ) props[a[i].name] = a[i].value;
	for (i=cn.length; i--; ) children[i] = toVdom(cn[i]);
	return h(nodeName || element.nodeName.toLowerCase(), props, children);
}