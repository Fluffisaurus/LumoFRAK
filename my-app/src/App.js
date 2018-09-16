import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import News from './algolia.js';
import 'bootstrap/dist/css/bootstrap.min.css';


class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = { item: 'LUMOFRAK' }
  }

  render() {
    return (
      <div id='svgDiv'>
        <svg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 430.906 336.32'>
          <Link to="/PTSD"><path id='Red' className='cls-1' d='M195,284.23a50.24,50.24,0,0,0-16.33-20.68c-0.22-.17-0.4-0.4-0.63-0.55-3.28-2.11-3.58-2.64-1.24-5.84,1.34-1.83,2.16-3.87,3.37-5.71,4.35-6.6,9.65-12.29,16.61-16.21,10.57-6,21.76-9.76,34.08-9.65,10.17,0.09,19.28,3.71,28.43,7.7,4.58,2,6.68,4.4,7.2,9.59a71.58,71.58,0,0,0,4.54,17.8,63.23,63.23,0,0,1,4,14.42c1.15,9.14-2.33,16.26-8.69,22.72-3.27,3.32-5.51,4.14-10.07,2.29-8.13-3.3-16.15-1.47-23.48,3.31-1.23.8-2.24,1.74-1.22,3.1a2.84,2.84,0,0,0,3.79.67c2.46-1.29,4.78-2.77,7.62-3.32,6-1.16,8.38-1,14.35,1.62a33.34,33.34,0,0,0-10.42,15.86,25.32,25.32,0,0,0,.63,17.56c0.47,1.11.65,2.34,1,3.5,1.8,5.73,5.41,10.5,8.26,15.68,2.38,4.34,2.7,9.08,2,13.91a13.52,13.52,0,0,1-1,3.77c-0.73,1.56-.56,2.85.93,3.58s2.93-.21,3.69-1.57a17.52,17.52,0,0,0,1.81-8.17c0.14-4.67-.15-9.34-3-13.36a1.53,1.53,0,0,1-.44-1.55c0.43-.79,1.14-0.29,1.73-0.13,7.21,2,13.65.57,19.21-4.5a8.34,8.34,0,0,0,1.77-2.13c0.59-1.11.85-2.4-.37-3.29a2.42,2.42,0,0,0-3.54.37c-7.49,9.27-16.08,5.67-23.47,1.63a4.07,4.07,0,0,1-1.59-2.59c-1.17-3.81-3-7.57-3.3-11.47-0.92-10.14,3-18.45,11-24.77,5.77-4.53,11.28-9.44,15-15.82,2.93-5,3.66-10.8,3-16.62a32.23,32.23,0,0,0-1.29-7.47c-0.54-1.49-.47-2.21,1.58-1.75,10.11,2.25,18.36-.87,24.75-9,0.63-.8,1.61-1.2,2.1-2.2,0.69-1.42,1.4-2.86-.28-3.92s-3-.38-4,1.19a24.24,24.24,0,0,1-7.68,7.47c-6.26,3.85-12.45,3-18.75.28-0.78-.34-0.74-1-0.95-1.58a102.14,102.14,0,0,1-3.11-12.24c-0.6-2.7-1.6-5.29-1.79-8.11a4.69,4.69,0,0,1,2.15-4.81c5.13-3.69,10.23-7.41,16-10.12a59.5,59.5,0,0,1,32.55-5.48c14.79,1.67,27,8.59,36.67,19.84,1.38,1.6,2.65,3.3,4,5,1,1.26.58,2.16-.62,3A59.23,59.23,0,0,0,347,260.61c-4.28,6.27-7.73,12.83-9.13,20.33-0.53,2.85-1.28,5.79-1.07,8.62,0.32,4.39-2.46,6.62-5.24,8.84-5.43,4.33-10.79,8.63-14.55,14.65-5.65,9-6.55,18.71-3.89,28.75,0.74,2.78,2.61,5.41,3.51,8.1,2.48,7.34,4.28,14.72-1,22.18a28.58,28.58,0,0,1-8.46,8.1c-3.31,2-6.76,4-10.22,5.84a53.87,53.87,0,0,0-14.12,11.1c-3.22,3.48-5,7.73-7.32,11.67-0.68,1.15-1.18,1.78-2.78,1.54-10-1.48-19.92-2.24-29.95-.34a53.63,53.63,0,0,0-18.67,7.11,42.45,42.45,0,0,0-16.34,17.74c-1.78,3.74-5,4.92-8.68,5.4-12.4,1.61-24.71,1.42-36.66-2.7A38.91,38.91,0,0,1,144.07,424a46.1,46.1,0,0,1-9.28-20.81c-0.63-3.79-3.07-6.13-6.24-7.58-7.26-3.33-14.48-6.74-20.72-11.79a33.29,33.29,0,0,1-7.64-8.76c-4.78-7.93-5.14-16.36-2.4-24.79a37.68,37.68,0,0,1,10.43-15.75,74.46,74.46,0,0,0,5.84-6.35,5.64,5.64,0,0,0,1.05-5.51c-1.19-4.36-3.45-8.33-3.59-13.08-0.23-8.1,2.43-15,7-21.52A55.05,55.05,0,0,1,128.92,277c6.36-5.23,13.71-8.13,21.65-9.78,6.33-1.31,12.88-1.07,19.19-2.56a4.35,4.35,0,0,1,3.63,1.12A50.53,50.53,0,0,1,186,278.14c3.86,5.63,5.14,11.8,6,18.32,1.32,9.66-1.39,18.45-5.07,27.14a68.56,68.56,0,0,0-2.53,7.73c-0.53,1.84-1.27,2.22-2.9,1-11.21-8.31-23.62-8.29-36.43-5.1a23.28,23.28,0,0,0-4.82,1.46c-1.52.75-2.26,1.7-1.6,3.3s1.9,1.55,3.3,1a45.71,45.71,0,0,1,20.68-3,28.91,28.91,0,0,1,17.72,7.49,3.3,3.3,0,0,1,1.42,2.61c-0.24,7.69,2.82,14.37,6.18,21.05,2.15,4.26,2.82,9.08,4,13.71,0.85,3.4,1.47,6.82.88,10.2-1.5,8.72-3.93,17.17-8.92,24.66a11.77,11.77,0,0,0-1,1.7,2.14,2.14,0,0,0,.77,2.74,2,2,0,0,0,2.62-.08,11.06,11.06,0,0,0,2.41-2.64c4-6.9,7.09-14,8.42-22,0.74-4.47,1.44-8.74.35-13.16-0.24-1,.58-1,1-1.39a27.12,27.12,0,0,1,20.11-6.9,25,25,0,0,1,11.77,3.22c1.55,0.93,3.41,1.34,4.43-.55,1.15-2.13-.7-3-2.26-3.68-11.73-5.18-23.14-5.15-34.17,2-0.73.47-2.16,1.61-2.55-.41-1.21-6.3-4.91-11.62-6.82-17.63-1.17-3.69-3.31-7.4-2-11.34,1-3,1.74-6.08,2.86-9,3.07-8.09,6.33-16.07,7.34-24.83,0.39-3.35.81-6.39-.08-9.74-1.32-5,1.56-8.85,4.71-12.14,5.73-6,13.27-8,21.26-8.67,1.12-.1,2.23-0.33,3.34-0.44a1.62,1.62,0,0,0,1.58-1.65,1.93,1.93,0,0,0-1.24-2.24,7.14,7.14,0,0,0-3.58-.35c-7.81.78-15.25,2.74-21.78,7.3A33.58,33.58,0,0,0,195,284.23Z'
            transform='translate(-96.08 -217.25)' onMouseEnter={() => this.setState({ item: 'Post Tramatic Stress Disorder' })} onMouseLeave={() => this.setState({ item: 'LUMOFRAK' })} /></Link>
          <Link to="/Depression"><path id='Yellow' className='cls-2' d='M348.74,434.36a24.26,24.26,0,0,1,6.19-3c4.84-1.9,9.27-4.45,12.25-8.81,3.56-5.2,8.71-7.65,14.52-9.22a66.85,66.85,0,0,1,13.69-2.48c5-.29,9.83-0.32,14.64,1.17,1.48,0.46,3.37.69,3.78-1.56,0.34-1.9-1-2.41-2.63-2.9-6.16-1.89-12.44-1.19-18.68-1-2.6.1-4-.05-3.56-3.28,0.48-3.56-.92-6.9-2.13-10.22a4.69,4.69,0,0,0-2.28-2.23,2.44,2.44,0,0,0-3.11.34,2.78,2.78,0,0,0,.18,3.13,15.28,15.28,0,0,1,2.28,10.11c-0.25,2.22-.8,3.8-3.71,4.61-6.63,1.85-12.87,4.59-17,10.83-2.74,4.14-7.26,6.27-11.79,8.11-3,1.24-6.13,2.41-9.08,3.85a2.77,2.77,0,0,1-3.21-.28,11.32,11.32,0,0,1-5.8-11.39c0.12-1.52.84-3.61-2-3.61-2.6,0-2.92,1.7-3,3.73-0.33,5.1,1.13,9.51,5.13,12.81,2.14,1.76,1,2.8-.61,3.63-6.18,3.17-12.12,6.94-18.82,8.91a67,67,0,0,1-15.65,2.57c-2.06.1-4.15-.14-6.14,0.56-1.81.63-2.4,0-2.09-1.78a18,18,0,0,0-1.12-9.57c-0.83-2.21-2.58-3.49-4-5.14-1.55-1.83-2.91-.23-3.75.53s-0.63,2,.7,3c3.13,2.42,4.48,10,2.64,13.43a4.37,4.37,0,0,1-2.54,2.06c-9.21,2.7-15.65,9-21.19,16.36a21.93,21.93,0,0,0-3.37,7.24c-0.65,2.35-2.49,4.33-2.06,7,0.18,1.14-1,1.18-1.81,1.22-9,.42-18,0.57-26.28-3.64a24.29,24.29,0,0,1-6.29-4.34,44,44,0,0,1-8-10.34c-4.5-8.54-4.67-17.5-1.64-26.18,2-5.59,6-10.32,10.77-14.26A44.84,44.84,0,0,1,235,416.81a59.51,59.51,0,0,1,21.11-3.45c6.11,0,12.08,1,18.09,1.84a4,4,0,0,0,4.49-2c2.06-3.61,3.66-7.56,6.17-10.8,4.85-6.28,10.52-11.51,19-12.91a60.15,60.15,0,0,1,11.42-.94,32.41,32.41,0,0,1,17.57,5.94c1.26,0.85,1.75.74,2.36-.27,4.64-7.65,11.62-12.53,19.82-15.33a30.59,30.59,0,0,1,17.65-.83,31.24,31.24,0,0,1,15.41,8.59c1,1.09,1.49-.16,1.65-0.47,0.54-1,1.41-1.87,1.92-2.82,3.89-7.36,10-12.59,16.84-16.79a57.82,57.82,0,0,1,32.79-8.92c4.6,0.17,9.14.8,13.15,3.71a7.06,7.06,0,0,1,3,4.37c1.18,7,1.22,13.76-3.09,20.25-4.71,7.1-11.15,11.94-18.05,16.41a51.81,51.81,0,0,1-7.56,3.85,2.06,2.06,0,0,0-1.42,2.3c0,4.87.25,9.72-.95,14.54-1.72,6.91-4.13,13.45-10.37,17.55a55.21,55.21,0,0,1-17.75,7.64c-4,.94-7.92,2.15-12,2.3a2.11,2.11,0,0,0-2,2c-1,5.82-3.81,10.91-6.65,15.85-5.16,9-12.41,15.63-22.88,18.22-3.87,1-7.65,2.1-11.67,2.33a12.65,12.65,0,0,0-7.36,3.3c-4.16,3.47-9,2.43-13.62,1.76a8.43,8.43,0,0,1-4.16-1.48c-0.89-.7-1.81-0.24-2.68.6-4.17,4-9.42,5.68-14.94,7.08a40.36,40.36,0,0,1-13.64.81c-9.92-.88-18.7-4.09-24.42-13.2-2.32-3.7-2.27-6.84-.21-10.44,0.9-1.58.95-3.68,1.91-5.21,6.09-9.67,14.17-16.53,25.91-18.49,6.09-1,12.27-1.13,18.34-2.18a54.35,54.35,0,0,0,15-4.75c5.9-2.94,11.6-6.27,17.46-9.31,2.56-1.33,4.93-.28,6.92,1.39a10.2,10.2,0,0,1,3.82,9.76,2.37,2.37,0,0,0,2,2.85,2.57,2.57,0,0,0,2.91-1.89c0.41-1.8.69-3.93-.13-5.55C354.32,440.5,353.85,435.9,348.74,434.36Z'
            transform='translate(-96.08 -217.25)' onMouseEnter={() => this.setState({ item: 'Depression' })} onMouseLeave={() => this.setState({ item: 'LUMOFRAK' })} /></Link>
          <Link to="/Substance"><path id='Blue' className='cls-3' d='M398.6,317.63c-2.3,3.49-5,6-7.16,9.07a55.12,55.12,0,0,0-4.07,7.28,32.33,32.33,0,0,0-3.51,17c0.15,2.1.83,3.65,3,3.54s2.33-1.85,2.1-3.57c-1-7.17,1.58-13.53,5.07-19.42,4.85-8.2,11.8-14.55,19.57-19.95,1.87-1.3,4.37-.74,6.55-1.28,4.72-1.17,9.45-2.24,13.76-4.63,2-1.12,2.43-.19,2.31,1.7-0.31,4.84,0,9.67,2.53,13.91a24.87,24.87,0,0,0,13.72,11.25c1.37,0.46,2.74.26,3.36-1.14,0.7-1.59-.4-2.18-1.77-2.82-5.66-2.63-10.47-6.24-12.1-12.66a25.67,25.67,0,0,1,.3-14.72,12.6,12.6,0,0,1,6.85-7,38.07,38.07,0,0,0,14.43-12c0.5-.66,1.14-1.3,1.53-1.94,1.16-1.9,2.66-1.89,4.52-1.54,6.92,1.3,13.63,3.07,19.87,6.55a40.72,40.72,0,0,1,11.4,9.29A48.45,48.45,0,0,1,511.7,316a50.34,50.34,0,0,1-1.61,26.88c-0.7,2-1.64,3.54-4.78,3-12.33-2.23-23.72.8-34.39,7.13a88.26,88.26,0,0,0-9.22,6.25c-0.77.6-1.56,1.65-2.57,0.33-3-4-7.56-5.17-12.06-5.86-11.92-1.84-23.25.58-34.19,5.41-8.88,3.92-16.16,9.89-22.66,17-1,1.11-1.14,3.42-3,3.22-1.36-.14-2.58-1.4-3.9-2.07a37.16,37.16,0,0,0-24.49-3.76A42.3,42.3,0,0,0,334,387.61c-0.69.79-1.3,1.25-2.39,0.74a41,41,0,0,0-21.25-4.2c3.87-3.49,7.76-6.12,10.38-10.38A23.11,23.11,0,0,0,324,359.08c-0.49-6.09-3.11-11.43-5.37-17-3.52-8.61-2.28-17.33,1.77-25.29C323.84,310,330,305.3,336,300.72c3.37-2.55,5.87-5.41,5.77-10.16a38.07,38.07,0,0,1,3-15.92c3.9-9,9.25-17,17-23.47,9.32-7.76,20.32-10.37,31.92-11.27,15.49-1.19,29.65,3.23,42.64,11.34a82.18,82.18,0,0,1,17.31,14.5c2.36,2.6,4.14,5.69,6.87,8,1.67,1.4,1.54,3,.16,4.68-4,4.72-8.1,9.23-13.78,12a6.28,6.28,0,0,1-2.93.87c-9.52-.23-20.43-5.87-23-16.28-0.47-1.94-1.92-3-3.8-2.33-2.15.72-1.41,2.7-.94,4.1,2.39,7.18,7.23,12.25,13.92,15.65a27,27,0,0,0,7.95,2.68c2,0.32,1.56,1,.55,2-3.19,3.36-7.32,5.16-11.51,6.72a38.54,38.54,0,0,1-11.78,2.53c-3.85.16-6.05-1.29-7-5-0.54-2-1.7-2.71-3.45-2.22-2.08.58-1.89,2.16-1.35,3.87a9.18,9.18,0,0,0,2.82,4.41c1.28,1.09,1.26,1.9-.39,2.6-5.54,2.37-11.14,4.15-17.3,4.32-12.4.34-22.18-9.49-19.75-23.22,0.16-.92.33-1.85,0.4-2.78,0.11-1.38-.39-2.54-1.89-2.62-1.32-.08-2.57.26-2.93,2-1.65,7.78-1.49,15.21,3.66,21.87,2,2.58,1.83,2.6-1.3,3.56A30.17,30.17,0,0,0,348,329.3c-0.69,1.41-.75,2.65.75,3.31s3,0.46,3.74-1.3c4.06-9.29,11.7-13.58,21.23-15.35,2.51-.47,4.26,1.13,6.38,1.71a32.78,32.78,0,0,0,16.94.09A12.87,12.87,0,0,1,398.6,317.63Z'
            transform='translate(-96.08 -217.25)' onMouseEnter={() => this.setState({ item: 'Substance Abuse' })} onMouseLeave={() => this.setState({ item: 'LUMOFRAK' })} /></Link>
          <Link to="/Suicide"><path id='Green' className='cls-4' d='M481,404.65c13.42,2.53,25.74.05,37.6-5.54,4.43-2.09,5.36-1.73,7,3,2.24,6.4,1.85,12.55-1.8,18.46a12.3,12.3,0,0,0-1.67,10.08c1.35,5.44,1.54,11.42-2.31,16.07a32.58,32.58,0,0,1-13.08,9.41c-10.64,4.26-20.76,3-30.42-2.95a4.41,4.41,0,0,1-.75-0.39c-6.24-5.87-12.19-1.78-18.16.56a41.11,41.11,0,0,1-21.76,2.62,26.52,26.52,0,0,1-13.53-6.65c-1.36-1.23-3.65-1.88-3.89-3.84-0.27-2.19,2.36-2.31,3.58-3.46,7.21-6.84,9.52-15.66,10.54-25a14.55,14.55,0,0,0,0-3.65c-0.44-3,1-4.29,3.62-5.58a60.4,60.4,0,0,0,16.62-11.78c4.23-4.31,7.88-9,9.61-14.92a26.51,26.51,0,0,0,1.09-10c-0.69-7.22-.77-7.23,5.5-11.29a66.27,66.27,0,0,1,15-7.74c9.83-3.26,19.54-3.31,29.21,1,9.42,4.2,12.63,12,13.44,21.5a35.52,35.52,0,0,1-1.28,12c-1.15,4.44-4.31,7.09-8.66,8.83-9.65,3.88-19.42,6.77-30,5.61a44.64,44.64,0,0,1-19.49-7,4.19,4.19,0,0,0-2-.9c-1.17-.09-2.27,0-2.9,1.2-0.72,1.35.27,2.31,1.09,2.85a29.11,29.11,0,0,0,6.79,3.76c4.25,1.38,6.17,4.18,7,8.38a36,36,0,0,1,1,10,13.71,13.71,0,0,1-3.61,8.82c-1.84,1.91-3,4.44-5.32,6a1.77,1.77,0,0,0-.08,2.76,2.6,2.6,0,0,0,3.36.34c5.41-4.44,9.84-9.57,10.64-16.88C483.62,415,482.66,409.94,481,404.65Z'
            transform='translate(-96.08 -217.25)' onMouseEnter={() => this.setState({ item: 'Suicide' })} onMouseLeave={() => this.setState({ item: 'LUMOFRAK' })} /></Link>
          <Link to="/Credits"><path id='Purple' className='cls-5' d='M501.4,463.17a3.34,3.34,0,0,0,2.56-1.3c3.88-.3,3.78-0.27,2.65,3.48-3.22,10.68-16,18.66-19.43,20.12a3.32,3.32,0,0,1-1.3.28c-1.81,0-3.22-1.58-4-2.61a56.94,56.94,0,0,0-23.6-6.87c-5.79-.37-15.19.69-23.81,3.65a17.9,17.9,0,0,0-5.22,2.51c-4.22,3.38-8.39,1.67-12.48.4A28.14,28.14,0,0,1,406,477.17c-1.16-1-2.84-1.4-4-.1-1.34,1.55-.46,3,1,4a43.13,43.13,0,0,0,16.68,7.43,11.61,11.61,0,0,1,1.12.36c-3.36,4.17-6.18,8.48-7.14,13.75-0.29,1.6-.24,3,1.81,3.49a2.69,2.69,0,0,0,3.14-2.17,25.18,25.18,0,0,1,9.94-15.48,35.11,35.11,0,0,1,13.92-6.12c8.21-1.77,16.5-2.32,24.78-.19l9,3.32c1,0.66,2,1.36,3,2,3.17,1.91,3.54,2.56,1.25,5.19-2.72,3.14-4.69,6.77-7.23,10-6.57,8.45-15.3,12.84-25.28,15.53a42.83,42.83,0,0,1-7.45,1.24c-2.59.23-4,1.89-4.19,5.08a76.77,76.77,0,0,0,.2,12.65c0.36,3.82.68,7.66,1.16,11.47a2.63,2.63,0,0,1-1.91,3A27.23,27.23,0,0,1,420.44,553a2.78,2.78,0,0,1-2.37-2.63c-1-5.92-.64-12-1.92-17.88a36.06,36.06,0,0,0-3-8.57c-1.32-2.63-4.2-2.66-6.49-3.36-11.36-3.51-22.09-8.35-31.54-15.58-4.88-3.74-9.48-8-12.8-13.33-0.93-1.51-1.26-2.17.73-3.05,10.76-4.79,17.24-13.57,22.06-23.92a51.59,51.59,0,0,0,3.35-8.12,2.16,2.16,0,0,1,1.92-1.73,84.37,84.37,0,0,0,21.39-6.41c2.3-1.05,3.24,1,4.33,2a38,38,0,0,0,16.21,9.35c7.38,2,14.64,1.29,21.9-.63A71.37,71.37,0,0,0,465.71,455a4.93,4.93,0,0,1,2.29-.51,6.41,6.41,0,0,1,3.71,1.56c3.71,3,13.68,6.22,19.76,7.13A34.75,34.75,0,0,0,501.4,463.17Z'
            transform='translate(-96.08 -217.25)' onMouseEnter={() => this.setState({ item: 'Credits' })} onMouseLeave={() => this.setState({ item: 'LUMOFRAK' })} /></Link>
        </svg>
        <h1 id="title"> {this.state.item}</h1>
      </div>
    )
  }
}


