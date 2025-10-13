let headerTemplate = Handlebars.compile(`
    <div class="flex place-items-center justify-content-space w-full sm-flex-v sm-place-content-center">
        <div class="sm-flex-v sm-place-items-center">
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
    </div>
`);

document.getElementsByTagName('header')[0].innerHTML = headerTemplate();