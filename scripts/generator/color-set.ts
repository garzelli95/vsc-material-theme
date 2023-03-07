import {IColorSet} from '@moxer/vscode-theme-generator';
import {ThemeSetting} from './types';

export const getColorSet = (theme: ThemeSetting): IColorSet => {
  return {
    semanticHighlighting: true,
    base: {
      // Determines the overall background color
      background: theme.scheme.background,
      // Determines boolean, identifier, keyword, storage, and cssClass
      color1: theme.scheme.base.purple,
      // Determines string, stringEscape, and cssId
      color2: theme.scheme.base.green,
      // Determines function, class, classMember, type, and cssTag
      color3: theme.scheme.base.blue,
      // Determines functionCall and number
      color4: theme.scheme.base.blue,
      // Determines the overall text foreground color
      foreground: theme.scheme.foreground
    },
    /**
    * Overrides specific syntax scopes provided
    * by the theme generator
    */
    syntax: {
      cssId: theme.scheme.base.orange,
      cssProperties: theme.scheme.base.cyan,
      cssTag: theme.scheme.base.yellow,
      cssClass: theme.scheme.base.yellow,
      keyword: theme.scheme.base.purple,
      otherKeyword: theme.scheme.base.purple,
      storage: theme.scheme.base.purple,
      identifier: theme.scheme.base.red,
      classMember: theme.scheme.base.red,
      class: theme.scheme.base.purple,
      type: theme.scheme.base.purple,
      function: theme.scheme.base.blue,
      functionCall: theme.scheme.base.blue,
      string: theme.scheme.base.green,
      stringEscape: theme.scheme.alt.emerald,
      boolean: theme.scheme.base.orange,
      number: theme.scheme.base.orange,
      punctuation: theme.scheme.base.cyan,
      comment: theme.scheme.comments,
      variable: theme.scheme.foreground
    },
    /**
    * Override all syntax tokens
    */
    customTokens: [
      {
        name: 'General - Highlight placeholders in strings',
        scope: [
          'constant.other.placeholder'
        ],
        settings: {
          foreground: theme.scheme.alt.emerald
          // == syntax.stringEscape,
        }
      },
      {
        name: 'General - Orange constants',
        scope: [
          'constant.language'
        ],
        settings: {
          foreground: theme.scheme.base.orange
          // == syntax.number,
          // == syntax.boolean,
        }
      },
      {
        name: 'Misc - Yellow Classes/Structs/Interfaces',
        scope: [
          'entity.name.type.go',
          'meta.class entity.name.type.class',
          'entity.name.type.class.java',
          'entity.other.inherited-class.java'
        ],
        settings: {
          foreground: theme.scheme.base.yellow
        }
      },
      {
        name: 'Misc - Red exceptions',
        scope: [
          'support.type.exception',
          'meta.method.java meta.throwables.java storage.type',
          'meta.catch.parameters.java storage.type.java'
        ],
        settings: {
          foreground: theme.scheme.base.red
        }
      },
      {
        name: 'Misc - Import Keyword',
        scope: [
          'keyword.control.import.python'
        ],
        settings: {
          foreground: theme.scheme.base.purple
        }
      },
      {
        name: 'Misc - Imported Packages/Modules',
        scope: [
          'entity.name.import',
          'storage.modifier.import.java'
        ],
        settings: {
          foreground: theme.scheme.foreground,
          fontStyle: 'underline'
        }
      },
      {
        name: 'Keyword Control',
        scope: [
          'keyword.control'
        ],
        settings: {
          foreground: theme.scheme.base.yellow
        }
      },
      {
        name: 'Keyword Operator',
        scope: [
          'keyword.operator'
        ],
        settings: {
          foreground: theme.scheme.base.cyan
        }
      },
      {
        name: 'Parameter',
        scope: [
          'variable.parameter'
        ],
        settings: {
          fontStyle: 'italic'
        }
      },
      {
        name: 'Go - Bold Functions and Type Definitions',
        scope: [
          'entity.name.function.go',
          'entity.name.class.go',
          'entity.name.type.go'
        ],
        settings: {
          fontStyle: 'bold'
        }
      },
      {
        name: 'Java - Bold Classes',
        scope: [
          'entity.name.type.class.java'
        ],
        settings: {
          fontStyle: 'bold'
        }
      },
      {
        name: 'Java - Purple Constructor Calls',
        scope: [
          'meta.function-call.java entity.name.function'
        ],
        settings: {
          foreground: theme.scheme.base.purple
        }
      },
      {
        name: 'Java - this',
        scope: [
          'variable.language.this.java'
        ],
        settings: {
          foreground: theme.scheme.base.red
        }
      },
      {
        name: 'Java - new',
        scope: [
          'keyword.control.new.java'
        ],
        settings: {
          foreground: theme.scheme.base.cyan
        }
      },
      {
        name: 'Python - Self Parameter',
        scope: [
          'variable.parameter.function.language.special.self.python'
        ],
        settings: {
          foreground: theme.scheme.base.red,
          fontStyle: 'italic'
        }
      },
      {
        name: 'Python - Format Placeholder',
        scope: [
          'constant.character.format.placeholder.other.python'
        ],
        settings: {
          foreground: theme.scheme.alt.emerald
        }
      },
      {
        name: 'Python - Function Call',
        scope: [
          'meta.function-call.generic.python',
          'meta.function-call.python',
          'support.function.builtin.python'
        ],
        settings: {
          foreground: theme.scheme.base.blue
        }
      },
      {
        name: 'Python - Normal inside f-strings and function calls',
        scope: [
          'meta.function-call.arguments.python'
        ],
        settings: {
          foreground: theme.scheme.foreground
        }
      },
      {
        name: 'Python - Special variables like __name__',
        scope: [
          'support.variable.magic.python'
        ],
        settings: {
          foreground: theme.scheme.base.orange
        }
      },
      {
        name: 'Shell - Variables in Strings and Subcommands',
        scope: [
          'string.quoted.double.shell variable',
          'meta.command.shell variable.other.normal.shell'
        ],
        settings: {
          foreground: theme.scheme.alt.emerald
        }
      },
      {
        name: 'Shell - Command Name (including built-in)',
        scope: [
          'meta.command.shell entity.name.command.shell',
          'support.function.builtin.shell'
        ],
        settings: {
          foreground: theme.scheme.base.blue
        }
      },
      {
        name: 'Shell - Options',
        scope: [
          'meta.command.shell constant.other.option'
        ],
        settings: {
          foreground: theme.scheme.base.yellow
        }
      },
      {
        name: 'Shell - Subcommands',
        scope: [
          'meta.command.shell string.unquoted.argument.shell'
        ],
        settings: {
          foreground: theme.scheme.foreground
        }
      },
      {
        name: 'Shell - Positional Parameters',
        scope: [
          'variable.parameter.positional.shell',
          'variable.parameter.positional.all.shell'
        ],
        settings: {
          foreground: theme.scheme.base.red
        }
      },
      {
        name: 'Shell - Special Variables',
        scope: [
          'variable.language.special.shell'
        ],
        settings: {
          foreground: theme.scheme.base.red
        }
      },
      {
        name: 'Shell - Math Strings',
        scope: [
          'string.other.math.shell',
          'string.other.math.shell constant.numeric'
        ],
        settings: {
          foreground: theme.scheme.foreground
        }
      },
      {
        name: 'Shell - Line-Continuation Backslash',
        scope: [
          'constant.character.escape.line-continuation.shell'
        ],
        settings: {
          foreground: theme.scheme.base.yellow
        }
      },
      {
        name: 'TOML - Table Properties',
        scope: [
          'support.type.property-name.table.toml'
        ],
        settings: {
          foreground: theme.scheme.base.cyan
        }
      },
      {
        name: 'Markdown - Blockquote',
        scope: [
          'markup.quote'
        ],
        settings: {
          fontStyle: 'italic',
          foreground: theme.scheme.base.cyan
        }
      },
      {
        name: 'Markdown - Fenced Language',
        scope: [
          'markup.fenced_code.block'
        ],
        settings: {
          foreground: `${theme.scheme.foreground}90`
        }
      },
      {
        name: 'Markdown - Blockquote Punctuation',
        scope: [
          'punctuation.definition.quote'
        ],
        settings: {
          foreground: theme.scheme.alt.pink
        }
      },
      {
        name: 'Markup Deleted',
        scope: [
          'markup.deleted'
        ],
        settings: {
          foreground: theme.scheme.base.red
        }
      },
      {
        name: 'Markup Inserted',
        scope: [
          'markup.inserted'
        ],
        settings: {
          foreground: theme.scheme.base.green
        }
      },
      {
        name: 'Markup Underline',
        scope: [
          'markup.underline'
        ],
        settings: {
          fontStyle: 'underline'
        }
      },
      {
        name: 'JSON Key - Level 0',
        scope: [
          'meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: theme.scheme.base.purple
        }
      },
      {
        name: 'JSON Key - Level 1',
        scope: [
          'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: theme.scheme.base.yellow
        }
      },
      {
        name: 'JSON Key - Level 2',
        scope: [
          'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: theme.scheme.base.orange
        }
      },
      {
        name: 'JSON Key - Level 3',
        scope: [
          'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: theme.scheme.base.red
        }
      },
      {
        name: 'JSON Key - Level 4',
        scope: [
          'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: theme.scheme.base.blue
        }
      },
      {
        name: 'JSON Key - Level 5',
        scope: [
          'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: theme.scheme.base.purple
        }
      },
      {
        name: 'JSON Key - Level 6',
        scope: [
          'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: theme.scheme.base.yellow
        }
      },
      {
        name: 'JSON Key - Level 7',
        scope: [
          'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: theme.scheme.base.orange
        }
      },
      {
        name: 'JSON Key - Level 8',
        scope: [
          'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: theme.scheme.base.red
        }
      }
    ],
    /**
    * Overrides workbench UI Elements
    */
    workbench: {
      /**
      * Brackets
      */
      'editorBracketHighlight.foreground1': theme.scheme.base.blue, // == entity.name.function
      'editorBracketHighlight.foreground2': theme.scheme.base.purple, // == storage.type
      'editorBracketHighlight.foreground3': theme.scheme.base.yellow,
      'editorBracketHighlight.foreground4': theme.scheme.base.orange,
      'editorBracketHighlight.foreground5': theme.scheme.base.red,
      /**
      * General elements style
      */
      focusBorder: `${theme.scheme.focusBorder}00`,
      'editorRuler.foreground': theme.scheme.guides,
      'widget.shadow': theme.scheme.shadow,
      'scrollbar.shadow': theme.scheme.shadow,
      'editorLink.activeForeground': theme.scheme.foreground,
      'selection.background': `${theme.scheme.lineHighlight}80`,
      'progressBar.background': theme.scheme.defaultAccent,
      'debugToolBar.background': theme.scheme.background,
      'pickerGroup.foreground': theme.scheme.defaultAccent,
      'editorMarkerNavigation.background': `${theme.scheme.foreground}05`,
      'tree.indentGuidesStroke': theme.scheme.guides,
      'terminalCursor.foreground': theme.scheme.base.yellow,
      'terminalCursor.background': theme.scheme.base.black,
      'editorWhitespace.foreground': `${theme.scheme.foreground}40`,
      /**
      * InputOption
      */
      'inputOption.activeBackground': `${theme.scheme.foreground}30`,
      'inputOption.activeBorder': `${theme.scheme.foreground}30`,
      /**
      * Buttons style
      */
      'button.background': theme.scheme.selection,
      /**
      * Links style
      */
      'textLink.foreground': theme.scheme.defaultAccent,
      'textLink.activeForeground': theme.scheme.foreground,
      /**
      * Sidebar style
      */
      'sideBar.background': theme.scheme.backgroundAlt,
      'sideBar.foreground': theme.scheme.sidebarForeground,
      'sideBar.border': `${theme.scheme.contrastBorder}`,
      /**
      * Sidebar elements style
      */
      'sideBarTitle.foreground': theme.scheme.foreground,
      'sideBarSectionHeader.background': theme.scheme.backgroundAlt,
      'sideBarSectionHeader.border': `${theme.scheme.contrastBorder}`,
      /**
      * Window panels style (terminal, global search)
      */
      'panel.border': `${theme.scheme.contrastBorder}`,
      'panel.background': theme.scheme.backgroundAlt,
      'panel.dropBackground': theme.scheme.foreground,
      /**
      * Window panels elements style
      */
      'panelTitle.inactiveForeground': theme.scheme.foreground,
      'panelTitle.activeForeground': theme.scheme.tabActiveForeground,
      'panelTitle.activeBorder': theme.scheme.defaultAccent,
      /**
      * Code Editor style
      */
      'editor.background': theme.scheme.background,
      'editor.foreground': theme.scheme.foreground,
      'editor.lineHighlightBackground': `${theme.scheme.lineHighlight}50`,
      'editor.selectionHighlightBackground': `${theme.scheme.caret}20`,
      'editor.lineHighlightBorder': `${theme.scheme.lineHighlight}00`,
      'editor.findMatchBackground': theme.scheme.findMatchBackground,
      'editor.findMatchHighlightBackground': theme.scheme.findMatchHighlightBackground,
      'editor.findMatchBorder': theme.scheme.defaultAccent,
      'editor.findMatchHighlightBorder': theme.scheme.findMatchHighlightBorder,
      // Editor Indent guides
      'editorIndentGuide.background': `${theme.scheme.guides}70`,
      'editorIndentGuide.activeBackground': theme.scheme.guides,
      // Editor line number
      'editorLineNumber.foreground': theme.scheme.lineNumbers,
      'editorLineNumber.activeForeground': theme.scheme.sidebarForeground,
      // Editor tab groups
      'editorGroupHeader.tabsBackground': theme.scheme.background,
      'editorGroup.border': theme.scheme.shadow,
      /**
      * Activity bar style
      */
      'activityBar.foreground': theme.scheme.foreground,
      'activityBar.background': theme.scheme.backgroundAlt,
      'activityBar.border': `${theme.scheme.contrastBorder}`,
      'activityBar.activeBorder': theme.scheme.defaultAccent,
      /**
      * Activity bar badges (e.g. number of changed files in version control)
      */
      'activityBarBadge.background': theme.scheme.defaultAccent,
      'activityBarBadge.foreground': theme.scheme.backgroundAlt,
      /**
      * Global badges style
      */
      'badge.background': `${theme.scheme.lineHighlight}30`,
      'badge.foreground': theme.scheme.comments,
      /**
      * Extensions badge style
      */
      'extensionBadge.remoteForeground': theme.scheme.foreground,
      /**
      * Scrollbar style
      */
      'scrollbarSlider.background': theme.scheme.scrollbars,
      'scrollbarSlider.hoverBackground': theme.scheme.scrollbarsHover,
      'scrollbarSlider.activeBackground': theme.scheme.defaultAccent,
      /**
      * Tabs style
      */
      'tab.activeBorder': theme.scheme.defaultAccent,
      'tab.activeModifiedBorder': theme.scheme.sidebarForeground,
      'tab.unfocusedActiveBorder': theme.scheme.comments,
      'tab.activeForeground': theme.scheme.tabActiveForeground,
      'tab.inactiveForeground': theme.scheme.sidebarForeground,
      'tab.inactiveBackground': theme.scheme.background,
      'tab.activeBackground': theme.scheme.background,
      'tab.unfocusedActiveForeground': theme.scheme.foreground,
      'tab.unfocusedHoverBackground': `${theme.scheme.backgroundAlt}80`,
      'tab.border': theme.scheme.background,
      /**
      * Editor overlay widgets style (find/replace..)
      */
      'editorWidget.background': theme.scheme.backgroundAlt,
      'editorWidget.resizeBorder': theme.scheme.defaultAccent,
      'editorWidget.border': theme.scheme.defaultAccent,
      /**
      * Notebook style
      */
      'notebook.focusedCellBorder': theme.scheme.defaultAccent,
      'notebook.inactiveFocusedCellBorder': `${theme.scheme.defaultAccent}50`,
      /**
      * Statusbar style
      */
      'statusBar.noFolderBackground': theme.scheme.background,
      'statusBar.border': `${theme.scheme.contrastBorder}`,
      'statusBar.background': theme.scheme.backgroundAlt,
      'statusBar.foreground': theme.scheme.statusbarForeground,
      'statusBar.debuggingBackground': theme.scheme.base.orange,
      'statusBar.debuggingForeground': theme.scheme.backgroundAlt,
      /**
      * Statusbar items style
      */
      'statusBarItem.hoverBackground': `${theme.scheme.background}80`,
      'statusBarItem.remoteForeground': theme.scheme.base.black,
      'statusBarItem.remoteBackground': theme.scheme.defaultAccent,
      /**
      * Matching brackets style
      */
      'editorBracketMatch.border': `${theme.scheme.caret}50`,
      'editorBracketMatch.background': theme.scheme.background,
      /**
      * Editor Overview Ruler style
      */
      'editorOverviewRuler.findMatchForeground': theme.scheme.defaultAccent,
      'editorOverviewRuler.border': theme.scheme.background,
      'editorOverviewRuler.errorForeground': `${theme.scheme.base.red}40`,
      'editorOverviewRuler.infoForeground': `${theme.scheme.base.blue}40`,
      'editorOverviewRuler.warningForeground': `${theme.scheme.base.yellow}40`,
      /**
      * Squigglies style
      */
      'editorInfo.foreground': `${theme.scheme.base.blue}80`,
      'editorWarning.foreground': `${theme.scheme.base.yellow}80`,
      'editorError.foreground': `${theme.scheme.base.red}80`,
      /**
      * Popop dialogs style
      */
      'editorHoverWidget.background': theme.scheme.background,
      'editorHoverWidget.border': theme.scheme.inputBorder,
      /**
      * Title bar style
      */
      'titleBar.activeBackground': theme.scheme.backgroundAlt,
      'titleBar.activeForeground': theme.scheme.foreground,
      'titleBar.inactiveBackground': theme.scheme.backgroundAlt,
      'titleBar.inactiveForeground': theme.scheme.sidebarForeground,
      'titleBar.border': `${theme.scheme.contrastBorder}`,
      /**
      * Textfield and inputs style
      */
      'input.background': theme.scheme.inputBackground,
      'input.foreground': theme.scheme.foreground,
      'input.placeholderForeground': `${theme.scheme.foreground}60`,
      'input.border': theme.scheme.inputBorder,
      /**
      * Inputs validation style
      */
      'inputValidation.errorBorder': `${theme.scheme.base.red}`,
      'inputValidation.infoBorder': `${theme.scheme.base.blue}`,
      'inputValidation.warningBorder': `${theme.scheme.base.yellow}`,
      /**
      * Dropdown menu style
      */
      'dropdown.background': theme.scheme.background,
      'dropdown.border': theme.scheme.inputBorder,
      /**
       * Quick Panel
       */
      'quickInput.background': theme.scheme.background,
      'quickInput.foreground': theme.scheme.sidebarForeground,
      /**
      * Lists style
      */
      'list.hoverForeground': theme.scheme.listHoverForeground,
      'list.hoverBackground': theme.scheme.background,
      'list.activeSelectionBackground': theme.scheme.background,
      'list.activeSelectionForeground': theme.scheme.defaultAccent,
      'list.inactiveSelectionForeground': theme.scheme.defaultAccent,
      'list.inactiveSelectionBackground': theme.scheme.inactiveSelectionBackground,
      'list.focusBackground': `${theme.scheme.foreground}20`,
      'quickInput.list.focusBackground': `${theme.scheme.foreground}20`,
      'list.focusForeground': theme.scheme.foreground,
      'list.highlightForeground': theme.scheme.defaultAccent,
      /**
      * Editor suggest widget style
      */
      'editorSuggestWidget.background': theme.scheme.background,
      'editorSuggestWidget.foreground': theme.scheme.foreground,
      'editorSuggestWidget.highlightForeground': theme.scheme.defaultAccent,
      'editorSuggestWidget.selectedBackground': `${theme.scheme.lineHighlight}50`,
      'editorSuggestWidget.border': theme.scheme.inputBorder,
      /**
      * Editor diff editor style
      */
      'diffEditor.insertedTextBackground': `${theme.scheme.base.cyan}20`,
      'diffEditor.removedTextBackground': `${theme.scheme.alt.pink}20`,
      /**
      * Notifications
      */
      'notifications.background': theme.scheme.background,
      'notifications.foreground': theme.scheme.foreground,
      'notificationLink.foreground': theme.scheme.defaultAccent,
      /**
      * Extensions button style
      */
      'extensionButton.prominentBackground': `${theme.scheme.base.green}90`,
      'extensionButton.prominentHoverBackground': theme.scheme.base.green,
      'extensionButton.prominentForeground': theme.scheme.base.black,
      /**
      * Peekview window style
      */
      'peekView.border': theme.scheme.shadow,
      'peekViewEditor.background': `${theme.scheme.foreground}05`,
      'peekViewTitle.background': `${theme.scheme.foreground}05`,
      'peekViewResult.background': `${theme.scheme.foreground}05`,
      'peekViewEditorGutter.background': `${theme.scheme.foreground}05`,
      'peekViewTitleDescription.foreground': `${theme.scheme.foreground}60`,
      'peekViewResult.matchHighlightBackground': theme.scheme.selection,
      'peekViewEditor.matchHighlightBackground': theme.scheme.selection,
      'peekViewResult.selectionBackground': `${theme.scheme.sidebarForeground}70`,
      /**
      * GIT decorations style in sidebar or tab
      */
      'gitDecoration.deletedResourceForeground': `${theme.scheme.base.red}`,
      'gitDecoration.conflictingResourceForeground': `${theme.scheme.base.yellow}`,
      'gitDecoration.modifiedResourceForeground': `${theme.scheme.base.blue}`,
      'gitDecoration.untrackedResourceForeground': `${theme.scheme.alt.emerald}`,
      'gitDecoration.ignoredResourceForeground': `${theme.scheme.comments}`,
      // Editor gutter
      'editorGutter.modifiedBackground': `${theme.scheme.base.blue}`,
      'editorGutter.addedBackground': `${theme.scheme.alt.emerald}`,
      'editorGutter.deletedBackground': `${theme.scheme.base.red}`,
      /**
      * Breadcrumb style
      */
      'breadcrumb.background': theme.scheme.background,
      'breadcrumb.foreground': theme.scheme.sidebarForeground,
      'breadcrumb.focusForeground': theme.scheme.foreground,
      'breadcrumb.activeSelectionForeground': theme.scheme.defaultAccent,
      'breadcrumbPicker.background': theme.scheme.backgroundAlt,
      /**
      * Custom menus style
      */
      'menu.background': theme.scheme.background,
      'menu.foreground': theme.scheme.foreground,
      'menu.selectionBackground': `${theme.scheme.lineHighlight}50`,
      'menu.selectionForeground': theme.scheme.defaultAccent,
      'menu.selectionBorder': theme.scheme.inactiveSelectionBackground,
      'menu.separatorBackground': theme.scheme.foreground,
      /**
      * Menu Bar style
      */
      'menubar.selectionBackground': theme.scheme.inactiveSelectionBackground,
      'menubar.selectionForeground': theme.scheme.defaultAccent,
      'menubar.selectionBorder': theme.scheme.inactiveSelectionBackground,
      /**
      * Settings elements style
      */
      'settings.dropdownForeground': theme.scheme.foreground,
      'settings.dropdownBackground': theme.scheme.backgroundAlt,
      'settings.numberInputForeground': theme.scheme.foreground,
      'settings.numberInputBackground': theme.scheme.backgroundAlt,
      'settings.textInputForeground': theme.scheme.foreground,
      'settings.textInputBackground': theme.scheme.backgroundAlt,
      'settings.headerForeground': theme.scheme.defaultAccent,
      'settings.modifiedItemIndicator': theme.scheme.defaultAccent,
      'settings.checkboxBackground': theme.scheme.backgroundAlt,
      'settings.checkboxForeground': theme.scheme.foreground,
      /**
      * List Filter Widget style
      */
      'listFilterWidget.background': theme.scheme.inactiveSelectionBackground,
      'listFilterWidget.outline': theme.scheme.inactiveSelectionBackground,
      'listFilterWidget.noMatchesOutline': theme.scheme.inactiveSelectionBackground,
      /**
      * Debug Console
      */
      'debugConsole.errorForeground': theme.scheme.base.red,
      'debugConsole.infoForeground': theme.scheme.base.cyan,
      'debugConsole.warningForeground': theme.scheme.base.yellow
    },
    /**
    * Define the integrated shell
    * color palette
    */
    terminal: {
      black: theme.scheme.base.black,
      blue: theme.scheme.base.blue,
      brightBlack: theme.scheme.comments,
      brightBlue: theme.scheme.base.blue,
      brightCyan: theme.scheme.base.cyan,
      brightGreen: theme.scheme.base.green,
      brightMagenta: theme.scheme.base.purple,
      brightRed: theme.scheme.base.red,
      brightWhite: theme.scheme.base.white,
      brightYellow: theme.scheme.base.yellow,
      cyan: theme.scheme.base.cyan,
      green: theme.scheme.base.green,
      magenta: theme.scheme.base.purple,
      red: theme.scheme.base.red,
      white: theme.scheme.base.white,
      yellow: theme.scheme.base.yellow
    },
    /**
    * Define workbench colors
    */
    ui: {
      // Highlights matches from the find widget
      // currentFindMatchHighlight: theme.scheme.shade5,
      // Set the editor cursor color
      cursor: theme.scheme.caret,
      // Ighlights matches from the find widget
      findMatchHighlight: theme.scheme.foreground,
      // Highlights the selected area for "find in selection"
      findRangeHighlight: `${theme.scheme.base.yellow}30`,
      // Set color for invisible characters/whitespaces
      invisibles: theme.scheme.guides,
      // Highlights text which matches the selected text
      selection: theme.scheme.selection,
      // Highlights text inside selected area
      selectionHighlight: `${theme.scheme.base.yellow}50`,
      // When the cursor is on a symbol, highlights places that symbol is read
      wordHighlight: `${theme.scheme.alt.pink}30`,
      // When the cursor is on a symbol, highlights places that symbol is written
      wordHighlightStrong: `${theme.scheme.base.green}30`
    }
  };
};
