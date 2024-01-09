import kokChoy from "../imgs/ko'k choy.jpeg";
import qoraChoy from "../imgs/qora choy.jpeg";
import limonChoy from "../imgs/limon choy.jpeg";
import shirinChoy from "../imgs/shirin choy.jpeg";
import torgamchiShashlik from "../imgs/torgamchi shashlik.jpg";
import qiymaShashlik from "../imgs/qiyma shashlik.jpg";

const about = [
  {
    title: "To'rga'mchi shashlik",
    img: torgamchiShashlik,
    allData: [
      {
        price: 12,
        gr: 125,
        grTitle: "Gr",
      },
    ],
  },
  {
    title: "Qiyma shashlik",
    img: qiymaShashlik,
    allData: [
      {
        price: 11,
        gr: 125,
        grTitle: "Gr",
      },
    ],
  },
  {
    title: "Ko'k choy",
    img: kokChoy,
    allData: [
      {
        price: 3,
        gr: 1,
        grTitle: "Ltr",
      },
    ],
  },
  {
    title: "Qora choy",
    img: qoraChoy,
    allData: [
      {
        price: 3,
        gr: 1,
        grTitle: "Ltr",
      },
    ],
  },
  {
    title: "Limon choy",
    img: limonChoy,
    allData: [
      {
        price: 6,
        gr: 1,
        grTitle: "Ltr",
      },
    ],
  },
  {
    title: "Shirin choy",
    img: shirinChoy,
    allData: [
      {
        price: 6,
        gr: 1,
        grTitle: "Ltr",
      },
    ],
  },
  ,
];

const aboutDataId = (id) => {
  return id?.map((i, index) => (i ? { ...i, id: index } : i));
};

const aboutData = aboutDataId(about);

export default aboutData;