const PTSD = () => (
  <div className="row">
    <div className="col-2">
      <div id="tab1">
      <Link to="/PTSD"> <h1>PTSD</h1> </Link>
      </div>
      <div id="tab2">
      <Link to="/Depression"><h1>Depression</h1></Link>
      </div>
      <div id="tab3">
      <Link to="/Substance"><h1>Substance Abuse</h1></Link>
      </div>
      <div id="tab4">
      <Link to="/Suicide"><h1>Suicide</h1></Link>
      </div>
    </div >
    <div className="col-10">
      <div className="row">
        <div id="top1">
          <h1>News</h1>
        </div>
        <div id="top2">
          <h1>General</h1>
        </div>
        <div id="top3">
          <h1>Locations</h1>
        </div>
        <div id="top4">
          <h1>Services</h1>
        </div>
      </div>
      <div id="content">
      <News />

      </div>
    </div>
  </div>
)

const Depression = () => (
  <div>
    <div className="row">
      <div className="col-2">
        <div id="tab1">
        <Link to="/PTSD"> <h1>PTSD</h1> </Link>
        </div>
        <div id="tab2">
        <Link to="/Depression"><h1>Depression</h1></Link>
        </div>
        <div id="tab3">
        <Link to="/Substance"><h1>Substance Abuse</h1></Link>
        </div>
        <div id="tab4">
        <Link to="/Suicide"><h1>Suicide</h1></Link>
        </div>
      </div >
      <div className="col-10">
        <div className="row">
          <div id="top1">
            <h1>News</h1>
          </div>
          <div id="top2">
            <h1>General</h1>
          </div>
          <div id="top3">
            <h1>Locations</h1>
          </div>
          <div id="top4">
            <h1>Services</h1>
          </div>
        </div>
        <div id="content">
          <News />
        </div>
      </div>
    </div>
  </div>
)

