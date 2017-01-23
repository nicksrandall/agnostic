import { h, Component } from 'preact';
import Portal from 'preact-portal';
import register from './register';
import css from './style';

const ModalWrapper = css`
.modal-background {
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);

  & .modal {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    animation-name: animatetop;
    animation-duration: 0.4s
  }

  & .close {
    position: relative;
    right: 5px;
    color: white;
    float: right;
    font-size: 28px;
    font-weight: bold;

    &:hover, &:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
  }
}

@-webkit-keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
}

@keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
}
`;

export class Modal extends Component {
  onClose() {
    this.close();
    this.dispatchEvent(new Event('close'));
  }
  stop(e) {
    e.stopPropagation();
  }
  render ({ open, children }) {
    return open && open != 'false' ? (
      <Portal into="body">
        <ModalWrapper>
          <div class='modal-background' onClick={::this.onClose}>
            <div class='modal' onClick={::this.stop}>
              <span class='close' onClick={::this.onClose}>&times;</span>
              {children}
            </div>
          </div>
        </ModalWrapper>
      </Portal>
    ) : null;
  }
}

function setupModal() {
  this.close = () => {
    this.removeAttribute('open');
  };
  this.open = () => {
    this.setAttribute('open', '');
  };

  this._vdomComponent.prototype.dispatchEvent = this.dispatchEvent.bind(this);
  this._vdomComponent.prototype.close = this.close;
}

register(Modal, 'x-domo-modal', setupModal);

const TitleWrapper = css`
.modal-title {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}
`;
export const ModalTitle = ({ children }) => (
  <TitleWrapper>
    <div class='modal-title'>
      {children}
    </div>
  </TitleWrapper>
);

register(ModalTitle, 'x-domo-modal-title');

const BodyWrapper = css`
.modal-body {
  padding: 2px 16px;
}
`;
export const ModalBody = ({ children }) => (
  <BodyWrapper>
    <div class='modal-body'>{children}</div>
  </BodyWrapper>
);

register(ModalBody, 'x-domo-modal-body');

const FooterWrapper = css`
.modal-footer {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}
`;
export const ModalFooter = ({ children }) => (
  <FooterWrapper>
    <div class='modal-footer'>{children}</div>
  </FooterWrapper>
);

register(ModalFooter, 'x-domo-modal-footer');
