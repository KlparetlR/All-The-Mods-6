onEvent('jei.information', e => {
  let beeTypes = java('com.resourcefulbees.resourcefulbees.compat.jei.JEICompat').ENTITY_INGREDIENT
  e.addForType(beeTypes, ['bee:starry'], ['将这只蜜蜂安置在创造养蜂场中，每次收获将产生10个蜜脾', '你现在应该有一个，利用它！'])
  e.add('thermal:bitumen', ['蒸馏塔中精炼油的副产品'])
  e.add('mekanism:creative_energy_cube', ['要冲满立方，你必须得到2个终极输导供应器，2个充满的终极能量立方和一个ATM星。',
    '',
    '您必须在水平线上构建多块结构，方法是将创造立方放在两侧，两侧放置供应器，末尾放置终极立方。',
    '',
    '您现在要做的就是确保您的立方已冲满，之后您可以Shift+右键单击带有星星的创造立方。'])
  e.add('atmadditions:atm_star_shard', ['要获得碎片，您必须建造一个4块高的结构，如下所示：',
    '',
    '底部的方块是基岩，上面是一个铁砧，顶部有一个物品框。将鼠标悬停在物品框架上，放置雷神之锤。',
    '',
    '一旦你有了结构，将你的ATM星放在物品框架中，然后点击锤子。'])
})
