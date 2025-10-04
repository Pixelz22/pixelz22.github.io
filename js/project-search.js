let listingTemplate = Handlebars.compile(`
{{#each projects}}
    <project>
        <a href="{{this.link}}">
            <div style="box-sizing: border-box; padding: 1em 1em; height: 100%;">
                <h3>{{this.name}}</h3>
                <p>{{{this.summary}}}</p>
            </div>
        </a>
    </project>
{{/each}}
`);

fetch('./listing.json')
    .then((response) => response.json())
    .then((listingJSON) => {
        let resultsContainer = document.getElementsByTagName("project-list")[0];
        resultsContainer.innerHTML = listingTemplate({projects: listingJSON});
    });
