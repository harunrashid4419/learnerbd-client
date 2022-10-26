import React from "react";
import "./Blog.css";

const Blog = () => {
   return (
      <div className="blog-section">
         <h1>Question and Answer:-</h1>
         <div className="question">
            <h3>1. What is cors?</h3>
            <div>
               <p>
                  Cross-Origin Resource Sharing (CORS) is an HTTP-based security
                  mechanism controlled and enforced by the client (web browser).
                  It allows a service (API) to indicate any origin other than
                  its own from which the client can request resources. It has
                  been designed in response to the same-origin policy (SOP) that
                  restricts how a website (HTML document or JS script) loaded by
                  one origin can interact with a resource from another origin.
                  CORS is used to explicitly allow some cross-origin requests
                  while rejecting others.
               </p>
            </div>
         </div>
         <div className="question">
            <h3>
               2. Why are you using firebase? What other options do you have to
               implement authentication?
            </h3>
            <div>
               <p>
                  Firebase helps you develop high-quality apps, grow your user
                  base, and earn more money. Each feature works independently,
                  and they work even better together.
               </p> <br />
               <p>
                  Usually, authentication by a server entails the use of a user
                  name and password. Other ways to authenticate can be through
                  cards, retina scans, voice recognition, and fingerprints.
               </p>
            </div>
         </div>
         <div className="question">
            <h3>3. How does the private route work?</h3>
            <div>
               <p>
                  A private route is a route that cannot be used unless the user
                  is logged in to your website. If user login with email and
                  password, google, github, facebook, instagram, twitter account
                  then can use that route.
               </p>
            </div>
         </div>
         <div className="question">
            <h3>
               4. What is Node? How does Node work?
            </h3>
            <div>
               <p>
               Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.
               </p> <br />
               <p>
               Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. 
               </p>
            </div>
         </div>
      </div>
   );
};

export default Blog;
