# Associated Files Plugin for [DocPad](http://docpad.org)

[![Build Status](https://secure.travis-ci.org/docpad/docpad-plugin-associatedfiles.png?branch=master)](http://travis-ci.org/docpad/docpad-plugin-associatedfiles "Check this project's build status on TravisCI")
[![NPM version](https://badge.fury.io/js/docpad-plugin-associatedfiles.png)](https://npmjs.org/package/docpad-plugin-associatedfiles "View this project on NPM")
[![Flattr donate button](https://raw.github.com/balupton/flattr-buttons/master/badge-89x18.gif)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](https://www.paypalobjects.com/en_AU/i/btn/btn_donate_SM.gif)](https://www.paypal.com/au/cgi-bin/webscr?cmd=_flow&SESSION=IHj3DG3oy_N9A9ZDIUnPksOi59v0i-EWDTunfmDrmU38Tuohg_xQTx0xcjq&dispatch=5885d80a13c0db1f8e263663d3faee8d14f86393d55a810282b64afed84968ec "Donate once-off to this project using Paypal")

This plugin streamlines finding associated files for a particular document in [DocPad](https://docpad.org), which is useful for:
- getting images for a gallery
- getting downloads for an article
- etc. etc.



## Install

```
npm install --save docpad-plugin-associatedfiles
```



## Usage

The way it works is by looking into `src/files/associated-files/#{document.associatedFilesDirectory or document.basename}` for files. Where `associatedFilesDirectory` is set in your document's meta data, and if it doesn't exist it will use the document's basename (e.g. the basename of `my-holiday-2012.html.eco` is `my-holiday-2012`). Any files inside that path will be associated to your document, and retrieveable by `@getDocument().getAssociatedFiles()`

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

Ins't that cool?



## History
[You can discover the history inside the `History.md` file](https://github.com/bevry/docpad-plugin-associatedfiles/blob/master/History.md#files)


## Contributing
[You can discover the contributing instructions inside the `Contributing.md` file](https://github.com/bevry/docpad-plugin-associatedfiles/blob/master/Contributing.md#files)


## License
Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT License](http://creativecommons.org/licenses/MIT/)
<br/>Copyright &copy; 2012+ [Bevry Pty Ltd](http://bevry.me) <us@bevry.me>


## Contributors
- [Benjamin Lupton](http://balupton.com)
- [Morgan Sutherland](http://msutherl.net)
