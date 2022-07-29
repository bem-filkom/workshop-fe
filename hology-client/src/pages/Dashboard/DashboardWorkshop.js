import React, { useEffect, useState } from "react";
import "./DashboardSection.scss";
import Header from "../../components/Header/Header";
import WebinarCard from "../../components/WebinarCard/WebinarCard";
import Api from "../../config/Api";

const DashboardWorkshop = () => {
  let [isRegistered, setIsRegistered] = useState(0);
  const [workshopPertama, setWorkshopPertama] = useState();
  const [workshopKedua, setWorkshopKedua] = useState();

  useEffect(() => {
    Api.get("/api/workshops/users/attendance/", {
      headers: {
        Authorization:
          "Bearer " + String(localStorage.getItem("h0_ni128ehiond1289n")),
      },
    })
      .then((res) => {
        setIsRegistered(res.status === 401 ? 0 : 1);
        console.log(res);
        setWorkshopPertama(res.data.message[0].user_workshop_status + 1);
        setWorkshopKedua(res.data.message[1].user_workshop_status + 1);
        // setWorkshopPertama(2)
        // workshopPertama =
      })
      .catch((e) => console.log(e));
  }, []);

  const getKeterangan = () => {
    Api.get("/api/workshops/users/attendance/", {
      headers: {
        Authorization:
          "Bearer " + String(localStorage.getItem("h0_ni128ehiond1289n")),
      },
    })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  const daftarWorkshop = (id) => {
    Api.post(
      "api/workshops/attendance/" + id,
      {},
      {
        headers: {
          Authorization:
            "Bearer " + String(localStorage.getItem("h0_ni128ehiond1289n")),
        },
      }
    )
      .then((res) => {
        alert("Terdaftar!");
        window.location.reload();
      })
      .catch((e) => console.log(e));
  };
  if (Date.now() < new Date("2021-08-31T12:00:00.000+07:00")) {
    return (
      <div className="dashboard-body-competition">
        <Header noLine bold>
          Coming Soon...
        </Header>
      </div>
    )
  }
  if (isRegistered === 0 && Date.now() > new Date("2021-09-16T23:59:59.000+07:00")) {
    return (
      <div className="dashboard-body">
        <div className="title-wr">
          <Header center noLine wrap bold>
            <center style={{ color: "white" }}>
              {console.log(isRegistered)}
              MOHON MAAF
              <br />
              PENDAFTARAN WORKSHOP DITUTUP
            </center>
          </Header>
        </div>
      </div>
    )
  }
  let linkDaftar1 = "https://docs.google.com/forms/d/e/1FAIpQLSejUL_sGyT80MlNvTDGTnqYRhVmhAIimsIS6WDi_Dub5Ikkng/viewform?usp=sf_link"
  let linkDaftar2 = "https://docs.google.com/forms/d/e/1FAIpQLScOAFI9zEDUl6kIuh0m_7b4LLd0QmHcVedHJJ8dNVMWBPJp1A/viewform?usp=sf_link"
  return (
    // http://localhost:8080/api/workshops/users/attendance/
    <div className="dashboard-body-wr">
      <div className="title-wr">
        <Header noLine wrap>
          SYARAT DAN KETENTUAN PESERTA <br /> WORKSHOP HOLOGY 4.0
        </Header>
      </div>
      <div className="details-desc">
        <ul>
          <li>
            Peserta Workshop WAJIB memiliki akun di website HOLOGY dan mendaftarkan diri melalui form pendaftaran yang telah tersedia sesuai topik yang ingin diambil.
          </li>
          <li>
            Perlu diketahui sebelumnya, pada workshop HOLOGY 4.0 ini tersedia 2 topik yang akan diselenggarakan pada 2 hari yang berbeda. Peserta bebas memilih topik yang ingin diikuti.
          </li>
          <li>
            Setelah dinyatakan lolos seleksi, peserta WAJIB membayar commitment fee sebesar Rp 50.000 yang akan dikembalikan setelah peserta mengikuti seluruh rangkaian dengan baik.
          </li>
          <li>
            Selama pelaksanaan workshop, terdapat beberapa penugasan yang wajib dikerjakan oleh peserta.
          </li>
        </ul>
      </div>

      <div className="card-wr">
        {isRegistered === 0 ? (
          <WebinarCard
            header="Workshop Day 1"
            title="The Essentials of User Experience Design Process"
            date="18 September 2021"
            clock="09.00 - 12.00 WIB"
            media="Zoom"
            status={workshopPertama}
            linkDaftar={linkDaftar1}
            registerBtn={() => daftarWorkshop(1)}
          />
        ) : workshopPertama === 2 ? (
          <WebinarCard
            header="Workshop Day 1"
            title="The Essentials of User Experience Design Process"
            date="18 September 2021"
            clock="09.00 - 12.00 WIB"
            media="Zoom"
            status={workshopPertama}
            linkDaftar={linkDaftar1}
          />
        ) : workshopPertama === 3 ? (
          <WebinarCard
            header="Workshop Day 1"
            title="The Essentials of User Experience Design Process"
            date="18 September 2021"
            clock="09.00 - 12.00 WIB"
            media="Zoom"
            status={workshopPertama}
          />
        ) : workshopPertama === 4 ? (
          <WebinarCard
            header="Workshop Day 1"
            title="The Essentials of User Experience Design Process"
            date="18 September 2021"
            clock="09.00 - 12.00 WIB"
            media="Zoom"
            status={workshopPertama}
          />
        ) : (<WebinarCard
          header="Workshop Day 1"
          title="The Essentials of User Experience Design Process"
          date="18 September 2021"
          clock="09.00 - 12.00 WIB"
          media="Zoom"
          expired={true}
        />)}
        {/* <WebinarCard
          header="Workshop Day 1"
          title="The Essentials of User Experience Design Process"
          date="18 September 2021"
          clock="09.00 - 12.00 WIB"
          status={1}
          
          registerBtn={() => daftarWorkshop(1)}
        /> */}
        {/* {pretendWorkshop === 2 ? ( */}

        { isRegistered === 0 ? (
          <WebinarCard
            header="Workshop Day 2"
            title="The Art of Data : 
        Essential Guides to Exploratory Data Analysis and Data Storytelling"
            date="19 September 2021"
            clock="09.00 - 12.00 WIB"
            media="Zoom"
            status={workshopKedua}
            linkDaftar={linkDaftar2}
            registerBtn={() => daftarWorkshop(2)}
          />
        ) : workshopKedua === 2 ? (
          <WebinarCard
            header="Workshop Day 2"
            title="The Art of Data : 
          Essential Guides to Exploratory Data Analysis and Data Storytelling"
            date="19 September 2021"
            clock="09.00 - 12.00 WIB"
            media="Zoom"
            status={workshopKedua}
            linkDaftar={linkDaftar1}
          />
        ) : workshopKedua === 3 ? (
          <WebinarCard
            header="Workshop Day 2"
            title="The Art of Data : 
            Essential Guides to Exploratory Data Analysis and Data Storytelling"
            date="19 September 2021"
            clock="09.00 - 12.00 WIB"
            media="Zoom"
            status={workshopKedua}
          />
        ) : workshopKedua === 4 ? (
          <WebinarCard
            header="Workshop Day 2"
            title="The Art of Data : 
          Essential Guides to Exploratory Data Analysis and Data Storytelling"
            date="19 September 2021"
            clock="09.00 - 12.00 WIB"
            media="Zoom"
            status={workshopKedua}
          />
        ) : (<WebinarCard
          header="Workshop Day 2"
          title="The Art of Data : 
            Essential Guides to Exploratory Data Analysis and Data Storytelling"
          date="19 September 2021"
          clock="09.00 - 12.00 WIB"
          media="Zoom"
          expired={true}
        />)}
        {/* <WebinarCard
            header="Workshop Day 2"
            title="The Art of Data : 
          Essential Guides to Exploratory Data Analysis and Data Storytelling"
            date="18 September 2021"
            clock="09.00 - 12.00 WIB"
            status={1}

            registerBtn={() => daftarWorkshop(2)}
          /> */}
        {/* ) : ( */}
        {/* <WebinarCard
            header="Workshop Day 3"
            title="The Art of Data : 
          Essential Guides to Exploratory Data Analysis and Data Storytelling"
            date="18 September 2021"
            clock="09.00 - 12.00 WIB"
            status={4}
          /> */}
        {/* )} */}
        {/* <WebinarCard
          header="Workshop Day 2"
          title="The Art of Data : 
          Essential Guides to Exploratory Data Analysis and Data Storytelling"
          date="18 September 2021"
          clock="09.00 - 12.00 WIB"
        /> */}
      </div>
    </div>
  );
};

export default DashboardWorkshop;