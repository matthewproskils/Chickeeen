import kaboom from 'https://unpkg.com/kaboom/dist/kaboom.mjs'
import border from './chicken/border.js'
import ChickenMovement from './chicken/movement.js'
import loadSprite from './loadSprite.js'
import addChicken from './chicken/addChicken.js'
import addbgcoop from './coop/addbg.js'
import objectsCoop from './coop/objectsCoop.js'
import addbginsidecoop from './insideCoop/addbg.js'
import objectsInsideCoop from './insideCoop/objectsInsideCoop.js'
// initialize context
const k = kaboom({
  width: 500,
  height: 500,
  canvas: document.getElementById('game'),
  global: false,
})

// load assets
loadSprite(k)

k.scene('coop', () =>
{
  addbgcoop(k);

  k.gravity(1000)

  const onCoopCollide = objectsCoop(k);
  const chicken = ChickenMovement(k, addChicken(k), onCoopCollide[1]);
  border(k);

  chicken.onUpdate(() =>
  {
    onCoopCollide[0](chicken);
    // .move() is provided by pos()
    if (chicken.dir != "stop")
    {
      chicken.move(chicken.dir.scale(200))      
    } else if (chicken.animplaying)
    {
      chicken.stop()
      chicken.frame = 0
      chicken.animplaying = false;
    }
  })
})

k.scene('insideCoop', () =>
{
  addbginsidecoop(k);

  k.gravity(1000)

  const onInsideCoopCollide = objectsInsideCoop(k);

  const chicken = ChickenMovement(k, addChicken(k), onInsideCoopCollide[1]);
  border(k);

  chicken.onUpdate(() =>
  {
    onInsideCoopCollide[0](chicken);
    // .move() is provided by pos()
    if (chicken.dir != "stop")
    {
      chicken.move(chicken.dir.scale(200))      
    } else if (chicken.animplaying)
    {
      chicken.stop()
      chicken.frame = 0
      chicken.animplaying = false;
    }
  })
})
k.go('coop')
