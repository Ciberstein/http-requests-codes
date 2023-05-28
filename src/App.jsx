import './App.css'

function App() {

  return (
    <div className="App">
        <div className='app__container'>
          <h1 className='app__main_title'>HTTP Status Codes</h1>
          <div className='app__protocols'>
            <section className='app__section section__information'>
              <header className='app__section_header'>
                <h3>Information <span className='app__protocol_range_code'>[100 - 199]</span></h3>
              </header>
              <ul>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100' target='_blank'><b>100</b> - Continue</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101' target='_blank'><b>101</b> - Switching Protocols</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/102' target='_blank'><b>102</b> - Processing</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103' target='_blank'><b>103</b> - Early hints</a></li>
              </ul>
            </section>

            <section className='app__section section__success'>
              <header className='app__section_header'>
                <h3>Success <span className='app__protocol_range_code'>[200 - 299]</span></h3>
              </header>
              <ul>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200' target='_blank'><b>200</b> - Ok</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201' target='_blank'><b>201</b> - Created</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202' target='_blank'><b>202</b> - Accepted</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204' target='_blank'><b>204</b> - No Content</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206' target='_blank'><b>206</b> - Partial Content</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/207' target='_blank'><b>207</b> - Multi-Status</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/208' target='_blank'><b>208</b> - Already Reported</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/226' target='_blank'><b>226</b> - IM Used</a></li>
              </ul>
            </section>

            <section className='app__section section__redirect'>
              <header className='app__section_header'>
                <h3>Redirect <span className='app__protocol_range_code'>[300 - 399]</span></h3>
              </header>
              <ul>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300' target='_blank'><b>300</b> - Multiple choices</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301' target='_blank'><b>301</b> - Moved Permanantly</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304' target='_blank'><b>304</b> - Not modified</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307' target='_blank'><b>307</b> - Temporary redirect</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308' target='_blank'><b>308</b> - Permanant redirect</a></li>
              </ul>
            </section>

            <section className='app__section app_feature section__client'>
              <header className='app__section_header'>
                <h3>Client Error <span className='app__protocol_range_code'>[400 - 499]</span></h3>
              </header>
              <ul>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400' target='_blank'><b>400</b> - Bad request</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401' target='_blank'><b>401</b> - Unauthorized</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402' target='_blank'><b>402</b> - Payment Required</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403' target='_blank'><b>403</b> - Forbidden</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404' target='_blank'><b>404</b> - Not Found</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409' target='_blank'><b>409</b> - Conflict</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410' target='_blank'><b>410</b> - Gone</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411' target='_blank'><b>411</b> - Length Required</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412' target='_blank'><b>412</b> - Precondition Failed</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413' target='_blank'><b>413</b> - Content Too Large</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414' target='_blank'><b>414</b> - URI Too Long</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415' target='_blank'><b>415</b> - Unsupported Media Type</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416' target='_blank'><b>416</b> - Range Not Satisfiable</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417' target='_blank'><b>417</b> - Expectation Failed</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418' target='_blank'><b>418</b> - I'm a teapot</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421' target='_blank'><b>421</b> - Misdirected Request</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422' target='_blank'><b>422</b> - Unprocessable Content</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423' target='_blank'><b>423</b> - Locked</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424' target='_blank'><b>424</b> - Failed Dependency</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425' target='_blank'><b>425</b> - Too Early</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426' target='_blank'><b>426</b> - Upgrade Required</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428' target='_blank'><b>428</b> - Precondition Required</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429' target='_blank'><b>429</b> - Too Many Requests</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431' target='_blank'><b>431</b> - Request Header Fields Too Large</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451' target='_blank'><b>451</b> - Unavailable For Legal Reasons</a></li>
              </ul>
            </section>

            <section className='app__section app_feature section__server'>
              <header className='app__section_header'>
                <h3>Server Error <span className='app__protocol_range_code'>[500 - 599]</span></h3>
              </header>
              <ul>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500' target='_blank'><b>500</b> - Internal server error</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501' target='_blank'><b>501</b> - Not implemented</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502' target='_blank'><b>502</b> - Bad gateway</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503' target='_blank'><b>503</b> - Service unavailable</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504' target='_blank'><b>504</b> - Gateway timeout</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505' target='_blank'><b>505</b> - HTTP Version Not Supported</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506' target='_blank'><b>506</b> - Variant Also Negotiates</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507' target='_blank'><b>507</b> - Insufficient Storage</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508' target='_blank'><b>508</b> - Loop Detected</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510' target='_blank'><b>510</b> - Not Extended</a></li>
                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511' target='_blank'><b>511</b> - Network Authentication Required</a></li>
              </ul>
            </section>
          </div>
        </div>
    </div>
  )
}

export default App
