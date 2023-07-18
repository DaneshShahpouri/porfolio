import { reactive } from 'vue';

export const store = reactive({
    contatore: 0,
    contatoreOrizzontale: 0,
    contatoreBackground: 0,
    contatoreBackgroundOrizzontale: 0,

    confArray: [
        ['Welcome', 'Benvenuto nel mio Sito.', false],
        ['works', '', false],
        ['works', "Questo Progetto è una prova incosistente, rappresentazione della manchevolezza umana, il vuoto come presenza fissa, l'incosistenza dell'esperire umano. Cancellami.", true, ['Progetto di prova esempio', 'https://sitiwebfox.it/images/realizzazione-siti-web-professionali.png', 'https://kinsta.com/it/wp-content/uploads/sites/2/2020/02/migliori-pratiche-di-web-design-1024x512.jpg'], '#FF5154', [['html', '#e47c0f'], ['css', '#57a2e7'], ['javascript', '#D6AB27'], ['laravel', '#f44336'], ['php', '#6C4BC0']], 'Fullstack'],
        ['works', 'Progetto2 di prova con elementi specifici per verede che succede se metto info lunghe che sembrano volere dire  qualcosa.', true, ['Prova due - prova', 'https://kinsta.com/it/wp-content/uploads/sites/2/2021/09/how-to-translate-a-website-1024x512.jpeg', 'https://www.ionos.it/digitalguide/fileadmin/DigitalGuide/Teaser/web-apps-t.jpg', 'https://www.raiscuola.rai.it/cropgd/1900x1069/dl/img/2021/02/09/1612868746079_monitor-1307227_1920.jpg', 'https://files.spazioweb.it/32/3d/323d8cfb-176d-4c90-9ba9-a4fe6eab5d58.jpeg'], '#5E2A40', [['html', '#e47c0f'], ['MySql', '#b65284'], ['laravel', '#f44336'], ['php', '#6C4BC0']], 'Backend'],
        ['contacts', 'Danesh.Shahpouri@gmail.com', false],
        ['extra', '', false]
    ],

    newConfArray: [['Welcome', 'Benvenuto nel mio Sito.', false],
    ['works', '', false],
    ['works', "Questo Progetto è una prova incosistente, rappresentazione della manchevolezza umana, il vuoto come presenza fissa, l'incosistenza dell'esperire umano. Cancellami.", true, ['Progetto di prova esempio', 'https://sitiwebfox.it/images/realizzazione-siti-web-professionali.png', 'https://kinsta.com/it/wp-content/uploads/sites/2/2020/02/migliori-pratiche-di-web-design-1024x512.jpg'], '#FF5154', [['html', '#e47c0f'], ['css', '#57a2e7'], ['javascript', '#D6AB27'], ['laravel', '#f44336'], ['php', '#6C4BC0']], 'Fullstack'],
    ['works', 'Progetto2 di prova con elementi specifici per verede che succede se metto info lunghe che sembrano volere dire  qualcosa.', true, ['Prova due - prova', 'https://kinsta.com/it/wp-content/uploads/sites/2/2021/09/how-to-translate-a-website-1024x512.jpeg', 'https://www.ionos.it/digitalguide/fileadmin/DigitalGuide/Teaser/web-apps-t.jpg', 'https://www.raiscuola.rai.it/cropgd/1900x1069/dl/img/2021/02/09/1612868746079_monitor-1307227_1920.jpg', 'https://files.spazioweb.it/32/3d/323d8cfb-176d-4c90-9ba9-a4fe6eab5d58.jpeg'], '#5E2A40', [['html', '#e47c0f'], ['MySql', '#b65284'], ['laravel', '#f44336'], ['php', '#6C4BC0']], 'Backend'],
    ['contacts', 'Danesh.Shahpouri@gmail.com', false],
    ['extra', '', false]
    ],

    projectsServe: [
        {
            cover_image: "Comics.jpg",
            created_at: "2023-05-31T16:20:14.000000Z",
            description: "Un layout responsivo, complesso, colorato. Con la possibilità di navigare tra le pagine e di rivedere i grandi classici dei fumetti.",
            id: 1,
            is_important: 1,
            layout_color: "#468499",
            slug: "comic-dc",
            technologies: [{
                color: "#ff8800",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un linguaggio di formattazione che descrive le modalità di impaginazione di una pagina Web",
                id: 1,
                name: 'html',
                pivot: {
                    project_id: 1,
                    technology_id: 1
                },
                slug: "html",
                update_at: "2023-06-01T04:19:59.000000Z"
            }, {
                color: "#007bff",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un linguaggio di formattazione per lo stile delle pagine web.",
                id: 2,
                name: 'css',
                pivot: {
                    project_id: 1,
                    technology_id: 2
                },
                slug: "css",
                update_at: "2023-06-01T04:20:29.000000Z"
            }, {
                color: "#e9d607",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un linguaggio di programmazione che permette di manipolare degli elementi e aggiungere una logica alla pagina.",
                id: 3,
                name: 'javascript',
                pivot: {
                    project_id: 1,
                    technology_id: 3
                },
                slug: "javascript",
                update_at: "2023-06-01T04:20:54.000000Z"
            }, {
                color: "#55c346",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un framework di Javascript",
                id: 4,
                name: 'Vue',
                pivot: {
                    project_id: 1,
                    technology_id: 4
                },
                slug: "Vue",
                update_at: "2023-06-01T04:21:05.000000Z"
            }, {
                color: "#8d70db",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un linguaggio di programmazione indirizzato alla gestione del BackEnd.",
                id: 5,
                name: 'php',
                pivot: {
                    project_id: 1,
                    technology_id: 5
                },
                slug: "php",
                update_at: "2023-06-01T04:19:59.000000Z"
            }, {
                color: "#ec0432",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un framework di Php.",
                id: 6,
                name: 'Laravel',
                pivot: {
                    project_id: 1,
                    technology_id: 6
                },
                slug: "Laravel",
                update_at: "2023-06-01T04:19:59.000000Z"
            }, {
                color: "#c224ad",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "Un modo semplice ed elestico per scrivere CSS",
                id: 7,
                name: 'Sass',
                pivot: {
                    project_id: 1,
                    technology_id: 7
                },
                slug: "Sass",
                update_at: "2023-06-01T04:19:59.000000Z"
            }, {
                color: "#18c3a1",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "Il framework di Css creato dai ragazzi di Twitter",
                id: 8,
                name: 'Bootstrap',
                pivot: {
                    project_id: 1,
                    technology_id: 8
                },
                slug: "Bootstrap",
                update_at: "2023-06-01T04:19:59.000000Z"
            }, {
                color: "#07b061",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "Single Page Application Framework",
                id: 9,
                name: 'Vite',
                pivot: {
                    project_id: 1,
                    technology_id: 9
                },
                slug: "Vite",
                update_at: "2023-06-01T04:19:59.000000Z"
            }, {
                color: "#b3835b",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "Linguaggio per comunicare con il DB",
                id: 10,
                name: 'mySQL',
                pivot: {
                    project_id: 1,
                    technology_id: 10
                },
                slug: "mySQL",
                update_at: "2023-06-01T04:19:59.000000Z"
            }, {
                color: "#1e1961",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "Plug-in per gestire le chiamate Api",
                id: 11,
                name: 'Axios',
                pivot: {
                    project_id: 1,
                    technology_id: 11
                },
                slug: "Axios",
                update_at: "2023-06-01T04:19:59.000000Z"
            }],
            title: "Comic DC",
            type:
                { id: 6, name: 'Fullstack', slug: 'fullstack', description: 'Il connubio tra front-end e back-end. Per avere un…rogetto è necessario curare entrambi gli aspetti.', created_at: '2023-06-01T04:22:10.000000Z', updated_at: "2023-06-01T04:22:10.000000Z" },
            type_id: 6,
            updated_at: "2023-06-16T06:36:49.000000Z",
            year: "2023"

        }, {
            cover_image: "yugi.jpg",
            description: "Uno slyder responsive, un mazzo espandibile. Il tuo mazzo Yu-Gi-Oh preferito a portata di mano.",
            id: 7,
            is_important: 0,
            layout_color: "#468499",
            slug: "yu-gi-oh",
            technologies: [{
                color: "#ff8800",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un linguaggio di formattazione che descrive le modalità di impaginazione di una pagina Web",
                id: 1,
                name: 'html',
                pivot: {
                    project_id: 7,
                    technology_id: 1
                },
                slug: "html",
                update_at: "2023-06-01T04:19:59.000000Z"
            }, {
                color: "#007bff",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un linguaggio di formattazione per lo stile delle pagine web.",
                id: 2,
                name: 'css',
                pivot: {
                    project_id: 7,
                    technology_id: 2
                },
                slug: "css",
                update_at: "2023-06-01T04:20:29.000000Z"
            }, {
                color: "#e9d607",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un linguaggio di programmazione che permette di manipolare degli elementi e aggiungere una logica alla pagina.",
                id: 3,
                name: 'javascript',
                pivot: {
                    project_id: 7,
                    technology_id: 3
                },
                slug: "javascript",
                update_at: "2023-06-01T04:20:54.000000Z"
            }, {
                color: "#55c346",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un framework di Javascript",
                id: 4,
                name: 'Vue',
                pivot: {
                    project_id: 7,
                    technology_id: 4
                },
                slug: "Vue",
                update_at: "2023-06-01T04:21:05.000000Z"
            }, {
                color: "#8d70db",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un linguaggio di programmazione indirizzato alla gestione del BackEnd.",
                id: 5,
                name: 'php',
                pivot: {
                    project_id: 7,
                    technology_id: 5
                },
                slug: "php",
                update_at: "2023-06-01T04:19:59.000000Z"
            }, {
                color: "#c224ad",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "Un modo semplice ed elestico per scrivere CSS",
                id: 7,
                name: 'Sass',
                pivot: {
                    project_id: 7,
                    technology_id: 7
                },
                slug: "Sass",
                update_at: "2023-06-01T04:19:59.000000Z"
            }, {
                color: "#18c3a1",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "Il framework di Css creato dai ragazzi di Twitter",
                id: 8,
                name: 'Bootstrap',
                pivot: {
                    project_id: 7,
                    technology_id: 8
                },
                slug: "Bootstrap",
                update_at: "2023-06-01T04:19:59.000000Z"
            }, {
                color: "#07b061",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "Single Page Application Framework",
                id: 9,
                name: 'Vite',
                pivot: {
                    project_id: 7,
                    technology_id: 9
                },
                slug: "Vite",
                update_at: "2023-06-01T04:19:59.000000Z"
            }],
            title: "Yu-gi-oh",
            type:
                { id: 3, name: 'Front end', slug: 'front-end', description: "Sicuramente la parte più visibile dei siti internet, ma che comprende una buona dose di logica e di attenzione all'Utente.", created_at: '2023-06-01T04:22:10.000000Z', updated_at: "2023-06-01T04:22:10.000000Z" },
            type_id: 3,
            updated_at: "2023-06-16T06:36:49.000000Z",
            year: "2023"
        }, {
            cover_image: "Trinx.png",
            created_at: "2023-05-31T16:20:14.000000Z",
            description: "Trinx prende spunto dal celebre CampoFiorito, reinterpretando il concetto e aggiungendo delle meccaniche nuove.",
            id: 9,
            is_important: 1,
            layout_color: "#3a293a",
            slug: "trinx",
            technologies: [{
                color: "#ff8800",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un linguaggio di formattazione che descrive le modalità di impaginazione di una pagina Web",
                id: 1,
                name: 'html',
                pivot: {
                    project_id: 9,
                    technology_id: 1
                },
                slug: "html",
                update_at: "2023-06-01T04:19:59.000000Z"
            }, {
                color: "#007bff",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un linguaggio di formattazione per lo stile delle pagine web.",
                id: 2,
                name: 'css',
                pivot: {
                    project_id: 9,
                    technology_id: 2
                },
                slug: "css",
                update_at: "2023-06-01T04:20:29.000000Z"
            }, {
                color: "#e9d607",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un linguaggio di programmazione che permette di manipolare degli elementi e aggiungere una logica alla pagina.",
                id: 3,
                name: 'javascript',
                pivot: {
                    project_id: 9,
                    technology_id: 3
                },
                slug: "javascript",
                update_at: "2023-06-01T04:20:54.000000Z"
            }],
            title: "Trinx",
            type:
                { id: 5, name: 'Extra', slug: 'fullstack', description: "Progetti extra come videoclip, grafiche, videogiochi per browser.", created_at: '2023-06-01T04:22:10.000000Z', updated_at: "2023-06-01T04:22:10.000000Z" },
            type_id: 5,
            updated_at: "2023-06-16T06:36:49.000000Z",
            year: "2023"

        }, {
            cover_image: "slyder-layout.png",
            created_at: "2023-05-31T16:20:14.000000Z",
            description: "Ricostruzione di un layout in Vue e Js, scrollabile e con miniature cliccabili e animate.",
            id: 10,
            is_important: 1,
            layout_color: "#daa520",
            slug: "slyder-js",
            technologies: [{
                color: "#ff8800",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un linguaggio di formattazione che descrive le modalità di impaginazione di una pagina Web",
                id: 1,
                name: 'html',
                pivot: {
                    project_id: 10,
                    technology_id: 1
                },
                slug: "html",
                update_at: "2023-06-01T04:19:59.000000Z"
            }, {
                color: "#007bff",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un linguaggio di formattazione per lo stile delle pagine web.",
                id: 2,
                name: 'css',
                pivot: {
                    project_id: 10,
                    technology_id: 2
                },
                slug: "css",
                update_at: "2023-06-01T04:20:29.000000Z"
            }, {
                color: "#e9d607",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un linguaggio di programmazione che permette di manipolare degli elementi e aggiungere una logica alla pagina.",
                id: 3,
                name: 'javascript',
                pivot: {
                    project_id: 10,
                    technology_id: 3
                },
                slug: "javascript",
                update_at: "2023-06-01T04:20:54.000000Z"
            }, {
                color: "#55c346",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un framework di Javascript",
                id: 4,
                name: 'Vue',
                pivot: {
                    project_id: 10,
                    technology_id: 4
                },
                slug: "Vue",
                update_at: "2023-06-01T04:21:05.000000Z"
            }, {
                color: "#c224ad",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "Un modo semplice ed elestico per scrivere CSS",
                id: 7,
                name: 'Sass',
                pivot: {
                    project_id: 10,
                    technology_id: 7
                },
                slug: "Sass",
                update_at: "2023-06-01T04:19:59.000000Z"
            }, {
                color: "#18c3a1",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "Il framework di Css creato dai ragazzi di Twitter",
                id: 8,
                name: 'Bootstrap',
                pivot: {
                    project_id: 10,
                    technology_id: 8
                },
                slug: "Bootstrap",
                update_at: "2023-06-01T04:19:59.000000Z"
            }, {
                color: "#07b061",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "Single Page Application Framework",
                id: 9,
                name: 'Vite',
                pivot: {
                    project_id: 10,
                    technology_id: 9
                },
                slug: "Vite",
                update_at: "2023-06-01T04:19:59.000000Z"
            }, {
                color: "#1e1961",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "Plug-in per gestire le chiamate Api",
                id: 11,
                name: 'Axios',
                pivot: {
                    project_id: 10,
                    technology_id: 11
                },
                slug: "Axios",
                update_at: "2023-06-01T04:19:59.000000Z"
            }],
            title: "Slyder Js",
            type:
                { id: 3, name: 'Front end', slug: 'front-end', description: "Sicuramente la parte più visibile dei siti internet, ma che comprende una buona dose di logica e di attenzione all'Utente.", created_at: '2023-06-01T04:22:10.000000Z', updated_at: "2023-06-01T04:22:10.000000Z" },
            type_id: 3,
            updated_at: "2023-06-16T06:36:49.000000Z",
            year: "2023"

        }, {
            cover_image: "spotify.png",
            description: "Un layout responsivo, complesso, colorato. Con la possibilità di navigare tra le pagine e di rivedere i grandi classici dei fumetti.",
            id: 1,
            is_important: 1,
            layout_color: "#6d8b4d",
            slug: "spotify",
            technologies: [{
                color: "#ff8800",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un linguaggio di formattazione che descrive le modalità di impaginazione di una pagina Web",
                id: 11,
                name: 'html',
                pivot: {
                    project_id: 11,
                    technology_id: 1
                },
                slug: "html",
                update_at: "2023-06-01T04:19:59.000000Z"
            }, {
                color: "#007bff",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un linguaggio di formattazione per lo stile delle pagine web.",
                id: 2,
                name: 'css',
                pivot: {
                    project_id: 11,
                    technology_id: 2
                },
                slug: "css",
                update_at: "2023-06-01T04:20:29.000000Z"
            }],
            title: "Spotify",
            type:
                { id: 2, name: 'Design', slug: 'design', description: "La cura del dettaglio grafico è da sempre una prerogativa per chi vuole emergere in un mondo grigio.", created_at: '2023-06-01T04:22:10.000000Z', updated_at: "2023-06-01T04:22:10.000000Z" },
            type_id: 2,
            updated_at: "2023-06-16T06:36:49.000000Z",
            year: "2023"

        }, {
            cover_image: "Una pezza di Lundini.jpg",
            created_at: "2023-05-31T16:20:14.000000Z",
            description: "Videoclip di animazioni per il video della canzone completa usata nella sigla del programma Rai 'Una pezza di Lundini'.",
            id: 12,
            is_important: 0,
            layout_color: "#468499",
            slug: "prova-di-progetto2",
            technologies: [],
            title: "Video - Una Pezza Di Lundini - Sigla",
            type:
                { id: 5, name: 'Extra', slug: 'fullstack', description: "Progetti extra come videoclip, grafiche, videogiochi per browser.", created_at: '2023-06-01T04:22:10.000000Z', updated_at: "2023-06-01T04:22:10.000000Z" },
            type_id: 5,
            updated_at: "2023-06-16T06:36:49.000000Z",
            year: "2023"

        }, {
            cover_image: "Avada.jpg",
            created_at: "2023-05-31T16:20:14.000000Z",
            description: "Pagina di presentazione della homepage di un forum tecnologico. Attenzione particolare agli effetti di animazione degli elementi come la comparsa in base all'altezza dello schermo o gli effetti di parallasse delle immagini.",
            id: 13,
            is_important: 1,
            layout_color: "#16537e",
            slug: "avada-forum",
            technologies: [{
                color: "#ff8800",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un linguaggio di formattazione che descrive le modalità di impaginazione di una pagina Web",
                id: 1,
                name: 'html',
                pivot: {
                    project_id: 13,
                    technology_id: 1
                },
                slug: "html",
                update_at: "2023-06-01T04:19:59.000000Z"
            }, {
                color: "#007bff",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un linguaggio di formattazione per lo stile delle pagine web.",
                id: 2,
                name: 'css',
                pivot: {
                    project_id: 13,
                    technology_id: 2
                },
                slug: "css",
                update_at: "2023-06-01T04:20:29.000000Z"
            }, {
                color: "#e9d607",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un linguaggio di programmazione che permette di manipolare degli elementi e aggiungere una logica alla pagina.",
                id: 3,
                name: 'javascript',
                pivot: {
                    project_id: 13,
                    technology_id: 3
                },
                slug: "javascript",
                update_at: "2023-06-01T04:20:54.000000Z"
            }, {
                color: "#55c346",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un framework di Javascript",
                id: 4,
                name: 'Vue',
                pivot: {
                    project_id: 13,
                    technology_id: 4
                },
                slug: "Vue",
                update_at: "2023-06-01T04:21:05.000000Z"
            }, {
                color: "#c224ad",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "Un modo semplice ed elestico per scrivere CSS",
                id: 7,
                name: 'Sass',
                pivot: {
                    project_id: 13,
                    technology_id: 7
                },
                slug: "Sass",
                update_at: "2023-06-01T04:19:59.000000Z"
            }, {
                color: "#18c3a1",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "Il framework di Css creato dai ragazzi di Twitter",
                id: 8,
                name: 'Bootstrap',
                pivot: {
                    project_id: 13,
                    technology_id: 8
                },
                slug: "Bootstrap",
                update_at: "2023-06-01T04:19:59.000000Z"
            }, {
                color: "#07b061",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "Single Page Application Framework",
                id: 9,
                name: 'Vite',
                pivot: {
                    project_id: 13,
                    technology_id: 9
                },
                slug: "Vite",
                update_at: "2023-06-01T04:19:59.000000Z"
            }, {
                color: "#1e1961",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "Plug-in per gestire le chiamate Api",
                id: 11,
                name: 'Axios',
                pivot: {
                    project_id: 13,
                    technology_id: 11
                },
                slug: "Axios",
                update_at: "2023-06-01T04:19:59.000000Z"
            }],
            title: "Avada",
            type:
                { id: 3, name: 'Front end', slug: 'front-end', description: "Sicuramente la parte più visibile dei siti internet, ma che comprende una buona dose di logica e di attenzione all'Utente.", created_at: '2023-06-01T04:22:10.000000Z', updated_at: "2023-06-01T04:22:10.000000Z" },
            type_id: 3,
            updated_at: "2023-06-16T06:36:49.000000Z",
            year: "2023"

        }, {
            cover_image: "Todolist.png",
            created_at: "2023-05-31T16:20:14.000000Z",
            description: "Una lista semplice ma funzionale, è possibile modificare le stringhe, cancellarle, tenere traccia della cronologia, segnare le cosa fatte e quelle da fare. Principalmente scritta in Js.",
            id: 14,
            is_important: 1,
            layout_color: "#420420",
            slug: "todo-list",
            technologies: [{
                color: "#ff8800",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un linguaggio di formattazione che descrive le modalità di impaginazione di una pagina Web",
                id: 1,
                name: 'html',
                pivot: {
                    project_id: 14,
                    technology_id: 1
                },
                slug: "html",
                update_at: "2023-06-01T04:19:59.000000Z"
            }, {
                color: "#007bff",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un linguaggio di formattazione per lo stile delle pagine web.",
                id: 2,
                name: 'css',
                pivot: {
                    project_id: 14,
                    technology_id: 2
                },
                slug: "css",
                update_at: "2023-06-01T04:20:29.000000Z"
            }, {
                color: "#e9d607",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un linguaggio di programmazione che permette di manipolare degli elementi e aggiungere una logica alla pagina.",
                id: 3,
                name: 'javascript',
                pivot: {
                    project_id: 14,
                    technology_id: 3
                },
                slug: "javascript",
                update_at: "2023-06-01T04:20:54.000000Z"
            }, {
                color: "#55c346",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "è un framework di Javascript",
                id: 4,
                name: 'Vue',
                pivot: {
                    project_id: 14,
                    technology_id: 4
                },
                slug: "Vue",
                update_at: "2023-06-01T04:21:05.000000Z"
            }, {
                color: "#c224ad",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "Un modo semplice ed elestico per scrivere CSS",
                id: 7,
                name: 'Sass',
                pivot: {
                    project_id: 14,
                    technology_id: 7
                },
                slug: "Sass",
                update_at: "2023-06-01T04:19:59.000000Z"
            }, {
                color: "#07b061",
                created_at: "2023-05-31T16:20:32.000000Z",
                description: "Single Page Application Framework",
                id: 9,
                name: 'Vite',
                pivot: {
                    project_id: 14,
                    technology_id: 9
                },
                slug: "Vite",
                update_at: "2023-06-01T04:19:59.000000Z"
            }],
            title: "ToDo List",
            type:
                { id: 3, name: 'Front end', slug: 'front-end', description: "Sicuramente la parte più visibile dei siti internet, ma che comprende una buona dose di logica e di attenzione all'Utente.", created_at: '2023-06-01T04:22:10.000000Z', updated_at: "2023-06-01T04:22:10.000000Z" },
            type_id: 3,
            updated_at: "2023-06-16T06:36:49.000000Z",
            year: "2023"

        }],


    //Searchbar
    searchInput: '',

    //Projects
    isLoading: true,
    isSuccess: false,
    projects: [],

    currentPage: 'home',
});