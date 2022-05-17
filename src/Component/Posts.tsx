import { useEffect, useState } from "react";

export default function () {
  const [posts, setPosts] = useState([]);

  /***
   * Ajax:
   *  fetch <- browser dare, library
   *  libs
   *    axios
   *    got, ...
   */

  useEffect(() => {
    console.log("Salam");
    return () => {
      //Cleanup
      console.log("Goodbye");
    };
  }, []);

  useEffect(() => {
    //Promise
    // fetch("https://jsonplaceholder.typicode.com/posts?_limit=10&_page=2")
    //   .then((resp) => resp.json())
    //   .then((json) => console.log(json));

    // async function run() {
    //   //async / await
    //   const resp = await fetch(
    //     "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=2"
    //   );
    //   const json = await resp.json();
    // }
    // run();

    //IIFE
    // (async () => {})()
    (async () => {
      const resp = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1"
      );
      setPosts(await resp.json());
    })();
  }, []);

  return (
    <>
      <div>Posts {posts.length}</div>
    </>
  );
}
