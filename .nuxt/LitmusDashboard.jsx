import React from "react";
import { HorizontalStepperWrapper } from "../../components/HorizontalStepperWrapper";
import { LargeSidenav } from "../../components/LargeSidenav";
import { ChevronDown3 } from "../../icons/ChevronDown3";
import "./style.css";

export const LitmusDashboard = () => {
  return (
    <div className="litmus-dashboard">
      <div className="div-2">
        <div className="tab">
          <div className="overlap-group-3">
            <div className="rectangle" />
            <div className="rectangle-2" />
          </div>
          <div className="recommended">Recommended Events</div>
          <div className="your-topics">Careers Forum</div>
        </div>
        <div className="top-picks-for-you">Recommended for you</div>
        <div className="upcoming-events">
          <div className="overlap">
            <div className="rectangle-3" />
            <div className="trending-now-for">
              <div className="event">
                <img className="image" alt="Image" src="https://c.animaapp.com/S5qOUeiW/img/image.svg" />
                <div className="workforce">SETTINGS</div>
                <p className="business-foundation">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="element-pm-GMT">MY LITMUS PROFILE</div>
              </div>
              <div className="trending-now">Your account</div>
            </div>
          </div>
        </div>
        <header className="header">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-4">
              <div className="communities-2">Litmus</div>
              <p className="here-for-you-today">On Chain proof of learning &amp; experience</p>
            </div>
          </div>
        </header>
        <div className="top-nav">
          <div className="overlap-2">
            <div className="oman-javed">Skulls7777.OG</div>
            <ChevronDown3 className="chevron-down" />
            <div className="form-fields">
              <img className="search" alt="Search" src="https://c.animaapp.com/S5qOUeiW/img/search-2.svg" />
            </div>
          </div>
        </div>
        <LargeSidenav
          className="large-sidenav-instance"
          navTabsMediumLargeNavCommunities="https://c.animaapp.com/S5qOUeiW/img/communities-3.svg"
          navTabsMediumLargeNavDivClassName="large-sidenav-3"
          navTabsMediumLargeNavDivClassNameOverride="large-sidenav-3"
          navTabsMediumLargeNavHelpCenter="https://c.animaapp.com/S5qOUeiW/img/help-center-3.svg"
          navTabsMediumLargeNavLabelClassName="large-sidenav-2"
          navTabsMediumLargeNavLabelClassName1="large-sidenav-3"
          navTabsMediumLargeNavLabelClassNameOverride="large-sidenav-3"
          navTabsMediumLargeNavText="Event Calendar"
          navTabsMediumLargeNavText1="Career Forum"
        />
        <div className="your-communities">
          <div className="discussions">
            <div className="post">
              <div className="overlap-3">
                <div className="icon-home-desktop-wrapper">
                  <img
                    className="icon-home-desktop"
                    alt="Icon home desktop"
                    src="https://c.animaapp.com/S5qOUeiW/img/icon-home-desktop@2x.png"
                  />
                </div>
                <div className="posted-in-london-wom">Careers Forum</div>
                <div className="user">
                  <div className="overlap-4">
                    <img className="shape" alt="Shape" src="https://c.animaapp.com/S5qOUeiW/img/shape.svg" />
                    <div className="overlap-group-5">
                      <img className="shape-2" alt="Shape" src="https://c.animaapp.com/S5qOUeiW/img/shape-1.svg" />
                      <img className="path" alt="Path" src="https://c.animaapp.com/S5qOUeiW/img/path.svg" />
                      <img className="path-2" alt="Path" src="https://c.animaapp.com/S5qOUeiW/img/path-1.svg" />
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-2">View discussion</div>
                <p className="a-big-thank-you-to-a">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna et mattis id viverra velit.
                </p>
                <div className="user-2">
                  <div className="mildred-hanson">Publisher - John Smith</div>
                  <img
                    className="thumbnail"
                    alt="Thumbnail"
                    src="https://c.animaapp.com/S5qOUeiW/img/thumbnail@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-3">
                <div className="img-wrapper">
                  <img
                    className="icon-home-desktop"
                    alt="Icon home desktop"
                    src="https://c.animaapp.com/S5qOUeiW/img/icon-home-desktop-1@2x.png"
                  />
                </div>
                <div className="posted-in-london-wom">Events &amp; Conferences</div>
                <div className="user">
                  <div className="overlap-4">
                    <img className="shape" alt="Shape" src="https://c.animaapp.com/S5qOUeiW/img/shape-2.svg" />
                    <div className="overlap-group-5">
                      <img className="shape-2" alt="Shape" src="https://c.animaapp.com/S5qOUeiW/img/shape-3.svg" />
                      <img className="path" alt="Path" src="https://c.animaapp.com/S5qOUeiW/img/path-2.svg" />
                      <img className="path-2" alt="Path" src="https://c.animaapp.com/S5qOUeiW/img/path-3.svg" />
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-2">View discussion</div>
                <p className="a-big-thank-you-to-a">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna et mattis id viverra velit.
                </p>
                <div className="user-2">
                  <div className="mildred-hanson">Publisher - John Smith</div>
                  <img
                    className="thumbnail"
                    alt="Thumbnail"
                    src="https://c.animaapp.com/S5qOUeiW/img/thumbnail-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="your-communities-2">Overview</div>
          <HorizontalStepperWrapper
            atomsHorizontalText="Your Proof of Learning Journey"
            className="horizontal-stepper-component"
            horizontalStepperStateActiveWrapperAtomsLineActiveAtomsLineActive="https://c.animaapp.com/S5qOUeiW/img/atoms-line-active-62@2x.png"
            horizontalStepperStateActiveWrapperAtomsLineActiveImg="https://c.animaapp.com/S5qOUeiW/img/atoms-line-active-62@2x.png"
          />
        </div>
        <div className="content-tile">
          <div className="text">
            <p className="p">EVENTS 1 - NFT PARIS</p>
            <p className="text-wrapper-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna et mattis id viverra velit. Quis porttitor
              lobortis elit ut ante aenean ultricies nec tortor. Nisl donec elementum cursus blandit pretium.
            </p>
            <p className="text-wrapper-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis egestas vel convallis facilisis placerat
              eget.
            </p>
          </div>
          <img className="img-2" alt="Video thumbnail" src="https://c.animaapp.com/S5qOUeiW/img/video-thumbnail-.png" />
        </div>
        <div className="content-tile-2">
          <div className="text">
            <p className="p">EVENTS 2 - NFT LISBON</p>
            <p className="text-wrapper-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus pretium fermentum velit at. Nunc vel leo,
              eget consectetur donec molestie. Amet, viverra id ultrices quisque.
            </p>
            <p className="text-wrapper-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare id egestas quam facilisi vestibulum.
            </p>
          </div>
          <img
            className="img-2"
            alt="Podcast thumbnail"
            src="https://c.animaapp.com/S5qOUeiW/img/podcast-thumbnail-.png"
          />
        </div>
      </div>
    </div>
  );
};
