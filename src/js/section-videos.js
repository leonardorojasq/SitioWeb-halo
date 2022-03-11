const videos = [
  {
    id: "PyMlV5_HRWk",
  },
  {
    id: "xGLb-Tg52nU",
  },
  {
    id: "e1Tp9G8Ul2w",
  },
  {
    id: "jsCb54BKKz4",
  },
  {
    id: "XCbMVbeKlCg",
  },
];

const sliderContainer = document.querySelector("#slider");
const currentContainer = document.querySelector("#current");
const videosContainer = document.querySelector("#videos-container");

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let current = 0;

next.addEventListener("click", (e) => {
  let changed = current;

  current = current + 1 < videos.length ? current + 1 : current;
  if (current !== changed) renderCurrentVideo(videos[current].id);
});
prev.addEventListener("click", (e) => {
  let changed = current;

  current = current - 1 >= 0 ? current - 1 : current;

  if (current !== changed) renderCurrentVideo(videos[current].id);
});

renderCurrentVideo(videos[current].id);
renderVideos();

function renderCurrentVideo(id) {
  currentContainer.innerHTML = `<iframe width="100%" height="382" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

function renderVideos() {
  const html = videos.map((video, index) => {
    return `
        <div class="item">
        <a href="#" data-id="${index}">
            <img src="https://img.youtube.com/vi/${video.id}/mqdefault.jpg" alt="halo" />
        </a>
        </div>
        `;
  });

  videosContainer.innerHTML = html.join("");

  document.querySelectorAll('.item a').forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const id = +item.getAttribute("data-id");
      current = id;
      renderCurrentVideo(videos[current].id);
    });
  });
}

