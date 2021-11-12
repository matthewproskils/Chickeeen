export default function loadSprite(k) {
  k.loadSprite('chicken', 'sprites/SpriteSheet.png', {
    sliceX: 6,
    sliceY: 3,
    anims: {
      jump: {
        from: 0,
        to: 3,
        loop: true,
      },
      run: {
        from: 6,
        to: 10,
        loop: true,
      },
      runGun: {
        from: 12,
        to: 17,
        loop: true,
      },
    },
  })

  k.loadSprite('coopGround', 'sprites/coop/ground.png')
  k.loadSprite('coopSky', 'sprites/coop/sky.png')
  k.loadSprite('coop', 'sprites/coop/Coop.png')
  k.loadSprite('insideCoopGround', 'sprites/insideCoop/ground.png')
  k.loadSprite('insideCoopGround2', 'sprites/insideCoop/ground2.png')
  k.loadSprite('insideCoopBed', 'sprites/insideCoop/bed.png')
  k.loadSprite('insideCoopSky', 'sprites/insideCoop/sky.png')
  k.loadSprite('insideCoopEgg', 'sprites/insideCoop/egg.png')
  k.loadSprite('insideCoopDoor', 'sprites/insideCoop/door.png')
  k.loadSprite('insideCoopPainting', 'sprites/insideCoop/painting.png')
  k.loadSprite('insideCoopLight', 'sprites/insideCoop/Light.png')
  k.loadSprite('insideCoopWarp', 'sprites/insideCoop/Warp.png')
  k.loadSprite('use', 'sprites/Use.png')
  k.loadSprite('enter', 'sprites/Enter.png', {
    sliceX: 5,
    sliceY: 1,
    anims: {
      enter: {
        from: 0,
        to: 4,
        loop: true,
      },
    },
  })
}
