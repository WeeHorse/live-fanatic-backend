
const MapModal = props => {

    return <>
        <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-body">{props.children}</div>
            </div>
        </div>
    </>
}

export default MapModal