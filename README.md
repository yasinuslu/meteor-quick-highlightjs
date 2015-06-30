# HighlightJS made easy

Install:

```
meteor add yasinuslu:quick-highlightjs
```

Usage:

```handlebars
{{#highlight}}
  <code class="lang-js">
    console.log('test');
  </code>
{{/highlight}}
```

Or with `perak:markdown` (remove all backslashes in following code)

```handlebars
{{#highlight}}
{{#markdown}}
# test

\```js
console.log('test');
\```

{{/markdown}}
{{/highlight}}
```

quick-hightlightjs uses `default` theme from highlightjs but you can change that by calling this method
```js
quickHighlightJS.set("theme", "monokai");
```

Complete theme list:

```
agate
androidstudio
arta
ascetic
atelier-cave.dark
atelier-cave.light
atelier-dune.dark
atelier-dune.light
atelier-estuary.dark
atelier-estuary.light
atelier-forest.dark
atelier-forest.light
atelier-heath.dark
atelier-heath.light
atelier-lakeside.dark
atelier-lakeside.light
atelier-plateau.dark
atelier-plateau.light
atelier-savanna.dark
atelier-savanna.light
atelier-seaside.dark
atelier-seaside.light
atelier-sulphurpool.dark
atelier-sulphurpool.light
brown_paper
codepen-embed
color-brewer
dark
darkula
default
docco
far
foundation
github
hybrid
idea
ir_black
kimbie.dark
magula
mono-blue
monokai
monokai_sublime
obsidian
paraiso.dark
paraiso.light
pojoaque
railscasts
rainbow
school_book
solarized_dark
solarized_light
sunburst
tomorrow-night-blue
tomorrow-night-bright
tomorrow-night-eighties
tomorrow-night
tomorrow
vs
xcode
zenburn
```
