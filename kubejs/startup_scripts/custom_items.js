onEvent('item.registry', e => {
  e.create('mass_of_wills').displayName('§6遗嘱的质量').tooltip('§8古人六大意志的结合').unstackable()
  e.create('rune_of_sins').displayName('§6罪恶符文').tooltip('§8包含七宗罪力量的符文').unstackable()
  e.create('uu_matter').displayName('§dUU物质')
  e.create('patrick_star').displayName('§d派大星')
  e.create('saltpeter_ingot').displayName('硝酸锭')
  e.create('potassium_nitrate_dust').displayName('硝酸钾粉')
  e.create('potassium_nitrate_ingot').displayName('硝酸钾锭')
  e.create('potassium_dust').displayName('钾粉')
  e.create('potassium_ingot').displayName('钾锭')
  e.create('uru_ingot').displayName('§6乌鲁金属锭')
  e.create('uru_nugget').displayName('§6乌鲁金属块')
})

onEvent('block.registry', e => {
  e.create('magical_soil').displayName('§b神奇的土壤').material('grass').hardness(0.6)
  e.create('saltpeter_block').displayName('硝酸盐方块').material('metal')
  e.create('potassium_block').displayName('钾方块').material('metal')
  e.create('potassium_nitrate_block').displayName('硝酸钾方块').material('metal')
  e.create('uru_block').displayName('§6乌鲁金属块').material('metal')
  e.create('atm_star_block').displayName('§eATM星方块').material('iron').hardness(5).lightLevel(1)
  e.create('yellow_cake_uranium_block').displayName('§e黄饼铀块').material('sand')
})