
let color = {
    orange: "rgb(255, 180, 100)",
    white: "rgb(255, 255, 255)",
    black: "rgb(0, 0, 0)",
    dark: "rgb(40, 40, 40)"

};

class ClearFilters{
    constructor() {
        let container = document.createElement("div");
        container.id = "ClearFilters";
        container.classList.add('col-auto');
        container.classList.add('p-0');
        container.classList.add('mx-2');
        
        
        let title = document.createElement("div");
        title.classList.add('bg-danger');
        title.classList.add('text-light');
        
        title.classList.add('border');
        title.classList.add('p-2');
        title.classList.add('px-3');
        title.innerHTML = "CLEAR FILTERS";
        
        

        container.style.cursor = "pointer";

        
        container.onmouseover  = function(e) { 



        };

        container.onmouseleave  = function(e) { 


        };
        

        container.onclick = function(e) { 
            updateContent("NONE");
            

    
        };
        
        container.appendChild(title);

        return container;

    }

}

class Tag{
    constructor(content, active) {
        let container = document.createElement("div");
        container.id = content.title;
        container.classList.add('col-auto');
        container.classList.add('p-0');
        container.classList.add('mx-2');
        container.classList.add('mb-2');
        
        
        let title = document.createElement("div");
        if (active) {
            title.classList.add('bg-dark');
            title.classList.add('text-light');
        }
        else{
            title.classList.add('bg-light');
            title.classList.add('text-dark');
            
        }
        
        title.classList.add('border');
        title.classList.add('p-2');
        title.innerHTML = content;
        
        

        container.style.cursor = "pointer";

        
        container.onmouseover  = function(e) { 

            if (active) {
                title.classList.add('border-danger');

            }
            else{
                title.classList.add('border-success');
                
            }
            
    
            };

        container.onmouseleave  = function(e) { 
            if (active) {
                title.classList.remove('border-danger');

            }
            else{
                title.classList.remove('border-success');
                
            }

    
            };
        

        container.onclick = function(e) { 
            updateContent(content);
            

    
        };
        
        container.appendChild(title);

        return container;

    }

}


class Link{
    constructor(content) {
        let container = document.createElement("div");
        container.id = content.title;

        container.classList.add('col-12');
        container.classList.add('col-sm-6');
        container.classList.add('col-md-4');
        container.classList.add('col-lg-3');

        container.classList.add('pr-4');
        container.classList.add('pb-4');
        container.classList.add('p-0');
        container.classList.add('m-0');
        
        
        let title = document.createElement("div");
        title.classList.add('bg-light');
        title.classList.add('border');
        title.classList.add('p-2');
        title.classList.add('px-3');
        title.classList.add('p-sm-4');
        title.classList.add('px-sm-4');
        title.innerHTML = content.title;
        title.innerHTML += "<br/><small>" + content.link + "</small>";

        // TAGS //
        title.innerHTML += "<br/>";

        for (let i = 0; i < content.tags.length; i++) {
            title.innerHTML += "<small>" + content.tags[i] + " </small>";
            
        }

        container.style.cursor = "pointer";

        

        container.onmouseover  = function(e) { 
            title.classList.add('border-success');
            

        };

        container.onmouseleave  = function(e) { 
            title.classList.remove('border-success');
        };
        

        container.onclick = function(e) { 
            //window.open(content.link);
            //mainDiv.appendChild(new Iframe(content))
            popupDiv.innerHTML = "";
            popupDiv.appendChild(new PopUp(content))

    
        };
        
        container.appendChild(title);

        return container;

    }

}

class AddLink{
    constructor(content) {
        let container = document.createElement("div");
        container.id = "addlink";

        container.classList.add('col-12');
        container.classList.add('col-sm-6');
        container.classList.add('col-md-4');
        container.classList.add('col-lg-3');

        container.classList.add('pr-4');
        container.classList.add('pb-4');
        container.classList.add('p-0');
        container.classList.add('m-0');
        
        
        let title = document.createElement("div");
        title.classList.add('border');

        title.classList.add('bg-success');
        title.classList.add('text-light');

        title.classList.add('p-2');
        title.classList.add('px-3');
        title.classList.add('p-sm-4');
        title.classList.add('px-sm-4');
        title.innerHTML = "<b>Add link</b>";

        title.innerHTML += "<br/><small></small>";

        // TAGS //
        title.innerHTML += "<br/>";
        title.innerHTML += "<br/>";


        container.style.cursor = "pointer";

        container.onmouseover  = function(e) {
            title.classList.remove('bg-success');
            title.classList.remove('text-light');

            title.classList.add('bg-light');
            title.classList.add('text-success');
            title.classList.add('border-success');

            

        };

        container.onmouseleave  = function(e) { 
            title.classList.remove('bg-light');
            title.classList.remove('text-success');
            title.classList.remove('border-success');

            title.classList.add('bg-success');
            title.classList.add('text-light');


        };
        

        container.onclick = function(e) { 
            addLink();

    
        };
        
        container.appendChild(title);

        return container;

    }

}

class Iframe{
    constructor(content) {
        let container = document.createElement("div");
        container.id = "";
        container.style.position = "absolute";
        container.style.zIndex = "1000";
        container.style.width = "50vw";
        
        
        let iframe = document.createElement("iframe");
        iframe.src = content.link;
        iframe.style.width = "50vw";
        

        
        container.appendChild(iframe);

        return container;

    }

}



class PopUp{
    constructor(content) {
        let bkg = document.createElement("div");
        bkg.id = "bkg";
        bkg.classList.add('d-flex');
        bkg.classList.add('justify-content-center');

        let container = document.createElement("div");
        container.id = "pop";
        container.classList.add('p-4');
        container.classList.add('col-10');
        container.classList.add('col-sm-4');
        container.classList.add('bg-light');

        // ----- //
        let row = document.createElement("div");
        row.classList.add('row');
        row.classList.add('d-flex');
        row.classList.add('justify-content-between');
        row.classList.add('mb-4');


        let div = document.createElement("div");
        div.classList.add('col-auto');
        div.classList.add('h4');
        div.innerHTML = "Open link?";
        row.appendChild(div);

        div = document.createElement("div");
        div.classList.add('col-auto');
        div.classList.add('mr-2');
        div.classList.add('btn');
        div.classList.add('btn-danger');
        div.innerHTML = "X";
        div.style.cursor = "pointer";
        div.onclick = function(e) { 
            popupDiv.innerHTML = "";
    
        };
        row.appendChild(div);

        container.appendChild(row);
        // ----- //
        
        row = document.createElement("div");
        row.classList.add('row');
        row.classList.add('mb-4');

        div = document.createElement("div");
        div.classList.add('col-12');
        div.innerHTML = content.link;
        row.appendChild(div);

        container.appendChild(row);

        // ----- //
        row = document.createElement("div");
        row.classList.add('row');
        row.classList.add('d-flex');
        row.classList.add('justify-content-end');

        div = document.createElement("div");
        div.classList.add('col-2');
        row.appendChild(div);


        div = document.createElement("div");
        div.classList.add('col-auto');
        div.classList.add('mr-2');
        div.classList.add('btn');
        div.classList.add('btn-primary');
        div.innerHTML = "Open";
        div.style.cursor = "pointer";
        div.onclick = function(e) { 
            window.open(content.link);
            popupDiv.innerHTML = "";
    
        };
        row.appendChild(div);
        
        container.appendChild(row);

        bkg.appendChild(container);

        return bkg;

    }

}

