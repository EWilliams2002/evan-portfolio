


export default function HomeBlock({ block }) {
  const rows = block.rows.map(entry => (
    <div class="rowEntry" key={entry.rowHead}>

      <span id="row-Head" class="row-item">{entry.rowHead}</span>

      <div id="dotted-line"></div>

      <span id="rowColOne" class="row-item">{entry.rowColOne}</span>
      <span id="rowColTwo" class="row-item">{entry.rowColTwo}</span>

    </div>
  ));

  return (
    <div id="homeblock-flex" class="home-text">

      <div class='rowTitleCols'>
        <span class="row-Titles">{block.title}</span>
      </div>

      <div class="rows">
        {rows}
      </div>
      
    </div>
  );
}

