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

- [`snipli create`](#snipli-create)
- [`snipli delete`](#snipli-delete)
- [`snipli edit`](#snipli-edit)
- [`snipli help [COMMAND]`](#snipli-help-command)
- [`snipli id`](#snipli-id)
- [`snipli login`](#snipli-login)
- [`snipli logout`](#snipli-logout)
- [`snipli read`](#snipli-read)
- [`snipli whoami`](#snipli-whoami)

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
