var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var permalinks = require('metalsmith-permalinks');
var moment = require("moment");


Metalsmith(__dirname)
    .metadata({
        mainTitle: "NETFREE - נטפרי",
        description: "",
        root: '/pages/'
    })
    .source('./src')
    .destination('./build')
    .clean(false)
    .use(markdown())
    .use(permalinks())
    .use(layouts({
        engine: 'handlebars',
        partials: 'layouts/partials',
        helpers: {
            formatDate: function(datetime, format) {
                return moment(datetime).format(format); 
            }
        }
    }))
    .build(function(err, files) {
        if (err) {
            throw err;
        }
    });
