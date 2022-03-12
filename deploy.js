import ghpages from "gh-pages";
console.log("babo");

ghpages.publish('build', {
    message: "update : deploy automatically.",
    user : {
        name: "gh-Page[bot]",
        email: "th.imk3@gmail.com"
    }
}, (e)=>{console.log(e)});