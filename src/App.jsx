import { useState } from "react";
import "./App.css";
import suphanatImage from "./assets/suphanat.jpg";

function App() {
  const [page, setPage] = useState("login");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const login = (e) => {
    e.preventDefault();

    if (username && password) {
      setPage("profile");
    }
  };

  const logout = () => {
    setPage("login");
    setUsername("admin");
    setPassword("12345678");
  };

  if (page === "profile") {
    return (
      <div className="site">

        {/* TOP BAR */}
        <header className="topbar">
          <div className="brand">
            <span className="brand-mark">S</span>
            <span>SUPHANAT</span>
          </div>

          <div className="topbar-right">
            <span className="online">
              <i></i> PROFILE
            </span>

            <button onClick={logout}>
              LOGOUT ↗
            </button>
          </div>
        </header>


        {/* HERO */}
        <main>

          <section className="hero">

            <div className="hero-left">

              <div className="hero-small">
                THAI FOOTBALLER
              </div>

              <h1>
                SUPHANAT
                <span>MUANGTA</span>
              </h1>

              <div className="hero-bottom">

                <div className="position">
                  <small>POSITION</small>
                  <strong>FORWARD</strong>
                </div>

                <div className="hero-description">
                  ศุภณัฏฐ์ เหมือนตา หรือ “แบงค์”
                  นักฟุตบอลชาวไทยในตำแหน่งกองหน้า
                  และหนึ่งในนักฟุตบอลรุ่นใหม่ที่น่าจับตามอง
                </div>

              </div>

            </div>


            <div className="hero-right">

              <div className="number">
                10
              </div>

              <div className="player">
                <img
                src={suphanatImage}
                alt="ศุภณัฏฐ์ เหมือนตา"
                />
              </div>

              <div className="vertical-text">
                FOOTBALL / THAILAND
              </div>

            </div>

          </section>


          {/* INTRO */}
          <section className="intro section">

            <div className="section-number">
              01
            </div>

            <div className="section-content">

              <div className="section-label">
                ABOUT PLAYER
              </div>

              <h2>
                นักฟุตบอลไทย
                <br />
                <em>รุ่นใหม่</em>
              </h2>

              <p>
                ศุภณัฏฐ์ เหมือนตา เป็นนักฟุตบอลชาวไทย
                ที่เล่นในตำแหน่งกองหน้า
                มีความโดดเด่นในเรื่องความเร็ว
                การเคลื่อนที่ และการทำประตู
                โดยได้รับโอกาสลงเล่นในระดับอาชีพ
                และระดับทีมชาติไทย
              </p>

            </div>


            <div className="quick-info">

  <div>
    <span>NAME</span>
    <strong>ศุภณัฏฐ์ เหมือนตา</strong>
  </div>

  <div>
    <span>NICKNAME</span>
    <strong>แบงค์</strong>
  </div>

  <div>
    <span>BIRTHDAY</span>
    <strong>2 สิงหาคม 2002</strong>
  </div>

  <div>
    <span>NATIONALITY</span>
    <strong>THAILAND</strong>
  </div>

  <div>
    <span>POSITION</span>
    <strong>FORWARD</strong>
  </div>

</div>
          </section>


          {/* CAREER */}
          <section className="career section">

            <div className="section-number">
              02
            </div>

            <div className="career-content">

              <div className="section-label">
                CAREER PATH
              </div>

              <h2>
                เส้นทาง
                <br />
                <em>ฟุตบอล</em>
              </h2>


              <div className="timeline">

                <div className="timeline-row">

                  <div className="year">
                    01
                  </div>

                  <div>
                    <small>YOUTH</small>
                    <h3>ระดับเยาวชน</h3>

                    <p>
                      เริ่มต้นพัฒนาทักษะฟุตบอล
                      และสร้างประสบการณ์ในระบบเยาวชน
                    </p>
                  </div>

                </div>


                <div className="timeline-row">

                  <div className="year">
                    02
                  </div>

                  <div>
                    <small>PROFESSIONAL</small>
                    <h3>ฟุตบอลอาชีพ</h3>

                    <p>
                      ก้าวขึ้นสู่การเล่นฟุตบอลระดับอาชีพ
                      และได้รับโอกาสลงสนามในระดับสูง
                    </p>
                  </div>

                </div>


                <div className="timeline-row">

                  <div className="year">
                    03
                  </div>

                  <div>
                    <small>NATIONAL TEAM</small>
                    <h3>ทีมชาติไทย</h3>

                    <p>
                      ได้รับโอกาสเป็นตัวแทนประเทศไทย
                      ในการแข่งขันระดับนานาชาติ
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </section>


          {/* SKILLS */}
          <section className="skills section">

            <div className="section-number">
              03
            </div>

            <div className="skills-content">

              <div className="section-label">
                PLAYER PROFILE
              </div>

              <h2>
                จุดเด่น
                <br />
                <em>ในการเล่น</em>
              </h2>


              <div className="skill-list">

                <div className="skill">
                  <span>01</span>

                  <div>
                    <h3>SPEED</h3>
                    <p>
                      ความเร็วและความคล่องตัว
                      ในการเล่นเกมรุก
                    </p>
                  </div>

                  <strong></strong>
                </div>


                <div className="skill">
                  <span>02</span>

                  <div>
                    <h3>FINISHING</h3>
                    <p>
                      ความสามารถในการเข้าทำ
                      และจบสกอร์
                    </p>
                  </div>

                  <strong></strong>
                </div>


                <div className="skill">
                  <span>03</span>

                  <div>
                    <h3>MOVEMENT</h3>
                    <p>
                      การเคลื่อนที่และหาพื้นที่
                      ในแนวรุก
                    </p>
                  </div>

                  <strong></strong>
                </div>

              </div>

            </div>

          </section>

        </main>


        {/* FOOTER */}
        <footer>

          <div className="footer-brand">
            SUPHANAT
          </div>

          <div>
            PLAYER PROFILE
          </div>

          <div>
            2026
          </div>

        </footer>

      </div>
    );
  }


  /* =========================
     LOGIN
  ========================= */

  return (
    <div className="login">

      <div className="login-left">

        <div className="login-logo">
          <span>S</span>
          SUPHANAT
        </div>

        <div className="login-main">

          <small>
            PLAYER PROFILE
          </small>

          <h1>
            ENTER
            <br />
            <em>THE GAME.</em>
          </h1>

        </div>

        <div className="login-footer">
          THAILAND / FOOTBALL
        </div>

      </div>


      <div className="login-right">

        <div className="login-box">

          <div className="login-title">

            <span>01 / LOGIN</span>

            <h2>
              Welcome
              <br />
              <em>Back.</em>
            </h2>

          </div>


          <form onSubmit={login}>

            <label>
              USERNAME
            </label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              required
            />


            <label>
              PASSWORD
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />


            <button>
              ENTER PROFILE
              <span>↗</span>
            </button>

          </form>


          <div className="login-note">
            PERSONAL PROFILE / 2026
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;