function createMatrix() {
    const rows = document.getElementById('rows').value;
    const cols = document.getElementById('cols').value;
    let matrix = '<table>';
    for (let i = 0; i < rows; i++) {
      matrix += '<tr>';
      for (let j = 0; j < cols; j++) {
        matrix += `<td><input type="number" id="cell${i}${j}"></td>`;
      }
      matrix += '</tr>';
    }
    matrix += '</table>';
    document.getElementById('matrixContainer').innerHTML = matrix;
  }

  function transposeMatrix() {
    const rows = document.getElementById('rows').value;
    const cols = document.getElementById('cols').value;
    let result = '<table>';
    for (let i = 0; i < cols; i++) {
      result += '<tr>';
      for (let j = 0; j < rows; j++) {
        result += `<td>${document.getElementById(`cell${j}${i}`).value}</td>`;
      }
      result += '</tr>';
    }
    result += '</table>';
    document.getElementById('result').innerHTML = result;
  }