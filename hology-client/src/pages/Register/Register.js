import React, { useEffect, useState } from "react";
import "./Register.scss";
import Fieldinput from "../../components/Field-input/Fieldinput";
import Paragraph from "../../components/Paragraph/Paragraph";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Select from "react-select";
import Api from "../../config/Api";
import { Helmet } from "react-helmet";

const Register = () => {
  let history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [institutions, setInstitutions] = useState([]);
  const [payload, setPayload] = useState({
    institution: "0",
    institutionCustom: "",
    fullname: "",
    email: "",
    password: "",
    gender: "M",
    birthdate: "1999-12-31",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const registerUser = async () => {
    await Api.post("/api/auth/", payload, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        alert("Terdaftar!");
        history.push("/");
      })
      .catch(() => {
        alert("Pastikan data terisi dengan benar!");
      });
  };

  useEffect(() => {
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
      <Helmet>
        <title>Register | HOLOGY 4.0</title>
      </Helmet>
      <div className="form-register-containers">
        <div className="wrapperr">
          <div className="title">
            <Header size="r" center noLine wrap>
              Registration Form
            </Header>
          </div>
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
            min="1899-01-01"
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
          <div className="select-container">
            <span className="label">INSTITUTION</span>
            {isLoading ? (
              <Paragraph>Mohon tunggu... Memuat data...</Paragraph>
            ) : (
              <>
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
                  isSearchable
                  name="competition"
                  options={institutions}
                  onChange={(e) =>
                    setPayload({ ...payload, institution: e.value })
                  }
                />
                <br />
                <p className="hint">
                  -&gt; TULIS NAMA INSTITUSI ANDA, dan pilih institusi anda,
                  jika tidak dari institusi pilih “umum/non-pt”.
                  <br />
                  <br />
                  -&gt; Jika nama institusi tidak ada di list, pilih "LAINNYA"
                  (cukup 1 orang). Rekan Anda akan dapat mendaftar dengan
                  institusi yang baru saja ditambahkan.
                </p>
              </>
            )}
          </div>
          {payload.institution === "9999" && (
            <Fieldinput
              label="Nama Universitas"
              name="institution_custom"
              type="text"
              placeholder="Ketik disini"
              marbott
              required
              value={payload.institutionCustom}
              onChange={(e) =>
                setPayload({ ...payload, institutionCustom: e.target.value })
              }
              fullWidth
            />
          )}
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
            <Paragraph>
              Konfirmasi password tidak cocok! Pastikan isian password sama.
              <br />
              <br />
            </Paragraph>
          )}
          <div className="tombol">
            <Button variant="secondary" onClicked={registerUser}>
              SIGN UP
            </Button>
          </div>
          <div className="login-text">
            <Paragraph>If you have an account</Paragraph>
            <Link to="/login" className="link-login">
              LOGIN HERE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
