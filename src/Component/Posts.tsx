export default function () {
  /***
   * Ajax:
   *  fetch <- browser dare, library
   *  libs
   *    axios
   *    got, ...
   */

  fetch("https://jsonplaceholder.typicode.com/posts?_limit=10&_page=2")
    .then((resp) => resp.json())
    .then((json) => console.log(json));

  return (
    <>
      <div>Posts</div>
    </>
  );
}
