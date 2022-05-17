import { useEffect, useState } from "react";
import axios from "axios";

export default function () {
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      const resp = await axios.get<Post[]>(
        "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=" + page
      );
      // setTotalPosts(parseInt(resp.headers["x-total-count"]));
      setTotalPosts(+resp.headers["x-total-count"]); //conver string to number
      setPosts(resp.data);
      setLoading(false);
    })();
  }, [page]);

  function renderPages() {
    let pages = [];
    for (let i = 1; i <= totalPosts / 10; i++) {
      pages.push(
        <>
          <li className={i === page ? "page-item active" : "page-item"}>
            <a className="page-link" href="#" onClick={() => setPage(i)}>
              {i}
            </a>
          </li>
        </>
      );
    }
    return pages;
  }

  return (
    <>
      <div>Posts {posts.length}</div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>

          {renderPages()}

          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>

      <table className="table table-striped">
        <thead>
          <th scope="col">id</th>
          <th scope="col">userId</th>
          <th scope="col">title</th>
          <th scope="col">body</th>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={10}>Loading</td>
            </tr>
          )}
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
