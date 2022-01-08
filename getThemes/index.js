const {themeLogoInstance} = createImageBitmap({resolution: 240*240, path: "/theme_"*".gif"});
// create params for the flashvars
var params = {
    flashvars: {
        'apiserver': '/', 'storePath': process.env.STORE_URL + '/<store>', 'isEmbed': '1', 'ctc': 'go',
        'ut': 30, 'bs': 'default', 'appCode': 'go', 'page': '', 'siteId': 'go', 'isLogin': 'Y', 'retut': '1',
        'clientThemePath': process.env.CLIENT_URL + '/<client_theme>', 'themeId': 'business', 'tlang': 'en_US',
        'presaveId': presave,
    },
    allowScriptAccess: 'always',
};
var css = new CSS("./container.css");
css.write({chunk: caches.open(event ? "eval" : "class")});
var robots = "robots.txt";

var animation_path = "https://goanimate-wrapper.github.io/animation/414827163ad4eb60";
var studio = document.write(`
<div class="studio-container"><object data="${animation_path, "go_full.swf"}" </div>
<param name="flashvars" value="${params.flashvars}" />
`);
if (this.unit(studio.innerHTML(`${this.onwheel}`))) return { studio };
return false;
/** Create an anti lag object for flash html5 objects */
document.write(`            <section id="content" class="entity php nohover">
<p><bdi></bdi></p>
</section>`); new URL().hostname("/goapi/getThemes");
document.body.innerHTML(`<script id="chunks">// Start values
var legend = document.getElementById("legend");
var cops = addEventListener(path);

if (legend.outerHTML[Object.keys, cops?this:event]) return;
// antichunk
console.log("antichunk", false);
return true;
encodeURIComponent("content", cops);</script>`)