# E-CommereceAPI
An API for e-commerce platform admin to manage product inventory <br />
Tech Stack: Node.js &amp; Mongo DB <br />

API to add products to the database :: URL **(POST)** : 
> &emsp; **/products/create** <br />

API to list products :: URL **(GET)** : 
> &emsp; **/products** <br />

API to delete products :: URL **(DELETE)** : 
> &emsp; **/products/_:id_**  <br />

API to update quantity of a product [can be incremented or decremented by '+' OR '-' operator] :: URL **(POST)** : 
> &emsp; **/products/_:id_/update_quantity/?number=**_value_  <br />

_Note: Value could be any number, positive or negative_

## Requirements
For development, you will only need Node.js and a node global package installed in your environement and mongodb for database.<br />

## Node
Node Installtion on Windows Go on to the official Node.js website and download the installer. Also, be sure to have .git available in your PATH, npm might need it (You can find git).<br />

Other operating System You can find more information about the installation on the official Node.js website and the official NPM website.<br />

If the installation was successful, you should be able to run the following command.<br />

> &emsp; node --version

> &emsp; npm --version

## Install
Clone this repository from my git repo

Install all dependencies using: 
> &emsp; npm install

## Running the Project
> &emsp; node index.js
