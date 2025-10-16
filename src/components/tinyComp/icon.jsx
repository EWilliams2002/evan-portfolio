


export default function icon(props) {
    
    return (
        <>
            <a href={props.link} target="_blank" rel="noopener noreferrer" style={{color: 'white', textDecoration: 'none'}}>
                <img src={props.loco} class="header-icon" alt="..." />
            </a>

        </>
    )
}