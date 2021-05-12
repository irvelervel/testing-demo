const PokemonCard = (props) => (
    <div className="card">
        <div className="card-img">
            <img src={props.imgSrc} alt="pkm" />
        </div>
        <div className="card-body">
            <h2>{props.title}</h2>
        </div>
    </div>
)

export default PokemonCard