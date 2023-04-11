function InfoTooltip(props) {
    return (
        <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`} onClick={props.onOverlayClose}>
            <div className="popup__container">
                <img className="popup__status" src={props.image} alt={props.title}/>
                <h2 className="popup__text">{props.title}</h2>
                <button className="popup__close-button" type="button" title="Закрыть" onClick={props.onClose}/>
            </div>
        </div>
    );
}
  
export default InfoTooltip;