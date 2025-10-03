let template = Handlebars.compile(`
{{#each project}}
    <div>{{project.name}}</div>
{{/each}}
`);

fetch('./listing.json')
    .then((response) => response.json())
    .then((listingJSON) => {
        console.log(template(listingJSON));
    });
