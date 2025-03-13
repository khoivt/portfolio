import codingJSON from "assets/lottie/coding.json";
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import AnimationLottie from "components/share/animation-lottie";
import { Col, Row } from "react-bootstrap";

import Divider from "components/sections/divider";
import SocialMedia from "components/sections/social.media";
import GlowCard from "components/share/glow-card";
import { ABOUT, APP_DATA } from "helpers/data";
import { FaGraduationCap } from "react-icons/fa6";
import { TLanguage } from "../experience";
import { useTranslation } from "react-i18next";

const About = () => {
  const email = "sir.vukhoi@gmail.com";
  const subject = "Xin chào!";
  const body = "Tôi muốn liên hệ với bạn.";
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage as TLanguage;
  return (
    <>
      <Row>
        <Col md={6} xs={12}>
          <h3 className="text-center mb-md-5 mb-2">
            {ABOUT.knowWho[currentLanguage]}
            <span className="brand-red"> {ABOUT.IAm[currentLanguage]}</span>{" "}
          </h3>
          <div>
            <div>
              <p>{ABOUT.introduceName[currentLanguage]}</p>

              <p>{ABOUT.introduceJob[currentLanguage]}</p>

              <p>
                {" "}
                {ABOUT.introduceAcademic[currentLanguage]}
              </p>
            </div>
          </div>
          <div>
            <p>{ABOUT.introduceAcademic[currentLanguage]}</p>
            <ul>
                {ABOUT.habits.map((habit) => <li>{habit[currentLanguage]}</li>)}
            </ul>
          </div>
          <div>
            <p className="text-center brand-red">
              "Pursuing Your Dreams Is How You Become Homeless ~.~"
            </p>
            <p className="text-center brand-red">--Jimmy O Yang</p>
          </div>
        </Col>
        <Col
          md={6}
          xs={12}
          className="d-flex align-items-center justify-content-center"
        >
          <AnimationLottie width="80%" animationPath={codingJSON} />
        </Col>
      </Row>

      <Row>
        <Col
          md={6}
          xs={12}
          className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
        >
          <AnimationLottie
            width="50%"
            //animation with rp => convert sang text
            // https://github.com/airbnb/lottie-web/issues/2070
            animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
          />
        </Col>
        <Col md={6} xs={12} className="mt-md-5 mt-3">
          <div className="d-flex flex-column align-items-center gap-3">
            <div>
              <h4 className="text-center brand-red">{ABOUT.education[currentLanguage]}</h4>
            </div>
            <div>
              <GlowCard identifier={`experience-5`}>
                <div className="p-3 relative">
                  <div className="experience-container">
                    <div className="duration-text">
                      <p>2018-2022</p>
                    </div>
                    <div className="details">
                      <div className="icon">
                        <FaGraduationCap size={36} />
                      </div>
                      <div className="info">
                        <p className="title">{ABOUT.major[currentLanguage]}</p>
                        <p className="company">{ABOUT.university[currentLanguage]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </Col>
      </Row>

      <Divider />
      <Row>
        <Col md={6} xs={12} className=" mt-md-5 mt-3">
          <h3 className="mb-md-5 mb-2">{ABOUT.findMeOn[currentLanguage]} </h3>
          <SocialMedia
            facebook={APP_DATA.FACEBOOK_URL}
            linkedin={APP_DATA.LINKEDIN_URL}
            email={APP_DATA.EMAIL_URL}
          />
        </Col>
        <Col md={6} xs={12}>
          <a
            href={`mailto:${email}?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(body)}`}
          >
            <Col className="d-flex flex-column align-items-center justify-content-center text-decoration-none">
              <AnimationLottie
                width="50%"
                //animation with rp => convert sang text
                // https://github.com/airbnb/lottie-web/issues/2070
                animationPath={JSON.parse(CONTACT_LOTTIE)}
              />
              <h4 className="text-center text">{ABOUT.contactMe[currentLanguage]}</h4>
            </Col>
          </a>
        </Col>
      </Row>
      <div className="mb-5"></div>
    </>
  );
};

export default About;
