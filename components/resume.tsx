import { useEffect, useRef } from "react";

export default function Resume() {

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const Observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
          } else {
            entry.target.classList.add("opacity-0");
          }
        }),
      {
        threshold: 0.50,
      }
    );
    Observer.observe(ref.current);
  }, []);

  return (
    <div ref={ref} className="flex h-screen w-screen flex-col transition-all duration-500 ease-in-out">
      <div className="flex flex-1 flex-col bg-stone-100 p-4">
        <h1 className="text-2xl">About Me</h1>
        <p>
          I spend most of my time learning new technologies and building things
          but I also enjoy playing video games, practicing Muay Thai, rock
          climbing, and making art.
          <br />
          <br />
          I'm currently working towards my react certification and learning
          swift to develop on ios.
          <br />
          <br />
          When playing video games I tend to lean towards team based competitive
          multiplayer games. I enjoy the teamwork, communication, and
          collaboration required to achieve victory.
          <br />
          <br />
          I'm new to Muay Thai but I'm really enjoying it. I'm looking forward
          to showing some photos and footage of my progress here in the future.
          <br />
          <br />
          I'm a very casual rock climber and I only boulder. I've been climbing
          on and off for about 3 years now. I mostly climb socially with friends
          and I'm not very competitive but I do enjoy it. I boulder at around a
          v4 level.
          <br />
          <br />
          I've been drawing and painting since I was a child and recently I've
          been using Blender to learn 3D modeling and animation.
        </p>
      </div>
    </div>
  );
}
