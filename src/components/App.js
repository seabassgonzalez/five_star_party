import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { Parallax } from 'react-parallax';

import { StickyContainer, Sticky } from 'react-sticky';

import GoodbyeWorld from '../containers/Goodbye'
import HelloWorld from '../containers/Hello'

export default class App extends Component {
  render() {
    return (
      <div>

        <div>
          <video class="bv-video"></video>
        </div>

        <StickyContainer>
          <Sticky>
            <header>
              <h1 class="pull-left">react-sticky | basic demo</h1>
              <div class="pull-right">
                <a href="http://www.captivationsoftware.com" target="_blank"><img src="http://www.captivationsoftware.com/images/logo-white.png" class="hidden-xs hidden-sm" alt="Captivation Software"></img></a>
              </div>
            </header>
          </Sticky>
        </StickyContainer>
        <br />
        <br />
        <br />
        <div>
          <div>
            <Link to={'/hello'}> What up? </Link>
          </div>
          <div>
            <Link to={'/goodbye'}> No thanks! </Link>
          </div>
          {this.props.children}
        </div>
         <br />
        <br />
        <br />
        <div>
          <Parallax bgImage="http://www.nocturnaltours.com/image/104740159_scaled_564x317.jpeg" strength={400}>
            <br/>
            <h1> some content that is displayed above the bgImage </h1>
          </Parallax>
        </div>
        <div>
        <br />
        <br />
        <br />
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1> hi</h1>
        </div>
      </div>
      </div>
    )
  }
}

