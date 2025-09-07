import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'en' | 'ta';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: 'en',
      setLanguage: (lang: Language) => set({ language: lang }),
      toggleLanguage: () => set({ language: get().language === 'en' ? 'ta' : 'en' }),
    }),
    {
      name: 'language-preference',
    }
  )
);

// Translation content
export const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    education: 'Education',
    projects: 'Projects',
    skills: 'Skills',
    certifications: 'Certifications',
    awards: 'Awards',
    contact: 'Contact',
    
    // Hero Section
    name: 'BALA PRAKASH S',
    title: 'Computer Science Engineer',
    subtitle: 'B.Tech, Computer Science and Engineering',
    year: '2026',
    location: 'Chennai, Tamil Nadu',
    
    // About
    aboutTitle: 'About Me',
    aboutDescription: 'Passionate Computer Science Engineering student with expertise in Full Stack Development, Artificial Intelligence, and emerging technologies. Dedicated to creating innovative solutions that bridge technology and real-world applications.',
    
    // Education
    educationTitle: 'Education',
    srmTitle: 'SRM IST-Ramapuram',
    srmDegree: 'B.Tech · Computer Science and Engineering',
    srmCgpa: 'CGPA - 8.57/10',
    velammalTitle: 'Velammal Vidyalaya',
    velammalDetails: 'Class XII - CBSE · MBPC · Annuppanadi, Madurai',
    velammalPercentage: 'Percentage - 68.6%',
    thaaiTitle: 'Thaai School',
    thaaiDetails: 'Class X - CBSE · Vadipatti, Madurai',
    thaaiPercentage: 'Percentage - 68%',
    
    // Projects
    projectsTitle: 'Projects',
    project1Title: 'Role Validator Application',
    project1Period: 'May 2024 - Jul 2024',
    project1Type: 'Personal Project',
    project1Tech: 'Python, Streamlit, Pinecone, RAG, Gemini, LLM, XML Parsing, XPath, Fuzzy Matching, Document Processing, NLP, Information Retrieval, Generative AI',
    project1Category: 'Artificial Intelligence / Natural Language Processing (NLP)',
    project1Description: 'The Role Validator Application is a Streamlit-based web tool designed to compare role definitions from an XML file with roles extracted from a PDF document. It uses RAG (Retrieval-Augmented Generation) techniques with Pinecone as a vector database and a Large Language Model (LLM) (e.g., Gemini) to process, index, and extract role information from PDFs. The main goal is to verify whether the roles mentioned in the PDF match the officially defined roles in the XML file.',
    
    project2Title: 'Full Stack AI Finance Platform',
    project2Period: 'Jul 2025 - Present',
    project2Type: 'Self Project',
    project2Tech: 'Next.js, Supabase, Tailwind CSS, Prisma, Inngest, ArcJet, Shadcn UI, Clerk Auth, Resend API, Gemini API, JavaScript, React',
    project2Category: 'Artificial Intelligence / Web Development / FinTech',
    project2Description: 'The Full Stack AI Finance Platform is a next-generation fintech web application built with Next.js and Supabase, designed to provide secure, AI-assisted financial insights and management. It integrates Gemini API for AI-driven analysis, Prisma for efficient database interaction, and Inngest for automated background workflows. ArcJet enhances application security, while Resend API powers email notifications. User authentication and onboarding are handled by Clerk, and the interface is styled with Tailwind CSS and Shadcn UI for a modern, responsive user experience.',
    
    project3Title: 'Full Stack AI Image Editor',
    project3Period: 'Feb 2023 - Mar 2023',
    project3Type: 'Self Project',
    project3Tech: 'Next.js, Fabric.js, Tailwind CSS, ImageKit, Shadcn UI, Convex, Clerk Auth, Unsplash API, JavaScript, React',
    project3Category: 'Artificial Intelligence / Web Development / Image Processing',
    project3Description: 'The Full Stack AI Image Editor is a modern web-based image editing application built with Next.js and powered by Fabric.js for dynamic canvas editing. Users can upload, edit, and enhance images using AI-driven tools, apply custom shapes/text, and fetch stock images directly from Unsplash. The app integrates ImageKit for optimized storage & CDN delivery, and Clerk for secure authentication. Convex handles backend functions and real-time data syncing, while Tailwind CSS and Shadcn UI provide a responsive and visually appealing interface.',
    
    // Skills
    skillsTitle: 'Technical Skills',
    skillsDescription: 'Expertise in modern technologies and frameworks',
    
    // Awards
    awardsTitle: 'Awards & Recognition',
    award1Title: 'Seminar & SharkTank',
    award1Date: 'Feb 2024',
    award1Organization: 'Poorvika · Cyber Carnival 2024',
    award1Description: 'Presented a seminar and participated in the SharkTank event during Cyber Carnival 2024, organized by Poorvika. Showcased innovative ideas and practical solutions in the field of technology, demonstrating problem-solving, presentation, and pitching skills in a competitive environment.',
    
    // Certifications
    certificationsTitle: 'Certifications',
    cert1Title: 'Practical Github Actions',
    cert1Date: 'Jun 2023',
    cert1Organization: 'LinkedIn Learning',
    cert1Description: 'Completed Practical GitHub Actions course, developing skills in creating, configuring, and automating workflows using GitHub Actions. Learned to integrate CI/CD pipelines, manage automation scripts, and optimize development processes for efficient software delivery.',
    
    cert2Title: 'Learning Full-Stack JavaScript Development',
    cert2Date: 'Jun 2023',
    cert2Organization: 'LinkedIn Learning',
    cert2Description: 'Completed Learning Full-Stack JavaScript Development: MongoDB, Node, and React, gaining practical skills in building end-to-end web applications. Covered backend development with Node.js, database management with MongoDB, and frontend development with React, integrating all layers to create dynamic, full-stack solutions.',
    
    cert3Title: 'React Essential Training',
    cert3Date: 'Aug 2025',
    cert3Organization: 'LinkedIn Learning',
    cert3Description: 'Completed React Essential Training, building a strong foundation in React.js for modern front-end development. Learned component-based architecture, state and props management, event handling, and best practices for creating dynamic, responsive, and maintainable web applications.',
    
    cert4Title: 'Web Development Fundamentals',
    cert4Date: 'Aug 2025',
    cert4Organization: 'IBM',
    cert4Description: 'Successfully completed Web Development Fundamentals certification from IBM, gaining foundational knowledge in HTML, CSS, JavaScript, and web application structure. Developed skills in building and styling web pages, implementing interactivity, and understanding core web technologies essential for front-end development.',
    
    cert5Title: 'Introduction to Career Skills in Software Development',
    cert5Date: 'Feb 2024',
    cert5Organization: 'LinkedIn Learning',
    cert5Description: 'Completed Introduction to Career Skills in Software Development, gaining insights into core software development concepts, career management strategies, and essential tech career skills. Covered foundational knowledge to prepare for a successful career in the technology industry, including best practices, professional growth, and industry expectations.',
    
    // Contact
    contactTitle: 'Contact Information',
    email: 'bs3122@srmist.edu.in',
    phone: '7010623408',
    address: 'No 5, Giri Nagar, Ramapuram, Chennai, Tamil Nadu 600089',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    
    // Languages
    languagesTitle: 'Languages',
    tamilNative: 'Tamil [Native Proficiency]',
    englishProfessional: 'English [Professional Working Proficiency]',
  },
  ta: {
    // Navigation
    home: 'முகப்பு',
    about: 'என்னைப் பற்றி',
    education: 'கல்வி',
    projects: 'திட்டங்கள்',
    skills: 'திறமைகள்',
    certifications: 'சான்றிதழ்கள்',
    awards: 'விருதுகள்',
    contact: 'தொடர்பு',
    
    // Hero Section
    name: 'பாலபிரகாஷ் எஸ்',
    title: 'கணினி அறிவியல் பொறியாளர்',
    subtitle: 'பி.டெக், கணினி அறிவியல் மற்றும் பொறியியல்',
    year: '2026',
    location: 'சென்னை, தமிழ்நாடு',
    
    // About
    aboutTitle: 'என்னைப் பற்றி',
    aboutDescription: 'முழு அடுக்கு மேம்பாடு, செயற்கை நுண்ணறிவு மற்றும் வளர்ந்து வரும் தொழில்நுட்பங்களில் நிபுணத்துவம் கொண்ட ஆர்வமுள்ள கணினி அறிவியல் பொறியியல் மாணவர். தொழில்நுட்பத்தையும் நிஜ உலக பயன்பாடுகளையும் இணைக்கும் புதுமையான தீர்வுகளை உருவாக்குவதில் அர்ப்பணிப்பு.',
    
    // Education
    educationTitle: 'கல்வி',
    srmTitle: 'SRM IST-ராமாபுரம்',
    srmDegree: 'பி.டெக் · கணினி அறிவியல் மற்றும் பொறியியல்',
    srmCgpa: 'CGPA - 8.57/10',
    velammalTitle: 'வேலம்மாள் வித்யாலயா',
    velammalDetails: 'வகுப்பு XII - CBSE · MBPC · அன்னுப்பனாடி, மதுரை',
    velammalPercentage: 'சதவீதம் - 68.6%',
    thaaiTitle: 'தாய் பள்ளி',
    thaaiDetails: 'வகுப்பு X - CBSE · வடிப்பட்டி, மதுரை',
    thaaiPercentage: 'சதவீதம் - 68%',
    
    // Projects
    projectsTitle: 'திட்டங்கள்',
    project1Title: 'பங்கு சரிபார்ப்பு பயன்பாடு',
    project1Period: 'மே 2024 - ஜூலை 2024',
    project1Type: 'தனிப்பட்ட திட்டம்',
    project1Tech: 'Python, Streamlit, Pinecone, RAG, Gemini, LLM, XML பாகுபடுத்தல், XPath, Fuzzy Matching, ஆவண செயலாக்கம், NLP, தகவல் மீட்டெடுப்பு, உருவாக்கும் AI',
    project1Category: 'செயற்கை நுண்ணறிவு / இயற்கை மொழி செயலாக்கம் (NLP)',
    project1Description: 'பங்கு சரிபார்ப்பு பயன்பாடு என்பது XML கோப்பிலிருந்து பங்கு வரையறைகளை PDF ஆவணத்திலிருந்து பிரித்தெடுக்கப்பட்ட பங்குகளுடன் ஒப்பிட வடிவமைக்கப்பட்ட Streamlit-அடிப்படையிலான வலை கருவியாகும்.',
    
    project2Title: 'முழு அடுக்கு AI நிதி தளம்',
    project2Period: 'ஜூலை 2025 - தற்போது',
    project2Type: 'சுய திட்டம்',
    project2Tech: 'Next.js, Supabase, Tailwind CSS, Prisma, Inngest, ArcJet, Shadcn UI, Clerk Auth, Resend API, Gemini API, JavaScript, React',
    project2Category: 'செயற்கை நுண்ணறிவு / வலை மேம்பாடு / FinTech',
    project2Description: 'முழு அடுக்கு AI நிதி தளம் என்பது Next.js மற்றும் Supabase உடன் கட்டமைக்கப்பட்ட அடுத்த தலைமுறை fintech வலை பயன்பாடாகும்.',
    
    project3Title: 'முழு அடுக்கு AI படம் எடிட்டர்',
    project3Period: 'பிப் 2023 - மார் 2023',
    project3Type: 'சுய திட்டம்',
    project3Tech: 'Next.js, Fabric.js, Tailwind CSS, ImageKit, Shadcn UI, Convex, Clerk Auth, Unsplash API, JavaScript, React',
    project3Category: 'செயற்கை நுண்ணறிவு / வலை மேம்பாடு / படம் செயலாக்கம்',
    project3Description: 'முழு அடுக்கு AI படம் எடிட்டர் என்பது Next.js உடன் கட்டமைக்கப்பட்ட நவீன வலை அடிப்படையிலான படம் எடிட்டிங் பயன்பாடாகும்.',
    
    // Skills
    skillsTitle: 'தொழில்நுட்ப திறமைகள்',
    skillsDescription: 'நவீன தொழில்நுட்பங்கள் மற்றும் கட்டமைப்புகளில் நிபுணத்துவம்',
    
    // Awards
    awardsTitle: 'விருதுகள் மற்றும் அங்கீகாரம்',
    award1Title: 'கருத்தரங்கு மற்றும் SharkTank',
    award1Date: 'பிப் 2024',
    award1Organization: 'பூர்விகா · சைபர் கார்னிவல் 2024',
    award1Description: 'பூர்விகா ஏற்பாடு செய்த சைபர் கார்னிவல் 2024 இல் கருத்தரங்கு வழங்கி SharkTank நிகழ்வில் பங்கேற்றார்.',
    
    // Certifications
    certificationsTitle: 'சான்றிதழ்கள்',
    cert1Title: 'நடைமுறை Github Actions',
    cert1Date: 'ஜூன் 2023',
    cert1Organization: 'LinkedIn Learning',
    cert1Description: 'நடைமுறை GitHub Actions பாடத்தை நிறைவு செய்து, GitHub Actions பயன்படுத்தி பணி ஓட்டங்களை உருவாக்குதல், கட்டமைத்தல் மற்றும் தானியங்குபடுத்துதல் திறன்களை வளர்த்துக் கொண்டார்.',
    
    cert2Title: 'முழு அடுக்கு JavaScript மேம்பாடு கற்றல்',
    cert2Date: 'ஜூன் 2023',
    cert2Organization: 'LinkedIn Learning',
    cert2Description: 'முழு அடுக்கு JavaScript மேம்பாடு: MongoDB, Node, மற்றும் React கற்றல் நிறைவு செய்து, முடிவிலிருந்து முடிவு வரை வலை பயன்பாடுகளை உருவாக்குவதில் நடைமுறை திறன்களைப் பெற்றார்.',
    
    cert3Title: 'React அத்தியாவசிய பயிற்சி',
    cert3Date: 'ஆக 2025',
    cert3Organization: 'LinkedIn Learning',
    cert3Description: 'React அத்தியாவசிய பயிற்சியை நிறைவு செய்து, நவீன முன்-இறுதி மேம்பாட்டிற்கான React.js இல் வலுவான அடித்தளத்தை உருவாக்கினார்.',
    
    cert4Title: 'வலை மேம்பாட்டு அடிப்படைகள்',
    cert4Date: 'ஆக 2025',
    cert4Organization: 'IBM',
    cert4Description: 'IBM இலிருந்து வலை மேம்பாட்டு அடிப்படைகள் சான்றிதழை வெற்றிகரமாக நிறைவு செய்து, HTML, CSS, JavaScript மற்றும் வலை பயன்பாட்டு கட்டமைப்பில் அடிப்படை அறிவைப் பெற்றார்.',
    
    cert5Title: 'மென்பொருள் மேம்பாட்டில் தொழில் திறன்களுக்கான அறிமுகம்',
    cert5Date: 'பிப் 2024',
    cert5Organization: 'LinkedIn Learning',
    cert5Description: 'மென்பொருள் மேம்பாட்டில் தொழில் திறன்களுக்கான அறிமுகத்தை நிறைவு செய்து, முக்கிய மென்பொருள் மேம்பாட்டு கருத்துகள், தொழில் மேலாண்மை உத்திகள் மற்றும் அத்தியாவசிய தொழில்நுட்ப தொழில் திறன்களில் நுண்ணறிவுகளைப் பெற்றார்.',
    
    // Contact
    contactTitle: 'தொடர்புத் தகவல்',
    email: 'bs3122@srmist.edu.in',
    phone: '7010623408',
    address: 'எண் 5, கிரி நகர், ராமாபுரம், சென்னை, தமிழ்நாடு 600089',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    
    // Languages
    languagesTitle: 'மொழிகள்',
    tamilNative: 'தமிழ் [தாய்மொழி திறன்]',
    englishProfessional: 'ஆங்கிலம் [தொழில்முறை பணி திறன்]',
  }
};

export const useTranslation = () => {
  const language = useLanguageStore((state) => state.language);
  return translations[language];
};