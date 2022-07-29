import React, { useEffect, useState } from "react";
import "./DashboardSection.scss";
import Select from "react-select";
import Paragraph from "../../components/Paragraph/Paragraph";
import Button from "../../components/Button/Button";
import Fieldinput from "../../components/Field-input/Fieldinput";
import { MdContentCopy } from "react-icons/md";
import { FaCheckCircle, FaWindows } from "react-icons/fa";
import { FilePond, registerPlugin } from "react-filepond";
import Api from "../../config/Api";

import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { StoreJwt } from "../../config/SessionJWT";


// import { FaCheckCircle } from "react-icons/fa";

import Header from "../../components/Header/Header";
import { useHistory } from "react-router";
import jwtDecode from "jwt-decode";

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

const DashBoardCompetition = () => {
  const history = useHistory()

  const [submissionLink, setSubmissionLink] = useState("")
  const [currentCompetition, setCurrentCompetition] = useState(0);
  const [registrationStage, setRegistrationStage] = useState(2);
  const [teamState, setTeamState] = useState(false)
  const [createTeam, setCreateTeam] = useState(false)
  const [teamName, setTeamName] = useState("")
  const [teamDetail, setTeamDetail] = useState({
    teamId: "",
    teamName: "",
    teamJoinUrl: "",
    teamPaymentProof: "",
    teamStatus: 0,
    teamMember: []
  })
  const [checkTeamLead, setCheckTeamLead] = useState(false)
  const [individualSubmission, setIndividualSubmission] = useState({
    suratKeteranganIndividu: "",
    kartuMahasiswaIndividu: "",
  })

  const [buktiBayar, setBuktiBayar] = useState(false);
  const [suratKeterangan, setSuratKeterangan] = useState(false);
  const [kartuMahasiswwa, setKartuMahasiswa] = useState(false);

  const refreshToken = async () => {
    try {
      await Api.get(`/api/users/refreshtoken/`, {
        headers: {
          Authorization:
            "Bearer " + String(localStorage.getItem("h0_ni128ehiond1289n")),
        },
      })
        .then(res => {

          StoreJwt(res.data.message.token)
          // alert('Berhasil refresh token')
          // window.location.reload()
          history.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
        })
    }
    catch (err) {
      console.log("Trycatch", err)
    }
  }

  const inputSubmissionLink = () => {
    Api.post(`/api/submissions/uiux/uploadLink/${teamDetail.teamId}`, { submission_link: submissionLink }, {
      headers: {
        Authorization:
          "Bearer " + String(localStorage.getItem("h0_ni128ehiond1289n")),
      },
    })
      .then(res => {
        alert('Berhasil diinput')
      })
      .catch(err => {
        alert('Terjadi kesalahan, silahkan coba lagi!')
      })
  }

  const clickCreateTeam = () => {
    var userConfirmation = window.confirm("Jika sudah membuat tim, maka tidak akan bisa bergabung dengan tim lain. Apakah anda yakin ingin membuat tim?")
    if (userConfirmation) {
      localStorage.setItem("h0_sd0jg218nx7", currentCompetition)
      window.location.reload()
    }
  }

  const buttonKembali = () => {
    if (!localStorage.getItem("h0_sd0jg218nx7")) setCurrentCompetition(0)
    else backToCompetitionMenu()
  }

  const backToCompetitionMenu = () => {
    localStorage.removeItem("h0_sd0jg218nx7")
    window.location.reload()
  }

  const createTheTeam = () => {
    var userConfirmation = window.confirm("Jika sudah membuat tim, maka tidak akan bisa bergabung dengan tim lain. Apakah anda yakin ingin membuat tim?")
    if (userConfirmation) {
      Api.post(
        "api/teams/",
        {
          competition: String(currentCompetition),
          name: teamName
        },
        {
          headers: {
            Authorization:
              "Bearer " + String(localStorage.getItem("h0_ni128ehiond1289n")),
          },
        }
      )
        .then(() => {
          alert("Berhasil mendaftar!")
          localStorage.removeItem("h0_sd0jg218nx7")
          refreshToken()
          // window.location.reload()
        })
        .catch((err) => {
          alert('Terjadi kesalahan, silahkan mencoba kembali!')
          window.location.reload()
        })
    }
  }

  useEffect(() => {
    //Check if user already in team or not
    const JSONData = JSON.parse(localStorage.getItem("h0_s7yf8q7g398fh924"))
    const checkTeam = JSONData.team_id

    if (checkTeam) {
      setTeamState(true)

      //Get team Data
      Api.get(`api/teams/detail/${checkTeam}`, {
        headers: {
          Authorization:
            "Bearer " + String(localStorage.getItem("h0_ni128ehiond1289n")),
        },
      })
        .then((res) => {
          const teamDetailsData = res.data.message[0]
          setTeamDetail({
            teamId: teamDetailsData.team_id,
            teamName: teamDetailsData.team_name,
            teamJoinUrl: teamDetailsData.team_join_url,
            teamPaymentProof: teamDetailsData.team_payment_proof,
            teamStatus: teamDetailsData.team_status,
            teamMember: teamDetailsData.member
          })
          setCurrentCompetition(parseInt(teamDetailsData.competition_id))
          const individualData = teamDetailsData.member.filter((filt) => {
            return filt.user_id === JSONData.user_id
          })
          if(individualData[0]){
            if ( individualData[0].detail_team_proof.length > 0) {
              setSuratKeterangan(true)
              setIndividualSubmission({ ...individualSubmission, suratKeteranganIndividu: individualData[0].detail_team_proof ? individualData[0].detail_team_proof : "" })
            }
            if (individualData[0].detail_team_identity_pic.length > 0) {
              setKartuMahasiswa(true)
              setIndividualSubmission({ ...individualSubmission, kartuMahasiswaIndividu: individualData[0].detail_team_identity_pic ? individualData[0].detail_team_identity_pic : "" })
            }
            if (individualData[0].detail_team_proof.length > 0 && individualData[0].detail_team_identity_pic.length > 0) {
              setSuratKeterangan(true)
              setKartuMahasiswa(true)
              setIndividualSubmission({ kartuMahasiswaIndividu: individualData[0].detail_team_identity_pic, suratKeteranganIndividu: individualData[0].detail_team_proof })
            }
  
            if (teamDetailsData.team_payment_proof.length > 0) {
              setBuktiBayar(true)
            }
            if (teamDetailsData.member[0].user_id === JSONData.user_id) setCheckTeamLead(true)
          }
          
        })
        .catch((err) => {
          console.log(err)
        })
      // console.log(individualSubmission)
    }



    if (localStorage.getItem("h0_sd0jg218nx7")) {
      setCreateTeam(true)

      switch (localStorage.getItem("h0_sd0jg218nx7")) {
        case "1":
          setCurrentCompetition(parseInt(1))
          break
        case "2":
          setCurrentCompetition(parseInt(2))
          break
        case "3":
          setCurrentCompetition(parseInt(3))
          break
        case "4":
          setCurrentCompetition(parseInt(4))
          break
      }
    }
  }, [])

  const dataOutput = "ready";
  const competitionData = [
    {
      value: 1,
      label: "Competitive Programming",
      data: "https://bit.ly/GuidebookCPHOLOGY_4",
      closeReg: new Date("2022-10-10T23:59:59.000+07:00"),
      closeSub: new Date("2022-10-30T23:59:59.000+07:00"),
      linkGroup: "https://discord.gg/sJtZqfDZbY"
    },
    {
      value: 2,
      label: "UI/UX Design",
      data: "https://bit.ly/GuidebookUIUXHOLOGY_4",
      closeReg: new Date("2022-10-10T23:59:59.000+07:00"),
      closeSub: new Date("2022-11-10T23:59:59.000+07:00"),
      linkGroup: "https://t.me/joinchat/x9QzE0uggyU4ZjI1"
    },
    {
      value: 3,
      label: "Capture the Flag",
      data: "https://bit.ly/GuidebookCTFHOLOGY_4",
      closeReg: new Date("2022-10-10T23:59:59.000+07:00"),
      closeSub: new Date("2022-11-12T23:59:59.000+07:00"),
      linkGroup: "https://discord.gg/Bp8utbX4Qx"
    },
    {
      value: 4,
      label: "Capture the Flag (SMA)",
      data: "https://bit.ly/GuidebookCTFHOLOGY_4",
      closeReg: new Date("2022-10-10T23:59:59.000+07:00"),
      closeSub: new Date("2022-11-12T23:59:59.000+07:00"),
      linkGroup: "https://discord.gg/Bp8utbX4Qx"
    }
  ];

  return (
    <div className="dashboard-body-competition">
      {dataOutput === "ready" ? (
        <>
          {currentCompetition === 0 && (
            <div className="title-data">
              <Header noLine wrap>
                Dashboard
              </Header>
              <div className="description">
                <div className="selection">
                  <Paragraph large bold>
                    Pilih jenis competition untuk menuju dashboard tim.
                  </Paragraph>
                  <br />
                  <br />
                  <Select
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      colors: {
                        ...theme.colors,
                        primary25: "rgba(149, 106, 247, 0.5)",
                        primary: "#956AF7",
                        primary50: "#d8c7ff",
                      },
                    })}
                    className="basic-single"
                    classNamePrefix="select"
                    name="competition"
                    options={competitionData}
                    onChange={(e) => setCurrentCompetition(e.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/*BELUM CLOSEREG*/}
          {/* {currentCompetition !== 0 &&
            registrationStage === 1 &&
            Date.now() <=
              competitionData.find((x) => x.value === currentCompetition)
                .closeReg && (
              <div className="academy">
                <div className="tombol">
                  <Button
                    variant="ternary"
                    onClicked={() => {
                      setCurrentCompetition(0);
                      // setRegistrationStage(0);
                    }}
                  >
                    &larr; Return
                  </Button>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="header">
                  <Header center size="r" noLine>
                    {
                      competitionData.find(
                        (x) => x.value === currentCompetition
                      ).label
                    }
                  </Header>
                </div>
                <br />
                <br />
                <div className="content">
                  <Paragraph>
                    Ketua tim mendaftarkan tim di sini.
                    <br />
                    Anggota tim cukup mengakses link invitation yang didapatkan
                    ketua tim untuk join ke tim.
                  </Paragraph>
                </div>
                <br />
                <br />
                <br />
                <div className="description">
                  <div className="input-option">
                    <Fieldinput
                      label="Nama Tim"
                      name="name_team"
                      type="text"
                      required
                      marbott
                      fullWidth
                      // value={payload.name}
                      // onChange={(e) =>
                      //   setPayload({ ...payload, name: e.target.value })
                      // }
                    />
                  </div>
                  <div className="input-option">
                    <Fieldinput
                      label="Ketua Tim (Anda)"
                      name="team_captain"
                      type="text"
                      // value={getUserData.user_fullname}
                      required
                      fullWidth
                      marbott
                    />
                  </div>
                  <div className="input-option">
                    <Fieldinput
                      label="Institusi"
                      name="institution"
                      type="text"
                      // value={institutionName}
                      required
                      fullWidth
                      marbott
                    />
                  </div>
                  <br />
                  <br />
                  <Button variant="quarternary">KIRIM</Button>
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            )} */}

          {/*TEAM NOT REGISTERED*/}
          {/*SUDAH CLOSEREG*/}

          {/*REGISTERED TEAM*/}
          {
            /*teamData.members != null && */ currentCompetition !== 0 &&
            registrationStage === 2 &&
            (
              <div className="academy">
                {!teamState ? (<div className="tombol">
                  <Button
                    variant="ternary"
                    onClicked={() => {
                      buttonKembali()
                      // setCurrentCompetition(0);
                      // setRegistrationStage(0);
                    }}
                  >
                    &larr; Kembali
                  </Button>
                </div>) : (<> </>)}
                <br />
                <br />
                <br />
                <br />
                <div className="header">
                  <Header center size="r" noLine>
                    {
                      competitionData.find(
                        (x) => x.value === currentCompetition
                      ).label
                    }
                  </Header>
                </div>
                {!createTeam ? (<div>{teamState ? (<div>
                  <Header center size="r" noLine>
                    {teamDetail.teamName}
                  </Header>
                  {(teamDetail.teamStatus === 0) ?
                    (<div className="p-wrapper">
                      <Paragraph header>
                        Tim ini belum terverifikasi. Untuk dapat diverifikasi,
                        setiap tim wajib melengkapi bukti pembayaran. Dan setiap
                        anggota wajib melengkapi KTM & surat aktif
                        kuliah/KRS/Riwayat studi.
                      </Paragraph>
                    </div>) :
                    (<>
                      <div className="p-wrapper">
                        <Header center size="s" noLine>
                          Tim anda telah terverifikasi!
                        </Header>
                      </div>
                      <div className="subtitle">
                        Pengumuman kepada peserta lomba
                      </div>

                      <Paragraph header>
                        Silahkan memasuki grup cabang lomba agar dapat berkoordinasi dengan panitia terkait lomba<br />
                        <a href={competitionData[currentCompetition - 1].linkGroup}>
                          <Button variant="secondary">
                            Link Grup
                          </Button>
                        </a>
                      </Paragraph>
                      <br />
                      <br />
                    </>
                    )}

                  {teamDetail.teamStatus === 0 ? (
                    <>
                      {teamDetail.teamMember.map((item, index) => (

                        <Paragraph key={index}>
                          {index + 1}. {index === 0 ? (item.user_fullname + " (Ketua)") : (item.user_fullname)} (KTM:{" "}
                          {item.detail_team_identity_pic === "" ? "❌" : "✅"} Surat
                          Aktif/KRS/Riwayat Studi:{" "}
                          {item.detail_team_proof === "" ? "❌" : "✅"})
                        </Paragraph>


                      ))} </>) : (
                    <></>
                  )}

                  {teamDetail.teamStatus === 0 ? (
                    <div className="header">
                      <Header center size="r" line1>
                        Berkas Team
                      </Header>
                      <Paragraph>
                        {/* Competition:{" "}
                      {
                        competitionData.find(
                          (x) => x.value === currentCompetition
                        ).label
                      } */}
                      </Paragraph>
                    </div>) : (<></>)}
                  {teamDetail.teamStatus === 0 ? (
                    <div className="link-team-container">
                      <Paragraph header>Secret invitation link:</Paragraph>
                      <span className="link-container">
                        <span className="link-container--link">
                          {teamDetail.teamJoinUrl}
                          <br />
                          <br />
                          Keep this secret!
                        </span>
                        <span
                          className="icon-container"
                          onClick={() => navigator.clipboard.writeText(teamDetail.teamJoinUrl)}
                        >
                          <MdContentCopy className="copy-icon" />
                        </span>
                      </span>
                    </div>)
                    : (<></>)}
                  {/* <div className="team-member">
                   <div className="header">
                     <Paragraph header>Anggota Tim:</Paragraph>
                   </div> */}
                  {/* {teamDetail.teamMember.map((item, index) => (
                      <Paragraph key={index}>
                        {index + 1}. {item.user_fullname}
                      </Paragraph>
                    ))} */}
                  {/* </div> */}
                  {teamDetail.teamStatus === 0 ? (
                    <div className="data-container">
                      <div className="bukti-bayar-container">
                        <div className="subtitle">
                          <Paragraph header>Upload Bukti Pembayaran:</Paragraph>
                        </div>
                        {buktiBayar && (
                          <>

                            (<Paragraph>
                              <a href={`https://api.hology.my.id/payment/${teamDetail.teamPaymentProof}`} download>Berkas yang diupload.</a><br />
                              <FaCheckCircle height="14px" color="#00b900" /> File
                              telah diupload. Tunggu verifikasi atau perbaiki file
                              Anda jika salah:
                            </Paragraph>)
                            <br />
                            <br />
                          </>
                        )}

                        {checkTeamLead ?
                          (<div className="file-wrapper">
                            {teamDetail.teamStatus === 0 ? (
                              <>
                                <FilePond
                                  maxFiles="2MB"
                                  name="payment_proof"
                                  checkValidity
                                  dropValidation
                                  server={{
                                    process: {
                                      withCredentials: false,
                                      url: `https://api.hology.my.id/api/teams/fileUpload/${teamDetail.teamId}/payment`,
                                      headers: {
                                        Authorization: "Bearer " + String(localStorage.getItem("h0_ni128ehiond1289n")),
                                      },
                                      // onload: () => {
                                      //   alert("Berhasil di upload!")
                                      //   window.location.reload()
                                      // },
                                      onerror: (err) => {
                                        alert(`Gagal mengupload bukti. Silahkan mengecek kembali format penamaan file yang dilakukan atau coba upload kembali.`)
                                      }
                                    },
                                  }}
                                  acceptedFileTypes={["image/png", "image/jpeg"]}
                                  labelIdle='<span class="filepond--label-action">Upload disini (BUKTIBAYAR_namatim.jpg/.png max 2MB)'
                                />
                              </>) : (
                              <>
                              </>
                            )}
                          </div>) :
                          (<div className="p-wrapper">
                            <Paragraph>
                              Hanya ketua tim yang bisa mengupload bukti pembayaran!
                            </Paragraph>
                          </div>)
                        }
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                  <br />
                  <br />
                  {teamDetail.teamStatus === 0 ? (
                    <div className="header">
                      <Header center size="r" line1>
                        Berkas Pribadi
                      </Header>
                    </div>) : (
                    <></>
                  )}

                  <div className="data-container">

                    {teamDetail.teamStatus === 0 ? (
                      <div className="kartu-mahasiswa-container">
                        <div className="subtitle">
                          <Paragraph header>Upload Kartu Mahasiswa:</Paragraph>
                        </div>
                        {kartuMahasiswwa && (
                          <>
                            (<Paragraph>
                              <a href={`https://api.hology.my.id/ktm/${individualSubmission.kartuMahasiswaIndividu}`} download={`${individualSubmission.kartuMahasiswaIndividu}`}>Berkas yang diupload.</a><br />
                              {/* <Link to={{pathname: `https://api.hology.my.id/ktm/${individualSubmission.kartuMahasiswaIndividu}`}} target="_blank">Link</Link> */}
                              <FaCheckCircle height="14px" color="#00b900" /> File
                              telah diupload. Tunggu verifikasi atau perbaiki file
                              Anda jika salah:
                            </Paragraph>) :
                            (<Paragraph>
                              <FaCheckCircle height="14px" color="#00b900" /> Berkas telah diverifikasi
                            </Paragraph>)
                            <br />
                            <br />
                          </>
                        )}
                        {/* <FilePond
                        maxFiles="2MB"
                        name="ktm"
                        checkValidity
                        dropValidation
                        server={{
                          process: {
                            withCredentials: false,
                            url: `https://api.hology.my.id/api/teams/fileUpload/${teamDetail.teamId}/ktm`,
                            headers: {
                              Authorization: "Bearer " + localStorage.getItem("h0_ni128ehiond1289n"),
                            },
                            onerror: (res) =>
                            {console.log(res)
                              alert('Upload gagal, silahkan coba lagi!')}
                          },
                        }}
                        acceptedFileTypes={["image/png", "image/jpeg"]}
                        labelIdle='<span class="filepond--label-action">Upload disini<br/> (KTM_NAMA TEAM_NAMA USER.pdf max 2MB)'
                      /> */}
                        {teamDetail.teamStatus === 0 ? (
                          <>
                            <FilePond
                              maxFiles="2MB"
                              name="ktm"
                              checkValidity
                              dropValidation
                              server={{
                                process: {
                                  withCredentials: false,
                                  url: `https://api.hology.my.id/api/teams/fileUpload/${teamDetail.teamId}/ktm`,
                                  headers: {
                                    Authorization: "Bearer " + localStorage.getItem("h0_ni128ehiond1289n"),
                                  },
                                  // onload: () => {
                                  //   alert("Berhasil di upload!")
                                  //   window.location.reload()
                                  // },
                                  onerror: (res) => {
                                    alert('Upload gagal, silahkan coba lagi!')
                                  }
                                },
                              }}
                              acceptedFileTypes={["application/pdf","application/vnd.ms-excel"]}
                              labelIdle='<span class="filepond--label-action">Upload disini<br/> (KTM_NAMA TEAM_NAMA USER.pdf max 2MB)'
                            />
                          </>) : (
                          <>
                          </>
                        )}
                      </div>) : (
                      <></>
                    )}
                    <br />

                    {teamDetail.teamStatus === 0 ? (
                      <div className="surat-keterangan-container">
                        <div className="subtitle">
                          <Paragraph header>
                            Upload Surat Keterangan Mahasiswa Aktif / Riwayat
                            Studi / KRS :
                          </Paragraph>
                        </div>
                        {suratKeterangan && (
                          <>
                            (<Paragraph>
                              <a href={`https://api.hology.my.id/berkas_pendukung/${individualSubmission.suratKeteranganIndividu}`} download>Berkas yang diupload.</a><br />
                              <FaCheckCircle height="14px" color="#00b900" /> File
                              telah diupload. Tunggu verifikasi atau perbaiki file
                              Anda jika salah:
                            </Paragraph>) :
                            (<Paragraph>
                              <FaCheckCircle height="14px" color="#00b900" /> Berkas telah diverifikasi
                            </Paragraph>)
                            <br />
                            <br />
                          </>
                        )}
                        {teamDetail.teamStatus === 0 ? (
                          <>
                            <FilePond
                              maxFiles="2MB"
                              name="berkas_pendukung"
                              checkValidity
                              dropValidation
                              server={{
                                process: {
                                  withCredentials: false,
                                  url: `https://api.hology.my.id/api/teams/fileUpload/${teamDetail.teamId}/berkas`,
                                  headers: {
                                    Authorization: "Bearer " + localStorage.getItem("h0_ni128ehiond1289n"),
                                  },
                                  // onload: () => {
                                  //   alert("Berhasil di upload!")
                                  //   window.location.reload()
                                  // },
                                  onerror: (res) => {
                                    alert('Upload gagal, silahkan coba lagi!')
                                  }
                                },
                              }}
                              acceptedFileTypes={["zip,application/zip","application/x-zip","application/x-zip-compressed"]}
                              labelIdle='<span class="filepond--label-action">Upload disini<br/> (BERKASPENDUKUNG_NAMA TEAM_NAMA USER.zip/rar max 2MB)'
                            />
                          </>) : (
                          <>
                          </>
                        )}

                      </div>) : (
                      <></>
                    )}
                    {currentCompetition === 2 && teamDetail.teamStatus === 1 ? (
                      <center>
                        <div>
                          <Header center size="s" noline>
                            Upload Submisi (Bagi UI/UX)
                          </Header>
                          <div>
                            <br />
                            <br />
                            <div className="input-option">
                              <>
                                <div className="subtitle">
                                  <Paragraph header>
                                    Upload Proposal UI/UX:
                                  </Paragraph>
                                </div>
                                <Fieldinput
                                  type="text"
                                  value={submissionLink}
                                  onChange={(e) => setSubmissionLink(e.target.value)}
                                  required
                                  marbott
                                />
                                <Button onClicked={() => inputSubmissionLink()}>Submit</Button>
                                <br />
                                <br />
                                <br />
                              </>

                              <div className="subtitle">
                                <Paragraph header>
                                  Upload Proposal UI/UX:
                                </Paragraph>
                              </div>
                              <FilePond
                                maxFiles="10MB"
                                name="proposal_uiux"
                                checkValidity
                                dropValidation
                                server={{
                                  process: {
                                    withCredentials: false,
                                    url: `https://api.hology.my.id/api/submissions/uiux/uploadFile/${teamDetail.teamId}`,
                                    headers: {
                                      Authorization: "Bearer " + localStorage.getItem("h0_ni128ehiond1289n"),
                                    },
                                    onerror: (res) => {
                                      alert('Upload gagal, silahkan coba lagi!')
                                    }
                                  },
                                }}
                                acceptedFileTypes={["application/pdf","application/vnd.ms-excel"]}
                                labelIdle='<span class="filepond--label-action">Upload disini<br/> (PROPOSAL_UIUX_NAMATIM.pdf max 10MB)'
                              />
                            </div>
                          </div>
                        </div>
                      </center>) : (<></>)}
                  </div>
                  <br />
                  <br />
                </div>) : (<div>
                  <Header center size="s" noLine>
                    Anda belum memiliki tim.
                  </Header>
                  <br />
                  <Header center size="s" noLine>
                    Silahkan mendaftar dengan menekan tombol dibawah ini<br />
                    atau minta teman anda untuk memasukkan anda kedalam tim.
                  </Header>
                  <br />
                  <br />
                  <Button
                    variant="primary"
                    onClicked={() => {
                      clickCreateTeam();
                    }}
                  >
                    Buat Tim
                  </Button>
                </div>)} </div>) : (
                  <div>
                    {/* <Header center size="s" noLine>
                          Silahkan masukkan nama tim yang diinginkan:
                        </Header> */}
                    <Fieldinput
                      label="Nama Tim"
                      name="name_team"
                      type="text"
                      required
                      marbott
                      // fullWidth
                      value={teamName}
                      onChange={(e) =>
                        setTeamName(e.target.value)
                      }
                    />
                    <Button
                      variant="primary"
                      onClicked={() => {
                        createTheTeam()
                      }}
                    >
                      Buat Tim
                    </Button>
                    <br />
                    <br />
                  </div>
                )}
              </div>
            )
          }

          {/*VERIFIED TEAM*/}

          {/*BELUM CLOSE SUBMISSION*/}

          {/*SUDAH CLOSE SUBMISSION*/}
        </>
      ) : (
        <Header noLine bold>
          Coming Soon...
        </Header>
      )}
    </div>
  );
};

export default DashBoardCompetition;