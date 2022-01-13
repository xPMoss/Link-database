let mainDiv;
let objects;

let tagsDiv;
let tags;

let infoDiv;

let activeFilters = new Array();


let popup;

async function clearContent() {
    mainDiv = document.getElementById("main");
    mainDiv.innerHTML = ""; // Töm container
    objects = new Array();

    tagsDiv = document.getElementById("filtetags");
    tagsDiv.innerHTML = ""; // Töm container
    tags = new Array();

    infoDiv = document.getElementById("info");
    infoDiv.innerHTML = ""; // Töm container

    popupDiv = document.getElementById("popup");
    popupDiv.innerHTML = ""; // Töm container

}

async function loadTags() {
    //let obj = JSON.parse(Links);
    //console.log(Links.length)

    // FIND AND SORT TAGS
    for (let i = 0; i < Links.length; i++) {
        let obj = Links[i];

        for (let j = 0; j < obj.tags.length; j++) {
            tags.push(obj.tags[j]); 
            
        }

    }

    // REMOVE DUBLICATES
    tags = [...new Set(tags)];

    tags.sort();

    
}

async function creatTags() {
    for (let i = 0; i < tags.length; i++) {
        let tag = tags[i];
        let active = false;

        if (activeFilters.includes(tag)) {
            active = true;

        }

        let newTag = new Tag(tag, active);

        tagsDiv.appendChild(newTag); 
   
    }

    if (activeFilters.length != 0) {
        tagsDiv.appendChild(new ClearFilters()); 

    }
    
    console.log("Tags: " + tags);

}


async function loadContent() {
    
    for (let i = 0; i < Links.length; i++) {
        let obj = Links[i];

        objects.push(obj);
            
    }

    await objects.sort((a, b) => b.title - a.title || a.title.localeCompare(b.title));    


}



async function createContent() {
    
    for (let i = 0; i < objects.length; i++) {
        let obj = objects[i];

        let load = false;

        for (let j = 0; j < activeFilters.length; j++) {
            if (obj.tags.includes(activeFilters[j])) {
                load = true;
            }
            
        }
        

        if (load) {
            let obj = objects[i];
            main.appendChild(new Link(obj, 6)); 
        }

    }

    if (activeFilters.length == 0) {
        for (let i = 0; i < objects.length; i++) {
            let obj = objects[i];
    
            main.appendChild(new Link(obj)); 
    
        }
    
    }

    main.appendChild(new AddLink()); 


}

async function setFilters(filter) {
    //activeFilters = [...new Set(activeFilters)];

    if (activeFilters.includes(filter)) {
        for (let i = 0; i < activeFilters.length; i++) {
            if (activeFilters[i] == filter) {
                activeFilters.splice(i, 1); 
    
            }

            
        }


    }
    else{
        activeFilters.push(filter);
    }

    

    if (filter == "ALL") {
        activeFilters = tags;
        
    }

    if (filter == "NONE") {
        activeFilters = new Array();
        
    }

    activeFilters = [...new Set(activeFilters)];

    /*
    if(filter != "ALL"){
        activeFilters.push(filter);
        activeFilters = [...new Set(activeFilters)];

        activeFilters.sort();
        
    }
    */



    /*
    for (let i = 0; i < activeFilters.length; i++) {
        if (activeFilters[i] == filter) {
            activeFilters.splice(0, 1); 
            activeFilters.push(filter);

        }

        
    }
    */

    console.log("Filters: " + activeFilters);

}

async function updateContent(filter) {
    await clearContent();

    await loadTags();

    await setFilters(filter);

    await creatTags();

    await loadContent();
    await createContent();

    console.log("Links: " + objects.length)

    
}

// --------------- //

async function start(){
    await delay(50);
    await updateContent("NONE");
 
}


document.addEventListener("DOMContentLoaded", function(event) { 
    start();

});



// --------------- //




function delay(delayInms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
}



async function addLink() {
    alert("W.I.P")

}
