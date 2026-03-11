type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Shibil — 3D Portfolio",
    fullName: "Shibil",
    email: "shibil@mail.com",
  },

  hero: {
    name: "Shibil",
    p: ["I develop 3D visuals, user", "interfaces and web applications"],
  },

  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: {
        span: "Your Email",
        placeholder: "What's your email?",
      },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },

  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm Shibil, a software developer passionate about building modern
      web applications and interactive 3D websites. I work with technologies
      like JavaScript, TypeScript, React, Node.js, and Three.js to create
      fast, scalable, and user-friendly solutions. I enjoy solving real-world
      problems through technology and continuously learning new tools and
      frameworks to improve my skills.`,
    },

    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },

    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },

    works: {
      p: "My work",
      h2: "Projects.",
      content: `The following projects showcase my skills and experience through
      real-world examples of my work. Each project includes descriptions,
      links to repositories, and live demos. They demonstrate my ability
      to build scalable applications, solve complex problems, and work
      with modern technologies.`,
    },
  },
};