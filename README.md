# Associated Files Plugin for [DocPad](http://docpad.org)

<!-- BADGES/ -->

[![Build Status](http://img.shields.io/travis-ci/docpad/docpad-plugin-associatedfiles.png?branch=master)](http://travis-ci.org/docpad/docpad-plugin-associatedfiles "Check this project's build status on TravisCI")
[![NPM version](http://badge.fury.io/js/docpad-plugin-associatedfiles.png)](https://npmjs.org/package/docpad-plugin-associatedfiles "View this project on NPM")
[![Dependency Status](https://david-dm.org/docpad/docpad-plugin-associatedfiles.png?theme=shields.io)](https://david-dm.org/docpad/docpad-plugin-associatedfiles)
[![Development Dependency Status](https://david-dm.org/docpad/docpad-plugin-associatedfiles/dev-status.png?theme=shields.io)](https://david-dm.org/docpad/docpad-plugin-associatedfiles#info=devDependencies)<br/>
[![Gittip donate button](http://img.shields.io/gittip/docpad.png)](https://www.gittip.com/docpad/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](http://img.shields.io/bitcoin/donate.png?color=yellow)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](http://img.shields.io/wishlist/browse.png?color=yellow)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

<!-- /BADGES -->


This plugin streamlines finding associated files for a particular document in [DocPad](https://docpad.org), which is useful for:
- getting images for a gallery
- getting downloads for an article
- etc. etc.



## Install

``` bash
docpad install associatedfiles
```



## Usage

The way it works is by looking into `src/files/associated-files/#{document.associatedFilesPath or document.basename}` for files. Where `associatedFilesPath` is set in your document's meta data, and if it doesn't exist it will use the document's basename (e.g. the basename of `my-holiday-2012.html.eco` is `my-holiday-2012`). Any files inside that path will be associated to your document, and retrieveable by `@getDocument().getAssociatedFiles()`

Lets see how this works, we have the document `src/documents/my-holiday-2012.html.eco`:

``` html
---
title: My Holiday in 2012
---

<h2>Here are some great photos from our trip</h2>

<% for file in @getDocument().getAssociatedFiles().toJSON(): %>
<p>
	<h3><%= file.title or file.name %></h3>
	<img src="<%= file.url %>" title="<%= file.title or file.name %>" />
</p>
<% end %>
```

Then we will stick a few images inside our path: `src/files/associated-files/my-holiday-2012`. And we'll end up with the rendered result:

``` html
<h2>Here are some great photos from our trip</h2>

<p>
	<h3>sweet-sweet-beach.jpg</h3>
	<img src="/associated-files/my-holiday-2012/sweet-sweet-beach.jpg" title="sweet-sweet-beach.jpg" />
</p>

<p>
	<h3>sweet-sweet-icecream.jpg</h3>
	<img src="/associated-files/my-holiday-2012/sweet-sweet-icecream.jpg" title="sweet-sweet-icecream.jpg" />
</p>
```


## Configure

### Defaults

The default configuration for this plugin is the equivalant of adding the following options to your [DocPad configuration file](http://docpad.org/docs/config):

``` coffee
plugins:
	associatedfiles:
		# The paths for the associated files.
		associatedFilesPath: 'associated-files'

		# Whether to use relative base paths for the document. This would
		# use associated-files/subfolder/myarticle/image.jpg instead of
		# associated-files/myarticle/image.jpg.
		useRelativeBase: false
```

### Template Configuration

It is possible to override the default configuration on a per-template basis:

``` html
---
associatedFilesRelative: true
associatedFilesPath: './myfolder'
---

<% for file in @getDocument().getAssociatedFiles().toJSON(): %>
<p>
	<h3><%= file.title or file.name %></h3>
	<img src="<%= file.url %>" title="<%= file.title or file.name %>" />
</p>
<% end %>
```


<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/docpad/docpad-plugin-associatedfiles/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

## Contribute

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/docpad/docpad-plugin-associatedfiles/blob/master/CONTRIBUTING.md#files)

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- Benjamin Lupton <b@lupton.cc> (https://github.com/balupton)

### Sponsors

No sponsors yet! Will you be the first?

[![Gittip donate button](http://img.shields.io/gittip/docpad.png)](https://www.gittip.com/docpad/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](http://img.shields.io/bitcoin/donate.png?color=yellow)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](http://img.shields.io/wishlist/browse.png?color=yellow)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

### Contributors

These amazing people have contributed code to this project:

- [Benjamin Lupton](https://github.com/balupton) <b@lupton.cc> — [view contributions](https://github.com/docpad/docpad-plugin-associatedfiles/commits?author=balupton)
- [jonathanh32](https://github.com/jonathanh32) — [view contributions](https://github.com/docpad/docpad-plugin-associatedfiles/commits?author=jonathanh32)
- [Morgan Sutherland](https://github.com/msutherl) <morgan@msutherl.net> — [view contributions](https://github.com/docpad/docpad-plugin-associatedfiles/commits?author=msutherl)
- [RobLoach](https://github.com/RobLoach) — [view contributions](https://github.com/docpad/docpad-plugin-associatedfiles/commits?author=RobLoach)
- [takitapart](https://github.com/takitapart) — [view contributions](https://github.com/docpad/docpad-plugin-associatedfiles/commits?author=takitapart)

[Become a contributor!](https://github.com/docpad/docpad-plugin-associatedfiles/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://creativecommons.org/licenses/MIT/)

Copyright &copy; Bevry Pty Ltd <us@bevry.me> (http://bevry.me)

<!-- /LICENSE -->


