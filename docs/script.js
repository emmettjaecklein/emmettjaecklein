particlesJS("particles-js", {
  "particles": {
    "number": { "value": 100 },
    "color": { "value": "#2563eb" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.3 },
    "size": { "value": 2 },
    "move": {
      "enable": true,
      "speed": 0.6,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": false } }
  },
  "retina_detect": true
});


document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "Machine Learning for Computational Animal Welfare",
            image: "images/ml_zoo_1.png",
            desc: `I initiated this ongoing research partnership to develop automated
animal tracking systems for use at the Woodland Park Zoo in Seattle, WA. Our goal was to reduce the labor and inherent bias associated
with manual observation by constructing a machine learning pipeline
capable of long-term, non-invasive monitoring for behavioral and
exhibit usage tracking. Our current methodology uses a fine-tuned
YOLOv11 model for initial object detection, paired with the SAMURAI model, developed at the University of Washington and built
on Meta’s SAM2, for state-of-the-art video object tracking using
live surveillance footage from zoo cameras. The system outputs
visualizations such as heatmaps, movement paths, and section usage
charts to help zookeepers better understand animal-environment
interactions. We also evaluated model performance, tested variations
for inference efficiency, and created a repeatable framework that will
continue to see refinement and expansion to other species.`,
            link: "https://github.com/hutchresearch/ml_zoo"
        },
        {
            title: "Stream Gauge Records for Channel Change",
            image: "images/stream_gauge_1.png",
            desc: `This group capstone project was a continuation of a study done by our client Dr. Alison Pfeiffer of the WWU Geology Department,
on river incision and aggradation in the state of Washington using
United States Geological Survey data. Our goal was to further collect, compare, and display our findings, as well as create a code base
for the collection of similar data nationwide. We succeeded in our
goal, collecting data on the states of four West Coast states, using
a custom NLP machine learning model to sort complicated notes for
valid sites. We also produced an ease-of-use, repeatable framework
for nationwide collection, scraping, sorting, and continuation of the
project in any state. Our data was displayed on an interactive map,
and this project was presented formally on multiple occasions to interested parties.`,
            link: "https://github.com/Yuliya-Dominguez/DATA-493-Stream-Gauge-Project/tree/main/For%20Allison"
        },
        {
            title: "The Stims: Gamified ASD Education",
            image: "images/stims_1.png",
            desc: `This group project aimed to raise awareness for Autism Spectrum
Disorder (ASD) through the use of gamified storytelling techniques
in an online format. Players are presented with multiple different perspectives to choose from, each involving a detailed story
highlighting that individual\’s daily struggles with ASD. Users are
prompted with a series of story choices and are challenged to
balance the energy, reputation, and work or school aspects of that
character\’s life. In this short 3-month project, my team and I created
a framework for an application with real social importance, each of
us with real passion and dedication for the success of the project.
With adaptability at the forefront of development, this project is an
excellent demonstration of team organization, motivation, and skills.`,
            link:"https://github.com/skiffie125/theStims"
        },
        {
            title: "Machine Learning for Educational Insight in Washington State",
            image: "images/ospi_1.jpg",
            desc: `This group project was the final project for the core Data111 course at WWU.
            We aimed to use machine learning and regression analysis to find insights into the socioeconomic
            factors that influence student success in Washington State. Our team scraped data from the Washington
            State Education Department, including various socioeconomic factors, student demographics,
            and standardized test scores. We then used this data to train multiple regression models to weigh
            the importance of each factor in predicting student success. The project culminated in a report and presentation
            on our findings, which highlighted and visualized the key factors that contribute to student performance.`,
            link: "https://github.com/emmettjaecklein/ml_ed_wa"
        }
    ];

    let current = 0;
    const slide = document.querySelector('.slide');
    const left = document.querySelector('.slide-arrow.left');
    const right = document.querySelector('.slide-arrow.right');
    
function renderSlide(idx) {
    const project = projects[idx];
    slide.innerHTML = `
        <div class="project-card">
            <div class="project-image" style="background-image: url('${project.image}');">
                <div class="project-overlay">
                    <h3>${project.title}</h3>
                </div>
            </div>
            <p>${project.desc}</p>
            <a href="${project.link}" target="_blank" class="project-link-btn">
                <i class="fab fa-github"></i> View on GitHub
            </a>
        </div>
    `;
}

    left.addEventListener('click', () => {
        current = (current - 1 + projects.length) % projects.length;
        renderSlide(current);
    });

    right.addEventListener('click', () => {
        current = (current + 1) % projects.length;
        renderSlide(current);
    });

    renderSlide(current);
});