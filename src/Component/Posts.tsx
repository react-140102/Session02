import { useEffect } from "react";

export default function () {
  /***
   * Ajax:
   *  fetch <- browser dare, library
   *  libs
   *    axios
   *    got, ...
   */

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
        "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=2"
      );
      const json = await resp.json();
    })();

    return () => {
      //Cleanup
      console.log("Goodbye");
    };
  });

  return (
    <>
      <div>Posts</div>
    </>
  );
}
