let headerTemplate = Handlebars.compile(`
    <div>
        <div style="font-family: 'JetBrains Mono', monospace;
                        font-weight: bold;
                        font-size: 2em;">Tyler Johnson</div>
        <div>Programmer - Composer - A Guy</div>
    </div>
    <nav>
        <a class="navlink" href="/">About</a>
        <a class="navlink" href="/projects/">Explore Projects</a>
        <a class="navlink" href="/resume">Resume</a>
    </nav>
`);

document.getElementsByTagName('header')[0].innerHTML = headerTemplate();