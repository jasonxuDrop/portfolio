const fs = require("fs");
const nunjucks = require("nunjucks");

nunjucks.configure("views", {autoescape: true});

const targets = [
    {
        targetPath: "index.html",
        templatePath: "index.html",
        props: {title: "Jason Xu | Gameplay Programmer & Technical Artist"}
    },
    {
        targetPath: "projects/project-v/index.html",
        templatePath: "project_v.html",
        props: {title: "Project V"}
    },
    {
        targetPath: "projects/row/index.html",
        templatePath: "row.html",
        props: {title: "Row"}
    },
    {
        targetPath: "projects/modular-combat-fsm/index.html",
        templatePath: "modular_combat_fsm.html",
        props: {title: "Modular Combat State Machine"}
    },
    {
        targetPath: "projects/paranormal-98/index.html",
        templatePath: "paranormal_98.html",
        props: {title: "Paranormal 98"}
    }
];

for (let { targetPath, templatePath, props } of targets) {
    const parts = targetPath.split("/");
    if (parts.length > 1) {
        parts.pop()
        const directoryPath = parts.join("/");
        fs.mkdirSync(directoryPath, {recursive: true});
    }
    const renderedContent = nunjucks.render(templatePath, props);
    fs.writeFile(targetPath, renderedContent, (err) => {
        if (err) {
            console.error(`Failed to write ${templatePath}`, err);
        } else {
            console.log(`Rendered ${templatePath}`);
        }
    });
}

