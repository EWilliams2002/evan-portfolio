


// export default function HomeBlock({ block }) {
//   const rows = block.rows.map(entry => (
//     <div class="rowEntry" key={entry.rowHead}>

//       <span id="row-Head" class="row-item">{entry.rowHead}</span>

//       <div id="dotted-line"></div>

//       <span id="rowColOne" class="row-item">{entry.rowColOne}</span>
//       <span id="rowColTwo" class="row-item">{entry.rowColTwo}</span>

//     </div>
//   ));

//   return (
//     <div id="homeblock-flex" class="home-text">

//       <div class='rowTitleCols'>
//         <span class="row-Titles">{block.title}</span>
//       </div>

//       <div class="rows">
//         {rows}
//       </div>
      
//     </div>
//   );
// }



export default function HomeBlock({ block, onRowClick }) {
  const rows = block.rows.map(entry => {
    // Prepare props for the div
    const divProps = { className: "rowEntry", key: entry.rowHead };
    // Conditionally add onClick if handler exists
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