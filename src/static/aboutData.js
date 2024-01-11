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
    imgs: "https://c4.wallpaperflare.com/wallpaper/980/910/448/kebabs-vegetables-sauce-fresh-herbs-wallpaper-preview.jpg",
    quantity: 1,
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
    imgs: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqs5kBzF-XwYOOP1N5opZM8zALJfoV6K4VoIvY6scbpX2l12mY",
    quantity: 1,
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
    imgs: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3fGbgfZEj-QCc4W--JQFWouPZFVvk0I6Zs9qPPUs29bEipqoN",
    quantity: 1,
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
    imgs: "https://zamin.uz/uploads/posts/2022-07/photo_2022-07-16_10-55-06-680x453.jpg",
    quantity: 1,
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
    imgs: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRqwVP19CGlyvEZfwtbdW3TS0hd1actChNYU38YpPDfHOOvuwbP",
    quantity: 1,
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
    imgs: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTjBjhld09ft3zr4wVx1RoB6zfoz65ZQIVJ3GeVoeBFDJReSl_D",
    quantity: 1,
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
