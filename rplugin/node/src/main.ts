import { NvimPlugin } from 'neovim';

export default function myplugin(plugin: NvimPlugin) {
    plugin.setOptions({
        // Set your plugin to dev mode, which will cause the module to be reloaded on each invocation
        dev: true,

        // `alwaysInit` will always attempt to attempt to re-instantiate the
        // plugin. e.g. your plugin class will always get called on each invocation
        // of your plugin's command.
        alwaysInit: false,
    });

    plugin.registerCommand(
        'EchoMessage',
        async () => {
            try {
                await plugin.nvim.outWrite('Dayman (ah-ah-ah) \n');
            } catch (err) {
                console.error(err);
            }
        },
        { sync: false },
    );

    plugin.registerFunction(
        'SetLines',
        () => {
            return plugin.nvim
                .setLine('May I offer you an egg in these troubling times')
                .then(() => console.log('Line should be set'));
        },
        { sync: false },
    );

    plugin.registerAutocmd(
        'BufEnter',
        async fileName => {
            await plugin.nvim.buffer.append('BufEnter for a JS File?');
        },
        { sync: false, pattern: '*.js', eval: 'expand("<afile>")' },
    );
}
