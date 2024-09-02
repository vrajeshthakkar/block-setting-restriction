# Block Setting Restriction Plugin

WordPress Plugin for [Multidots](https://www.multidots.com/)

### Requirements

`Block Setting Restriction` requires the following dependencies:

- [Node.js](https://nodejs.org/)
- [NVM](https://wptraining.md10x.com/lessons/install-nvm/) 

### Quick Start

Clone or download this repository, change its name to something else (like, say, `md-optima`), and then you'll need to do a nine-step find and replace on the name in all the templates. **Please make sure to on capslock before start search and replace.**

1. Search for `block-setting-restriction` the text replace with: `md-optima` .
2. Search for `block_setting_restriction` the text replace with: `md_optima` .
3. Search for `BLOCK-SETTING-RESTRICTION` the text replace with: `MD-OPTIMA` .
4. Search for `BLOCK_SETTING_RESTRICTION` the text replace with: `MD_OPTIMA` .
5. Search for `Block_Setting_Restriction` the text replace with: `Md_Optima` .
6. Search for `Block Setting Restriction` the text replace with: `MD Optima` .
7. Delete `phpcbf.xml`, `phpcs.xml` and `composer.json` file from theme root directory.
8. Rename class file `block-setting-restriction-plugin/inc/classes/class-block-setting-restriction.php` to `block-setting-restriction-theme/inc/classes/class-md-optima.php` .
9. Rename plugin folder `block-setting-restriction-plugin` to `md-optima` .


## Build Process

**Install**

Check for Proper node version

```bash
cd assets
nvm use
```

Install Dependency

```bash
npm install
```

**During development**

```bash
npm start
```

**Production**

```bash
npm run build
```