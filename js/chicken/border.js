export default function border(k)
{
  k.add([
    k.rect(0, k.height()),
    k.pos(0, 0),
    k.area(),
    k.solid(),
    k.color(127, 200, 255),
  ])
  k.add([
    k.rect(0, 500),
    k.pos(500, 0),
    k.area(),
    k.solid(),
    k.color(127, 200, 255),
  ])
}