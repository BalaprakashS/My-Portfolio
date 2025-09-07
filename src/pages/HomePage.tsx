import { LanguageToggle } from '@/components/LanguageToggle';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useLanguageStore, useTranslation } from '@/store/language-store';
import {
  BookOpen,
  Code,
  FileText,
  FolderOpen,
  Github,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Trophy,
  User,
  X
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';


export default function HomePage() {
  const t = useTranslation();
  const { language } = useLanguageStore();
  const isEnglish = language === 'en';
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en"); 
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("Bala-Form.mp4");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const skills = [
    'JavaScript', 'React.js', 'Python', 'SQL', 'Node.js', 'Next.js', 
    'TypeScript', 'Tailwind CSS', 'MongoDB', 'AI/ML', 'NLP', 'Git'
  ];

  const navItems = [
    { id: 'home', label: isEnglish ? 'Home' : 'முகப்பு', icon: User },
    { id: 'about', label: isEnglish ? 'About' : 'பற்றி', icon: User },
    { id: 'education', label: isEnglish ? 'Education' : 'கல்வி', icon: GraduationCap },
    { id: 'projects', label: isEnglish ? 'Projects' : 'திட்டங்கள்', icon: FolderOpen },
    { id: 'skills', label: isEnglish ? 'Skills' : 'திறன்கள்', icon: Code },
    { id: 'awards', label: isEnglish ? 'Awards' : 'விருதுகள்', icon: Trophy },
    { id: 'certifications', label: isEnglish ? 'Certifications' : 'சான்றிதழ்கள்', icon: FileText },
    { id: 'languages', label: isEnglish ? 'Languages' : 'மொழிகள்', icon: Languages },
    { id: 'contact', label: isEnglish ? 'Contact' : 'தொடர்பு', icon: Phone }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  setIsMobileMenuOpen(false);

  if (audioRef.current) {
    const audio = audioRef.current;
    audio.currentTime = 0; // start from beginning
    audio.volume = 0.5;
    audio.play().catch(err => console.warn("Audio play blocked:", err));

    // Stop audio after 3 seconds
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, 1150);
  }
};


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Navigation Header */}
      <audio ref={audioRef} src="" preload="auto" />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 via-red-700 to-red-800 shadow-2xl">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:block">
              <span className="font-bold text-xl text-white text-wrap">
                {t.name}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex nav-links p-4 rem">
            {navItems.map((item) => {
              if (item.id === "contact" && language === "ta") return null;

              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-yellow-400 text-red-800 shadow-lg transform scale-105"
                      : "text-white hover:bg-white/10 hover:text-yellow-300"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button and Language Toggle */}
          <div className="flex items-center gap-3">
            <LanguageToggle
              currentLanguage={currentLanguage} // or value={currentLanguage} if needed
              onChange={(lang: string) => setCurrentLanguage(lang as "en" | "ta")}
            />

            <button
              className="lg:hidden mobile-menu-button p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden mobile-menu ${
            isMobileMenuOpen ? "open" : ""
          }`}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => {
              if (item.id === "contact" && language === "ta") return null;

              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left nav-link flex items-center gap-3 px-4 py-3 transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-yellow-400 text-red-800 shadow-lg"
                      : "text-white hover:bg-white/10 hover:text-yellow-300"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>


      {/* Hero Section */}
      <section id="home" className="hero-section text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center hero-content">
            <div className="mb-8">
              <div className="w-80 h-90 lg:w-80 lg:h-90 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl overflow-hidden">
                <img
                  src="../DSC_0335[1].jpg"   // <-- replace with your image path
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${!isEnglish ? 'tamil-text' : ''}`}>
              {t.name}
            </h1>
            <div className="naam-accent text-transparent bg-clip-text mb-8">
              <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold ${!isEnglish ? 'tamil-text' : ''}`}>
                {t.title}
              </h2>
            </div>
            <p className={`text-xl lg:text-2xl mb-4 ${!isEnglish ? 'tamil-text' : ''}`}>
              {t.subtitle}
            </p>
            <p className="text-lg lg:text-xl opacity-90 mb-12">{t.year}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-sm lg:text-base">
              <div className="flex items-center justify-center gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span>{t.email}</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span>{t.phone}</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className={!isEnglish ? 'tamil-text' : ''}>{t.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-12 text-center section-divider p-4 ${!isEnglish ? 'tamil-text' : ''}`}>
              {t.aboutTitle}
            </h2>
            <Card className="naam-card">
              <CardContent className="p-8 lg:p-12">
                <p className={`text-lg lg:text-xl leading-relaxed text-gray-700 ${!isEnglish ? 'tamil-text' : ''}`}>
                  {t.aboutDescription}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-12 text-center section-divider p-4 ${!isEnglish ? 'tamil-text' : ''}`}>
              {t.educationTitle}
            </h2>
            <div className="space-y-8">
              {/* SRM */}
              <Card className="naam-card">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl lg:text-2xl font-bold text-red-600">{t.srmTitle}</CardTitle>
                        <p className={`text-gray-600 mt-1 ${!isEnglish ? 'tamil-text' : ''}`}>{t.srmDegree}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-red-600 text-red-600 text-sm">2026</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-gray-800">{t.srmCgpa}</p>
                </CardContent>
              </Card>

              {/* Velammal */}
              <Card className="naam-card">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl lg:text-2xl font-bold text-red-600">{t.velammalTitle}</CardTitle>
                        <p className={`text-gray-600 mt-1 ${!isEnglish ? 'tamil-text' : ''}`}>{t.velammalDetails}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-red-600 text-red-600 text-sm">2022</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-gray-800">{t.velammalPercentage}</p>
                </CardContent>
              </Card>

              {/* Thaai School */}
              <Card className="naam-card">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl lg:text-2xl font-bold text-red-600">{t.thaaiTitle}</CardTitle>
                        <p className={`text-gray-600 mt-1 ${!isEnglish ? 'tamil-text' : ''}`}>{t.thaaiDetails}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-red-600 text-red-600 text-sm">2020</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-gray-800">{t.thaaiPercentage}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-12 text-center section-divider p-4 ${!isEnglish ? 'tamil-text' : ''}`}>
              {t.projectsTitle}
            </h2>
            <div className="space-y-8">
              {/* Project 1 */}
              <Card className="naam-card">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Code className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <CardTitle className={`text-xl lg:text-2xl font-bold text-red-600 ${!isEnglish ? 'tamil-text' : ''}`}>
                          {t.project1Title}
                        </CardTitle>
                        <p className="text-gray-600 mt-1">{t.project1Period}</p>
                        <Badge variant="secondary" className="mt-2">{t.project1Type}</Badge>
                      </div>
                    </div>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200 self-start">
                      {t.project1Category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={`text-gray-700 mb-6 leading-relaxed ${!isEnglish ? 'tamil-text' : ''}`}>
                    {t.project1Description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {t.project1Tech.split(', ').map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Project 2 */}
              <Card className="naam-card">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Code className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <CardTitle className={`text-xl lg:text-2xl font-bold text-red-600 ${!isEnglish ? 'tamil-text' : ''}`}>
                          {t.project2Title}
                        </CardTitle>
                        <p className="text-gray-600 mt-1">{t.project2Period}</p>
                        <Badge variant="secondary" className="mt-2">{t.project2Type}</Badge>
                      </div>
                    </div>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200 self-start">
                      {t.project2Category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={`text-gray-700 mb-6 leading-relaxed ${!isEnglish ? 'tamil-text' : ''}`}>
                    {t.project2Description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {t.project2Tech.split(', ').map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Project 3 */}
              <Card className="naam-card">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Code className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <CardTitle className={`text-xl lg:text-2xl font-bold text-red-600 ${!isEnglish ? 'tamil-text' : ''}`}>
                          {t.project3Title}
                        </CardTitle>
                        <p className="text-gray-600 mt-1">{t.project3Period}</p>
                        <Badge variant="secondary" className="mt-2">{t.project3Type}</Badge>
                      </div>
                    </div>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200 self-start">
                      {t.project3Category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={`text-gray-700 mb-6 leading-relaxed ${!isEnglish ? 'tamil-text' : ''}`}>
                    {t.project3Description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {t.project3Tech.split(', ').map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-12 text-center section-divider p-4 ${!isEnglish ? 'tamil-text' : ''}`}>
              {t.skillsTitle}
            </h2>
            <Card className="naam-card">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                    <Code className="w-8 h-8 text-red-600" />
                  </div>
                  <p className={`text-center text-gray-600 text-lg ${!isEnglish ? 'tamil-text' : ''}`}>
                    {t.skillsDescription}
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      className="bg-red-600 text-white hover:bg-red-700 px-4 py-3 text-sm justify-center font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-12 text-center section-divider p-4 ${!isEnglish ? 'tamil-text' : ''}`}>
              {t.awardsTitle}
            </h2>
            <Card className="naam-card">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Trophy className="w-8 h-8 text-yellow-600" />
                    </div>
                    <div>
                      <CardTitle className={`text-xl lg:text-2xl font-bold text-red-600 ${!isEnglish ? 'tamil-text' : ''}`}>
                        {t.award1Title}
                      </CardTitle>
                      <p className="text-gray-600 mt-1">{t.award1Organization}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-red-600 text-red-600 self-start">
                    {t.award1Date}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className={`text-gray-700 leading-relaxed ${!isEnglish ? 'tamil-text' : ''}`}>
                  {t.award1Description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-12 text-center section-divider p-4 ${!isEnglish ? 'tamil-text' : ''}`}>
              {t.certificationsTitle}
            </h2>
            <div className="space-y-6">
              {/* Cert 1 */}
              <Card className="naam-card">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg lg:text-xl font-bold text-red-600">
                          {t.cert1Title}
                        </CardTitle>
                        <p className="text-gray-600 text-sm mt-1">{t.cert1Organization}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-red-600 text-red-600 text-sm self-start">
                      {t.cert1Date}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={`text-gray-700 text-sm leading-relaxed ${!isEnglish ? 'tamil-text' : ''}`}>
                    {t.cert1Description}
                  </p>
                </CardContent>
              </Card>

              {/* Cert 2 */}
              <Card className="naam-card">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg lg:text-xl font-bold text-red-600">
                          {t.cert2Title}
                        </CardTitle>
                        <p className="text-gray-600 text-sm mt-1">{t.cert2Organization}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-red-600 text-red-600 text-sm self-start">
                      {t.cert2Date}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={`text-gray-700 text-sm leading-relaxed ${!isEnglish ? 'tamil-text' : ''}`}>
                    {t.cert2Description}
                  </p>
                </CardContent>
              </Card>

              {/* Cert 3 */}
              <Card className="naam-card">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg lg:text-xl font-bold text-red-600">
                          {t.cert3Title}
                        </CardTitle>
                        <p className="text-gray-600 text-sm mt-1">{t.cert3Organization}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-red-600 text-red-600 text-sm self-start">
                      {t.cert3Date}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={`text-gray-700 text-sm leading-relaxed ${!isEnglish ? 'tamil-text' : ''}`}>
                    {t.cert3Description}
                  </p>
                </CardContent>
              </Card>

              {/* Cert 4 */}
              <Card className="naam-card">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg lg:text-xl font-bold text-red-600">
                          {t.cert4Title}
                        </CardTitle>
                        <p className="text-gray-600 text-sm mt-1">{t.cert4Organization}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-red-600 text-red-600 text-sm self-start">
                      {t.cert4Date}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={`text-gray-700 text-sm leading-relaxed ${!isEnglish ? 'tamil-text' : ''}`}>
                    {t.cert4Description}
                  </p>
                </CardContent>
              </Card>

              {/* Cert 5 */}
              <Card className="naam-card">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg lg:text-xl font-bold text-red-600">
                          {t.cert5Title}
                        </CardTitle>
                        <p className="text-gray-600 text-sm mt-1">{t.cert5Organization}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-red-600 text-red-600 text-sm self-start">
                      {t.cert5Date}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={`text-gray-700 text-sm leading-relaxed ${!isEnglish ? 'tamil-text' : ''}`}>
                    {t.cert5Description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-12 text-center section-divider p-4 ${!isEnglish ? 'tamil-text' : ''}`}>
              {t.languagesTitle}
            </h2>
            <Card className="naam-card">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                    <Languages className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="flex items-center gap-4 p-6 bg-red-50 rounded-lg">
                    <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                    <span className={`text-lg font-medium ${!isEnglish ? 'tamil-text' : ''}`}>
                      {t.tamilNative}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 p-6 bg-red-50 rounded-lg">
                    <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                    <span className={`text-lg font-medium ${!isEnglish ? 'tamil-text' : ''}`}>
                      {t.englishProfessional}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto"> {/* Increased from max-w-4xl */}
            <h2 className={`text-3xl lg:text-4xl font-bold mb-12 text-center section-divider p-4 ${!isEnglish ? 'tamil-text' : ''}`}>
              {t.contactTitle}
            </h2>

            <Card className="naam-card">
              <CardContent className="p-8 lg:p-12">
                <div className="grid sm:grid-cols-2 gap-8 mb-8">
                  {/* Contact Info */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-red-50 rounded-lg">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-red-600" />
                      </div>
                      <span className="text-lg font-medium">{t.email}</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-red-50 rounded-lg">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-red-600" />
                      </div>
                      <span className="text-lg font-medium">{t.phone}</span>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-red-600" />
                      </div>
                      <span className={`text-lg font-medium ${!isEnglish ? 'tamil-text' : ''}`}>
                        {t.address}
                      </span>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <form
  className="space-y-4"
  onSubmit={async (e) => {
    e.preventDefault();
    
    // Show loading video modal immediately
    setCurrentVideo("");
    setIsVideoModalOpen(true);
    setIsSubmitting(true);
    
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLTextAreaElement).value;
    
    // Start both the video and the API call simultaneously
    const videoPromise = new Promise<void>((resolve) => {
      if (videoRef.current) {
        const video = videoRef.current;
        video.currentTime = 0;
        video.play().catch(err => console.warn("Video autoplay blocked:", err));
        
        const handleVideoEnd = () => {
          video.removeEventListener('ended', handleVideoEnd);
          resolve();
        };
        video.addEventListener('ended', handleVideoEnd);
      } else {
        // Fallback if video ref not available
        setTimeout(resolve, 3000);
      }
    });
    
    const apiPromise = (async () => {
      try {
        const response = await fetch("https://portfolio-backend-wivi.onrender.com/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
        return await response.json();
      } catch (err) {
        console.error(err);
        return { success: false };
      }
    })();
    
    // Wait for both the video to complete AND the API call to finish
    const [, result] = await Promise.all([videoPromise, apiPromise]);
    
    // Change video based on result
    if (result.success) {
      setCurrentVideo("");
      // Clear form fields
      (document.getElementById("name") as HTMLInputElement).value = "";
      (document.getElementById("email") as HTMLInputElement).value = "";
      (document.getElementById("message") as HTMLTextAreaElement).value = "";
    } else {
      setCurrentVideo("");
    }
    
    // Play the result video
    setTimeout(() => {
      if (videoRef.current) {
        const video = videoRef.current;
        video.currentTime = 0;
        video.play().catch(err => console.warn("Video autoplay blocked:", err));
      }
    }, 100);
    
    setIsSubmitting(false);
  }}
>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                        {isEnglish ? 'Name' : 'பெயர்'}
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder={isEnglish ? 'Your Name' : 'உங்கள் பெயர்'}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                        {isEnglish ? 'Email' : 'மின்னஞ்சல்'}
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder={isEnglish ? 'Your Email' : 'உங்கள் மின்னஞ்சல்'}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                        {isEnglish ? 'Message' : 'செய்தி'}
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder={isEnglish ? 'Your Message' : 'உங்கள் செய்தி'}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                        required
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300">
                      {isEnglish ? 'Send Message' : 'செய்தியை அனுப்பு'}
                    </Button>
                  </form>
                </div>

                <Separator className="my-8" />

                {/* Social Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Button
                    className="naam-button flex items-center gap-3 text-lg py-3 px-6"
                    onClick={() => {
                      // Play audio
                      if (audioRef.current) {
                        const audio = audioRef.current;
                        audio.currentTime = 0;
                        audio.volume = 0.5;
                        audio.play().catch(err => console.warn("Audio play blocked:", err));
                        setTimeout(() => {
                          audio.pause();
                          audio.currentTime = 0;
                        }, 1150);
                      }
                      // Redirect to LinkedIn
                      window.open('https://www.linkedin.com/in/balaprakash-s/', '_blank');
                    }}
                  >
                    <Linkedin className="w-5 h-5" />
                    {t.linkedin}
                  </Button>

                  <Button
                    className="naam-button flex items-center gap-3 text-lg py-3 px-6"
                    onClick={() => {
                      // Play audio
                      if (audioRef.current) {
                        const audio = audioRef.current;
                        audio.currentTime = 0;
                        audio.volume = 0.5;
                        audio.play().catch(err => console.warn("Audio play blocked:", err));
                        setTimeout(() => {
                          audio.pause();
                          audio.currentTime = 0;
                        }, 1150);
                      }
                      // Redirect to GitHub
                      window.open('https://github.com/BalaprakashS', '_blank');
                    }}
                  >
                    <Github className="w-5 h-5" />
                    {t.github}
                  </Button>
                </div>

              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl bg-gray-900 rounded-lg shadow-2xl">
            <button 
              className="absolute top-3 right-3 text-white text-xl font-bold z-50 hover:text-gray-300 transition-colors"
              onClick={() => {
                setIsVideoModalOpen(false);
                setCurrentVideo("Bala-Form.mp4");
                if (videoRef.current) {
                  videoRef.current.pause();
                  videoRef.current.currentTime = 0;
                }
              }}
              disabled={isSubmitting}
              style={{ opacity: isSubmitting ? 0.5 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
            >
              ✕
            </button>
            <video 
              ref={videoRef} 
              src={`/${currentVideo}`}
              controls={!isSubmitting} // Hide controls during form submission
              autoPlay 
              className="w-full rounded-lg"
              onEnded={() => {
                // Auto-close modal for success/failure videos after they end
                if (currentVideo !== "Bala-Form.mp4") {
                  setTimeout(() => {
                    setIsVideoModalOpen(false);
                    setCurrentVideo("Bala-Form.mp4");
                  }, 1000); // 1 second delay before closing
                }
              }}
            />
            
            {/* Loading indicator during form submission */}
            {isSubmitting && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                <div className="text-white text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
                  <p className="text-sm">
                    {isEnglish ? 'Sending message...' : 'செய்தி அனுப்பப்படுகிறது...'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-600 to-red-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 font-bold text-2xl">BP</span>
            </div>
            <p className={`text-xl font-semibold mb-2 ${!isEnglish ? 'tamil-text' : ''}`}>
              {t.name}
            </p>
          </div>
          <p className={`text-lg opacity-90 ${!isEnglish ? 'tamil-text' : ''}`}>
            © 2025 {t.name}. {isEnglish ? 'All rights reserved.' : 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டுள்ளன.'}
          </p>
        </div>
      </footer>
    </div>
  );
}
