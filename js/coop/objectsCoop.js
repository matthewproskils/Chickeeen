let isCollidingCoop = false

let coop = null
let coopText = null
let coopTextPos = []

function onCollide(player) {
  if (player.isColliding(coop)) {
    if (!isCollidingCoop) {
      isCollidingCoop = true
      coopText.pos =  coopTextPos[1]
      coopText.play('enter')
    }
  } else if (isCollidingCoop) {
    isCollidingCoop = false
    coopText.pos = coopTextPos[0]
    coopText.stop();
  }
}

function onKeyPress(k)
{
  if (isCollidingCoop)
  {
    k.go("insideCoop")
  }
}

export default function objectsCoop(k) {
  coop = k.add([k.sprite('coop'), k.pos(0, 330), k.scale(5), k.area()])
  coopText = k.add([k.sprite('enter'), k.pos(-50, 0), k.scale(5)])
  coopText.play('enter')
  coopTextPos.push(k.vec2(-50, 0))
  coopTextPos.push(k.vec2(60, 300))

  return [onCollide, onKeyPress]
}
