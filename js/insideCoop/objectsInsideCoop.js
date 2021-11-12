let isCollidingEgg = false
let isCollidingDoor = false
let isCollidingWarp1 = false
let isCollidingWarp2 = false

let egg = null
let EggText = null
let eggTextPos = []

let door = null
let DoorText = null
let doorTextPos = []

let warp1 = null
let warp2 = null
let warpText = null
let warpTextPos = []

function isCollidingWarp(player) {
  if(player.isColliding(warp1))
  {
    if (!isCollidingWarp1)
    {
      warpText.pos = warpTextPos[1]
      isCollidingWarp1 = true
    }
  } else if (player.isColliding(warp2))
  {
    if (!isCollidingWarp2)
    {
      warpText.pos = warpTextPos[2]
      isCollidingWarp2 = true
    }
  } else if (isCollidingWarp1 || isCollidingWarp2)
  {
    isCollidingWarp1 = false
    isCollidingWarp2 = false
    warpText.pos = warpTextPos[0]
  }
}

function onCollide(player)
{
  if (player.isColliding(egg)) {
    if (!isCollidingEgg) {
      isCollidingEgg = true
      EggText.pos =  eggTextPos[1]
    }
  } else if (isCollidingEgg) {
    isCollidingEgg = false
    EggText.pos = eggTextPos[0]
  }

  if (player.isColliding(door)) {
    if (!isCollidingDoor) {
      isCollidingDoor = true
      DoorText.pos = doorTextPos[1]
    }
  } else if (isCollidingDoor) {
    isCollidingDoor = false
    DoorText.pos = doorTextPos[0]
  }

  isCollidingWarp(player)
}

function onKeyPress(k, player)
{
  if (isCollidingEgg)
  {
    k.go("insideCoop")
  } else if (isCollidingDoor)
  {
    k.go("coop")
  } else if (isCollidingWarp1)
  {
    player.pos = k.vec2(400, 225)
    isCollidingWarp1 = false
    isCollidingWarp2 = false
    isCollidingWarp(player)
  } else if (isCollidingWarp2)
  {
    isCollidingWarp1 = false
    isCollidingWarp2 = false
    player.pos = k.vec2(0, 400)
    isCollidingWarp(player)
  }
}

export default function objectsInsideCoop(k) {
  egg = k.add([k.sprite('insideCoopEgg'), k.pos(100, 400), k.scale(5), k.area()])
  EggText = k.add([k.sprite('use'), k.pos(-50, 0), k.scale(2.5)])
  eggTextPos.push(k.vec2(-50, 0))
  eggTextPos.push(k.vec2(110, 350))

  door = k.add([k.sprite('insideCoopDoor'), k.pos(400, 355), k.scale(5), k.area()])
  DoorText = k.add([k.sprite('use'), k.pos(-50, 0), k.scale(2.5)])
  doorTextPos.push(k.vec2(-50, 0))
  doorTextPos.push(k.vec2(410, 320))

  warp1 = k.add([
    k.sprite('insideCoopWarp'),
    k.scale(5),
    k.pos(0, 400),
    k.area()
  ])
  warp2 = k.add([
    k.sprite('insideCoopWarp'),
    k.scale(5),
    k.pos(400, 225),
    k.area()
  ])
  warpText = k.add([k.sprite('enter'), k.pos(-50, 0), k.scale(5)])
  warpText.play('enter')
  warpTextPos.push(k.vec2(-50, 0))
  warpTextPos.push(k.vec2(10, 350))
  warpTextPos.push(k.vec2(410, 180))

  return [onCollide, onKeyPress]
}
