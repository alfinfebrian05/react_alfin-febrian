import { useState } from "react";
import { ComponentNavbar } from "./components/molecules";
import { Carousel, Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
  const messageValidation = Yup.object({
    nama: Yup.string()
      .min(5, "Nama harus diisi minimal 5 Karakter")
      .required("Field Nama tidak boleh kosong!"),
    noHp: Yup.string()
      .required("Field Nomor HP tidak boleh kosong!")
      .matches(
        /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
        "Phone number must be valid!"
      ),
    email: Yup.string()
      .matches(
        /^[A-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Email must be valid!"
      )
      .required("Field Email tidak boleh kosong!"),
    subject: Yup.string().required("Field Subject tidak boleh kosong!"),
    ideaDescription: Yup.string().required(
      "Field Idea Description tidak boleh kosong!"
    ),
  });

  const formik = useFormik({
    initialValues: {
      nama: "",
      noHp: "",
      email: "",
      subject: "",
      ideaDescription: "",
    },
    validationSchema: messageValidation,
    onSubmit: (formValue) => {
      const { nama, noHp, email, subject, ideaDescription } = formValue;

      const confirmMessage = window.confirm(
        `Data yang anda isikan pada form dibawah ini apakah sudah benar? \n---------------------------------------------\nNama Anda: ${nama}\nNo HP Anda: ${noHp}\nEmail Anda: ${email}\nSubject : ${subject}\nIde Website / Aplikasi Anda: ${ideaDescription}\n---------------------------------------------\nPastikan sudah benar agar dapat dibalas secepat mungkin!\nJika sudah benar klik "OKE" / "OK" untuk mengirimkan ide aplikasi Anda ke saya`
      );

      var whatsappMe = "https://web.whatsapp.com/send?phone=6285701660873";
      whatsappMe += encodeURI(
        `&text=Hai Alfin 👋 Saya ingin menyampaikan ide aplikasi / website yang ingin saya buat. \n\nBerikut adalah data diri saya 📝: \n✅ Nama : ${nama}\n✅ No. Handphone : ${noHp}\n✅ Email : ${email}\n\n🧠 Deskripsi Ide Aplikasi Saya: \n${ideaDescription}\n\nSaya tunggu kabar baik dari anda Alfin!`
      );

      if (confirmMessage) {
        window.open(whatsappMe);
        formik.resetForm();
      }
    },
  });
  return (
    <div className="App">
      <ComponentNavbar />
      <main className="mt-5 pt-2 p-md-0 m-md-0" id="aboutMe">
        <div className="container-fluid px-xl-5 pt-xl-3 pb-xl-4 mt-0 py-0 mt-md-5 py-md-3 mt-lg-0 py-lg-0">
          <div className="row justify-content-center align-items-center py-3">
            <div className="col-xl-3 col-md-4 col-lg-4 d-sm-flex justify-content-center">
              <img
                src="assets/avatar.png"
                alt=""
                className="bg-body-tertiary border border-2 rounded-circle"
                width="220px"
              />
            </div>
            <div className="col-xl-4 col-md-7 col-lg-5 lh-lg py-3 px-4 px-lg-0 py-lg-0 px-md-4 py-md-0">
              <h1>Who Am I?</h1>
              <p className="fs-6 pb-2">
                Saya adalah mahasiswa Teknik Informatika yang menyukai bidang
                Frontend Development dan UI / UX Design. Saya sering melakukan
                eksplorasi pembuatan tampilan website atau eksplorasi UI / UX
                Design website
              </p>
              <div className="d-flex justify-content-start gap-2">
                <a href="#portofolio" className="btn btn-primary">
                  <Icon.Laptop className="me-2" />
                  Portofolio Saya
                </a>
                <a href="#contact" className="btn btn-outline-success">
                  <Icon.PhoneFill className="me-1" /> Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-light" id="myProject">
          <div
            className="d-flex justify-content-center align-items-center py-5 px-0 px-md-3 px-xl-5 flex-column gap-2"
            id="portofolio"
          >
            <div className="container-fluid text-center px-0 mx-auto mx-md-5 px-md-5">
              <h2 className="text-success">My Portofolio</h2>
              <p className="pt-2">
                Berikut adalah beberapa proyek yang pernah buat, baik itu proyek
                dari Kampus ataupun proyek website freelance
              </p>
            </div>
            <div className="row gap-lg-0 g-sm-4 gap-4 row-gap-3 row-gap-md-0 gap-md-0">
              <div className="col-lg-4 col-md-6 col-sm-auto">
                <div className="card border-0 shadow">
                  <img
                    src="https://source.unsplash.com/360x200?programming"
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Project 1</h4>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime earum reprehenderit iusto rerum, dignissimos minima
                      ea id nostrum impedit repellendus.
                    </p>
                    <div className="text-end">
                      <a href="#" className="card-link btn btn-primary">
                        Detail Proyek
                        <i className="bi bi-arrow-right ps-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-auto">
                <div className="card border-0 shadow">
                  <img
                    src="https://source.unsplash.com/360x200?design"
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Project 2</h4>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime earum reprehenderit iusto rerum, dignissimos minima
                      ea id nostrum impedit repellendus.
                    </p>
                    <div className="text-end">
                      <a href="#" className="card-link btn btn-primary">
                        Detail Proyek
                        <i className="bi bi-arrow-right ps-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-auto">
                <div className="card border-0 shadow">
                  <img
                    src="https://source.unsplash.com/360x200?coffee"
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Project 3</h4>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime earum reprehenderit iusto rerum, dignissimos minima
                      ea id nostrum impedit repellendus.
                    </p>
                    <div className="text-end">
                      <a href="#" className="card-link btn btn-primary">
                        Detail Proyek
                        <i className="bi bi-arrow-right ps-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-auto">
                <div className="card border-0 shadow">
                  <img
                    src="https://source.unsplash.com/360x200?programming"
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Project 4</h4>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime earum reprehenderit iusto rerum, dignissimos minima
                      ea id nostrum impedit repellendus.
                    </p>
                    <div className="text-end">
                      <a href="#" className="card-link btn btn-primary">
                        Detail Proyek
                        <i className="bi bi-arrow-right ps-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-auto">
                <div className="card border-0 shadow">
                  <img
                    src="https://source.unsplash.com/360x200?design"
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Project 5</h4>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime earum reprehenderit iusto rerum, dignissimos minima
                      ea id nostrum impedit repellendus.
                    </p>
                    <div className="text-end">
                      <a href="#" className="card-link btn btn-primary">
                        Detail Proyek
                        <i className="bi bi-arrow-right ps-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-auto">
                <div className="card border-0 shadow">
                  <img
                    src="https://source.unsplash.com/360x200?coffee"
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Project 6</h4>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime earum reprehenderit iusto rerum, dignissimos minima
                      ea id nostrum impedit repellendus.
                    </p>
                    <div className="text-end">
                      <a href="#" className="card-link btn btn-primary">
                        Detail Proyek
                        <i className="bi bi-arrow-right ps-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-white py-4 mb-4">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <h1>Clients</h1>
            <p className="text-center d-none d-md-block pt-2">
              Berikut adalah beberapa client yang telah bekerja sama dengan{" "}
              <br />
              saya untuk pembuatan proyek website mereka
            </p>
            <p className="text-center d-block d-md-none pt-2">
              Berikut adalah beberapa client yang telah bekerja sama dengan saya
              untuk pembuatan proyek website mereka
            </p>
          </div>
          {/* Show Clients on bigger screen then mobile (desktop / tablet) */}
          <div className="d-none d-md-block">
            <div className="row">
              <div className="col-md-12 col-lg-6 d-flex justify-content-center justify-content-lg-end gap-5 align-items-center pe-4">
                <img
                  className="img-fluid w-25 h-auto"
                  src="assets/client-logo/client-logo_1.png"
                  alt=""
                />
                <img
                  className="img-fluid w-25 h-auto"
                  src="assets/client-logo/client-logo_2.png"
                  alt=""
                />
              </div>
              <div className="col-md-12 col-lg-6 d-flex justify-content-center gap-5 justify-content-lg-start align-items-center ps-4">
                <img
                  className="img-fluid w-25 h-auto"
                  src="assets/client-logo/client-logo_3.jpg"
                  alt=""
                />
                <img
                  className="img-fluid w-25 h-auto"
                  src="assets/client-logo/client-logo_4.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Show Carousel Clients only mobile */}
          <div className="d-block d-md-none">
            <Carousel fade variant="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./assets/client-logo/client-logo_1.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./assets/client-logo/client-logo_2.png"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./assets/client-logo/client-logo_3.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./assets/client-logo/client-logo_4.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        {/* Form Contact Me Start */}
        <div className="container-fluid p-5 bg-light" id="contactMe">
          <div className="row">
            <div className="col-lg-4 col-md-5 col-sm-12 p-0 pe-md-4 pe-lg-5">
              <h3>Diskusi dengan saya</h3>
              <p>
                Ingin membuat landing page / aplikasi berbasis website?
                Diskusikan ide aplikasi berbasis website ataupun ingin membuat
                landing page dengan saya
                <strong className="text-success ps-1">GRATIS</strong>
              </p>
            </div>
            <div className="col-md-7 col-lg-8 p-0">
              <form id="contact-me" onSubmit={formik.handleSubmit}>
                <div className="row">
                  <div className="pb-3 col-lg-6 col-md-12 col-sm-12">
                    <Form.Control
                      type="text"
                      name="nama"
                      id="nama"
                      placeholder="Nama"
                      onChange={formik.handleChange}
                      value={formik.values.nama}
                      isInvalid={formik.errors.nama}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.nama}
                    </Form.Control.Feedback>
                  </div>
                  <div className="pb-3 col-lg-6 col-md-12 col-sm-12">
                    <div className="input-group">
                      <span className="input-group-text">
                        <Icon.PhoneFill />
                      </span>
                      <Form.Control
                        type="tel"
                        name="noHp"
                        id="noHp"
                        placeholder="Phone Number"
                        onChange={formik.handleChange}
                        value={formik.values.noHp}
                        isInvalid={formik.errors.noHp}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.noHp}
                      </Form.Control.Feedback>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="pb-3 col-md-12 col-lg-6">
                    <div className="input-group">
                      <span className="input-group-text">
                        <Icon.EnvelopeFill />
                      </span>
                      <Form.Control
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        isInvalid={formik.errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.email}
                      </Form.Control.Feedback>
                    </div>
                  </div>
                  <div className="pb-3 col-md-12 col-lg-6 col-sm-12">
                    <Form.Control
                      type="text"
                      name="subject"
                      id="subject"
                      className="form-control"
                      placeholder="Subject"
                      onChange={formik.handleChange}
                      value={formik.values.subject}
                      isInvalid={formik.errors.subject}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.subject}
                    </Form.Control.Feedback>
                  </div>
                  <div className="pb-3 col-md-12 col-lg-12">
                    <Form.Control
                      as="textarea"
                      name="ideaDescription"
                      id="ideaDescription"
                      rows={5}
                      placeholder="Tulis Idemu Disini"
                      onChange={formik.handleChange}
                      value={formik.values.ideaDescription}
                      isInvalid={formik.errors.ideaDescription}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.ideaDescription}
                    </Form.Control.Feedback>
                  </div>
                </div>
                <div className="d-none d-md-flex justify-content-md-end justify-content-sm-start">
                  <button type="submit" className="btn btn-success w-auto">
                    <Icon.Send className="me-2" /> Submit Idea
                  </button>
                </div>
                <div className="d-block d-md-none">
                  <button type="submit" className="btn btn-success w-100">
                    <Icon.Send className="me-2" /> Submit Idea
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Form Contact Me End */}
      </main>
      <footer>
        <div className="container-fluid bg-body-secondary p-4 p-md-5">
          <div className="d-flex flex-column justify-content-center align-items-center">
            © All Rights Reserved 2023. Made With ❤️
            <div className="ps-1">
              By
              <a
                href="https://www.instagram.com/alfinisnotfound404/"
                className="text-decoration-none text-primary fw-bold ps-2"
              >
                Alfin Febrian
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
