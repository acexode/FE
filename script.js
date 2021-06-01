window.onload = () =>{
    location.hash = base+'=green,blue,yellow'
}
const base = 'tags'
const render = () =>{
    const list = document.getElementById("list")
    const tags = location.href.substr(location.href.indexOf("=")+1).toString()
    if(location.hash){
        const html = tags.split(",").map((tag,i) =>{
            return `<li   style="background: ${tag}">${tag}</li>`
        }).join("")
        list.innerHTML = html
    }else{
        location.hash = base+'green,blue,yellow'
    }

}
const newTag = () =>{
    let tags = location.href.substr(location.href.indexOf("=")+1).toString()
    let input= document.getElementById("myInput");
    let newTag = '#tags=' + tags +',' + input.value
    console.log(newTag);
    location.hash = newTag
    input.value = ''
    render()
}
list.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
    let tags = location.href.substr(location.href.indexOf("=")+1).split(',')
    const value = ev.target.innerHTML
    const str = tags.filter(e => e !== value).join(",")
    let newTag = '#tags='  + str
    location.hash = newTag
    render()
    console.log(str);
    
}
}, false);
render()
window.addEventListener("hashchange", render, false);