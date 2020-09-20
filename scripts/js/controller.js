function give_ubs_card(name, img, address, number, neighborhood, city, state, zip_code, phone, favorite) {
    return `<div class="col-12 col-md-4">
                <div class="card w-100 h-100">
                    <img class="card-img-top"
                        src="${img}"
                        alt="imagem do hospital descrito">
                    <div class="card-body">
                        <h5 class="card-title text-center">${name}</h5>
                        <p class="card-text text-capitalize">
                        Endereço: ${address}, ${number} - ${neighborhood}, ${city} - ${state}, ${zip_code}.
                        </p>
                        <div class="btn btn-light float-right">
                            <svg class="${favorite? 'd-none':''}" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>
                            <svg class="favorite ${favorite? '':'d-none'}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
                        </div>
                        <p class="card-text">Telefone: ${phone}</p>
                    </div>
                </div>
            </div>`
}
function show_three(data) {
    for (let index = 0; index < 3; index++) {
        let hospital = Math.floor(Math.random() * 10)
        let html = give_ubs_card(data[hospital].no_fantasia, data[hospital].image, data[hospital].no_logradouro, data[hospital].nu_endereco, data[hospital].no_bairro, data[hospital].cidade, data[hospital].uf, data[hospital].co_cep, data[hospital].nu_telefone, false)
        $('#mainly_hospitals').append(html)
        
    }
}
let _snazzyMaps = [
    {
        "name": "Avocado",
        "theme":
            [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "visibility": "on" }, { "color": "#aee2e0" }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "color": "#abce83" }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "color": "#769E72" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#7B8758" }] }, { "featureType": "poi", "elementType": "labels.text.stroke", "stylers": [{ "color": "#EBF4A4" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }, { "color": "#8dab68" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#5B5B3F" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ABCE83" }] }, { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#A4C67D" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#9BBF72" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#EBF4A4" }] }, { "featureType": "transit", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "visibility": "on" }, { "color": "#87ae79" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#7f2200" }, { "visibility": "off" }] }, { "featureType": "administrative", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }, { "visibility": "on" }, { "weight": 4.1 }] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#495421" }] }, { "featureType": "administrative.neighborhood", "elementType": "labels", "stylers": [{ "visibility": "off" }] }]
    }
    ,
    {
        "name": "Pale Dawn",
        "theme":
            [{ "featureType": "water", "stylers": [{ "visibility": "on" }, { "color": "#acbcc9" }] }, { "featureType": "landscape", "stylers": [{ "color": "#f2e5d4" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#c5c6c6" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#e4d7c6" }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#fbfaf7" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#c5dac6" }] }, { "featureType": "administrative", "stylers": [{ "visibility": "on" }, { "lightness": 33 }] }, { "featureType": "road" }, { "featureType": "poi.park", "elementType": "labels", "stylers": [{ "visibility": "on" }, { "lightness": 20 }] }, {}, { "featureType": "road", "stylers": [{ "lightness": 20 }] }]
    }
    ,
    {
        "name": "Blue water",
        "theme":
            [{ "featureType": "water", "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }] }, { "featureType": "landscape", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "road", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] }, { "featureType": "transit", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "stylers": [{ "visibility": "off" }] }]
    }
];



function onThemeChange(me, mapsed) {
    let themeName = me.val(),
        themeJSON = ""
        ;

    for (let i = 0; i < _snazzyMaps.length; i++) {
        let currTheme = _snazzyMaps[i];

        if (currTheme.name === themeName) {
            // found it, so apply the theme
            mapsed.getGoogleMap().setOptions({ styles: currTheme.theme });
            break;
        }
    }

}


function getPlaceHtml(details) {
    let html =
        "Nome:  " + details.nome + "<br/>"+
        "Rua:  " + details.street + "<br/>"+
        "Numero:  " + details.numero + "<br/>"+
        "Bairro:  " + details.bairro + "<br/>"+
        "CEP:  "    + details.CEP + "<br/>"+
        "Cidade:  " + details.cidade + "<br/>"+
        "Estado:  " + details.estado + "<br/>"+
        "Telefone:  " + details.telefone + "<br/>"
    return html;
}

function openFullMap() {

    $.fn.mapsed({
        mapOptions: {
            zoom: 15,
            center: new google.maps.LatLng(-22.909436, -47.081049),
            styles: _snazzyMaps[2]["theme"]
        },

        // Adds a predictive search box
        searchOptions: {
            enabled: true,
            placeholder: "Procure por bairros ou ruas"
        },

        // Turn geo button on
        allowGeo: true,
        showOnLoad: _places,
        allowAdd: false,
        confirmDelete: false,
        showHelpOnLoad: false,

        onSelect: function (m, details) {
            let msg = getPlaceHtml(details);

            m.showMsg("Informações sobre a UBS", msg);

            return true;
        },
        
        getMarkerImage: function (m, markerType, title) {
            let imageUrl = "";

        
            imageUrl = "/assets/img/icons/icon_map.png";

            return {
                url: imageUrl,
                size: new google.maps.Size(52, 52),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(52, 52)
            };
        },

        // shows additional instructions to the user
        getHelpWindow: function (m) {
            let html =
                "<div class='mapsed-help'>" +
                "Encontre aqui sobre todas UBS de Campinas <br> Clique em um ponto para mais informações" +
                "</div>"
                ;
            return html;
        },
        

        onClose: function (mapsed) {
            let closeMap = confirm("Deseja fechar o mapa?");
            return closeMap;
        },

     onPreInit: function (mapsed) {
            let html = "",
                $select = null,
                $mapContainer = null
                ;

            // build up the theme picker
            html += "<select id='themePicker' title='Pick an alternative map style...' class='mapsed-control-button'>";
            for (let i = 0; i < _snazzyMaps.length; i++) {
                let theme = _snazzyMaps[i];
                html += "<option value='" + theme.name + "'>" + theme.name + "</option>";
            }
            html += "</select>";

            $select = mapsed.addMapControl(html, google.maps.ControlPosition.TOP_RIGHT);

            // wire up the change event to pick a new theme
            $select.on("change", function () {
                onThemeChange($(this), mapsed);
            });
        },

        // Fired once the map has completed loading
        onInit: function (m) {

        }

    });

}

