import "./App.css";
import React from "react";
import style from "./App.module.css";
import header from "./img/header.png";
import placeholder from "./img/placeholder.jpg";
import satu from "./img/01.jpg";
import dua from "./img/02.jpg";
import tiga from "./img/03.jpg";
import empat from "./img/04.jpg";
import lima from "./img/05.jpg";
import enam from "./img/06.jpg";
import axios from "axios";

const api = axios.create({
  baseURL: "https://5f298598a1b6bf0016ead7b5.mockapi.io/nikah/mempelai",
});

const MOCK = {
  mempelai: {
    pria: "Charles",
    wanita: "Niken",
    story:
      "Cinta tidak kenal waktu, kondisimu, berapa usiamu, dan siapa kamu. Cinta adalah pendekripsian yang tidak ada habisnya. Cinta bukan apa-apa bagi yang tidak pernah merasakan. Sebab ia hanya sebuah kata. Mudah di ucap. Namun tidak mudah untuk di jelaskan. Cinta itu yang kami rasakan. Cinta itu adalah asal mula." +
      " Asal Mula yang kami rasakan melalui sebuah jaringan sosial media. Berawal dari Charles menyapa Keith. Usut punya usut, kedekatan itu pun terjalin hanya melalui sosmed.Disanalah kami memulai menulis cerita dalam sebuah buku yang sama merasakan hal yang sama tanpa dipaksa. Kami pun menjalin suatu ikatan dan  merencanakannya,singkat dan bermakna pendekatan yang dilakukan hanya satu minggu.",
  },
  akad: {
    lokasi: "jakarta",
    tanggal: "12 September 2020",
    jam: "09.00",
  },

  resepsi: {
    lokasi: "jakarta",
    tanggal: "12 September 2020",
    jam: "12.00",
  },

  keluarga_pria: {
    ayah: "Agus Subagio",
    ibu: "Marina Nasution",
  },

  keluarga_wanita: {
    ayah: "Bambang Pratama",
    ibu: "Nikita Ariwibowo",
  },

  ucapan_selamat: {
    user: "Bayu Purnomo",
    ucapan: "Selamat ya",
  },
};

class App extends React.Component {
  state = {
    nikah: [],
  };
  constructor() {
    super();
    api.get("/").then((res) => {
      console.log(res.data);
      this.setState({ nikah: res.data });
    });
  }

  render() {
    return (
      <div className={style.body}>
        ))}
        <center>
          <img className={style.header} src={header} alt="header" />
        </center>
        <body>
          <div className={style.pengantin}>
            {this.state.nikah.map((nikah) => (
              <div key={nikah.id}>
                {nikah.pria} & {nikah.wanita}
              </div>
            ))}{" "}
            <div className={style.acara}>{MOCK.akad.tanggal}</div>
          </div>
          <div>
            <img className={style.front} src={placeholder} alt="placeholder" />
          </div>
          <div className={style.tagline}>Our Story</div>

          <div className={style.story}>{MOCK.mempelai.story}</div>

          <div className={style.tagline}>Acara</div>
          <div></div>
          <div className={style.undangan}>
            <div className={style.akad}>
              Akad Nikah<br></br>
              {MOCK.akad.tanggal}
              <br></br>
              {MOCK.akad.jam}
              <br></br>
              {MOCK.akad.lokasi}
            </div>
            <div className={style.akad}>
              Resepsi<br></br>
              {MOCK.resepsi.tanggal}
              <br></br>
              {MOCK.resepsi.jam}
              <br></br>
              {MOCK.resepsi.lokasi}
            </div>
          </div>

          <div className={style.tagline}>Gallery of Love</div>
          <div>
            <div className={style.gallery}>
              <img className={style.gallery} src={satu} alt="satu" />
              <img className={style.gallery} src={dua} alt="dua" />
            </div>
            <div className={style.gallery}>
              <img className={style.gallery} src={empat} alt="empat" />
              <img className={style.gallery} src={tiga} alt="tiga" />
            </div>
            <div className={style.gallery}>
              <img className={style.gallery} src={lima} alt="lima" />
              <img className={style.gallery} src={enam} alt="enam" />
            </div>
          </div>

          <div className={style.tagline}>Ucapan</div>
          <div className={style.tagline01}>
            Doa dan ucapan dari teman semua sangatlah berarti bagi kami.
          </div>

          <div className={style.ucapan}>
            <div className={style.ucapan1}>
              Nama <input type="text"></input>
              <br></br>
              Ucapan <input type="text"></input>
            </div>
            <button onClick>Submit</button>
            <div className={style.boxUcapan}></div>
          </div>

          <div>
            <div>
              <p>Pengantin pria</p> <input type="text"></input>
            </div>
            <div>
              <p>Pengantin wanita</p> <input type="text"></input>
              <div></div>
            </div>
            <div>
              <p>Akad</p> <input type="text"></input>
            </div>
            <div>
              <p>lokasi</p> <input type="text"></input>
            </div>
            <div>
              <p>tanggal</p> <input type="text"></input>
            </div>
            <div>
              <p>jam</p> <input type="text"></input>
            </div>
            <div></div>
            <div>
              <p>resepsi</p> <input type="text"></input>
            </div>
            <div>
              <p>lokasi</p> <input type="text"></input>
            </div>
            <div>
              <p>tanggal</p> <input type="text"></input>
            </div>
            <div>
              <p>jam</p> <input type="text"></input>
            </div>
            <div></div>
            <div>ucapan</div>
            <div>
              <p>Nama</p> <input type="text"></input>
            </div>
            <div>
              <p>Ucapan</p> <input type="text"></input>
            </div>
            <button onClick>Submit</button>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
