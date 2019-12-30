<html>
  <head>
    <title>Hacker News</title>
  </head>
  <body>
    <div class="news-detail">
      <h2>
        title: {{ newsDetail.title }} &emsp;
      </h2>
      <a href="/news/edit/{{ newsDetail.id }}">编辑</a>
      <p>id: {{ newsDetail.id }}</p>
      <p>desc: {{ newsDetail.desc }}</p>
      <p>time: {{ helper.relativeTime(newsDetail.update_time) }}</p>
    </div>
  </body>
</html>
