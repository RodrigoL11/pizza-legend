const utils = {
  widthGrid(n) {
    return n * 16;
  },
  asGridCoord(x, y) {
    return `${x * 16},${y * 16}`;
  },
  nextPosition(initialX, initialY, direction) {
    let x = initialX;
    let y = initialY;
    const size = 16;
    if (direction === "left") {
      x -= size
    } else if (direction === 'right') {
      x += size
    } else if (direction === 'up') {
      y -= size
    } else if (direction === 'down') {
      y += size
    }
    return { x, y };
  },
  oppositeDirection(direction) {
    switch (direction) {
      case 'left': return 'right'
      case 'right': return 'left'
      case 'up': return 'down'
      case 'down': return 'up'
      default: console.log(`${direction} não existe!`)
    }
  },
  emitEvent(name, detail) {
    const event = new CustomEvent(name, {
      detail
    });
    document.dispatchEvent(event);
  }
}