const Substance = () => (
  <div>
    <div className="row">
      <div className="col-2">
        <div id="tab1">
        <Link to="/PTSD"> <h1>PTSD</h1> </Link>
        </div>
        <div id="tab2">
        <Link to="/Depression"><h1>Depression</h1></Link>
        </div>
        <div id="tab3">
        <Link to="/Substance"><h1>Substance Abuse</h1></Link>
        </div>
        <div id="tab4">
        <Link to="/Suicide"><h1>Suicide</h1></Link>
        </div>
      </div >
      <div className="col-10">
        <div className="row">
          <div id="top1">
            <h1>News</h1>
          </div>
          <div id="top2">
            <h1>General</h1>
          </div>
          <div id="top3">
            <h1>Locations</h1>
          </div>
          <div id="top4">
            <h1>Services</h1>
          </div>
        </div>
        <div id="content">
          <News />
        </div>
      </div>
    </div>
  </div>
)

const Suicide = () => (
  <div>
    <div className="row">
      <div className="col-2">
        <div id="tab1">
        <Link to="/PTSD"> <h1>PTSD</h1> </Link>
        </div>
        <div id="tab2">
        <Link to="/Depression"><h1>Depression</h1></Link>
        </div>
        <div id="tab3">
        <Link to="/Substance"><h1>Substance Abuse</h1></Link>
        </div>
        <div id="tab4">
        <Link to="/Suicide"><h1>Suicide</h1></Link>
        </div>
      </div >
      <div className="col-10">
        <div className="row">
          <div id="top1">
            <h1>News</h1>
          </div>
          <div id="top2">
            <h1>General</h1>
          </div>
          <div id="top3">
            <h1>Locations</h1>
          </div>
          <div id="top4">
            <h1>Services</h1>
          </div>
        </div>
        <div id="content">
          <News />
        </div>
      </div>
    </div>
  </div>
)

const Credits = () => (
  <div>
    <h2>Credits</h2>
  </div>
)

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/PTSD" component={PTSD} />
      <Route path="/Depression" component={Depression} />
      <Route path="/Substance" component={Substance} />
      <Route path="/Suicide" component={Suicide} />
      <Route path="/Credits" component={Credits} />
    </div>
  </Router>
)

export default App;
