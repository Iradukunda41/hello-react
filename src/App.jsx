import Navbar from "./components/Navbar.jsx";
import ProfileHeader from "./components/ProfileHeader.jsx";
import SkillList from "./components/SkillList.jsx";
import ProjectCard from "./components/ProjectCard.jsx";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind CSS",
  "React",
  "Git & GitHub",
  "Responsive Design",
  "SolidWorks",
];

const projects = [
  {
    id: 1,
    title: "Book Treasury",
    description:
      "A book search app built with HTML, CSS, JavaScript, Tailwind CSS and the Open Library API.",
    link: "https://github.com/Iradukunda41/book-treasury",
  },
  {
    id: 2,
    title: "CRUD Posts Manager",
    description:
      "A posts manager that creates, reads, updates and deletes posts with the Fetch API and JSONPlaceholder, built with Vite and Tailwind CSS.",
    link: "https://github.com/Iradukunda41/week6-fetch-crud",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar brand="My Portfolio" links={links} />

      <main className="mx-auto max-w-3xl space-y-10 px-4 py-8">
        <section id="about">
          <ProfileHeader
            name="Iradukunda Flora"
            role="Frontend Developer in Training"
            city="Kigali, Rwanda"
            bio="Mechanical Engineering graduate from the University of Rwanda, now training in Advanced Frontend Web Development at Igire Rwanda Organization. Certified in Responsive Web Design by freeCodeCamp, I build responsive interfaces with HTML, CSS, JavaScript, Tailwind CSS and React."
          />
        </section>

        <section id="skills">
          <h2 className="mb-3 text-xl font-semibold text-slate-900">Skills</h2>
          <SkillList skills={skills} />
        </section>

        <section id="projects">
          <h2 className="mb-3 text-xl font-semibold text-slate-900">Projects</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}