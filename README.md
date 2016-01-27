# ember-cli-lorem-pixel
An ember-cli addon for adding image placeholders from lorempixel.com

This README outlines the details of collaborating on this Ember addon.

## Installation

`npm install ember-cli-lorem-pixel`

## Usage

In a template add `{{lorem-pixel}}` to insert an image

By default this will insert a 100x100px image relating to the theme of cities.

Available options are:
* `height`: (int) in pixels
* `width:` (int) in pixels
* `category:` (str) to pick a theme (visit http://lorempixel.com for a full list)
* `number:` (int 1 to 10) to pick distinct images

## Examples
* `{{lorem-pixel}}` 

will output `<img src="http://lorempixel.com/100/100/city/1">`

* `{{lorem-pixel width=640 height=480 category='cats'}}` 

will output  `<img src="http://lorempixel.com/640/480/cats/1">`

    {{#each model as |item index|}} //considering model holds 3 children
        {{lorem-pixel width=300 height=200 number=index}}
    {{/each}}
will output

    <img src="http://lorempixel.com/300/200/city/0" >
    <img src="http://lorempixel.com/300/200/city/1" >
    <img src="http://lorempixel.com/300/200/city/2" >

    

## Running Tests

No tests have been added yet...

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
