let template = Handlebars.compile(`
{{#each projects}}
    <div>{{this.name}}</div>
{{/each}}
`);

fetch('./listing.json')
    .then((response) => response.json())
    .then((listingJSON) => {
        console.log(template({projects: listingJSON}));
    });
