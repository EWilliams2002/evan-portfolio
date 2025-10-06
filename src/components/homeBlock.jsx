import rowData from '../data/rowData'


export default function homeblock(props) {

    const rows = rowData.map( entry => {
        return (

            <div class="rowEntry">
        
                <span id="row-Head"  class="row-item" >{entry.rowHead}</span>

                <div  id="dotted-line"></div>

                <span id="rowColOne" class="row-item" >{entry.rowColOne}</span>

                <span id="rowColTwo" class="row-item" >{entry.rowColTwo}</span>

            </div>
        )
    })


    return (
        <>
            <div class='rowTitleCols'>

                <span class="row-Titles">
                    {props.title}
                </span>

            </div>


            <div class="rows">
                {rows}
            </div>
            

        </>
    )
}


