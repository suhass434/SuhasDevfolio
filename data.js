const portfolioData = {
    basic: {
        name: "Suhas S",
        role: "Software Engineer | Full-stack | AI/ML",
        location: "Bengaluru, India",
        email: "suhass1345@gmail.com",
        resumeLink: "https://drive.google.com/drive/folders/1QjZVcpZJUmbJgMLxYwYiMmSWtHjXTdDH?usp=drive_link",
        profileImage: "images/profile_photo/hero-portrait.png",
        intro: "I build practical software across full-stack apps, AI/ML workflows, data-heavy tools, and backend services."
    },
    experience: [
        {
            title: "Project Intern",
            company: "Oracle",
            period: "Jan 2026 - Jul 2026",
            location: "Bengaluru",
            tags: ["Java", "Micronaut", "Spring Boot", "REST APIs", "JUnit", "Clean Architecture"],
            summary: "Worked on migrating Oracle Aconex Mobile API services from Spring Boot to Micronaut.",
            points: [
                "Migrated 60+ API endpoints while preserving existing API behavior.",
                "Refactored controllers, services, DTOs, filters, error handling, logging, and integrations.",
                "Improved startup time by about 25% using Micronaut compile-time dependency injection.",
                "Added unit and integration tests for API behavior, serialization, and framework compatibility."
            ]
        },
        {
            title: "Artificial Intelligence Intern",
            company: "Infosys Springboard",
            period: "Oct 2024 - Dec 2024",
            tags: ["Python", "Scikit-learn", "Preprocessing", "Model Training"],
            summary: "Built a fraud detection system using Python and machine learning.",
            points: [
                "Worked on data preprocessing, transaction risk analysis, model training, and evaluation.",
                "Preprocessed 10,000+ records and implemented tests to improve accuracy and reduce false positives."
            ]
        },
        {
            title: "Backend Developer Intern",
            company: "NFThing",
            period: "Jan 2024 - Dec 2024",
            location: "Bengaluru",
            tags: ["Node.js", "MongoDB", "REST APIs", "Testing"],
            summary: "Contributed backend APIs and database integrations for Deflix, a movie rating platform.",
            points: [
                "Designed and delivered RESTful APIs with logging, unit testing, and MongoDB integrations.",
                "Worked on backend features for a Web3-oriented movie rating product."
            ]
        }
    ],
    projects: [
        {
            name: "GrooveGrid",
            type: "Music production workflow manager",
            link: "https://www.groovegrid.org/",
            image: "images/projects/groovegrid.png",
            stack: ["React", "Tauri", "Rust", "SQLite", "Express", "MongoDB", "Razorpay"],
            summary: "A desktop and web platform for managing music production projects from idea to release.",
            points: [
                "Built a 7-stage Kanban workflow with notes, idea capture, timers, analytics, and one-click DAW launch.",
                "Implemented authentication, device-login handoff, and software distribution for the desktop app.",
                "Integrated Razorpay subscriptions, webhook processing, and release access control for paid users."
            ]
        },
        {
            name: "PickMyCollege",
            type: "College selection assistant",
            link: "https://pick-my-college2-0.vercel.app/",
            image: "images/projects/pickmycollege.png",
            stack: ["React", "Node.js", "Vercel", "Render", "Excel Pipelines", "Caching"],
            summary: "A data-driven platform that helps students shortlist colleges using rank, preferences, and historical cutoffs.",
            points: [
                "Served 3000+ users with a full-stack React and Node.js deployment.",
                "Reduced response time from about 100 seconds to 10 seconds using pre-computation, caching, and parallel processing.",
                "Built an automated pipeline to extract, validate, and standardize cutoff data from Excel to database."
            ]
        },
        {
            name: "VitalWatch",
            type: "System monitoring application",
            link: "https://vitalwatch.vercel.app/",
            github: "https://github.com/suhass434/VitalWatch",
            image: "images/projects/VitalWatch.png",
            stack: ["Python", "PyQt5", "Psutil", "Bash", "Isolation Forest"],
            summary: "A cross-platform desktop monitoring tool with real-time system metrics and anomaly detection.",
            points: [
                "Built a cross-platform desktop app with real-time monitoring and an AI voice assistant for system commands.",
                "Displayed 10+ system metrics with 1-second refresh, including CPU, memory, disk, and network usage.",
                "Achieved 95%+ anomaly detection accuracy using Isolation Forest to identify system issues."
            ]
        },
        {
            name: "CrawlShastra",
            type: "Document crawler and analyzer",
            image: "images/projects/crawlshastra.png",
            stack: ["FastAPI", "Python", "React", "LLMs", "Regex"],
            summary: "A PDF metadata extraction pipeline for converting unstructured documents into structured outputs.",
            points: [
                "Crafted a PDF metadata extractor using regex and LLM APIs for structured data extraction from unstructured text.",
                "Applied a sliding-window approach for large document parsing and cleaned outputs for Excel export.",
                "Designed batch uploads for 20+ files with 99% success, real-time output, and CSV download."
            ]
        }
    ],
    archivedProjects: [
        {
            name: "Sentify",
            type: "Sentiment analysis tool",
            github: "https://github.com/suhass434/Sentify",
            image: "images/projects/sentify.jpeg",
            stack: ["Python", "VADER", "TextBlob", "PRAW", "Spacy", "Scikit-learn", "Geopy"],
            summary: "Built a sentiment analysis tool with location-based analysis and emotion classification.",
            points: [
                "Processed social text to extract polarity, emotion, and location-based sentiment signals.",
                "Combined rule-based NLP libraries with geocoding to make insights easier to explore."
            ]
        },
        {
            name: "DiaCure",
            type: "Diabetic retinopathy detection",
            github: "https://github.com/suhass434/DiaCure",
            image: "images/projects/diacure.png",
            stack: ["Python", "Scikit-learn", "Gradio", "Fastai", "OpenCV"],
            summary: "Predicted diabetic retinopathy from retinal images using deep learning.",
            points: [
                "Built an image-classification workflow for retinal images using deep learning.",
                "Used Gradio to package the model into a simple interactive demo."
            ]
        },
        {
            name: "SafeSpoon",
            type: "Food safety checker",
            github: "https://github.com/suhass434/SafeSpoon-api",
            image: "images/projects/safespoon.png",
            stack: ["OCR", "GenAI", "Gradio", "React", "Node.js", "MongoDB"],
            summary: "Analyzed food ingredients from photos and generated personalized allergy alerts.",
            points: [
                "Extracted ingredient text from food images using OCR.",
                "Compared ingredients against personal health inputs to generate allergy and safety alerts."
            ]
        },
        {
            name: "BreedSnap",
            type: "Dog breed classifier",
            github: "https://github.com/suhass434/BreedSnap",
            image: "images/projects/breedsnap.png",
            stack: ["HTML", "CSS", "JavaScript", "Python", "Fastai", "OpenCV"],
            summary: "Built a web app for identifying dog breeds from images using machine learning.",
            points: [
                "Created an image-upload flow for breed prediction.",
                "Used computer vision tooling to classify dog breeds from user-provided images."
            ]
        },
        {
            name: "NeuroFlap",
            type: "Evolutionary AI game",
            github: "https://github.com/suhass434/NeuroFlap",
            image: "images/projects/neuroflap.png",
            stack: ["Python", "Pygame", "NEAT"],
            summary: "Built a Flappy Bird agent where a NEAT genetic algorithm learns to play autonomously.",
            points: [
                "Implemented a Pygame simulation for training and visualizing agents.",
                "Used NEAT to evolve gameplay behavior over multiple generations."
            ]
        },
        {
            name: "SpamGuard",
            type: "Spam classifier",
            github: "https://github.com/suhass434/SpamGuard",
            image: "images/projects/spamclassifier.png",
            stack: ["Python", "Scikit-learn", "Streamlit"],
            summary: "Classified emails and SMS messages using a Naive Bayes spam detection model.",
            points: [
                "Built a text-classification pipeline for email and SMS spam detection.",
                "Packaged the classifier with Streamlit for quick interactive testing."
            ]
        },
        {
            name: "MakeMore",
            type: "Character-level language model",
            github: "https://github.com/suhass434/MakeMore",
            image: "images/projects/makemore.png",
            stack: ["Python", "PyTorch"],
            summary: "Built a neural network from scratch for generating names using character-level language modeling.",
            points: [
                "Implemented character-level language modeling concepts in PyTorch.",
                "Used the project to understand neural-network training from lower-level building blocks."
            ]
        }
    ],
    achievements: [
        {
            title: "Winner - Enigma 2k24",
            detail: "Built a stock market analysis tool using machine learning and sentiment analysis.",
            image: "images/hackathons/enigma-2k24.png",
            link: "https://drive.google.com/file/d/1rSANmu8EqABCVhXEYYRUiX6m6_wtrBBq/view?usp=drivesdk"
        },
        {
            title: "1st Runner-Up - Hackwell 5.0",
            detail: "Built a PDF metadata extraction pipeline using Regex and LLM APIs.",
            image: "images/hackathons/hackwell-5.png",
            link: "https://drive.google.com/file/d/1rWnDOuhiyCYZvDRq7j_qkObqBrITqYth/view?usp=drivesdk"
        }
    ],
    skills: [
        {
            group: "Languages",
            items: ["Java", "Python", "JavaScript"]
        },
        {
            group: "Frontend",
            items: ["React"]
        },
        {
            group: "Backend",
            items: ["Node.js", "Express", "Spring Boot", "Micronaut", "REST APIs", "JUnit"]
        },
        {
            group: "Databases",
            items: ["MongoDB", "SQL"]
        },
        {
            group: "Tools + Cloud",
            items: ["Git", "Linux", "AWS", "Docker", "Jenkins"]
        },
        {
            group: "AI",
            items: ["Machine Learning", "Deep Learning", "Scikit-learn", "LLM APIs"]
        },
        {
            group: "Core CS",
            items: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management Systems", "Operating Systems", "Computer Networks"]
        }
    ],
    education: [
        {
            institution: "Ramaiah Institute of Technology, Bengaluru",
            degree: "Bachelor of Engineering, Information Science",
            period: "Dec 2022 - 2026",
            result: "9.11 CGPA"
        },
        {
            institution: "Sri Adi Chunchanagiri Independent PU College, Shimoga",
            degree: "Pre-University Course - Science (PCMB)",
            period: "Nov 2020 - Apr 2022",
            result: "95.6%"
        },
        {
            institution: "Hongirana School of Excellence, Sagara",
            degree: "10th Grade - CBSE",
            period: "Apr 2019 - Mar 2020",
            result: "92.2%"
        }
    ],
    leadership: [
        {
            organization: "Mukti",
            role: "Core Member",
            summary: "Helped 300+ students with Linux troubleshooting, supported 30+ installations, and co-hosted 5+ open-source events."
        },
        {
            organization: "W3Onwards",
            role: "Core Member",
            summary: "Mentored 50+ juniors in web development through project-based learning."
        }
    ],
    social: [
        { label: "GitHub", href: "https://github.com/suhass434" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/suhass434/" },
        { label: "LeetCode", href: "https://leetcode.com/u/suhass145/" },
        { label: "YouTube", href: "https://www.youtube.com/@flyerss2809" }
    ],
    contact: {
        pitch: "Open to software engineering, full-stack, AI, and product-focused opportunities."
    }
};

export default portfolioData;
