<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  </head>
  <body>
    <h2>编辑</h2>
    <input type="hidden" class="_id" value="{{ detail._id }}">
    <section>
      <p>
        <input type="text" placeholder="title" class="title" value="{{ detail.title }}">
      </p>
      <p>
        <input type="text" placeholder="desc" class="desc" value="{{ detail.desc }}">
      </p>
      <button onclick="newsUpdate()">保存</button>
      &emsp;
      <span class="edit-status"></span>
    </section>
  </body>
  <script>
    function newsUpdate() {
      const _id = document.querySelector('._id').value;
      const title = document.querySelector('.title').value;
      const desc = document.querySelector('.desc').value;
      const status = document.querySelector('.edit-status');

      axios.post('/news/update', { _id, title, desc })
      .then((res => {
        if (res.data.code === 1) {
          status.innerHTML = `<span style="color: green;">修改成功!</span>`;
          setTimeout(() => history.go(-1), 1000);
        } else {
          status.innerHTML = `<span style="color: red;">${
            res.data.msg || '修改失败！!'
          }</span>`;
        }
      }));
    }
  </script>
</html>
