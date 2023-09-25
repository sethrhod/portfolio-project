import Carousel from "./carousel";

export default function ProjectShowcase() {

  return (
    <div className="flex">
      <Carousel />
      <div className="inline w-fit bg-neutral-200 m-5 p-4 text-left">
        <h2 className="text-lg font-bold">ATC conferences App</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur, nisl quis tincidunt ultricies, nunc nisl ultrices tortor,
          quis ultrices nisl nunc quis nisl. Donec euismod, nisl vitae aliquam
          ultricies, nisl nisl ultricies nisl, quis ultrices nisl nunc quis
          nisl. Donec euismod, nisl vitae aliquam ultricies, nisl nisl ultricies
          nisl, quis ultrices nisl nunc quis nisl.
        </p>
      </div>
    </div>
  );
}
