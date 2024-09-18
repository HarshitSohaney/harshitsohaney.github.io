const projects = [
  {
    name: "Syllabyte",
    image: "Pictures/syllabyte.png",
    link: "https://www.youtube.com/watch?v=2kAptDVbWks",
    from: new Date("2023-05-01"),
    to: new Date()
  },
  {
    name: "GIS Mapping System",
    image: "Pictures/mapper.png",
    link: "https://github.com/HarshitSohaney/Mapper-65",
    from: new Date("2022-01-01"),
    to: new Date("2022-04-01")
  },
  {
    name: "Moodlist - Mood Predictor",
    image: "Pictures/spotify.jpg",
    link: "https://github.com/maiseyperelonia/moodlist",
    from: new Date("2023-09-01"),
    to: new Date("2023-12-30")
  },
  {
    name: "Block Stack Game",
    image: "Pictures/block.png",
    link: "https://github.com/HarshitSohaney/Block-Stack",
    from: new Date("2022-01-01"),
    to: new Date("2022-04-30")
  },
  {
    name: "IDK Them",
    image: "Pictures/you_dont_know.png",
    link: "https://idk-them.vercel.app",
    from: new Date("2024-03-01"),
    to: new Date("2024-04-01")
  },
  {
    name: "Boomerang - Lost & Found",
    image: "Pictures/boomerang.png",
    link: "https://github.com/HarshitSohaney/Boomerang-GDSC2021",
    from: new Date("2021-01-01"),
    to: new Date("2021-04-30")
  },
  {
    name: "FINCH SD Card System",
    image: "Pictures/UTAT.png",
    link:"https://github.com/cam-rod/UTAT-spi-sd-test",
    from: new Date("2021-01-01"),
    to: new Date("2022-04-30")
  },
  {
    name: "Fake News Detection AI",
    image: "Pictures/coursera.png",
    link:"https://www.coursera.org/account/accomplishments/certificate/WXKW23UCFY4C",
    from: new Date("2020-01-01"),
    to: new Date("2020-02-30")
  }
];

function generateProjectsHTML(type="desktop", num_to_load=3) {
  // make sure num_to_load is not greater than the number of projects
  if (num_to_load > projects.length) {
    num_to_load = projects.length;
  }

  // Sort projects by 'to' date (most recent first), then by 'from' date
  projects.sort((a, b) => {
    const aTo = a.to;
    const bTo = b.to;
    const aFrom = a.from;
    const bFrom = b.from;

    if (aTo > bTo) return -1;
    if (aTo < bTo) return 1;

    if (aFrom > bFrom) return -1;
    if (aFrom < bFrom) return 1;

    return 0;
  });

  let html = '<tbody>';
  for (let i = 0; i < num_to_load; i += 3) {
    html += '<tr>';
    for (let j = i; j < i + 3 && j < projects.length; j++) {
      const project = projects[j];
      html += `
        <td>
          <a class="btn btn-secondary col-style-project img-container" href="${project.link}" rel="noopener" target="_blank">
            <div class="row gx-5">
              <div class="col-sm-3 col-img-project">
                <img src="${project.image}" alt="${project.name}" height=${type == "mobile" ? "50px" : "70px"} width="${type == "mobile" ? "50px" : "70px"}"> ${type == "mobile" ? `${project.name}` : ""}
              </div>
              ${type == "mobile" ? 
                "" : 
                `<div class="col-sm-9 my-auto">
                  <p>${project.name}</p>
                </div>`
            }
              
            </div>
          </a>
        </td>
      `;
    }
    html += '</tr>';
  }
  html += '</tbody>';
  return html;
}

function loadProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = generateProjectsHTML();

    const mobile_container = document.getElementById('projects-container-mobile');
    mobile_container.innerHTML = generateProjectsHTML("mobile");

    // add a click event listener to the load-more-button element
    const loadMoreButton = document.getElementById('load-more-button');
    loadMoreButton.addEventListener('click', () => {
      const container = document.getElementById('projects-container');
          container.innerHTML = '';
          container.innerHTML = generateProjectsHTML("desktop", projects.length);  
          loadMoreButton.style.display = 'none';
    });
}
  

document.addEventListener('DOMContentLoaded', loadProjects);