export default function addbgcoop(k) {
  k.add([k.sprite('coopSky'), k.pos(0, 0), k.scale(50)])

  k.add([
    k.sprite('coopGround'),
    k.scale(5),
    k.pos(0, k.height()),
    k.origin('botleft'),
    k.area(),
    k.solid(),
  ])
}
