const PureWhite= "#ffffff";
const Transition= "#D0D9D9";
const BlendColor = "#3535358b"

function Hover(ClassId){
    $(ClassId).mouseover(function () { 
        if(ClassId===".Servicios"){
            $(ClassId).css("color",Transition);
            $(ClassId).css("fontWeight",800);
            $(ClassId).css("letterSpacing","0px");
            $(ClassId).css("transition","all 0.7s");
            $(ClassId).css("backgroundColor",BlendColor);
        }
        else {
        $(ClassId).css("color",Transition);
        $(ClassId).css("fontWeight",800);
        $(ClassId).css("letterSpacing","1px");
        $(ClassId).css("transition","all 0.7s");
        $(ClassId).css("backgroundColor",BlendColor);
        $(ClassId).css("padding","2% 8%");
        }
    })
    $(ClassId).mouseout(function () { 
        $(ClassId).css("color",PureWhite);
        $(ClassId).css("fontWeight",500);
        $(ClassId).css("letterSpacing","0px");
        $(ClassId).css("backgroundColor","");
        $(ClassId).css("padding","0% 0%");
    })
}
Hover(".Inicio");
Hover(".Experiencia");
Hover(".Contacto");
Hover(".Portafolio");
Hover(".Servicios");


