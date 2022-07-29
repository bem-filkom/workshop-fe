import React, { useEffect, useState } from "react";
import "./DashboardSection.scss";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import ParagraphWebCard from "../../components/ParagraphWebCard/ParagraphWebCard";
import WebinarCard from "../../components/WebinarCard/WebinarCard";
import Api from "../../config/Api";

import "./DashboardSection.scss";
import Button from "../../components/Button/Button";

const DashboardWebinar = () => {
  let parsedJsonData = JSON.parse(localStorage.getItem("h0_s7yf8q7g398fh924"));
  const [userRegistered, setUserRegistered] = useState();
  let userId = String(parsedJsonData.user_id);

  useEffect(() => {
    Api.get("/api/users/" + userId, {
      headers: {
        Authorization:
          "Bearer " + String(localStorage.getItem("h0_ni128ehiond1289n")),
      },
    })
      .then((res) => {
        // console.log(res.data.message.user_register_in_webinar)
        setUserRegistered(res.data.message.user_register_in_webinar);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  const daftarWebinar = () => {
    // http://localhost:8080/api/users/register-webinar/104
    Api.put(
      "api/users/register-webinar/" + userId,
      {},
      {
        headers: {
          Authorization:
            "Bearer " + String(localStorage.getItem("h0_ni128ehiond1289n")),
        },
      }
    )
      .then((res) => {
        // console.log(res)
        // console.log(res.status)
        if (res.status === 200) {
          alert("Terdaftar di Webinar!");
          window.location.reload();
        } else alert("Terjadi kesalahan, silahkan mendaftar kembali!");
        //
      })
      .catch((e) => {
        console.log(e);
      });
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
  let begin = new Date("2021-09-10T19:00:59.000+07:00");
  let closeReg1 = new Date("2021-09-11T23:59:59.000+07:00");
  let closeReg2 = new Date("2021-09-12T23:59:59.000+07:00");

  let LinkYt1 = "";
  let LinkYt2 = "";

  return (
    <>
      {userRegistered === 0 && closeReg1 > Date.now() && Date.now() > begin ? (<div className="dashboard-body">
        <div className="webinar-collection">
          <div className="title-wr">
            <Header center noLine wrap>
              <center style={{ color: "white" }}>
                ANDA BELUM MENDAFTAR WEBINAR
                <br />
                SILAHKAN MENDAFTAR
              </center>
            </Header>
            <br />
            <br />
            <center>
              <Button
                children="DAFTAR"
                variant="secondary"
                onClicked={(e) => daftarWebinar()}
              />
            </center>
          </div>
        </div>
        );

      </div>) : userRegistered === 0 && closeReg1 < Date.now() ? (<div className="dashboard-body">
        <div className="webinar-collection">
          <div className="title-wr">
            <Header center noLine wrap>
              <center style={{ color: "white" }}>
                MOHON MAAF
                <br />
                PENDAFTARAN WEBINAR DITUTUP
              </center>
            </Header>
            <br />
            <br />
          </div>
        </div>
      </div>) : (<div className="dashboard-body-web">

        <div className="title-wr">
          <Header noLine wrap>
            🔴 LIVESTREAM
          </Header>
        </div>

        <>

          {closeReg1 > Date.now() && Date.now() > begin ? (
            <>
              <br />
              <br />
              <center>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href={"https://youtu.be/" + LinkYt1}
                >
                  <Button variant="secondary">Stream on YouTube &rarr;</Button>
                </a>
              </center>

              <div className="livestream">
                <div class="fluidMedia">
                  <iframe
                    id="video"
                    src={"https://www.youtube.com/embed/" + LinkYt1}
                    frameBorder="0"
                    allow="encrypted-media"
                    allowFullScreen={true}
                  />
                </div>
                <br />
                <iframe
                  id="comment"
                  src={"https://www.youtube.com/live_chat?v=+LinkYt1+&embed_domain=hology.ub.ac.id"}
                  frameBorder="0"
                  allowFullScreen={false}
                  allow="encrypted-media"
                />
              </div> </>
          ) : closeReg2 > Date.now() && closeReg1 < Date.now ? (
            <>
              <br />
              <br />
              <center>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href={"https://youtu.be/" + LinkYt2}
                >
                  <Button variant="secondary">Stream on YouTube &rarr;</Button>
                </a>
              </center>

              <div className="livestream">
                <iframe
                  id="video"
                  src={"https://www.youtube.com/embed/" + LinkYt2}
                  frameBorder="0"
                  allow="encrypted-media"
                  allowFullScreen={true}
                />
                <br />
                <iframe
                  id="comment"
                  src={"https://www.youtube.com/live_chat?v=" + LinkYt2 + "&embed_domain=hology.ub.ac.id"}
                  frameBorder="0"
                  allowFullScreen={false}
                  allow="encrypted-media"
                />
              </div> </>
          ) : (
            <div className="livestream">
              <Paragraph>
                Tetap sabar menunggu! Webinar akan di-livestream di sini :)
              </Paragraph>
            </div>
          )}
        </>
        <div className="title-wr">
          <Header noLine wrap>
            LINK GRUP
          </Header>
        </div>
        <br />
        <center>
          <a href="https://line.me/ti/g2/wZrZySDagD22LjzpShmg0w?utm_source=invitation&utm_medium=link_copy&utm_campaign=default">
            <Button variant="secondary">
              Link Grup
            </Button>
          </a>
        </center>
        <br />
        <br />
        <>
          <div className="description">
            <div className="title-wr">
              <Header noLine wrap>
                TIKET
              </Header>
            </div>
          </div>
          <center>
            <Paragraph>
              Venue dan update informasi lain terkait webinar akan diberitahukan
              di sini.
            </Paragraph>
          </center>
        </>
        {closeReg2 > Date.now() && parsedJsonData != null ? (

          <WebinarCard
            ticketFor={"Ticket For : " + String(parsedJsonData.user_fullname)}
            typeFor={"Type : " + (String(parsedJsonData.institution_id) == 0 ? "Non-Student" : "Student")}
            header="Webinar Ep. 1"
            title="Press the Leak Button: Understanding Data Breach and How to Prevent It"
            date="11 SEPTEMBER 2021"
            clock="19.00 WIB"
            media="Youtube"
            // expired
            Button
          />
        ) : closeReg2 > Date.now() ? (
          <WebinarCard
            header="Webinar Ep. 1"
            title="Press the Leak Button: Understanding Data Breach and How to Prevent It"
            date="11 SEPTEMBER 2021"
            clock="19.00 WIB"
            media="Youtube"
            // expired
            Button
          />
        ) : (
          <WebinarCard
            header="Webinar Ep. 1"
            title="Press the Leak Button: Understanding Data Breach and How to Prevent It"
            date="11 SEPTEMBER 2021"
            clock="19.00 WIB"
            media="Youtube"
            expired
            Button
          />
        )}

        {closeReg2 > Date.now() && parsedJsonData != null ? (
          <WebinarCard
            ticketFor={"Ticket For : " + String(parsedJsonData.user_fullname)}
            typeFor={"Type : " + (String(parsedJsonData.institution_id) == 0 ? "Non-Student" : "Student")}
            header="Webinar Ep. 2"
            title="is it crucial to be first product to market"
            date="12 SEPTEMBER 2021"
            clock="13.00 WIB"
            media="Youtube"
            // expired
            Button
          />

        ) : closeReg2 > Date.now() ? (
          <WebinarCard
            header="Webinar Ep. 2"
            title="is it crucial to be first product to market"
            date="12 SEPTEMBER 2021"
            clock="13.00 WIB"
            media="Youtube"
            // expired
            Button
          />

        ) : (
          <WebinarCard
            header="Webinar Ep. 2"
            title="is it crucial to be first product to market"
            date="12 SEPTEMBER 2021"
            clock="13.00 WIB"
            media="Youtube"
            expired
            Button
          />

        )}
      </div>)}

    </>

  );
};

export default DashboardWebinar;