import "bootstrap/dist/css/bootstrap.css";
import "../assets/plugins/bootstrap/css/bootstrap.min.css";
import "../assets/css/orbit-1.css";
import profile from "../assets/images/profile.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const [selectedImage, setImage] = useState(null);

  const [title, setTitle] = useState("");

  const [email, setEmail] = useState("");

  const [number, setNumber] = useState("");

  const [Custom1, setCustom1] = useState("");

  const [Custom2, setCustom2] = useState("");

  const [Custom3, setCustom3] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handeTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handeNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleCustom1Change = (e) => {
    setCustom1(e.target.value);
  };

  const handleCustom2Change = (e) => {
    setCustom2(e.target.value);
  };

  const handleCustom3Change = (e) => {
    setCustom3(e.target.value);
  };

  const renderPlaceholder = (value, placeholder) => {
    return value ? value : placeholder;
  };

  return (
    <div className="container rowthem">
      <div className="container mt-lg-5 leftcon">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Job Title"
          className="form-control"
          onChange={handeTitleChange}
        />
        <input
          type="file"
          className="form-control"
          onChange={handleImageChange}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Telephone Number"
          onChange={handeNumberChange}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Custom 1"
          onChange={handleCustom1Change}
        />

        <input
          type="text"
          placeholder="Custom 2"
          className="form-control"
          onChange={handleCustom2Change}
        />

        <input
          type="text"
          placeholder="Custom 3"
          className="form-control"
          onChange={handleCustom3Change}
        />
      </div>

      <div class="wrapper mt-lg-5">
        <div class="sidebar-wrapper">
          <div class="profile-container">
            <img
              class="profile"
              src={selectedImage || profile}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
                display: "block",
                margin: "0 auto",
                borderRadius: "50%",
              }}
            />
            <h1 className="name">{renderPlaceholder(name, "Your Name")}</h1>
            <h3 class="tagline">{renderPlaceholder(title, "Job Title")}</h3>
          </div>

          <div class="contact-container container-block">
            <ul class="list-unstyled contact-list">
              <li class="email">
                <i class="fa-solid fa-envelope"></i>
                <a href="mailto: yourname@email.com">
                  {renderPlaceholder(
                    email,
                    "Dont Forget to fix this@Gmail.com"
                  )}
                </a>
              </li>
              <li class="phone">
                <i class="fa-solid fa-phone"></i>
                <a href="tel:0123 456 789">
                  {renderPlaceholder(number, "+90 531 012 47 16")}
                </a>
              </li>
              <li class="website">
                <i class="fa-solid fa-globe"></i>
                <a href={Custom1} target="_blank">
                  {renderPlaceholder(Custom1, "")}
                </a>
              </li>
              <li class="linkedin">
                <i class="fa-brands fa-linkedin-in"></i>
                <a href={Custom2} target="_blank">
                  {renderPlaceholder(Custom2, "")}
                </a>
              </li>
              <li class="github">
                <i class="fa-brands fa-github"></i>
                <a href={Custom3} target="_blank">
                  {renderPlaceholder(Custom3, "")}
                </a>
              </li>
              <li class="twitter">
                <i class="fa-brands fa-twitter"></i>
                <a href="https://twitter.com/3rdwave_themes" target="_blank">
                  @twittername
                </a>
              </li>
            </ul>
          </div>
          <div class="education-container container-block">
            <h2 class="container-block-title">Education</h2>
            <div class="item">
              <h4 class="degree">MSc in Computer Science</h4>
              <h5 class="meta">University of London</h5>
              <div class="time">2016 - 2018</div>
            </div>
            <div class="item">
              <h4 class="degree">BSc in Applied Mathematics</h4>
              <h5 class="meta">Bristol University</h5>
              <div class="time">2012 - 2016</div>
            </div>
          </div>

          <div class="languages-container container-block">
            <h2 class="container-block-title">Languages</h2>
            <ul class="list-unstyled interests-list">
              <li>
                English <span class="lang-desc">(Native)</span>
              </li>
              <li>
                French <span class="lang-desc">(Professional)</span>
              </li>
              <li>
                Spanish <span class="lang-desc">(Professional)</span>
              </li>
            </ul>
          </div>

          <div class="interests-container container-block">
            <h2 class="container-block-title">Interests</h2>
            <ul class="list-unstyled interests-list">
              <li>Climbing</li>
              <li>Snowboarding</li>
              <li>Cooking</li>
            </ul>
          </div>
        </div>

        <div class="main-wrapper">
          <section class="section summary-section">
            <h2 class="section-title">
              <span class="icon-holder">
                <svg
                  class="svg-inline--fa fa-user mb-1"
                  aria-hidden="true"
                  width={14}
                  focusable="false"
                  data-prefix="fas"
                  data-icon="user"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                  ></path>
                </svg>
              </span>
              Career Profile
            </h2>
            <div class="summary">
              <p>
                Summarise your career here lorem ipsum dolor sit amet,
                consectetuer adipiscing elit. You can{" "}
                <a
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/"
                  target="_blank"
                >
                  download this free resume/CV template here
                </a>
                . Aenean commodo ligula eget dolor aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.
              </p>
            </div>
          </section>

          <section class="section experiences-section">
            <h2 class="section-title">
              <span class="icon-holder">
                <svg
                  class="svg-inline--fa fa-briefcase mb-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="briefcase"
                  role="img"
                  width={14}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"
                  ></path>
                </svg>
              </span>
              Experiences
            </h2>

            <div class="item">
              <div class="meta">
                <div class="upper-row">
                  <h3 class="job-title">Lead Developer</h3>
                  <div class="time">2023 - Present</div>
                </div>
                <div class="company">Startup Hubs, San Francisco</div>
              </div>
              <div class="details">
                <p>
                  Describe your role here lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Aenean commodo ligula eget
                  dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                  dis parturient montes, nascetur ridiculus mus. Donec quam
                  felis, ultricies nec, pellentesque eu, pretium quis, sem.
                  Nulla consequat massa quis enim. Donec pede justo.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.{" "}
                </p>
              </div>
            </div>

            <div class="item">
              <div class="meta">
                <div class="upper-row">
                  <h3 class="job-title">Senior Software Engineer</h3>
                  <div class="time">2018 - 2023</div>
                </div>
                <div class="company">Google, London</div>
              </div>
              <div class="details">
                <p>
                  Describe your role here lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Aenean commodo ligula eget
                  dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                  dis parturient montes, nascetur ridiculus mus. Donec quam
                  felis, ultricies nec, pellentesque eu, pretium quis, sem.
                </p>
              </div>
            </div>

            <div class="item">
              <div class="meta">
                <div class="upper-row">
                  <h3 class="job-title">UI Developer</h3>
                  <div class="time">2016 - 2018</div>
                </div>
                <div class="company">Amazon, London</div>
              </div>
              <div class="details">
                <p>
                  Describe your role here lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Aenean commodo ligula eget
                  dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                  dis parturient montes, nascetur ridiculus mus. Donec quam
                  felis, ultricies nec, pellentesque eu, pretium quis, sem.
                </p>
              </div>
            </div>
          </section>

          <section class="section projects-section">
            <h2 class="section-title">
              <span class="icon-holder">
                <svg
                  class="svg-inline--fa fa-box-archive mb-1"
                  aria-hidden="true"
                  focusable="false"
                  width={14}
                  data-prefix="fas"
                  data-icon="box-archive"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"
                  ></path>
                </svg>
              </span>
              Projects
            </h2>
            <div class="intro">
              <p>
                You can list your side projects or open source libraries in this
                section. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Vestibulum et ligula in nunc bibendum fringilla a eu
                lectus.
              </p>
            </div>
            <div class="item">
              <span class="project-title">
                <a
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderpro-bootstrap-5-startup-template-for-software-projects/"
                  target="_blank"
                >
                  CoderPro
                </a>
              </span>{" "}
              -{" "}
              <span class="project-tagline">
                A responsive website template designed to help developers launch
                their software projects.{" "}
              </span>
            </div>
            <div class="item">
              <span class="project-title">
                <a
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/launch-bootstrap-5-template-for-saas-businesses/"
                  target="_blank"
                >
                  Launch
                </a>
              </span>{" "}
              -{" "}
              <span class="project-tagline">
                A responsive website template designed to help startups promote
                their products or services.
              </span>
            </div>
            <div class="item">
              <span class="project-title">
                <a
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/devcard-bootstrap-5-vcard-portfolio-template-for-software-developers/"
                  target="_blank"
                >
                  DevCard
                </a>
              </span>{" "}
              -{" "}
              <span class="project-tagline">
                A portfolio website template designed for software developers.
              </span>
            </div>
            <div class="item">
              <span class="project-title">
                <a
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/bootstrap-template-for-mobile-apps-nova-pro/"
                  target="_blank"
                >
                  Nova Pro
                </a>
              </span>{" "}
              -{" "}
              <span class="project-tagline">
                A responsive Bootstrap theme designed to help app developers
                promote their mobile apps
              </span>
            </div>
            <div class="item">
              <span class="project-title">
                <a
                  href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-web-development-agencies-devstudio/"
                  target="_blank"
                >
                  DevStudio
                </a>
              </span>{" "}
              -
              <span class="project-tagline">
                A responsive website template designed to help web
                developers/designers market their services.{" "}
              </span>
            </div>
          </section>

          <section class="skills-section section">
            <h2 class="section-title">
              <span class="icon-holder">
                <svg
                  class="svg-inline--fa fa-rocket mb-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  width={14}
                  data-icon="rocket"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                  ></path>
                </svg>
              </span>
              Skills &amp; Proficiency
            </h2>
            <div class="skillset">
              <div class="item">
                <h3 class="level-title">Python &amp; Django</h3>
                <div class="progress level-bar">
                  <div
                    class="progress-bar theme-progress-bar"
                    role="progressbar"
                    style={{ width: "99%" }}
                    aria-valuenow="99"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div class="item">
                <h3 class="level-title">Javascript</h3>
                <div class="progress level-bar">
                  <div
                    class="progress-bar theme-progress-bar"
                    role="progressbar"
                    style={{ width: "99%" }}
                    aria-valuenow="98"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div class="item">
                <h3 class="level-title">React &amp; Angular</h3>
                <div class="progress level-bar">
                  <div
                    class="progress-bar theme-progress-bar"
                    role="progressbar"
                    style={{ width: "99%" }}
                    aria-valuenow="98"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div class="item">
                <h3 class="level-title">HTML5 &amp; CSS</h3>
                <div class="progress level-bar">
                  <div
                    class="progress-bar theme-progress-bar"
                    role="progressbar"
                    style={{ width: "99%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div class="item">
                <h3 class="level-title">Ruby on Rails</h3>
                <div class="progress level-bar">
                  <div
                    class="progress-bar theme-progress-bar"
                    role="progressbar"
                    style={{ width: "99%" }}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div class="item">
                <h3 class="level-title">Sketch &amp; Photoshop</h3>
                <div class="progress level-bar">
                  <div
                    class="progress-bar theme-progress-bar"
                    role="progressbar"
                    style={{ width: "99%" }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
