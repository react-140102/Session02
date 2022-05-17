import { useEffect, useState } from "react";
import axios from "axios";

export default function () {
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalPosts, setTotalPosts] = useState(0);

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
    // (async () => {
    //   const resp = await fetch(
    //     "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1"
    //   );
    //   setPosts(await resp.json());
    // })();

    (async () => {
      const resp = await axios.get<Post[]>(
        "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1"
      );
      // setTotalPosts(parseInt(resp.headers["x-total-count"]));
      setTotalPosts(+resp.headers["x-total-count"]); //conver string to number
      setPosts(resp.data);
    })();
  }, []);

  return (
    <>
      <div>Posts {posts.length}</div>
      <table className="table table-striped">
        <thead>
          <th scope="col">id</th>
          <th scope="col">userId</th>
          <th scope="col">title</th>
          <th scope="col">body</th>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr>
              <td>{post.id}</td>
              <td>{post.userId}</td>
              <td>{post.title}</td>
              <td>{post.body.substring(0, 30)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
