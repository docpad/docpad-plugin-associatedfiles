# Associated Files Plugin for [DocPad](http://docpad.org)

<!-- BADGES/ -->

<span class="badge-travisci"><a href="http://travis-ci.com/docpad/docpad-plugin-associatedfiles" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/com/docpad/docpad-plugin-associatedfiles/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/docpad-plugin-associatedfiles" title="View this project on NPM"><img src="https://img.shields.io/npm/v/docpad-plugin-associatedfiles.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/docpad-plugin-associatedfiles" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/docpad-plugin-associatedfiles.svg" alt="NPM downloads" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/docpad/docpad-plugin-associatedfiles" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/docpad/docpad-plugin-associatedfiles.svg" alt="Dependency Status" /></a></span>
<span class="badge-daviddmdev"><a href="https://david-dm.org/docpad/docpad-plugin-associatedfiles#info=devDependencies" title="View the status of this project's development dependencies on DavidDM"><img src="https://img.shields.io/david/dev/docpad/docpad-plugin-associatedfiles.svg" alt="Dev Dependency Status" /></a></span>
<br class="badge-separator" />
<span class="badge-githubsponsors"><a href="https://github.com/sponsors/balupton" title="Donate to this project using GitHub Sponsors"><img src="https://img.shields.io/badge/github-donate-yellow.svg" alt="GitHub Sponsors donate button" /></a></span>
<span class="badge-patreon"><a href="https://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/bevry" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-buymeacoffee"><a href="https://buymeacoffee.com/balupton" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-crypto"><a href="https://bevry.me/crypto" title="Donate to this project using Cryptocurrency"><img src="https://img.shields.io/badge/crypto-donate-yellow.svg" alt="crypto donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://img.shields.io/badge/wishlist-donate-yellow.svg" alt="Wishlist browse button" /></a></span>

<!-- /BADGES -->


This plugin streamlines finding associated files for a particular document in [DocPad](https://docpad.org), which is useful for:

-   getting images for a gallery
-   getting downloads for an article
-   etc. etc.

## Install

```bash
docpad install associatedfiles
```

## Usage

The way it works is by looking into `src/files/associated-files/#{document.associatedFilesPath or document.basename}` for files. Where `associatedFilesPath` is set in your document's meta data, and if it doesn't exist it will use the document's basename (e.g. the basename of `my-holiday-2012.html.eco` is `my-holiday-2012`). Any files inside that path will be associated to your document, and retrieveable by `@getDocument().getAssociatedFiles()`

Lets see how this works, we have the document `src/documents/my-holiday-2012.html.eco`:

```html
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

```html
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

```coffee
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

```html
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

<h2>History</h2>

<a href="https://github.com/docpad/docpad-plugin-associatedfiles/blob/master/HISTORY.md#files">Discover the release history by heading on over to the <code>HISTORY.md</code> file.</a>

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

<h2>Contribute</h2>

<a href="https://github.com/docpad/docpad-plugin-associatedfiles/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

<h2>Backers</h2>

<h3>Maintainers</h3>

These amazing people are maintaining this project:

<ul><li><a href="https://github.com/balupton">Benjamin Lupton</a> — <a href="https://github.com/docpad/docpad-plugin-associatedfiles/commits?author=balupton" title="View the GitHub contributions of Benjamin Lupton on repository docpad/docpad-plugin-associatedfiles">view contributions</a></li></ul>

<h3>Sponsors</h3>

No sponsors yet! Will you be the first?

<span class="badge-githubsponsors"><a href="https://github.com/sponsors/balupton" title="Donate to this project using GitHub Sponsors"><img src="https://img.shields.io/badge/github-donate-yellow.svg" alt="GitHub Sponsors donate button" /></a></span>
<span class="badge-patreon"><a href="https://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/bevry" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-buymeacoffee"><a href="https://buymeacoffee.com/balupton" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-crypto"><a href="https://bevry.me/crypto" title="Donate to this project using Cryptocurrency"><img src="https://img.shields.io/badge/crypto-donate-yellow.svg" alt="crypto donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://img.shields.io/badge/wishlist-donate-yellow.svg" alt="Wishlist browse button" /></a></span>

<h3>Contributors</h3>

These amazing people have contributed code to this project:

<ul><li><a href="https://github.com/balupton">Benjamin Lupton</a> — <a href="https://github.com/docpad/docpad-plugin-associatedfiles/commits?author=balupton" title="View the GitHub contributions of Benjamin Lupton on repository docpad/docpad-plugin-associatedfiles">view contributions</a></li>
<li><a href="http://takitapart.com">Bob VanderClay</a></li>
<li><a href="https://github.com/bobvanderclay">Bob VanderClay</a> — <a href="https://github.com/docpad/docpad-plugin-associatedfiles/commits?author=bobvanderclay" title="View the GitHub contributions of Bob VanderClay on repository docpad/docpad-plugin-associatedfiles">view contributions</a></li>
<li><a href="https://github.com/jonathanh32">Jonathan Hughes</a> — <a href="https://github.com/docpad/docpad-plugin-associatedfiles/commits?author=jonathanh32" title="View the GitHub contributions of Jonathan Hughes on repository docpad/docpad-plugin-associatedfiles">view contributions</a></li>
<li><a href="https://github.com/msutherl">Morgan Sutherland</a> — <a href="https://github.com/docpad/docpad-plugin-associatedfiles/commits?author=msutherl" title="View the GitHub contributions of Morgan Sutherland on repository docpad/docpad-plugin-associatedfiles">view contributions</a></li>
<li><a href="https://github.com/RobLoach">Rob Loach</a> — <a href="https://github.com/docpad/docpad-plugin-associatedfiles/commits?author=RobLoach" title="View the GitHub contributions of Rob Loach on repository docpad/docpad-plugin-associatedfiles">view contributions</a></li></ul>

<a href="https://github.com/docpad/docpad-plugin-associatedfiles/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /BACKERS -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; <a href="http://bevry.me">Bevry Pty Ltd</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
