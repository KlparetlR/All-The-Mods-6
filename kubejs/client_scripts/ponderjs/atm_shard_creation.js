onEvent('ponder.registry', e => {
  e.create('atm6:atm_shard', 'atmadditions:atm_star_shard')
    .scene('atm_shard',
      '如何获得ATM之星碎片',
      'allthemods:shard_bonk',
      (scene, util) => {
        scene.showBasePlate()
        scene.idle(10)

        scene.addKeyframe();

        scene.world().showSection(util.select().position(2, 0, 2), Facing.down)
        scene.overlay()
          .showSelectionWithText(util.select().position(2, 0, 2), 50)
          .text("首先以基岩方块为基础")
          .pointAt(util.vector().centerOf(2, 1, 2))
          .placeNearTarget()
        scene.idle(60)

        scene.addKeyframe();

        scene.world().showSection(util.select().position(2, 1, 2), Facing.down)
        scene.overlay()
          .showSelectionWithText(util.select().position(2, 1, 2), 50)
          .text("放下铁砧")
          .pointAt(util.vector().centerOf(2, 2, 2))
          .placeNearTarget()
        scene.idle(60)

        scene.addKeyframe();

        scene.world().createEntity(
          'quark:glass_frame',
          util.vector().of(2, 2, 2),
          entity => entity.mergeFullNBT('{Facing:1b}')
        )

        scene.overlay()
          .showSelectionWithText(util.select().position(2, 2, 2), 50)
          .text("然后将任何物品展示框放在铁砧上")
          .pointAt(util.vector().centerOf(2, 3, 2))
          .placeNearTarget()
        scene.idle(60)

        scene.addKeyframe();

        scene.world().showSection(util.select().position(2, 3, 2), Facing.down)
        scene.overlay()
          .showSelectionWithText(util.select().position(2, 3, 2), 50)
          .text("最后将雷神之锤放在铁砧上方")
          .pointAt(util.vector().centerOf(2, 4, 2))
          .placeNearTarget()
        scene.idle(60)

        scene.addKeyframe();

        scene.overlay()
          .showControls(new PonderInput([2.5, 2.5, 2.5], PonderPointing.DOWN).rightClick().withItem('atmadditions:atm_star'), 40)
        scene.idle(40)

        scene.addKeyframe();

        scene.overlay()
          .showControls(new PonderInput([2.5, 3.5, 2], PonderPointing.LEFT).leftClick(), 40)
        scene.idle(40)
      }
    )
})
