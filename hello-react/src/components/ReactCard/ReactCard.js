function ReactCard(props) {
    return (
        <div>
            <img src={props.src} alt={"logo_image"}/>
            <h2>{props.header}</h2>
            <p>{props.description}</p>
        </div>
    )
}
export default ReactCard;