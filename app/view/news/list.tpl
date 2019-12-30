<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  </head>
  <body>
    <section>
      <p>
        <input type="text" name="news-title" placeholder="title" class="title">
      </p>
      <p>
        <input type="text" name="news-desc" placeholder="desc" class="desc">
      </p>
      <button onclick="newsAdd()">新增</button>
      &emsp;
      <span class="add-status" style="color: red;"></span>
    </section>

    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          <a href="detail/{{ item.id }}">{{ item.title }} - {{ item.desc }}</a>
        </li>
      {% endfor %}
    </ul>
  </body>
  <script>
    function newsAdd() {
      const title = document.querySelector('.title').value;
      const desc = document.querySelector('.desc').value;
      const status = document.querySelector('.add-status');

      axios.post('/news/add', { title, desc })
      .then((res => {
        if (res.data.code === 1) {
          status.innerText = '新增成功!';
          location.reload();
        } else {
          status.innerText = res.data.msg || '新增失败！!';
        }
      }));
    }
  </script>
</html>
