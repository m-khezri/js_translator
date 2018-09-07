let spainish = {
    merry:"alegre",
    christmas:"Navidad",
    and:"y",
    happy:"contento",
    new:"nuevo",
    year:"año"
};

let german = {
    merry:"fröhlich",
    christmas:"Weihnachten",
    and:"und",
    happy:"glücklich",
    new:"Neu",
    year:"Jahr"
};

let french = {
    merry:"joyeux",
    christmas:"Noël",
    and:"et",
    happy:"content",
    new:"Nouveau",
    year:"an"
};



const spanish_tr =() => {
    var x = document.getElementById("text_area").value;
    
    for (let i=0; i <=spanish.length; i++) {
        document.getElementById("output_box").innerHTML = spanish[i];
        i+=1;

    }
    

}

