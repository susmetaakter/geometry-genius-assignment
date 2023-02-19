// for first card
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const div = document.getElementById( 'card-one' );
div.onmouseover = function() {
  this.style.backgroundColor = getRandomColor();
  const h2s = this.getElementsByTagName( 'div' );
  const text = document.getElementById('text');
};
div.onmouseout = function() {
  this.style.backgroundColor = 'transparent';
  const h2s = this.getElementsByTagName( 'h2' );
};

// for second card
function getRandomColor() {
    let lettersTwo = '0123456789ABCDEF';
    let colorTwo = '#';
    for (let i = 0; i < 6; i++ ) {
        colorTwo += lettersTwo[Math.floor(Math.random() * 16)];
    }
    return colorTwo;
}
const divTwo = document.getElementById('card-two');
divTwo.onmouseover = function() {
  this.style.backgroundColor = getRandomColor();
  const h2sTwo = this.getElementsByTagName( 'div' );
  const textTwo = document.getElementById('text');
};
divTwo.onmouseout = function() {
  this.style.backgroundColor = 'transparent';
  const h2sTwo = this.getElementsByTagName( 'h2' );
};

// for third card
function getRandomColor() {
    let lettersThree = '0123456789ABCDEF';
    let colorThree = '#';
    for (let i = 0; i < 6; i++ ) {
        colorThree += lettersThree[Math.floor(Math.random() * 16)];
    }
    return colorThree;
}
const divThree = document.getElementById( 'card-three' );
divThree.onmouseover = function() {
  this.style.backgroundColor = getRandomColor();
  const h2sThree = this.getElementsByTagName( 'div' );
  const textThree = document.getElementById('text');
};
divThree.onmouseout = function() {
  this.style.backgroundColor = 'transparent';
  const h2sThree = this.getElementsByTagName( 'h2' );
};
// for fourth card
function getRandomColor() {
    let lettersFour = '0123456789ABCDEF';
    let colorFour = '#';
    for (let i = 0; i < 6; i++ ) {
        colorFour += lettersFour[Math.floor(Math.random() * 16)];
    }
    return colorFour;
}
const divFour = document.getElementById( 'card-four' );
divFour.onmouseover = function() {
  this.style.backgroundColor = getRandomColor();
  const h2sFour = this.getElementsByTagName( 'div' );
  const textFour = document.getElementById('text');
};
divFour.onmouseout = function() {
  this.style.backgroundColor = 'transparent';
  const h2sFour = this.getElementsByTagName( 'h2' );
};
// for fifth card
function getRandomColor() {
    let lettersFive = '0123456789ABCDEF';
    let colorFive = '#';
    for (let i = 0; i < 6; i++ ) {
        colorFive += lettersFive[Math.floor(Math.random() * 16)];
    }
    return colorFive;
}
const divFive = document.getElementById( 'card-five' );
divFive.onmouseover = function() {
  this.style.backgroundColor = getRandomColor();
  const h2sFive = this.getElementsByTagName( 'div' );
  const textFive = document.getElementById('text');
};
divFive.onmouseout = function() {
  this.style.backgroundColor = 'transparent';
  const h2sFive = this.getElementsByTagName( 'h2' );
};
// for sixth card
function getRandomColor() {
    let lettersSix = '0123456789ABCDEF';
    let colorSix = '#';
    for (let i = 0; i < 6; i++ ) {
        colorSix += lettersSix[Math.floor(Math.random() * 16)];
    }
    return colorSix;
}
const divSix = document.getElementById( 'card-six' );
divSix.onmouseover = function() {
  this.style.backgroundColor = getRandomColor();
  const h2sSix = this.getElementsByTagName( 'div' );
  const textSix = document.getElementById('text');
};
divSix.onmouseout = function() {
  this.style.backgroundColor = 'transparent';
  const h2sSix = this.getElementsByTagName( 'h2' );
};