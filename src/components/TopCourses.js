import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

const TopCourses = () => {
  return (
    <section className="top-course-one top-course-page">
      <div className="container">
        <div className="row">

        <div className="col-lg-4">
            <Link to="/treatments/nose-job-rhinoplasty">
              <div className="course-one__single">
                <div className="treatment-one__image">
                  <StaticImage placeholder="none" src="../../static/img/treatments/rhino-1.jpg" alt="" />
                </div>
                <div className="treatment-one__content">
                  <span className="treatment-one__category">
                  Rhinoplasty
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4">
            <Link to="/treatments/hair-transplantation">
              <div className="course-one__single">
                <div className="treatment-one__image">
                  <StaticImage placeholder="none" src="../../static/img/treatments/hair-1.jpg" alt="" />
                </div>
                <div className="treatment-one__content">
                  <span className="treatment-one__category">
                  Hair Transplant
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4">
            <Link to="/treatments/breast-augmentation-boob-job">
              <div className="course-one__single">
                <div className="treatment-one__image">
                  <StaticImage placeholder="none" src="../../static/img/treatments/breast-1.jpg" alt="" />
                </div>
                <div className="treatment-one__content">
                  <span className="treatment-one__category">
                  Breast Augmentation
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4">
            <Link to="/treatments/breast-reduction">
              <div className="course-one__single">
                <div className="treatment-one__image">
                  <StaticImage placeholder="none" src="../../static/img/treatments/breast-reduction.jpg" alt="" />
                </div>
                <div className="treatment-one__content">
                  <span className="treatment-one__category">
                  Breast Reduction
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4">
            <Link to="/treatments/gastric-sleeve-surgery-weight-loss">
              <div className="course-one__single">
                <div className="treatment-one__image">
                  <StaticImage placeholder="none" src="../../static/img/treatments/gastric.jpg" alt="" />
                </div>
                <div className="treatment-one__content">
                  <span className="treatment-one__category">
                  Gastric Sleeve
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4">
            <Link to="/treatments/tummy-tuck-abdominoplasty">
              <div className="course-one__single">
                <div className="treatment-one__image">
                  <StaticImage placeholder="none" src="../../static/img/treatments/tummy-1.jpg" alt="" />
                </div>
                <div className="treatment-one__content">
                  <span className="treatment-one__category">
                  Tummy Tuck
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4">
            <Link to="/treatments/liposuction">
              <div className="course-one__single">
                <div className="treatment-one__image">
                  <StaticImage placeholder="none" src="../../static/img/treatments/lipo-1.jpg" alt="" />
                </div>
                <div className="treatment-one__content">
                  <span className="treatment-one__category">
                  Liposuction
                  </span>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="col-lg-4">
            <Link to="/treatments/brazilian-butt-lift-bbl-buttock-lift">
              <div className="course-one__single">
                <div className="treatment-one__image">
                  <StaticImage placeholder="none" src="../../static/img/treatments/butt-1.jpg" alt="" />
                </div>
                <div className="treatment-one__content">
                  <span className="treatment-one__category">
                    Butt Lift
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4">
            <Link to="/treatments/face-lift-surgery-rhytidectomy">
              <div className="course-one__single">
                <div className="treatment-one__image">
                  <StaticImage placeholder="none" src="../../static/img/treatments/face-lift.jpg" alt="" />
                </div>
                <div className="treatment-one__content">
                  <span className="treatment-one__category">
                    Face Lift
                  </span>
                </div>
              </div>
            </Link>
          </div>
          
          

        </div>


        <div className="all-items-link">
          
          <a href="/treatments" className="thm-btn">
            View All Treatments
          </a>
          
        </div>
        

      </div>
    </section>
  );
};

export default TopCourses;
