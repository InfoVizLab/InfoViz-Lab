---
layout: page
title: 01.interactive_web
permalink: /01_interactive_web
comments: true
---
<script>
window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});

var mHtml = $("html");
var page = 1;
mHtml.animate({scrollTop : 0},10);


</script>
<div class="row justify-content-between" style="display:none;">
    <div class="col-md-12">
        <img class="shadow-lg" src="{{site.baseurl}}/assets/images/dolphin.png" alt="dolphin" />
        <p>This research started with a rethink of humans and dolphins.</p>
        <p class="mb-5"><img class="shadow-lg" src="{{site.baseurl}}/assets/images/mediumish-jekyll-template.png" alt="jekyll template mediumish" /></p>
        <h4>Documentation</h4>
        <p>Please, read the docs <a href="https://bootstrapstarter.com/bootstrap-templates/template-mediumish-bootstrap-jekyll/">here</a>.</p>
        <h4>Questions or bug reports?</h4>
        <p>Head over to our <a href="https://github.com/wowthemesnet/mediumish-theme-jekyll">Github repository</a>!</p>
    </div>
</div>

<div class="section" id="section1">
    <div id = "section1_detail">

    </div>
</div>
<div class="section" id="section2"></div>
<div class="section" id="section3"></div>
<div class="section" id="section4"></div>