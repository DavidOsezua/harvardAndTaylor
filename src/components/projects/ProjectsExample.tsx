import ProjectCard from "./ProjectCard";

const ProjectsExample = () => {
  return (
    <div>
      {/* Example 1: Chic 5-storey boutique hotel */}
      <ProjectCard
        title="Chic 5-storey boutique hotel"
        location="221 Rye Lane, Peckham, London, SE15"
        description="Exciting plans just submitted for Rye Lane, close to home for us! We are transforming an underutilised site in the heart of Peckham into a chic 5-storey boutique hotel. Blending the playful, edgy and eclectic style of Peckham Rye with a highly efficient design, this project will enhance the area's vibrant energy and contribute to making Peckham a long-term destination. With Southwark authority's approval, the development will create new public spaces and bring fresh life to Rye Lane."
        image="/images/projects/rye-lane.jpg"
        imageAlt="Chic 5-storey boutique hotel rendering"
        buttonText="Project Plan"
        buttonLink="/projects/rye-lane"
        reversed={false}
      />

      {/* Example 2: Beckenham Development */}
      <ProjectCard
        title="Beckenham Development"
        location="Land at Kent House Road, Beckenham"
        description="Exciting plans just submitted for Rye Lane, close to home for us! We are transforming an underutilised site in the heart of Peckham into a chic 5-storey boutique hotel. Blending the playful, edgy and eclectic style of Peckham Rye with a highly efficient design, this project will enhance the area's vibrant energy and contribute to making Peckham a long-term destination. With Southwark authority's approval, the development will create new public spaces and bring fresh life to Rye Lane."
        image="/images/projects/beckenham.jpg"
        imageAlt="Beckenham development site"
        reversed={true}
      />
    </div>
  );
};

export default ProjectsExample;
