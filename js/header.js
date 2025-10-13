let headerTemplate = Handlebars.compile(`
    <div class="sm-flex-v sm-flex-place-items-center">
        <div style="font-family: 'JetBrains Mono', monospace;
                        font-weight: bold;
                        font-size: 2em;">Tyler Johnson</div>
        <div>Coding and Composing with a Creative Soul</div>
    </div>
    <nav>
        <a class="navlink" href="/">About</a>
        <a class="navlink" href="/projects/">Explore Projects</a>
        <!-- <a class="navlink" href="/resume">Resume</a> -->
    </nav>
`);

document.getElementsByTagName('header')[0].innerHTML = headerTemplate();