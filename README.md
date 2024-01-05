# ssh-server

![](./.github/ssh.webp)

Here is the source code for the SweetDream ssh server honeypot.

## Install

Follow this steps: 
- Clone this repo `git clone https://github.com/SweetDream-honey/ssh-server`
- Open the folder `cd ssh-server`
- Install deps `npm i`
- Run server `node main.js`

## Configure
Configuration are stored in file `config.json`.

The default config file is created for test only. If you wanna use this in production mode:
- Move your server ssh port to another port
- Change config port to listen on port 22

## Args
If you need to debug, use `--verbose` argument