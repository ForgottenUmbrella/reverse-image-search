// Saves options to localStorage.
function save_options()
{
    var select = document.getElementById("is_focussed");
    localStorage["is_focussed"] = select.children[select.selectedIndex].value;

    // Update status to let user know options were saved.
    var status = document.getElementById("status");
    status.innerHTML = "Options Saved.";
    setTimeout(function(){ status.innerHTML = ""; }, 750);
}


// Restores select box state to saved value from localStorage.
function restore_options()
{
    var is_focussed = localStorage["is_focussed"];
    if (!is_focussed) {
        return;
    }
    var select = document.getElementById("is_focussed");
    for (var i = 0; i < select.children.length; i++) {
        var child = select.children[i];
        if (child.value == is_focussed) {
            child.selected = "true";
            break;
        }
    }
    
}


document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);