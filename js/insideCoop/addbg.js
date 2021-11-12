export default function addbginsidecoop(k) {
  k.add([k.sprite('insideCoopSky'), k.pos(0, 0), k.scale(50)])

  k.add([
    k.sprite('insideCoopGround'),
    k.scale(5),
    k.pos(0, k.height()),
    k.origin('botleft'),
    k.area(),
    k.solid(),
  ])

  k.add([
    k.sprite('insideCoopGround2'),
    k.scale(5),
    k.pos(0, 300),
    k.origin('botleft'),
    k.area(),
    k.solid(),
  ])

  k.add([
    k.sprite('insideCoopPainting'),
    k.scale(5),
    k.pos(50, 350)
  ])

  k.add([
    k.sprite('insideCoopLight'),
    k.scale(5),
    k.pos(-20, 300)
  ])

  k.add([
    k.sprite('insideCoopLight'),
    k.scale(5),
    k.pos(80, 300)
  ])

  k.add([
    k.sprite('insideCoopLight'),
    k.scale(5),
    k.pos(180, 300)
  ])

  k.add([
    k.sprite('insideCoopLight'),
    k.scale(5),
    k.pos(280, 300)
  ])

  k.add([
    k.sprite('insideCoopLight'),
    k.scale(5),
    k.pos(380, 300)
  ])
}
