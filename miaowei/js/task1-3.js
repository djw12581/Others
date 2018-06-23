window.onload = function () {
    var tab = document.getElementById('tab');
    var tr = tab.getElementsByTagName('tr');  
    for (var index = 0; index < tr.length; index++) {
        var td = tr[index].getElementsByTagName('td');

        for (let i=0; i < td.length; i++) {
            td[i].onmousemove=function(){
                this.style.visibility = "hidden";
            }
        }
    } 
}