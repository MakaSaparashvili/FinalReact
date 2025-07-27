CV Project – Personal Portfolio

This is a personal CV website built using Next.js, showcasing professional information like education, work experience, and skills. The project includes an editable skills section with persistent local storage.

Overview:
The project is structured as a minimal, desktop-only personal CV:
Homepage: Shows your full name and entry point to the information.
Info Page: Includes detailed sections like About, Education, Experience, Skills, Portfolio, Contacts and Feedbacks.
Editable Skills: The Skills section includes an Edit function, where you can add or remove skill items dynamically. All changes are saved locally via localStorage.

Features:
-Clean and modern UI inspired by Figma design
-Navigation between homepage and information page and edit page
-Skills section with:
      -Green progress bars
      -Skill name display
      -Edit button to add/remove skills
      -State persistence using localStorage without a backend
-Sidebar that can be collapsed to icons-only mode
-Scroll-to-section navigation
-Sticky sidebar with profile information.


Live Demo:
   - Local:        http://localhost:3001
   - Network:      http://192.168.100.202:3001

Built With:
-Next.js
-React Router
-Vanilla CSS (global.css)
-Google Fonts (Open Sans)
-localStorage API for state persistence
-Figma for pixel-perfect UI reference


Project Structure:
/app
  /Info/Page.js                 → Main Info Page (with sections like Education, Skills, etc.)
  /Skills/edit/page.js          → Editable Skills Page
  /Layout.js                    → RootLayout
  /page.js                      → Home Page
/public/assets                  → Icons and images
/styles                         → global.css, edit.css, info.css
/units/skillStorage.js          → skillStorage.js (localStorage logic)


How It Works:
-When editing skills, new entries are saved in localStorage via helper functions in utils/skillStorage.js.
-The InfoPage reads from localStorage to show updated skill bars.
-All progress bars are rendered with dynamic widths and labels.
-Sidebar collapse state is toggled via a button and styled accordingly with CSS transitions.

Author
Maka Saparashvili

Mentor
Ketevan Gagua

