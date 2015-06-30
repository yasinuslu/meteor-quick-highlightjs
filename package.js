Package.describe({
  name: 'yasinuslu:quick-highlightjs',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'HighlightJS made easy',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/yasinuslu/meteor-quick-highlightjs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['templating', 'reactive-dict'], 'client');
  api.addFiles([
    'highlight.pack.js',
    'quick-highlight.html',
    'quick-highlightjs.js'
  ], 'client');

  api.addFiles([
    'styles/agate.css',
    'styles/androidstudio.css',
    'styles/arta.css',
    'styles/ascetic.css',
    'styles/atelier-cave.dark.css',
    'styles/atelier-cave.light.css',
    'styles/atelier-dune.dark.css',
    'styles/atelier-dune.light.css',
    'styles/atelier-estuary.dark.css',
    'styles/atelier-estuary.light.css',
    'styles/atelier-forest.dark.css',
    'styles/atelier-forest.light.css',
    'styles/atelier-heath.dark.css',
    'styles/atelier-heath.light.css',
    'styles/atelier-lakeside.dark.css',
    'styles/atelier-lakeside.light.css',
    'styles/atelier-plateau.dark.css',
    'styles/atelier-plateau.light.css',
    'styles/atelier-savanna.dark.css',
    'styles/atelier-savanna.light.css',
    'styles/atelier-seaside.dark.css',
    'styles/atelier-seaside.light.css',
    'styles/atelier-sulphurpool.dark.css',
    'styles/atelier-sulphurpool.light.css',
    'styles/brown_paper.css',
    'styles/brown_papersq.png',
    'styles/codepen-embed.css',
    'styles/color-brewer.css',
    'styles/dark.css',
    'styles/darkula.css',
    'styles/default.css',
    'styles/docco.css',
    'styles/far.css',
    'styles/foundation.css',
    'styles/github.css',
    'styles/hybrid.css',
    'styles/idea.css',
    'styles/ir_black.css',
    'styles/kimbie.dark.css',
    'styles/magula.css',
    'styles/mono-blue.css',
    'styles/monokai.css',
    'styles/monokai_sublime.css',
    'styles/obsidian.css',
    'styles/paraiso.dark.css',
    'styles/paraiso.light.css',
    'styles/pojoaque.css',
    'styles/pojoaque.jpg',
    'styles/railscasts.css',
    'styles/rainbow.css',
    'styles/school_book.css',
    'styles/school_book.png',
    'styles/solarized_dark.css',
    'styles/solarized_light.css',
    'styles/sunburst.css',
    'styles/tomorrow-night-blue.css',
    'styles/tomorrow-night-bright.css',
    'styles/tomorrow-night-eighties.css',
    'styles/tomorrow-night.css',
    'styles/tomorrow.css',
    'styles/vs.css',
    'styles/xcode.css',
    'styles/zenburn.css'
  ], 'client', {
    isAsset: true
  });

  api.export('quickHighlightJS', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('yasinuslu:quick-highlightjs');
  api.addFiles('quick-highlightjs-tests.js');
});
