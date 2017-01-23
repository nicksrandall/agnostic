import { h, render } from 'preact';

const Empty = () => null;

export default function register(
  Component,
  tagName,
  createdCallback = () => {
  },
) {
  let prototype = Object.create(HTMLElement.prototype);
  prototype._vdomComponent = Component;
  prototype.attachedCallback = prototype.attributeChangedCallback = renderElement;
  prototype.detachedCallback = unRenderElement;
  prototype.createdCallback = createdCallback;
  return document.registerElement(
    tagName || Component.displayName || Component.name,
    { prototype },
  );
}

function renderElement() {
  this._root = render(
    toVdom(this, this._vdomComponent),
    this.shadowRoot || this.createShadowRoot(),
    this._root,
  );
}

function unRenderElement() {
  render(h(Empty), this.shadowRoot, this._root);
}

function toVdom(element, nodeName) {
  if (element.nodeType === 3) {
    return element.nodeValue;
  }

  if (element.nodeType !== 1) {
    return null;
  }

  const children = [];
  const props = {};
  const a = element.attributes;
  const cn = element.childNodes;

  for (let i = 0; i < a.length; i++) {
    props[a[i].name] = a[i].value === '' ? a[i].name : a[i].value;
  }

  for (let i = 0; i < cn.length; i++) {
    children[i] = toVdom(cn[i]) || null;
  }

  return h(nodeName || element.nodeName.toLowerCase(), props, children);
}
