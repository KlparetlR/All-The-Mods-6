onEvent('item.entity_interact', e => {
  if (e.hand == MAIN_HAND) {
    if (e.target.type == 'minecraft:turtle') {
      if (e.target.tags.contains('plastic')) return;

      if (e.getItem().id == 'minecraft:shears') {
        e.target.tags.add('plastic')
        e.player.setStatusMessage(Text.of('好像乌龟脖子上粘了塑料').italic().green())
        e.player.give('industrialforegoing:plastic')
      } else {
        e.player.setStatusMessage(Text.of('脖子上好像有什么东西卡住了...').italic().green())
        e.server.schedule(2000, () => {
          e.player.setStatusMessage(Text.of('也许我可以做点什么来释放它...').italic().green())
        }).call()
      }
    }
  }
})

