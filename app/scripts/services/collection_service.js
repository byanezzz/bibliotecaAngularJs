(function() {
    'use strict';

    angular
        .module('bibliotecaJsApp')
        .service('CollectionService', CollectionService);

    CollectionService.$inject = ['CollectionFactory'];

    function CollectionService(CollectionFactory) {
        var service = this;
        ////////////////
        service.CollectionFactory = CollectionFactory;
        service.collections = [{
                "kind": "books#volume",
                "id": "3x09sewjaHIC",
                "etag": "i82nC0NcBJc",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/3x09sewjaHIC",
                "volumeInfo": {
                    "title": "Javascript",
                    "authors": [
                        "Miguel Ángel Sánchez Maza"
                    ],
                    "publisher": "INNOVACIÓN Y CUALIFICACIÓN",
                    "publishedDate": "2012",
                    "industryIdentifiers": [{
                            "type": "ISBN_13",
                            "identifier": "9788495733184"
                        },
                        {
                            "type": "ISBN_10",
                            "identifier": "8495733188"
                        }
                    ],
                    "readingModes": {
                        "text": false,
                        "image": true
                    },
                    "pageCount": 186,
                    "printType": "BOOK",
                    "averageRating": 4.5,
                    "ratingsCount": 2,
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "1.1.0.0.preview.1",
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=3x09sewjaHIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=3x09sewjaHIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    "language": "es",
                    "previewLink": "http://books.google.cl/books?id=3x09sewjaHIC&printsec=frontcover&dq=javascrits&hl=&cd=1&source=gbs_api",
                    "infoLink": "http://books.google.cl/books?id=3x09sewjaHIC&dq=javascrits&hl=&source=gbs_api",
                    "canonicalVolumeLink": "https://books.google.com/books/about/Javascript.html?hl=&id=3x09sewjaHIC"
                },
                "saleInfo": {
                    "country": "CL",
                    "saleability": "NOT_FOR_SALE",
                    "isEbook": false
                },
                "accessInfo": {
                    "country": "CL",
                    "viewability": "PARTIAL",
                    "embeddable": true,
                    "publicDomain": false,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": false
                    },
                    "pdf": {
                        "isAvailable": false
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=3x09sewjaHIC&hl=&printsec=frontcover&source=gbs_api",
                    "accessViewStatus": "SAMPLE",
                    "quoteSharingAllowed": false
                }
            },
            {
                "kind": "books#volume",
                "id": "gsxVpvEC4iUC",
                "etag": "KdsZysIBR6w",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/gsxVpvEC4iUC",
                "volumeInfo": {
                    "title": "JavaScript",
                    "subtitle": "Conceptos básicos y avanzados (bibliotecas Prototype y Script.aculo.us)",
                    "authors": [
                        "Emmanuel Gutierrez"
                    ],
                    "publisher": "Ediciones ENI",
                    "publishedDate": "2009",
                    "description": "\"Este libro sobre JavaScript está dirigido a todos aquellos que desean aumentar la interactividad de sus sitios Web. El libro tiene dos objetivos: en primer lugar, dominar las bases de JavaScript para poder trabajar con los scripts más frecuentes en la red y, en segundo, descubrir el nuevo potencial de JavaScript cuando se utiliza con las hojas de estilo (CSS), el DHTML, AJAX o con bibliotecas como Prototype o Script.aculo.us. Una vez descrita la sintaxis de base, el libro se apoya en ejemplos significativos (gestión de formularios, del tiempo, de menús de navegación, autocompletación), para comentarlos y demostrar la omnipresencia de JavaScript en una arquitectura Web 2.0. El libro acompaña al lector a través de un recorrido que va de los principios de JavaScript hasta el descubrimiento de los conceptos más avanzados. Los ejemplos y los scripts citados en el libro se pueden descargar en esta página.\" -- ENI Ediciones.",
                    "industryIdentifiers": [{
                            "type": "ISBN_10",
                            "identifier": "2746052202"
                        },
                        {
                            "type": "ISBN_13",
                            "identifier": "9782746052208"
                        }
                    ],
                    "readingModes": {
                        "text": false,
                        "image": true
                    },
                    "pageCount": 303,
                    "printType": "BOOK",
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "0.2.0.0.preview.1",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=gsxVpvEC4iUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=gsxVpvEC4iUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    "language": "es",
                    "previewLink": "http://books.google.cl/books?id=gsxVpvEC4iUC&printsec=frontcover&dq=javascrits&hl=&cd=2&source=gbs_api",
                    "infoLink": "http://books.google.cl/books?id=gsxVpvEC4iUC&dq=javascrits&hl=&source=gbs_api",
                    "canonicalVolumeLink": "https://books.google.com/books/about/JavaScript.html?hl=&id=gsxVpvEC4iUC"
                },
                "saleInfo": {
                    "country": "CL",
                    "saleability": "NOT_FOR_SALE",
                    "isEbook": false
                },
                "accessInfo": {
                    "country": "CL",
                    "viewability": "PARTIAL",
                    "embeddable": true,
                    "publicDomain": false,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": false
                    },
                    "pdf": {
                        "isAvailable": false
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=gsxVpvEC4iUC&hl=&printsec=frontcover&source=gbs_api",
                    "accessViewStatus": "SAMPLE",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "&quot;Este libro sobre JavaScript está dirigido a todos aquellos que desean aumentar la interactividad de sus sitios Web."
                }
            }
        ];

    }

    CollectionService.prototype.addBock = function(book) {
        var service = this;
        service.collections.push(book);
    };

    CollectionService.prototype.removeBook = function(index) {
        var service = this;
        _.remove(service.collections, function(value) {
            return value.id === index;
        });
    };



})();