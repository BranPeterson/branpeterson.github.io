/* =====================================================================
   BRAN PETERSON PORTFOLIO: CONTENT
   ---------------------------------------------------------------------
   This is the only file you need to touch to add or change work.

   HOW TO ADD A PIECE
   1. Drop the image in the matching folder, e.g. images/illustrations/
   2. Copy one { ... } block below, paste it at the spot you want it to
      show up (top of the list = first on the page), and fill it in.
   3. Save. Refresh the site. Done.

   Anything with  image: ""  (empty) shows as a placeholder sheet on the
   board, so the site always looks finished even before work is added.
   Lines marked  // PLACEHOLDER  are sample copy for Bran to replace.

   Tips
   - Keep images under ~1 MB (export JPG at 2000px wide max).
   - Tags on illustrations become the filter post-its automatically.
   - Order matters: the first 3 items in each section show on the home page.
   ===================================================================== */

window.SITE = {

  name: "Bran Peterson",
  tagline: ["illustrator", "animator", "art teacher"],
  email: "Branparts@gmail.com",
  instagram: "Branbitious",

  /* Contact form: paste a Formspree form URL here (free at formspree.io)
     to have messages land in Bran's inbox. Left empty, the Send button
     opens the visitor's email app with the message filled in. */
  formEndpoint: "",

  /* ---------------------------------------------------------------- */
  illustrations: {
    intro: "Characters, creatures and sketchbook pages. Click any piece to see it bigger.",
    items: [
      { title: "Untitled piece", image: "", tags: ["Characters"], year: "2026", medium: "ink + digital", note: "" },   // PLACEHOLDER
      { title: "Untitled piece", image: "", tags: ["Animals"],    year: "2026", medium: "pencil",        note: "", shape: "tall" },  // PLACEHOLDER
      { title: "Untitled piece", image: "", tags: ["Sketchbook"], year: "2026", medium: "marker",        note: "", shape: "wide" },  // PLACEHOLDER
      { title: "Untitled piece", image: "", tags: ["Characters"], year: "2026", medium: "digital",       note: "", shape: "square" },// PLACEHOLDER
      { title: "Untitled piece", image: "", tags: ["Commissions"],year: "2026", medium: "digital",       note: "" },   // PLACEHOLDER
      { title: "Untitled piece", image: "", tags: ["Animals"],    year: "2026", medium: "ink",           note: "", shape: "tall" },  // PLACEHOLDER
      { title: "Untitled piece", image: "", tags: ["Sketchbook"], year: "2026", medium: "pencil",        note: "", shape: "square" },// PLACEHOLDER
      { title: "Untitled piece", image: "", tags: ["Characters"], year: "2026", medium: "digital",       note: "", shape: "wide" },  // PLACEHOLDER
      { title: "Untitled piece", image: "", tags: ["Commissions"],year: "2026", medium: "ink + digital", note: "" },   // PLACEHOLDER
      // Example of a real one:
      // { title: "Rider study", image: "images/illustrations/rider-study.jpg", tags: ["Animals"], year: "2025", medium: "ink", note: "Quick study from life." },
    ]
  },

  /* ---------------------------------------------------------------- */
  animations: {
    intro: "Reels, shorts and loops. Everything plays right on the board.",
    /* video: a .mp4 in images/animations/  OR a YouTube/Vimeo link */
    showreel: { title: "Showreel", video: "", poster: "", length: "0:00" },   // PLACEHOLDER
    note: ["Open for short", "animated", "commissions!"],
    clips: [
      { title: "Clip title", video: "", poster: "", length: "0:00" },   // PLACEHOLDER
      { title: "Clip title", video: "", poster: "", length: "0:00" },   // PLACEHOLDER
      { title: "Clip title", video: "", poster: "", length: "0:00" },   // PLACEHOLDER
      { title: "Clip title", video: "", poster: "", length: "0:00" },   // PLACEHOLDER
    ],
    /* "How a shot gets made": three images from one project, start to finish */
    process: [
      { label: "thumbnail",     image: "" },
      { label: "rough",         image: "" },
      { label: "clean + color", image: "" },
    ]
  },

  /* ---------------------------------------------------------------- */
  teaching: {
    intro: "Lessons, classroom moments and student work from kids, teens and adult classes.",   // PLACEHOLDER
    subjects: [                                     // PLACEHOLDER
      "Figure & gesture drawing",
      "Character design",
      "Intro to 2D animation",
      "Still life & observation",
      "Digital painting basics",
    ],
    tip: ["Every class starts", "with a 5 min warm up"],   // PLACEHOLDER
    studentsTaught: "00+",                                  // PLACEHOLDER

    philosophy: {
      quote: ["Everyone can draw.", "I teach people how to look."],   // PLACEHOLDER (Bran's own words go here)
      principles: [                                                   // PLACEHOLDER
        { title: "Look first",          text: "Ten minutes of seeing beats an hour of guessing." },
        { title: "Mistakes are drafts", text: "Nothing gets erased until we learn something from it." },
        { title: "Share the wall",      text: "Every class ends with work pinned up and talked about." },
      ]
    },

    /* Classroom photos hang on the clothesline. Only use photos you have
       permission to share (no student faces without consent). */
    classroom: [
      { image: "", caption: "Saturday workshop" },   // PLACEHOLDER
      { image: "", caption: "Gesture day" },         // PLACEHOLDER
      { image: "", caption: "Paint setup" },         // PLACEHOLDER
      { image: "", caption: "Critique circle" },     // PLACEHOLDER
      { image: "", caption: "Flipbook class" },      // PLACEHOLDER
    ],

    /* pdf: put the file in images/teaching/lessons/ and link it here */
    lessons: [
      { title: "Lesson 01: Gesture in 30s",  lines: ["Goal: loosen up", "Warm up: 10 x 30s poses", "Main: line of action", "Share: pin it up!"], pdf: "" },        // PLACEHOLDER
      { title: "Lesson 02: Fruit bowl",      lines: ["Goal: see shapes first", "Warm up: blind contour", "Main: light + shadow", "Share: gallery walk"], pdf: "" }, // PLACEHOLDER
      { title: "Lesson 03: Bouncing ball",   lines: ["Goal: timing + spacing", "Warm up: flipbook", "Main: squash & stretch", "Share: play the loop"], pdf: "" },  // PLACEHOLDER
    ],

    studentWork: [
      { image: "", caption: "Age 9" },        // PLACEHOLDER
      { image: "", caption: "Age 14" },       // PLACEHOLDER
      { image: "", caption: "Adult class" },  // PLACEHOLDER
      { image: "", caption: "Age 11" },       // PLACEHOLDER
      { image: "", caption: "Age 12" },       // PLACEHOLDER
      { image: "", caption: "Age 16" },       // PLACEHOLDER
      { image: "", caption: "Adult class" },  // PLACEHOLDER
      { image: "", caption: "Age 10" },       // PLACEHOLDER
    ]
  },

  /* ---------------------------------------------------------------- */
  about: {
    photo: "",            // leave empty to use the blue head doodle
    bio: [                // PLACEHOLDER
      "Hi! I'm Bran, an illustrator, animator and art teacher. Bran's bio goes here: where he's from, what he loves drawing, and how he got into animation.",
      "A second short paragraph about teaching and what he's open for right now (commissions, workshops, collabs).",
    ],
    tools: ["Tool one", "Tool two", "Tool three", "Pencil + paper"],   // PLACEHOLDER
    timeline: [                                                          // PLACEHOLDER
      { year: "20XX", text: "First milestone" },
      { year: "20XX", text: "Second milestone" },
      { year: "20XX", text: "Started teaching" },
      { year: "Now",  text: "Freelance + workshops" },
    ]
  },

  /* ---------------------------------------------------------------- */
  contact: {
    intro: "Commissions, collabs and workshop bookings. I reply within a few days.",   // PLACEHOLDER
    menu: [                                   // PLACEHOLDER prices
      { item: "Character portrait",     price: "from $__" },
      { item: "Full illustration",      price: "from $__" },
      { item: "Short animation / loop", price: "from $__" },
      { item: "Workshop or class",      price: "from $__" },
      { item: "Something else?",        price: "ask me!" },
    ],
    projectTypes: ["Illustration", "Animation", "Workshop", "Other"]
  }
};
