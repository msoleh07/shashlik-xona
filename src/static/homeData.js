import kokChoy from "../imgs/ko'k choy.jpeg";
import qoraChoy from "../imgs/qora choy.jpeg";
import limonChoy from "../imgs/limon choy.jpeg";
import shirinChoy from "../imgs/shirin choy.jpeg";
import torgamchiShashlik from "../imgs/torgamchi shashlik.jpg";
import qiymaShashlik from "../imgs/qiyma shashlik.jpg";

const homeData = [
  {
    title: "Shashlik turlari ",
    allData: [
      {
        img: torgamchiShashlik,
        imgTitle: "Torg'amchi shashlik",
        price: 12,
      },
      {
        img: qiymaShashlik,
        imgTitle: "Qiyma shashlik",
        price: 11,
      },
    ],
  },
  {
    title: "Choy turlari",
    allData: [
      {
        img: kokChoy,
        imgTitle: "Ko'k choy",
        price: 3,
      },
      {
        img: qoraChoy,
        imgTitle: "Qora choy",
        price: 3,
      },
      {
        img: limonChoy,
        imgTitle: "Limonli choy",
        price: 6,
      },
      {
        img: shirinChoy,
        imgTitle: "Shirin choy",
        price: 6,
      },
    ],
  },
];

const homeDataId = (id) => {
  return id?.map((i, index) => (i ? { ...i, id: index } : i));
};

const homeDataItems = homeDataId(homeData);

export default homeDataItems;
