export default function navItem(props) {

  

    

    return (
        <>
            <p class="nav-list-item" onClick={props.clicked}>{props.word}</p>

        </>
    )
}