# This file is only for editing file nodes, do not break the structure
## Project Description
Portfolio website for Bala Prakash S, built as an exact replica of the Naam Tamilar website design. Features a bilingual (Tamil/English) interface with complete professional information including education, projects, skills, certifications, and awards. The design follows the authentic Naam Tamilar color scheme with red, black, and gold accents.

## Key Features
- **Enhanced Navigation**: Sticky navigation bar with smooth scroll to sections and active state tracking
- **Bilingual Support**: Complete Tamil/English toggle with persistent language preference
- **Naam Tamilar Design**: Authentic political party-inspired visual design with red/black/gold theme
- **Comprehensive Portfolio**: All resume sections including education, projects, skills, certifications, awards
- **Fully Responsive**: Mobile-first design with collapsible navigation and optimized layouts for all screen sizes
- **Cultural Identity**: Strong Tamil cultural identity with proper font support and translations
- **Modern UX**: Smooth animations, hover effects, and professional presentation

## Data Storage
**Local Only:** (No tables used)
- Language preference: Zustand store with persist (localStorage)
- Portfolio content: Static data in translation files
- User interactions: Component state only

## SDK & External Services
**Devv SDK:** None used (static portfolio site)
**External APIs:** None
**Environment Variables:** None required

## Critical Notes
- Uses Noto Sans Tamil Google Font for proper Tamil text rendering
- Complete translations for all content in both English and Tamil
- Zustand with persist middleware for language preference storage
- Design system inspired by naamtamilar.org with custom CSS variables
- All sections from original resume included with proper styling

## File Structure
/src
├── components/
│   └── LanguageToggle.tsx # Bilingual toggle switch component
├── pages/
│   └── HomePage.tsx # Complete portfolio with navigation and responsive design
├── store/
│   └── language-store.ts # Language state management and translations
└── index.css # Enhanced Naam Tamilar design system with navigation styles