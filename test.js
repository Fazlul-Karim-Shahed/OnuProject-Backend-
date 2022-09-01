let obj = {
    a: 'str',
    b : {name: 'shahed'},
    c : {name: 'karim', age: 22},
    d : {
        finish: [
            {
                name: 'leather',
                photo: ['ld.jpg',  'ldfs.png']
            },
            {
                name: 'wood',
                photo: ['wkk.jpg', 'wdfs.png']
            }
        ],
        size: [
            {
                name: '1x',
                photo: ['wkk.jpg', 'wdfs.png']
            },
            {
                name: '2x',
                photo: ['wkk.jpg', 'wdfs.png']
            },
        ]
    }
}

let newObj = {
    ...obj,
    d : {
        ...obj.d,
        size: [{
            name: '1x',
            photo: ['wkk.jpg', 'wdfs.png']
        },]
    }
}

console.log(newObj);