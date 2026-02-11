$(document).ready(inicio);

const propiedades=["flex-orientation", "flex-wrap", "justify-content", "align-content", "align-items"]

function imprimir_css(diccionario){
    texto="";
    for (let clave in diccionario){
        texto+=clave+": "+diccionario[clave]+";\n"
    }
    $("#css_resultado").html(texto)
}
function eliminar_css(){
    let elemento_caja=$("#caja")
    for (let propiedad of propiedades){
        elemento_caja.css(propiedad,"")    
    }
}
function generar_css(){
    eliminar_css()
    let propiedades_css={}
    let elemento_caja=$("#caja")
    /*Modificamos la flex-orientation*/
    let valor_orientacion=$("#orientacion").val()
    propiedades_css["flex-direction"]=valor_orientacion
    elemento_caja.css("flex-direction", valor_orientacion)
    
    /*Modificamos el wrapping*/
    let valor_wrapping=$("#wrapping").val()
    elemento_caja.css("flex-wrap", valor_wrapping)
    propiedades_css["flex-wrap"]= valor_wrapping
    
    /*Modificamos la alineacion*/
    let valor_alineacion=$("#alineacion-horizontal").val()
    trozos=valor_alineacion.split(":")
    propiedad=trozos[0]
    valor=trozos[1]
    elemento_caja.css(propiedad, valor)
    propiedades_css[propiedad]=valor

    let valor_alineacion_vertical=$("#alineacion-vertical").val()
    trozos=valor_alineacion_vertical.split(":")
    propiedad=trozos[0]
    valor=trozos[1]
    elemento_caja.css(propiedad, valor)
    propiedades_css[propiedad]=valor

    
    imprimir_css(propiedades_css)
    

}
function inicio(){
    listas=["#orientacion", "#wrapping", "#alineacion-horizontal", "#alineacion-vertical"]
    for (lista of listas){
        $(lista).change(generar_css)
    }
    generar_css()
}