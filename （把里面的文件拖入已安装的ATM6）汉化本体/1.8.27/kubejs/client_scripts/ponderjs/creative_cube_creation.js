onEvent('ponder.registry', e => {
  e.create('atm6:creative_energy_cube', 'mekanism:creative_energy_cube')
    .scene('creative_energy_cube',
      '如何为创造能量立方充电',
      'allthemods:creative_cube',
      (scene, util) => {
        scene.showBasePlate()
        scene.idle(10)

        scene.addKeyframe();

        scene.world().showSection(util.select().position(1, 1, 3), Facing.south)
        scene.world().showSection(util.select().position(5, 1, 3), Facing.south)
        scene.overlay()
          .showSelectionWithText(util.select().position(1, 1, 3), 50)
          .text("首先，放置两个满能量的终极能量立方")
          .pointAt(util.vector().centerOf(1, 2, 3))
          .placeNearTarget()
        scene.idle(60)

        scene.world().showSection(util.select().position(2, 1, 3), Facing.south)
        scene.world().showSection(util.select().position(4, 1, 3), Facing.south)
        scene.overlay()
          .showSelectionWithText(util.select().position(2, 1, 3), 50)
          .text("之后，放置两个终极输导供应器")
          .pointAt(util.vector().centerOf(2, 2, 3))
          .placeNearTarget()
        scene.idle(60)

        scene.world().showSection(util.select().position(3, 1, 3), Facing.south)
        scene.overlay()
          .showSelectionWithText(util.select().position(3, 1, 3), 50)
          .text("最后，放置空的创造能量立方")
          .pointAt(util.vector().centerOf(3, 2, 3))
          .placeNearTarget()
        scene.idle(60)

        scene.addKeyframe();

        scene.overlay()
          .showControls(new PonderInput([3.5, 2.5, 3.5], PonderPointing.DOWN).whileSneaking().rightClick().withItem('atmadditions:atm_star'), 60)
        scene.idle(60)
      }
    )
})
