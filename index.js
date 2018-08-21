document.addEventListener('DOMContentLoaded', function () {

  var canvas = document.querySelector('.canvas');
  var palette = document.querySelector('.palette');
  var currentColor = 'red';
  var brush = document.querySelector('.brush');

  var selectColor = function() {
    
    //Remove previous current color class
    if (brush.className = 'brush red') {
      brush.classList.remove('red');
    } else if (brush.className = 'brush orange') {
      brush.classList.remove('orange');
    } else if (brush.className = 'brush yellow') {
      brush.classList.remove('yellow');
    } else if (brush.className = 'brush green') {
      brush.classList.remove('green');
    } else if (brush.className = 'brush blue') {
      brush.classList.remove('blue');
    } else if (brush.className = 'brush purple') {
      brush.classList.remove('purple');
    } else if (brush.className = 'brush black') {
      brush.classList.remove('black');
    }

    // Change current color
    if (event.target.className === 'paletteRed') {
      currentColor = 'red';
      brush.classList.add('red');
    } else if (event.target.className === 'paletteOrange') {
      currentColor = 'orange';
      brush.classList.add('orange');
    } else if (event.target.className === 'paletteYellow') {
      currentColor = 'yellow';
      brush.classList.add('yellow');
    } else if (event.target.className === 'paletteGreen') {
      currentColor = 'green';
      brush.classList.add('green');
    } else if (event.target.className === 'paletteBlue') {
      currentColor = 'blue';
      brush.classList.add('blue');
    } else if (event.target.className === 'palettePurple') {
      currentColor = 'purple';
      brush.classList.add('purple');
    } else {event.target.className === 'paletteBlack'
      currentColor = 'black';
      brush.classList.add('black');
    }
  }

  var paint = function() {
    //remove color if there
    if (event.target.className === 'pixel red') {
      event.target.classList.remove('red');
    } else if (event.target.className === 'pixel orange') {
      event.target.classList.remove('orange');
    } else if (event.target.className === 'pixel yellow') {
      event.target.classList.remove('yellow');
    } else if (event.target.className === 'pixel green') {
      event.target.classList.remove('green');
    } else if (event.target.className === 'pixel blue') {
      event.target.classList.remove('blue');
    } else if (event.target.className === 'pixel purple') {
      event.target.classList.remove('purple');
    } else if (event.target.className === 'pixel black') {
      event.target.classList.remove('black');

    //Add color
    } else if (event.target.className === 'pixel') {
      event.target.classList.add(currentColor);
    }
  }

  palette.addEventListener('click', selectColor);
  canvas.addEventListener('click', paint);
})
