# document.querySelector 
* querySelector -> 取符合条件的第一个element 
* querySelectorAll -> 取符合条件的全部element 
*  div.content : div 同级class =content
```html
<h1 class="content">LinkedIn Learning</h1>
<div class="content">
    <span class="content">The LinkedIn learning library has great JavaScript courses!</span>
</div>
<script>
    console.log(document.querySelector(".content")) //  <h1 class="content">LinkedIn Learning</h1>
    console.log(document.querySelectorAll(".content")) // 全部content标签
    console.log(document.querySelector("div.span")) // null
    console.log(document.querySelector("div span")) // <span class="content">The LinkedIn learning library has great JavaScript courses!</span>
    console.log(document.querySelector("div.content")) // <div class="content">
                                                         //   <span class="content">The LinkedIn learning library has great JavaScript courses!</span>
                                                        //</div>
</script>
```