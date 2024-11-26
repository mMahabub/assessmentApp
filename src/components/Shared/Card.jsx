import PropTypes from 'prop-types'

function Card({children, reverse}){
    return(
        // <div className={`card ${reverse && 'reverse' }`}>{children}</div>
        <div className="card" style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#ffff',
            color: reverse ? '#ffff' : 'rgba(0,0,0,0.4)',
        }}>{children}</div>
    )
}

Card.defaultProps = {
    reverse: false,
}
Card.protoTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card