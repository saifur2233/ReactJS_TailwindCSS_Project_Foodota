import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="card my-10 card-bordered border-secondary w-full bg-base-100 shadow-xxl">
        <div className="card-body">
          <h2 className="card-title text-3xl">
            Difference between SQL and NoSQL?
          </h2>
          <p>
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL.
          </p>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>SQL</th>
                  <th>NoSQL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                  <td>Non-relational or distributed database system.</td>
                </tr>

                <tr>
                  <th>2</th>
                  <td>
                    These databases have fixed or static or predefined schema
                  </td>
                  <td>They have dynamic schema</td>
                </tr>

                <tr>
                  <th>3</th>
                  <td>
                    These databases are not suited for hierarchical data
                    storage.
                  </td>
                  <td>
                    These databases are best suited for hierarchical data
                    storage.
                  </td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>Vertically Scalable</td>
                  <td>Horizontally scalable</td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>Follows ACID property</td>
                  <td>
                    Follows CAP(consistency, availability, partition tolerance)
                  </td>
                </tr>
                <tr>
                  <th>6</th>
                  <td>
                    Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc
                  </td>
                  <td>
                    Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="card my-10 card-bordered border-secondary w-full bg-base-100 shadow-xxl">
        <div className="card-body">
          <h2 className="card-title text-3xl">
            What is JWT, and how does it work?
          </h2>
          <p className="font-bold">JWT:</p>
          <p>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
          </p>
          <p className="font-bold">How JWT Works</p>
          <p>
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted. A JWT is a string
            made up of three parts, separated by dots (.), and serialized using
            base64. In the most common serialization format, compact
            serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
          </p>
          <p>Once decoded, you will get two JSON strings:</p>
          <ol>
            <li>1. The header and the payload.</li>
            <li>2. The signature. </li>
          </ol>
          <p>
            The JOSE (JSON Object Signing and Encryption) header contains the
            type of token — JWT in this case — and the signing algorithm. The
            payload contains the claims. This is displayed as a JSON string,
            usually containing no more than a dozen fields to keep the JWT
            compact. This information is typically used by the server to verify
            that the user has permission to perform the action they are
            requesting.
          </p>
          <p>
            The signature ensures that the token hasn’t been altered. The party
            that creates the JWT signs the header and payload with a secret that
            is known to both the issuer and receiver, or with a private key
            known only to the sender. When the token is used, the receiving
            party verifies that the header and payload match the signature.{" "}
          </p>
        </div>
      </div>
      <div className="card my-10 card-bordered border-secondary w-full bg-base-100 shadow-xxl">
        <div className="card-body">
          <h2 className="card-title text-3xl">
            What is the difference between javascript and NodeJS?
          </h2>
          <p className="font-bold">NodeJS : </p>
          <p>
            NodeJS is a cross-platform and opensource Javascript runtime
            environment that allows the javascript to be run on the server-side.
            Nodejs allows Javascript code to run outside the browser. Nodejs
            comes with a lot of modules and mostly used in web development.{" "}
          </p>
          <p className="font-bold">JavaScript : </p>
          <p>
            Javascript is a Scripting language. It is mostly abbreviated as JS.
            It can be said that Javascript is the updated version of the ECMA
            script. Javascript is a high-level programming language that uses
            the concept of Oops but it is based on prototype inheritance.{" "}
          </p>
          <p>
            JavaScript is a high-level, lightweight (easy syntax) and
            object-oriented programming language that is used by almost every
            web developer to create web pages, web applications, mobile
            applications and is also used in game development. Node.js is a
            JavaScript runtime environment built on google’s v8 engine which is
            used to run JavaScript outside the browser and to put it simply it
            is just an extension of a JavaScript library with many modules hence
            making JavaScript even more powerful.
          </p>
        </div>
      </div>
      <div className="card my-10 card-bordered border-secondary w-full bg-base-100 shadow-xxl">
        <div className="card-body">
          <h2 className="card-title text-3xl">
            How does NodeJS handle multiple requests at the same time?
          </h2>
          <p>
            NodeJS internally manages a limited thread pool which handles
            multiple client requests based on which thread is avaiable in the
            pool to process the request. NodeJS server uses an EventQueue, which
            queues incoming client requests and an EventLoop which is an
            infinite loop that receives requests and processes them. This
            EventLoop is single threaded and acts as a listener for the
            EventQueue which processes incoming requests based on FIFO policy.
          </p>
          <p>
            When a new request comes in, NodeJS checks if it requires any
            blocking IO operations, if not, the EventLoop processes it and sends
            the response back to the client directly. If yes, then the request
            is forwarded to the thread manager, which then based on an
            algorithm, picks up an idle thread from the pool and lets it process
            the request. After completion of the request processing operation,
            the thread, returns the response back to the EventLoop which is then
            forwarded to the client. Thus, even if an incoming request needs
            blocking IO, the thread pool allows it to run asynchronously in the
            background without blocking the EventLoop and it gives a seamless
            experience of NodeJS handling multiple incoming requests
            concurrently without any persistent delays or bottlenecks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
