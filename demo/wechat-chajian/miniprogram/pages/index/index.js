var plugin = requirePlugin("plugin-item1");

Page({
  data: {
    items: [],
    currentItem: 0
  },
  onLoad: function () {
    plugin.sayHello();
    var world = plugin.answer;
  },
  addItem: function () {
    this.data.items.push(this.data.currentItem++);
    this.setData({
      items: this.data.items,
      currentItem: this.data.currentItem
    });
  }
});