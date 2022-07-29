import React, { useEffect, useState } from "react";
import "./Register.scss";
import Fieldinput from "../../components/Field-input/Fieldinput";
import Paragraph from "../../components/Paragraph/Paragraph";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Select from "react-select";
import { StoreJwt } from "../../config/SessionJWT";
import Api from "../../config/Api";
// import "./DashboardSection.scss";

const DashboardEditProfile = () => {
  let history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [institutions, setInstitutions] = useState([]);
  const [parsedJsonData, setParsedJsonData] = useState({})
  const [token, setToken] = useState("")
  const [payload, setPayload] = useState({
    institution: "0",
    institutionCustom: "",
    fullname: "",
    nickname: "",
    email: "",
    password: "",
    gender: "M",
    birthdate: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const registerUser = async () => {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let payloads = {
      fullname: ((payload.fullname === "") ? parsedJsonData.user_fullname : payload.fullname),
      name: ((payload.fullname === "") ? parsedJsonData.user_name : payload.nickname),
      email: (payload.email === "" ? parsedJsonData.user_email : payload.email),
      institution: (payload.institution === "0" ? parsedJsonData.institution_id : payload.institution),
      gender: (payload.gender === "" ? parsedJsonData.user_gender : payload.gender),
      birthdate: (payload.birthdate === "" ? parsedJsonData.user_birthdate : payload.birthdate),
      password: (payload.password),
    }
    let email = re.test(String(payloads.email));
    if (!email && email !== "") {
      return alert('Email yang dimasukkan salah!')
    }
    if (!payloads.password === "") {
      return alert('Harap Mengisikan Password')
    }
    await Api.put(("/api/users/" + parsedJsonData.user_id), payloads,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        }
      },
    )
      .then(() => {
        try {
          Api.post("/api/auth/signin/", payloads)
            .then((res) => {
              let jwtToken = res.data.message.token;
              StoreJwt(jwtToken);
              alert("Berhasil Menyunting profile!");
              if (localStorage.getItem("h0_skmvc091fh28"))
                history.push("/dashboard/workshop");
              else if (localStorage.getItem("h0_skmvc091fh29"))
                history.push("/dashboard/webinar");
              else history.push("/dashboard");
            })
            .catch((e) => {
              alert("Password yang dimasukkan salah!");
            });
        } catch (err) {
          console.log(err);
        }
      })
      .catch(() => {
        alert("Pastikan data terisi dengan benar!");
      });
  };

  useEffect(() => {
    setParsedJsonData(JSON.parse(localStorage.getItem("h0_s7yf8q7g398fh924")));
    setToken(localStorage.getItem("h0_ni128ehiond1289n"));
    if (!isLoading) return;
    Api.get("/api/institutions/")
      .then((res) => {
        let dataInstitusi = [];
        dataInstitusi = res.data.message.map((item) => {
          return {
            value: String(item["institution_id"]),
            label: item["institution_name"].replace(/\\r\\n/g, ""),
          };
        });
        dataInstitusi = dataInstitusi.filter((x) => x.value !== "9999");
        dataInstitusi.push({
          value: "9999",
          label: "LAINNYA",
        });
        return dataInstitusi;
      })
      .then((readyData) => {
        setInstitutions(readyData);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [isLoading]);

  return (
    <>
      <div className="form-register-containers dashboard-body-web">
        <div className="title">
          <Header size="r" center noLine wrap>
            UPDATE PROFILE
          </Header>
        </div>
        <Paragraph color justify marbot>
          Isilah data yang ingin anda ubah
        </Paragraph>
        <div className="wrapperr">
          <Fieldinput
            label="FULL NAME"
            name="name"
            type="text"
            required
            marbott
            value={payload.fullname}
            onChange={(e) =>
              setPayload({ ...payload, fullname: e.target.value })
            }
            fullWidth
          />
          <Fieldinput
            label="Nickname"
            name="nickname"
            type="text"
            marbott
            required
            value={payload.nickname}
            onChange={(e) => setPayload({ ...payload, nickname: e.target.value })}
            fullWidth
          />
          <Fieldinput
            label="EMAIL"
            name="email"
            type="email"
            marbott
            required
            value={payload.email}
            onChange={(e) => setPayload({ ...payload, email: e.target.value })}
            fullWidth
          />
          <Fieldinput
            label="BIRTHDATE"
            name="tanggalLahir"
            type="date"
            marbott
            required
            value={payload.birthdate}
            min="1994-01-01"
            max="2006-31-31"
            onChange={(e) =>
              setPayload({ ...payload, birthdate: e.target.value })
            }
            fullWidth
          />
          <div className="select-container">
            <span className="label">GENDER</span>
            <Select
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "#519a9e",
                  primary: "#1f81a0",
                },
              })}
              className="basic-single"
              classNamePrefix="select"
              name="gender"
              options={[
                { value: "M", label: "Male" },
                { value: "P", label: "Female" },
              ]}
              onChange={(e) => setPayload({ ...payload, gender: e.value })}
            />
          </div>
          <Paragraph color justify marbot>
            Isilah password menggunakan password lama untuk konfirmasi
            pengeditan profile
          </Paragraph>
          <Fieldinput
            label="PASSWORD"
            name="password"
            type="password"
            placeholder=""
            marbott
            required
            value={payload.password}
            onChange={(e) =>
              setPayload({ ...payload, password: e.target.value })
            }
            fullWidth
          />
          <Fieldinput
            label="CONFIRMATION PASSWORD"
            name="confirm_password"
            type="password"
            placeholder=""
            marbott
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
          />
          <br />
          <br />
          {confirmPassword !== "" && confirmPassword !== payload.password && (
            <Paragraph color>
              Konfirmasi password tidak cocok! Pastikan isian password sama.
              <br />
              <br />
            </Paragraph>
          )}
          <div className="tombol">
            <Button variant="secondary" onClicked={registerUser}>
              UPDATE PROFILE
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardEditProfile;
