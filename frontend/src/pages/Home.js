import React from "react";
import Article from "../components/Article";
function Home() {
  return (
    <div className="App">
      <main className="d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-9">
              <div className="row">
                <div className="col-6">
                  <Article
                    title="This is all products in our mall online"
                    resumen=""
                    linkText="Send"
                    link="https://www.youtube.com/watch?v=67ASQxnnyFE"
                  />
                </div>
                <div className="col-6">
                  <Article
                    title="This is all products in our mall online"
                    resumen=""
                    linkText="Send"
                    link="https://www.youtube.com/watch?v=67ASQxnnyFE"
                  />
                </div>
                <div className="col-12">
                  <Article
                    title="Equip Challange Front"
                    resumen="Excepteur sint occaecat cupidatad non proident, sunt in culpa qui officia deserunt"
                  />
                </div>
              </div>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center">
              <a href="·">Start your project</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
