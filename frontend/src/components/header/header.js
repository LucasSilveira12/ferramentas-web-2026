const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="${new URL('./header.css', import.meta.url).href}">
    <header>
        --! tag do nav bar !--
    </header>
`;