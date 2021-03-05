function Cargar() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    prev = document.getElementById("preview");
    img = new Image();
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
    }
    img.src = "../Canvas3/img/stitch.jpg";
}

function Borrar() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    prev = document.getElementById("preview");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function Gris() {
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
    for (var i = 0; i < imageData.data.length; i += 4) {
        var gris = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
        // red
        data[i] = gris;
        // green
        data[i + 1] = gris;
        // blue
        data[i + 2] = gris;
    }
    ctx.putImageData(imageData, 0, 0);
}

function BN() {
    Negativo();
    Gris();
    //redraw the image in black & white
    ctx.putImageData(imageData, 0, 0);
}

function Sepia() {
    var imageData =
        ctx.getImageData(0, 0, canvas.width, canvas.height);
    var datos = imageData.data;
    for (var i = 0; i < datos.length; i += 4) {
        datos[i] = datos[i] * 0.393 + datos[i + 1] * 0.769 + datos[i + 2] * 0.189;
        datos[i + 1] = datos[i] * 0.393 + datos[i + 1] * 0.686 + datos[i + 2] * 0.168;
        datos[i + 2] = datos[i] * 0.272 + datos[i + 1] * 0.534 + datos[i + 2] * 0.131;
    }
    ctx.putImageData(imageData, 0, 0);
}

function Negativo() {
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i] = 255 - imageData.data[i];
        imageData.data[i + 1] = 255 - imageData.data[i + 1];
        imageData.data[i + 2] = 255 - imageData.data[i + 2];
    }
    ctx.putImageData(imageData, 0, 0);
}

function Aplicar() {
    var red = document.getElementById('cred');
    var green = document.getElementById('cgreen');
    var blue = document.getElementById('cblue');
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    if (red.checked == false) {
        for (var i = 0; i < imageData.data.length; i += 4) {
            imageData.data[i] = 0;
        }
    }

    if (green.checked == false) {
        for (var i = 0; i < imageData.data.length; i += 4) {
            imageData.data[i + 1] = 0;
        }
    }

    if (blue.checked == false) {
        for (var i = 0; i < imageData.data.length; i += 4) {
            imageData.data[i + 2] = 0;
        }
    }

    ctx.putImageData(imageData, 0, 0);
}