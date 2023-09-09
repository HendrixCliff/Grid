import { range } from './utils';

function Grid({ numRows, numCols }) {
  const rowBoxes = range(numRows)
  const columnBoxes = range(numCols)


  return ( 
  <div className="grid">
    {rowBoxes.map( rowCells => (
    <div key={rowCells} className="row">
      {columnBoxes.map((colCells) => (
        <div key={colCells} className="cell"></div>
      ))}
      </div>
  ))}
  </div>
  );
}

export default Grid;
