
export default function (props) {

    return <div className="map-modal">
        <div className={`modal ${props.isVisible ? 'show' : ''}`} onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-body">{props.children}</div>
            </div>
        </div>
    </div>

}