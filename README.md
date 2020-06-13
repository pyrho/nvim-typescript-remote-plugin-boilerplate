NeoVim Typescript Remote Plugin Boilerplate
===========================================

⚠  Still a work in progress.

The repository aims to provide a base to write [Neovim](https://neovim.io/) plugins using [Typescript](https://www.typescriptlang.org/).

It uses Neovim's [official node js client](https://github.com/neovim/node-client), the example is taken from the node-client repo.

How to use/install
------------------

### Build
Run `make`, this should build the files under the `rplugin/node/dist` folder,
ready to be used by nvim.

### Install
Make sure the repository is within a path in your `runtimepath` (run `set rtp`
in vim to check the paths).

If you are using a package manager, just add your folder as you would a normal
plugin: `Plug '~/path/to/your/repo'`

The key is that your (transpiled) JS code ends up under the `rplugin/node` path.

Neovim will look there, check your `package.json` for the `main` key and use
this as an entry point for your plugin.

Once your plugin in your runtimepath, fire nvim and execute the
`:UpdateRemotePlugins` command.

To check that your plugin has been properly registered, look at the
`~/.local/share/nvim/rplugin.vim` file, you should see your plugin and all of
its registered commands, functions etc.
