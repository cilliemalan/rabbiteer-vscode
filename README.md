# VS CODE
*VS code* or *Visual Studio Code* is a lightweight IDE. It works especially well.

1. Open up visual studio code by pressing windows button and typing in `Code`.
You are greeted by the previous environment you had open, or a new blank file
if there was none.
![blank](pitchers/intro.PNG)

In any editor like this there are a myriad of commands and many keyboard shortcuts.
Furthermore keyboard shortcuts may be different between the different platforms. this
document will show the windows shortcuts but they may be different on Mac or Linux.
However, this is unimportant in light of the next feature.

2. The *Command Palette* may be shown by pressing <kbd>ctrl+shift+p</kbd>. On may
now search through and execute all VS Code commands by typings. It also shows
the keyboard shortcut next to the command.<br>
![opening.....](pitchers/openingfolder.gif)

3. Just pressing <kbd>ctrl+p</kbd> or <kbd>f1</kbd> brings up *Quick Command*. In this mode typing
will search through and allow you to open files. But it also performs many other
functions. Pressing `@` searches through symbols in the file and `#` through
all files inthe workspace. Typing `ext` manages extensions. Typing `>` opens
the command palette.

4. Like any text editor new files may be opened or dragged in from explorer.

5. It has some nifty features like changing indentation, charset, syntax highlighting
etc. All these may be accessed from the bottom right corner of the editor:<br/>
![some commands](pitchers/bottomrightcorner.PNG)<br>
e.g. changing encoding:<br>
![changing encoding](pitchers/encodings.PNG)

6. It has multiple editing panes and dragging the tab allows you to dock them.

7. For files such as markdown it has live preview.
![how meta](pitchers/livepreview.gif)<br>
Speaking of, if you <kbd>alt+lmb</kbd> you can put down multiple cursors ala-sublime.
Also <kbd>ctrl+alt+up</kbd> or <kbd>ctrl+alt+down</kbd> (windows).

## Workspace

So far nothing impressive and probably other editors will be better. Where VS Code
really starts to shine is if you open a *folder* as a *Workspace*

1. Opening a folder as a workspace may be done from the *File* menu
<br>
![how boring](pitchers/file_openfolder.PNG)<br>
or by right clicking in a folder and specifying `Open with Code`<br>
![hmmm](pitchers/openwithcode.PNG)<br>
Randomly it can also be openend by typing `code .` in a console window.<br>
![NERDING HARD](pitchers/codepoint.gif)<br>
For me personally the inverse is a much more likely scenario (more on that later).

2. And of course a folder may be opened via the command pallette.

Once VS Code is opened as a workspace, The `EXPLORER` window to the left shows the
folder structure (show/hide with <kbd>ctrl+b</kbd> focus with <kbd>ctrl+shift+e</kbd>),
and the other buttons on the tool panel start making sense. You can seach through
files, perform basic git functions, and even debug code (more on that later).

3. preview a file from the explorer by clicking it, clicking multiple files will cycle
through which one is being previewed. Double click to keep it open.

3. Switch between files by pressing <kbd>ctrl+tab</kbd> or move forward or backward
by pressing <kbd>alt+left</kbd> and <kbd>alt+right</kbd>. This counts even for
previewed files.

4. open a file in the second pane by <kbd>ctrl+lmb</kbd> on them.

## clone the project
Before we move on it may be helpful to clone the project if you haven't already.

1. Open the folder for the project in VS Code.

2. Open a command window by pressing <kbd>ctrl+shift+c</kbd>

## some more editor features

1. Go to a line by pressing <kbd>ctrl+g</kbd> or <kbd>ctrl+p</kbd> <kbd>:</kbd>

2. jump to matched bracket <kbd>ctrl+shift+\</kbd>

3. jump to symbol by pressing <kbd>ctrl+o</kbd> or `@` in quick command.

4. <kbd>ctrl+u</kbd> undos cursor pos.

5. VS Code automatically highligtes other occurences of selected text.

6.<kbd>ctrl+k ctrl+x</kbd> trims trailing whitespace

7. <kbd>ctrl+shift+f</kbd> formats selection or whole file.

8. <kbd>ctrl+shift+[</kbd> and <kbd>ctrl+shift+]</kbd> folds code.

9. <kbd>shift+alt+left</kbd> and <kbd>shift+alt+right</kbd> increase/decrease the selection
area.

10. <kbd>ctrl+i</kbd> selects the current line

## Snippets
For each language there are snippets available.

1. Snippet extensions may be installed, searching for "snippet" `ext install snippet`.
2. Your own snippets may be added too by going to `Open User Snippets`.<br>
The snippet source:<br>
![snippet](pitchers/asnippet.PNG)<br>
And put it in javascript:<br>
![amazeballs](pitchers/snippeting.gif)

## Extensibility
VS Code is trememdnously extensible.

1. Settings may be changed for the current workspace or for all workspaces. Settings
are stored in a JSON file and autocomplete.

2. Keyboard shortcuts, color themes, and icon themes may also be customized. The latter
two may also be downloaded from the marketplace.

Speaking of which, there are several useful extensions to be found.

### ESLint
ESLint allows for linting of javascript files in your project. Linter errors will be
shown as errors/warnings in the bottom right corner and problems pane
<kbd>ctrl+shift+m</kbd>.

1. Install by running in the *Quick Command* typing `ext install vscode-eslint`

### Slack

1. type `ext install Slack` in *Quick Command*
2. after enabling open user settings (<kbd>ctrl+shift+p</kbd> it man!)



## HTML editing

### emmet
Type an emmet snippet then press <kbd>tab</kbd> to magically insert a crapload of html.

Try these:

* `nav>ul>li`
* `ul>li*5`
* `ul>li.item$*5`
* `h$[title=item$]{Header $}*3`
* `html:5`
* `link:css`
* [cheatsheet](http://docs.emmet.io/cheat-sheet/)




# Links
* I pilfered this: [https://github.com/Microsoft/vscode-tips-and-tricks](https://github.com/Microsoft/vscode-tips-and-tricks)
* Awesome extensions: [https://github.com/viatsko/awesome-vscode](https://github.com/viatsko/awesome-vscode)
* I pilfered this too: [https://code.visualstudio.com/docs/runtimes/nodejs](https://code.visualstudio.com/docs/runtimes/nodejs)
* Emmet cheat sheet: [http://docs.emmet.io/cheat-sheet/](http://docs.emmet.io/cheat-sheet/)