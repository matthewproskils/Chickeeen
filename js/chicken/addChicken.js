export default function addChicken(k)
{ 
 
  return k.add([
    // list of components
    k.sprite('chicken'),
    k.pos(200, 400),
    k.area(),
    {
      dir: k.DOWN,
      dead: false,
      speed: 100,
      isfalling: false,
      textureRight: true,
      scale: 5,
      animplaying: false
    },
    k.body(),
  ])
}