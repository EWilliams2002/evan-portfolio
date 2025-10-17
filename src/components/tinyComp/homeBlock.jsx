


export default function HomeBlock({ block, onRowClick }) {


  const rows = block.rows.map(entry => {

    
    const divProps = { className: "rowEntry", key: entry.rowHead };
    

    if (onRowClick) {
      divProps.onClick = () => onRowClick(entry.rowHead);
      divProps.style = { cursor: "pointer", textDecoration: "underline" };
    }

    return (
      <div {...divProps}>

        <span id="row-Head" className="row-item">{entry.rowHead}</span>
        <div id="dotted-line"></div>
        {entry.rowColOne && <span id="rowColOne" className="row-item">{entry.rowColOne}</span>}
        {entry.rowColTwo && <span id="rowColTwo" className="row-item">{entry.rowColTwo}</span>}

      </div>
      
    );

  });

  return (
    <div id="homeblock-flex" className="home-text">
      <div className='rowTitleCols'>
        <span className="row-Titles">{block.title}</span>
      </div>
      <div className="rows">
        {rows}
      </div>
    </div>
  );
}