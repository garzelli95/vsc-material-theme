## Brought to you by

<p><a title="Try CodeStream" href="https://sponsorlink.codestream.com/?utm_source=vscmarket&amp;utm_campaign=equin_material&amp;utm_medium=banner"><img src="https://alt-images.codestream.com/codestream_logo_equin_material.png"></a></br>
Manage pull requests and conduct code reviews in your IDE with full source-tree context. Comment on any line, not just the diffs. Use jump-to-definition, your favorite keybindings, and code intelligence with more of your workflow.<br> <a title="Try CodeStream" href="https://sponsorlink.codestream.com/?utm_source=vscmarket&amp;utm_campaign=equin_material&amp;utm_medium=banner">Learn More</a></p>

---
## Table of contents

The most epic theme meets Visual Studio Code. You can help by reporting issues [here](https://github.com/material-theme/vsc-material-theme/issues).

- [Brought to you by](#brought-to-you-by)
- [Table of contents](#table-of-contents)
- [Getting started](#getting-started)
  - [Installation](#installation)
- [Activate theme](#activate-theme)
- [Set the accent color](#set-the-accent-color)
- [Override theme colors](#override-theme-colors)
  - [Color Scheme override](#color-scheme-override)
- [Recommended settings for a better experience](#recommended-settings-for-a-better-experience)
- [Official Portings](#official-portings)
- [Other resources](#other-resources)
- [Contributors](#contributors)
- [Backers](#backers)
- [Sponsors](#sponsors)


## Getting started

You can install this awesome theme through the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme).

### Installation

Launch *Quick Open*:
  - <img src="https://www.kernel.org/theme/images/logos/favicon.png" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf">Linux</a> `Ctrl+P`
  - <img src="https://developer.apple.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf">macOS</a> `⌘P`
  - <img src="https://www.microsoft.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">Windows</a> `Ctrl+P`

Paste the following command and press `Enter`:

```shell
ext install material theme
```

And pick the one by **Mattia Astorino (Equinusocio)** as author.

## Activate theme

Launch *Quick Open*:

  - <img src="https://www.kernel.org/theme/images/logos/favicon.png" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf">Linux</a> `Ctrl + Shift + P`
  - <img src="https://developer.apple.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf">macOS</a> `⌘ + Shift + P`
  - <img src="https://www.microsoft.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">Windows</a> `Ctrl + Shift + P`

Type `theme`, choose `Preferences: Color Theme`, and select one of the Material Theme variants from the list. After activation, the theme will set the correct icon theme based on your active theme variant.

## Set the accent color

Launch *Quick Open*:

  - <img src="https://www.kernel.org/theme/images/logos/favicon.png" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf">Linux</a> `Ctrl + Shift + P`
  - <img src="https://developer.apple.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf">macOS</a> `⌘ + Shift + P`
  - <img src="https://www.microsoft.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">Windows</a> `Ctrl + Shift + P`

Type `material theme`, choose `Material Theme: Set accent color`, and pick one color from the list.


## Override theme colors
You can override the Material Theme UI and schemes colors by adding these theme-specific settings to your configuration. For advanced customisation please check the [relative section on the VS Code documentation](https://code.visualstudio.com/docs/getstarted/themes#_customizing-a-color-theme).

### Color Scheme override

**Basic example**
```js
"editor.tokenColorCustomizations": {
    "[Material Theme]": {
        "comments": "#229977"
    }
},
```

**Advanced example**

```js
"editor.tokenColorCustomizations": {
    "[Material Theme*]": {
        "textMateRules": [
            {
                "scope": [
                    "comment",
                    "comment punctuation.definition.comment"
                ],
                "settings": {
                    "foreground": "#FF0000"
                }
            }
        ]
    },
},

"workbench.colorCustomizations": {
	"[Material Theme*]": {
		"sideBar.background": "#ff0000",
	}
},
```

## Recommended settings for a better experience

```js
{
    // Controls the font family.
    "editor.fontFamily": "Operator Mono",
    // Controls the line height. Use 0 to compute the lineHeight from the fontSize.
    "editor.lineHeight": 24,
    // Enables font ligatures
    "editor.fontLigatures": true,
    // Controls if file decorations should use badges.
    "explorer.decorations.badges": false
}
```

## Official Portings
Thanks to the Material Theme community you can use it with other software, here are the official portings:

- [GitKraken](https://github.com/material-theme/gitkraken) (by [@equinusocio](https://github.com/julianlatest))
- [Windows Terminal](https://github.com/julianlatest/material-windows-terminal) (by [@julianlatest](https://github.com/julianlatest))
- [Vim and NeoVim](https://github.com/kaicataldo/material.vim) (by [@kaicataldo](https://github.com/kaicataldo))
- [Vim](https://github.com/hzchirs/vim-material) (thanks to [@hzchirs](https://github.com/hzchirs)).
- [Terminal OSX](https://gist.github.com/mvaneijgen/4c56701215847dd5ddcf) (thanks to [@mvaneijgen](https://github.com/mvaneijgen)).
- [iTerm2](https://gist.github.com/Revod/3f3115f8d4b90fc986fd4b61441c2567) (by [@Revod](https://github.com/Revod)) and [iTerm2 Palenight](https://github.com/JonathanSpeek/palenight-iterm2) (by [@jonathanspeek](https://github.com/jonathanspeek)).
- [Hyper](https://github.com/equinusocio/hyper-material-theme).
- [ConEmu](https://gist.github.com/rajadain/b306b2ba71bd58a1df41) (thanks to [@rajadain](https://github.com/rajadain)).
- [Slack App](https://slack.com/) ( #263238,#2e3a40,#80CBC4,#FFFFFF,#13191C,#ffffff,#50fa7b,#FF5555 )
- [Nylas N1](https://github.com/jackiehluo/n1-material) (thanks to [@jackiehluo](https://github.com/jackiehluo))
- [Base16](https://github.com/ntpeters/base16-materialtheme-scheme) (by [@ntpeters](https://github.com/ntpeters))
- [Bear Notes](https://github.com/r3volution11/material-theme-bear-notes) (by [@r3volution11](https://github.com/r3volution11))
- [Mattermost](https://gist.github.com/k1r8r0wn/47cfa776a6fa4e9bf3fa40df0fb76c2c) (by [@k1r8r0wn](https://github.com/k1r8r0wn))
- [Material Theme to GitHub](https://github.com/CharlieEtienne/material-github)
- [Fluent Terminal](https://github.com/idokaraderu/fluent-material-theme) (by [@idokaraderu](https://github.com/idokaraderu))
- [RStudio](https://github.com/lusignan/RStudio-Material-Theme)(by [@lusignan](https://github.com/lusignan))

## Other resources
- **Vscode Dock Icon:** [Download](https://github.com/material-theme/vsc-material-theme/files/989048/vsc-material-theme-appicon.zip) the official Material Theme app icon for Visual Studio code
- **Color palettes:** You can check the official Material Theme colors [here](https://github.com/material-theme/vsc-material-theme/tree/main/scripts/generator/settings/specific)


## Contributors

This project exists thanks to all the people who contribute. [[Contribute]](CONTRIBUTING.md).


## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/material-theme#backer)]


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/material-theme#sponsor)]

---

<p align="center"> <img src="https://equinusocio.gallerycdn.vsassets.io/extensions/material-theme/vsc-material-theme/0.0.14/1494970083238/Microsoft.VisualStudio.Services.Icons.Default" width=16 height=16/> Copyright &copy; 2019 Mattia Astorino & Alessio Occhipinti</p>

