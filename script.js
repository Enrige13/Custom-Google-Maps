function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.66770611581094, lng: 135.4305042264883},
        zoom: 18,
        mapId: 'b652b16c744da9d6',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
    });

    // Name
    // Latitude, Longitude
    // Image URL
    // scaledSize width, height
    const markers = [
        [
            '<h3>Yoshi\'s House</h3>',
            34.666702790040794,
            135.43090201792563,
            "yoshi_house.svg",
            38,
            31,
            '<div class="bodyContent">Yoshi\'s House!</div>'
        ],
        [
            '<h3>You Are Here</h3>',
            34.66767112713121,
            135.4297887322531,
            "pointer.svg",
            30,
            47.8,
            '<div class="bodyContent">You are here!</div>'
        ],
        [
            '<h3>Ghost House</h3>',
            34.66832952871319,
            135.4328982454245,
            "ghosthouse.svg",
            40,
            48,
            '<div class="bodyContent">Lorem ipsum dolor sit amet!</div>'
        ],
        [
            '<h3>Castle</h3>',
            34.667763376555754,
            135.43152896089788,
            "castle.svg",
            40,
            53,
            '<div class="bodyContent">Lorem ipsum dolor sit amet.</div>'
        ],
        [
            '<h3>Warp Pipe</h3>',
            34.66748182918706,
            135.43223220756832,
            "pipe.svg",
            38,
            42.5,
            '<div class="bodyContent">Lorem ipsum dolor sit amet.</div>'
        ],
        [
            '<h3>Star World</h3>',
            34.66804186269634,
            135.4285820223773,
            "star.svg",
            38,
            38,
            '<div class="bodyContent">Lorem ipsum dolor sit amet.</div>'
        ],
        [
            '<h3>Donut Plains</h3>',
            34.66830355359945,
            135.4320565322381,
            "hillwitheyes.svg",
            50,
            60.7,
            '<div class="bodyContent">Lorem ipsum dolor sit amet.</div>'
        ],
        [
            '<h3>Donut Plains</h3>',
            34.66829411443392,
            135.43231361996433,
            "hillwitheyes.svg",
            50,
            60.7,
            '<div class="bodyContent">Lorem ipsum dolor sit amet.</div>'
        ],
        [
            '<h3>Donut Plains</h3>',
            34.668381120283034, 
            135.43218057898335,
            "hillwitheyes.svg",
            50,
            60.7,
            '<div class="bodyContent">Lorem ipsum dolor sit amet.</div>'
        ]
    ];

    for(let i = 0; i<markers.length; i++){
        const currMarker = markers[i];

        const marker = new google.maps.Marker({
            position: {lat: currMarker[1], lng: currMarker[2]},
            map,
            title: currMarker[0],
            icon: {
                url: currMarker[3],
                scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
            },
            animation: google.maps.Animation.DROP
        });
    
        const infowindow = new google.maps.InfoWindow({
            content: currMarker[0] + currMarker[6],
        });
        
        marker.addListener("click", () => {
            infowindow.open(map, marker);
        })
    }  
}
