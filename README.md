# project-dashboard


## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)

### Developing

1. Run `npm install` to istall grunt and node modules dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.


###Code Guide
-client/app/main Main state/route for project dashboard. This serve as main route for out app.

 	-main.controller.js controller for this route.

 	-main.controller.spec.js unit test for this route.

 	-main.css all the css for this route.

 	-main.html html file for this route.

 	-main.js ui-state setup for this route.

-client/app/record An angular directive for record cards.

	-record.css all the css for this directive.

	-record.directive.js javascript for the directive file.

	-record.directive.spec.js unit test for this directive

	-record.html html file for this directive.


-client/componets/filters/advanceSearch custom angular filter for input search.

	-advanceSearch.filter.js javascript for this filter.

	-advanceSearch.filter.spec.js unit test for this custome angular filter.


-client/componets/API severs as an angular factory to get the mock data from json file.

	-API.service.js javascript for the api
	
	API.service.spec.js unit test for the api.
	

