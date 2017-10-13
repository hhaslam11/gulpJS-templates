# gulpJS-templates
Templates to quickly get started with a site running NPM/GulpJS

How to use these templates
-
There's four templates that you can use. `Basic`, `Bootstrap and LESS`, `LESS and Minifier`, and `Full`. Once you figure out which template you want to use, copy the template folder to the directory where you want your website to be. 

First things first: make sure you have npm and GulpJs installed. You can use `setup_gulp.sh` to install these automatically if you're using Ubuntu.

Second thing you should do is edit `package.json` to have the correct information about your project.

Next, download the dependencies needed to run the template by opening your terminal, navigating to the root of the template folder (where `package.json` is), and simply type `npm install`. This will install everything needed for your template to run.

You can now start developing your website. Put all your code and files (.html, .css, .less, image files, etc.) in `./src/`. 

To finally build your website, run `gulp`. This will build your website in `./dist/`. This is what you'll want to put onto your webserver for users to view.

*Remember, these are just templates, so, you can, of course, install your own dependencies and edit the gulpfile as you need.*

*Note: you can delete `README.md `from the template folder. You don't need it.*

Which template do I use?
-
Good question! It depends on your needs, really. I recommend using `Full` if you want to use [Bootstrap](http://getbootstrap.com/ "Bootstrap"), or `LESS and Minifier` if you don't want Bootstrap. Use `Basic` if you just want a bare-bones template, with nothing pre-installed.

Here's a table for you to help decide.

|               	| Basic 	| Bootstrap and LESS 	| LESS and Minifier 	| Full 	|
|---------------	|-------	|--------------------	|-------------------	|------	|
| LESS compiler 	| :x:    	| :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  	|
| Bootstrap     	| :x:    	| :heavy_check_mark:  | :x:                	| :heavy_check_mark:   	|
| Minifier      	| :x:    	| :x:                 | :heavy_check_mark:  | :heavy_check_mark:  	|

Project tree
-
The contents of the template you choose should look something like this (before compiling):

```
│   README.md
│   gulpfile.js
│   package.json    
│
└───src
    │   index.html
    │
    └───css
        │   style.less
   
```
Here's a breakdown of what these files are.

`README.md` -- This is just a file describing what the template includes. You can, and should delete this.

`gulpfile.js`-- This is the heart of GulpJS. It's the script that compiles/builds your site. In these templates, it will take the code from `./src/` and build the site into `./dist/` when you run it. It'll do different things depending on what template you're using. You can edit this files to do whatever you want when building the site. To learn more about Gulpjs, see [gulpjs.com](https://gulpjs.com/).

`package.json`-- This file contains all the information about your site. Including the name, version, description, dependencies, and pretty much anything else you could want. You should edit this file and put in the correct information before starting development on your website. More information [here](https://docs.npmjs.com/files/package.json).

`index.html`-- Just a template homepage file. Nothing special.

`style.less`-- An empty LESS file. LESS is a CSS preprocessor. If you don't want to use LESS, just delete this file and create a CSS file instead, and it'll work as usual- no need to edit the gulpfile. More information about LESS [here](http://lesscss.org/).

Note: You can rename files or directories without having to worry about changing things in the gulpfile. As long as you don't move or rename `gulpfile.js` or `package.json`. For example, feel free to rename `css/` to something else, or get rid of it altogether. You can put LESS files anywhere you want, and the gulpfile will find them and compile them, keeping your website file structure.

Setup scripts
-
Included are two setup scripts that'll install dependencies needed to run the webserver.
*Setup scripts only work on Ubuntu systems*

`setup_gulp.sh` 
Installs node and gulp. You need these to compile/run the templates. These templates WILL NOT work if you do not have node and gulp installed.

`setup_server.sh`
Installs Apache, PHP, mySQL, etc. You need Apache to make your website visible to everyone on the internet, and you need the other things to make your website more flexable; Having databases, for example.

You can run these scripts by typing `sudo sh script-name.sh` in the terminal

Project Versioning
-
This just explains how the version of this project is determined. This is more for my own personal reminder, and I don't think anyone using these templates will need to actually know this. Feel free to ignore this section.

The first public release will be `v1.0.0`, and all following versions will follow the template of `vx.y.z`

`v` ---> Just stands for "version". Pretty standard.
`x`---> Main version. It'll probably never leave v1.
`y`---> Feature additions. This will change if there is one or more feature added, removed, or significantly changed.
`z`---> Bug fixes. This will change if there is one or more bugs fixed.

Example:

`v1.0.0` ---> `v1.0.1` if some bugs get fixed.
`v1.0.1`---> `v1.1.0`if a feature or two is added.

Bug reporting
- 
If you encounter a bug, please open an [issue](https://github.com/hhaslam11/gulpJS-templates/issues). Feel free to request features as well. 
