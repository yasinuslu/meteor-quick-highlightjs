// Write your package code here!
// Template.highlight.onRendered(function () {
//   this.$('pre code').each(function(i, block) {
//     hljs.highlightBlock(block);
//   });
// });

Template.highlightThemeLink.helpers({
  link: function () {
    var theme = quickHighlightJS.get("theme");
    var link = "/packages/yasinuslu_quick-highlightjs/styles/" + theme + ".css";
    return link;
  }
});

quickHighlightJS = {
  state: new ReactiveDict("quick_highlight_js"),
  set: function (key, value) {
    return this.state.set(key, value);
  },
  get: function (key) {
    return this.state.get(key)
  }
};

quickHighlightJS.set("theme", "default");

Meteor.startup(function () {
  Blaze.render(Template.highlightThemeLink, document.head);
});