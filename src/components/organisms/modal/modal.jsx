import './style.css'

const Modal = ({  isOpen, children }) => {
     
    return (
        <div className="modal-container" style={{ display: isOpen ? 'grid' : 'none' }}>
          <div className="modal-body">
            {children}
          </div>
        </div>

      )
    }
  
  
  export default Modal;