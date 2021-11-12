export default function ChickenMovement(k, chicken, spaceDown)
{

  let jump = () =>
  {
    if (chicken.grounded())
    {
      chicken.jump(400)
      chicken.play('jump')
    }
  }

  let release =  () =>
  {
    chicken.dir = "stop"
  }

  let mvRight = () =>
  {
    chicken.dir = k.RIGHT

    chicken.flipX(false)

    if (!chicken.animplaying)
    {
      chicken.play('run')
      chicken.animplaying = true
    }
  }

  let mvLeft = () =>
  {
    chicken.dir = k.LEFT

    chicken.flipX(true)

    if (!chicken.animplaying)
    {
      chicken.play('run')
      chicken.animplaying = true
    }
  }

  k.onKeyDown('left', mvLeft)

  k.onKeyDown('right', mvRight)

  k.onKeyRelease('left', release)

  k.onKeyRelease('right', release)

  k.onKeyPress('up', jump)

  k.onKeyDown('a', mvLeft)

  k.onKeyDown('d', mvRight)

  k.onKeyRelease('a', release)

  k.onKeyRelease('d', release)

  k.onKeyPress('space', () =>
  {
    spaceDown(k, chicken)
    jump()
  })

  k.onKeyPress('w', jump)

  return chicken;
}