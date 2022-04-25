# snipli

✨ A command-line interface for quickly sharing code snippets for your local files

- [Usage](#usage)
- [Commands](#commands)

# Usage

```bash
$ npm install -g snipli
$ snipli COMMAND
Running command...
$ snipli (--version)
snipli/1.0.0 win32-x64 node-v16.13.0
$ snipli --help [COMMAND]
USAGE
  $ snipli COMMAND
...
```

# Commands

<!-- commands -->
* [`snipli create`](#snipli-create)
* [`snipli delete`](#snipli-delete)
* [`snipli edit`](#snipli-edit)
* [`snipli help [COMMAND]`](#snipli-help-command)
* [`snipli id`](#snipli-id)
* [`snipli login`](#snipli-login)
* [`snipli logout`](#snipli-logout)
* [`snipli plugins`](#snipli-plugins)
* [`snipli plugins:install PLUGIN...`](#snipli-pluginsinstall-plugin)
* [`snipli plugins:inspect PLUGIN...`](#snipli-pluginsinspect-plugin)
* [`snipli plugins:install PLUGIN...`](#snipli-pluginsinstall-plugin-1)
* [`snipli plugins:link PLUGIN`](#snipli-pluginslink-plugin)
* [`snipli plugins:uninstall PLUGIN...`](#snipli-pluginsuninstall-plugin)
* [`snipli plugins:uninstall PLUGIN...`](#snipli-pluginsuninstall-plugin-1)
* [`snipli plugins:uninstall PLUGIN...`](#snipli-pluginsuninstall-plugin-2)
* [`snipli plugins:update`](#snipli-pluginsupdate)
* [`snipli read`](#snipli-read)
* [`snipli whoami`](#snipli-whoami)

## `snipli create`

🦄 Create a new snippet of your local file on gist.github.com

```
USAGE
  $ snipli create -f <value> -d <value> [-p]

FLAGS
  -d, --description=<value>  (required) Description of the gist
  -f, --file=<value>         (required) Path to the file of which you want to create a gist
  -p, --[no-]public          Whether the gist should be public or not

DESCRIPTION
  🦄 Create a new snippet of your local file on gist.github.com

EXAMPLES
  $ snipli create --file=code.ts --description='Need help at line 59 of file code.ts' --public
```

_See code: [dist/src/commands/create.ts](https://github.com/Kira272921/snipli/blob/v1.0.0/dist/src/commands/create.ts)_

## `snipli delete`

🚚 Delete a gist

```
USAGE
  $ snipli delete -i <value>

FLAGS
  -i, --id=<value>  (required) ID of the gist which is to be deleted

DESCRIPTION
  🚚 Delete a gist

EXAMPLES
  $ snipli delete --id=bfce776b3ad1145f764d89c296fec605
```

_See code: [dist/src/commands/delete.ts](https://github.com/Kira272921/snipli/blob/v1.0.0/dist/src/commands/delete.ts)_

## `snipli edit`

✏ Edit an existing gist

```
USAGE
  $ snipli edit -i <value> -f <value> -d <value> [-p]

FLAGS
  -d, --description=<value>  (required) The description of the Gist
  -f, --file=<value>         (required) The path of the file which has the edited content
  -i, --id=<value>           (required) ID of the Gist which you are going to edit
  -p, --[no-]public          Whether the Gist is public or not

DESCRIPTION
  ✏ Edit an existing gist

EXAMPLES
  $ snipli edit --id=ca22a324f761cd241ace4c9a35286496 --file=updated-code.ts --description='Updated the code' --public
```

_See code: [dist/src/commands/edit.ts](https://github.com/Kira272921/snipli/blob/v1.0.0/dist/src/commands/edit.ts)_

## `snipli help [COMMAND]`

Display help for snipli.

```
USAGE
  $ snipli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for snipli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `snipli id`

💡 Get the ID of a gist from it's link

```
USAGE
  $ snipli id -l <value>

FLAGS
  -l, --link=<value>  (required) Link of the gist

DESCRIPTION
  💡 Get the ID of a gist from it's link

EXAMPLES
  $ snipli id --link=https://gist.github.com/Kira272921/bfce776b3ad1145f764d89c296fec605
```

_See code: [dist/src/commands/id.ts](https://github.com/Kira272921/snipli/blob/v1.0.0/dist/src/commands/id.ts)_

## `snipli login`

🔑 Login into snipli via GitHub

```
USAGE
  $ snipli login

DESCRIPTION
  🔑 Login into snipli via GitHub

EXAMPLES
  $ snipli login
```

_See code: [dist/src/commands/login.ts](https://github.com/Kira272921/snipli/blob/v1.0.0/dist/src/commands/login.ts)_

## `snipli logout`

📤 Logout from snipli

```
USAGE
  $ snipli logout

DESCRIPTION
  📤 Logout from snipli

EXAMPLES
  $ snipli logout
```

_See code: [dist/src/commands/logout.ts](https://github.com/Kira272921/snipli/blob/v1.0.0/dist/src/commands/logout.ts)_

## `snipli plugins`

List installed plugins.

```
USAGE
  $ snipli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ snipli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `snipli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ snipli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ snipli plugins:add

EXAMPLES
  $ snipli plugins:install myplugin 

  $ snipli plugins:install https://github.com/someuser/someplugin

  $ snipli plugins:install someuser/someplugin
```

## `snipli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ snipli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ snipli plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/inspect.ts)_

## `snipli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ snipli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ snipli plugins:add

EXAMPLES
  $ snipli plugins:install myplugin 

  $ snipli plugins:install https://github.com/someuser/someplugin

  $ snipli plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/install.ts)_

## `snipli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ snipli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ snipli plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/link.ts)_

## `snipli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ snipli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ snipli plugins:unlink
  $ snipli plugins:remove
```

## `snipli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ snipli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ snipli plugins:unlink
  $ snipli plugins:remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/uninstall.ts)_

## `snipli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ snipli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ snipli plugins:unlink
  $ snipli plugins:remove
```

## `snipli plugins:update`

Update installed plugins.

```
USAGE
  $ snipli plugins:update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/update.ts)_

## `snipli read`

📖 Read a gist locally using vim

```
USAGE
  $ snipli read -i <value>

FLAGS
  -i, --id=<value>  (required) ID of the Gist

DESCRIPTION
  📖 Read a gist locally using vim

EXAMPLES
  $ snipli read --id=ca22a324f761cd241ace4c9a35286496
```

_See code: [dist/src/commands/read.ts](https://github.com/Kira272921/snipli/blob/v1.0.0/dist/src/commands/read.ts)_

## `snipli whoami`

👀 Get the info about the logged in user

```
USAGE
  $ snipli whoami

DESCRIPTION
  👀 Get the info about the logged in user

EXAMPLES
  $ snipli whoami
```

_See code: [dist/src/commands/whoami.ts](https://github.com/Kira272921/snipli/blob/v1.0.0/dist/src/commands/whoami.ts)_
<!-- commandsstop -->
