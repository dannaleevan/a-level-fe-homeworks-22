const housingType = [
    {
        type: 'Permanent housing',
        img: {
            source: 'https://stopcor.org/wp-content/uploads/2021/05/minoborony_13-1024x578.jpg',
            alt: 'Permanent housing'
        }  
    },
    {
        type: 'Service housing',
        img: {
            source: 'https://www.mil.gov.ua/assets/images/resources/54292/3bc7165e0fad73a5f437bcd27b5842c1d4257dc7.jpg',
            alt: 'Service housing'
        },
    }

];

const informationContent = [
    {
        name: "Законодавство",
        title: "Законодаство України щодо забезпечення житлом військовослужбовців:",
        img: '',
        info: "https://zakon.rada.gov.ua/laws/show/2011-12#Text",
        kmu: "https://zakon.rada.gov.ua/laws/show/1081-2006-%D0%BF#Text",
        mou: "https://zakon.rada.gov.ua/laws/show/z1020-18#Text"
              
    },
    {
        name: "Постановка на чергу",
        title: "Перелік документів для постановки на чергу осіб, що потребують поліпшення жітлових умов",
        img: "https://ibb.co/GnW01dM"
    },
    {
        name: "Засідання",
        title: "Дата проведення наступного засідання Об'єднаної житлової комісії Міністерства оборони України та безпосередньо підпорядкованих структур",
        info: "Наступне засідання відбудеться 25.01.2022",
    },
    {
        name: "Контакти",
        title: "Графік роботи комісії",
        info:"Секретаря ОЖК МОУ та БПС : Вт, Чт - 14.00 - 16.00",
        img:
            {
            address: "Povitroflotskyi ave., 6",
            imgMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.9224358912115!2d30.47617031525168!3d50.44254539581625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce91edcb95a5%3A0x38d601cc8e2fee88!2z0J_QvtCy0ZbRgtGA0L7RhNC70L7RgtGB0YzQutC40Lkg0L_RgNC-0YHQvy4sIDYsINCa0LjRl9Cy!5e0!3m2!1sru!2sua!4v1463143879982"
            }
    }
];

const nav = document.querySelector('#nav');
const wrapper = document.querySelector('#content');

const createNavElement = (name) => {
    const navElement= `
    <li class="nav__element">
        <a class="" href="#${name.toLowerCase().replace(' ', '-')}">${name}</a>
    </li>
    `;
    return navElement;
}

const generateNavElements = (data) => {
    let navContent = '';

    data.forEach(element => {
        navContent += createNavElement(element.name);
    });
    nav.innerHTML = navContent;
};


const filterData = (data, searchName) => {
    return data.filter(element => {
        if (element.name === searchName) return element;
    })
};

const createContent = (element) => {
    const content = `
     <div class="info">
     <h2 class="info__title">${element.title}</h2>
     <p class="info__text">${element.info}</p>
     </div>`;
    return content;
};

generateNavElements(informationContent);

nav.addEventListener('click', (e) => {
    const linkName = e.target.textContent;
    const result = filterData(informationContent, linkName);
    console.log(result);
    wrapper.innerHTML = createContent(result[0]);
});






