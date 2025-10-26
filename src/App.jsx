import { useState } from 'react';
import { Menu, X, Anchor, Map, BookOpen, Mail } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const Navigation = () => (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Anchor className="w-6 h-6" />
            <h1 className="text-xl font-bold">The Navigator's Blog</h1>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <button onClick={() => setCurrentPage('home')} className="hover:text-yellow-300 transition">Home</button>
            <button onClick={() => setCurrentPage('about')} className="hover:text-yellow-300 transition">About</button>
            <button onClick={() => setCurrentPage('blog')} className="hover:text-yellow-300 transition">Blog</button>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button onClick={() => { setCurrentPage('home'); setMenuOpen(false); }} className="block w-full text-left hover:text-yellow-300">Home</button>
            <button onClick={() => { setCurrentPage('about'); setMenuOpen(false); }} className="block w-full text-left hover:text-yellow-300">About</button>
            <button onClick={() => { setCurrentPage('blog'); setMenuOpen(false); }} className="block w-full text-left hover:text-yellow-300">Blog</button>
          </div>
        )}
      </div>
    </nav>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-lg mb-2">Made with love from the East Blue 🌊</p>
        <p className="text-sm text-gray-400">© 2025 Red-HairedDev • All rights reserved</p>
      </div>
    </footer>
  );

  const BlogCard = ({ title, excerpt, onClick }) => (
    <div onClick={onClick} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition cursor-pointer border-l-4 border-blue-600">
      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600">{excerpt}</p>
      <p className="text-blue-600 mt-3 font-semibold">Read more →</p>
    </div>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">Logbook of the Thousand Sunny</h1>
          <p className="text-2xl text-gray-600 italic">Navigating the Cyber Seas, One Exploit at a Time</p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <p className="text-3xl text-center mb-6">🏴‍☠️ Welcome aboard, nakama!</p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Set sail with me through the Grand Line of cybersecurity and ethical hacking. Here, we chart unexplored 
            territories of code, hunt for digital treasures, and navigate the treacherous waters of the dark web. 
            Whether you're a rookie pirate or a seasoned captain, there's always a new island to discover.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center">
            <Map className="w-8 h-8 mr-3" />
            Latest Adventures
          </h2>
          <div className="space-y-4">
            <BlogCard 
              title="Charting the Grand Line: A Hacker's Guide to Recon"
              excerpt="Every great pirate needs a map. In cybersecurity, that map is built through reconnaissance..."
              onClick={() => setCurrentPage('post1')}
            />
            <BlogCard 
              title="Devil Fruits of the Net: Discovering Hidden Payloads"
              excerpt="Devil Fruits grant incredible powers at a cost. Malicious payloads are similar..."
              onClick={() => setCurrentPage('post2')}
            />
            <BlogCard 
              title="When Metadata Reveals the Treasure Map"
              excerpt="The greatest treasures are often hidden in plain sight. Metadata is that hidden treasure..."
              onClick={() => setCurrentPage('post3')}
            />
            <BlogCard 
              title="Navigating the Job Hunt: A Pirate's Guide to Career Seas"
              excerpt="The cybersecurity job market feels like sailing through a storm. Here's how to chart your course..."
              onClick={() => setCurrentPage('post4')}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">About the Navigator</h1>
        
        <div className="bg-white rounded-lg shadow-xl p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Who am I?</h2>
            <p className="text-gray-700 leading-relaxed">
              They call me <strong>Red-HairedDev</strong>, a wandering navigator of the digital seas. I set sail from 
              the port town of Loguetown in the East Blue, where I first discovered the thrill of cracking codes and 
              mapping hidden networks.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Like Nami reading the winds, I read data streams. Like Luffy seeking the One Piece, I seek the ultimate 
            exploit—knowledge itself.
          </p>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">My Crew's Skills:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">🗺️</span>
                <span>Reconnaissance & OSINT</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🔓</span>
                <span>Ethical Hacking & Pentesting</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🌊</span>
                <span>Network Security</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">💎</span>
                <span>Data Analysis & Forensics</span>
              </li>
            </ul>
          </div>

          <p className="text-gray-700 italic">
            "The sea is vast, and there's always more to learn. Join me on this journey!"
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Want to collaborate on treasure hunts?</h3>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <a href="mailto:namithedev@proton.me" className="text-blue-600 hover:underline">
                namithedev@proton.me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const BlogListPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 flex items-center">
          <BookOpen className="w-10 h-10 mr-4" />
          All Adventures
        </h1>
        
        <div className="space-y-4">
          <BlogCard 
            title="Charting the Grand Line: A Hacker's Guide to Recon"
            excerpt="Every great pirate needs a map. In cybersecurity, that map is built through reconnaissance..."
            onClick={() => setCurrentPage('post1')}
          />
          <BlogCard 
            title="Devil Fruits of the Net: Discovering Hidden Payloads"
            excerpt="Devil Fruits grant incredible powers at a cost. Malicious payloads are similar..."
            onClick={() => setCurrentPage('post2')}
          />
          <BlogCard 
            title="When Metadata Reveals the Treasure Map"
            excerpt="The greatest treasures are often hidden in plain sight. Metadata is that hidden treasure..."
            onClick={() => setCurrentPage('post3')}
          />
          <BlogCard 
            title="Navigating the Job Hunt: A Pirate's Guide to Career Seas"
            excerpt="The cybersecurity job market feels like sailing through a storm. Here's how to chart your course..."
            onClick={() => setCurrentPage('post4')}
          />
        </div>
      </div>
    </div>
  );

  const BlogPost1 = () => (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button onClick={() => setCurrentPage('blog')} className="text-blue-600 hover:underline mb-6">
          ← Back to all posts
        </button>
        
        <article className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">Charting the Grand Line: A Hacker's Guide to Recon</h1>
          
          <div className="prose max-w-none text-gray-700 space-y-6">
            <p className="text-lg">
              Every great pirate needs a map. In cybersecurity, that map is built through reconnaissance—the art of 
              gathering intelligence before setting sail into unknown waters.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">The Four Seas of Recon:</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-blue-800">1. Passive Recon (East Blue)</h3>
                <p>Observing from afar without touching the target. Think WHOIS lookups, DNS enumeration, and social media intelligence.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-800">2. Active Recon (West Blue)</h3>
                <p>Direct engagement with the target. Port scanning, vulnerability assessments, and network mapping.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-800">3. OSINT (North Blue)</h3>
                <p>Open-Source Intelligence gathering. The treasure trove of publicly available data waiting to be discovered.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-800">4. Social Engineering (South Blue)</h3>
                <p>The human element. Sometimes the weakest link isn't technical—it's psychological.</p>
              </div>
            </div>

            <div className="my-8 bg-gray-100 p-4 rounded-lg">
              <p className="text-center text-gray-600 italic mb-2">Photo taken during my last voyage:</p>
              <img 
                src="/Sunny_Day_PortTown.jpg" 
                alt="Sunny Day Port Town"
                className="w-full h-64 object-cover rounded"
              />
              <p className="text-center text-sm text-gray-500 mt-2">Sunny_Day_PortTown_Nami.jpg</p>
              <p className="text-center text-xs text-gray-400 mt-1">Right-click → Save image to download</p>
            </div>

            <p className="font-bold text-gray-800">Remember:</p>
            <p>A good navigator never sails blind. Chart your course, understand the waters, and always have an escape route.</p>

            <p className="italic text-right">
              Until next time, keep your compass steady!<br/>
              — Red-HairedDev
            </p>
          </div>
        </article>
      </div>
    </div>
  );

  const BlogPost2 = () => (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button onClick={() => setCurrentPage('blog')} className="text-blue-600 hover:underline mb-6">
          ← Back to all posts
        </button>
        
        <article className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">Devil Fruits of the Net: Discovering Hidden Payloads</h1>
          
          <div className="prose max-w-none text-gray-700 space-y-6">
            <p className="text-lg">
              In the world of One Piece, Devil Fruits grant incredible powers at a cost. In cybersecurity, malicious 
              payloads are similar—they promise functionality but hide dangerous secrets.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Common Devil Fruit Payloads:</h2>

            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-xl font-bold text-gray-800">🍎 The Rubber-Rubber Payload (Polymorphic Malware)</h3>
                <p>Like Luffy's stretching abilities, these change shape to avoid detection. They mutate their code signature with each infection.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-bold text-gray-800">❄️ The Ice-Ice Payload (Ransomware)</h3>
                <p>Freezes your entire system, demanding treasure (ransom) for release. Cold, calculated, devastating.</p>
              </div>

              <div className="border-l-4 border-gray-500 pl-4">
                <h3 className="text-xl font-bold text-gray-800">💨 The Smoke-Smoke Payload (Rootkits)</h3>
                <p>Becomes invisible, hiding deep in your system's core. Nearly impossible to detect without specialized tools.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Detection Techniques:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Static analysis (examining code without execution)</li>
              <li>Dynamic analysis (observing behavior in sandbox)</li>
              <li>Signature-based detection</li>
              <li>Heuristic analysis</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-bold text-gray-800">Pro Tip:</p>
              <p>Detectives notice weird strings. If something looks “off” — copy it, decode it, and don’t assume it’s just garbage.</p>
            </div>

            <p className="italic text-right">
              Stay vigilant, and may your antivirus be strong!<br/>
              — Red-HairedDev
            </p>
          </div>
        </article>
      </div>
    </div>
  );

  const BlogPost3 = () => (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button onClick={() => setCurrentPage('blog')} className="text-blue-600 hover:underline mb-6">
          ← Back to all posts
        </button>
        
        <article className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">When Metadata Reveals the Treasure Map</h1>
          
          <div className="prose max-w-none text-gray-700 space-y-6">
            <p className="text-lg">
              The greatest treasures are often hidden in plain sight. In digital forensics, metadata is that hidden 
              treasure—the data about data that most people never see.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">What is Metadata?</h2>
            <p>
              Every file carries invisible information: when it was created, who created it, what tools were used, even 
              GPS coordinates of where a photo was taken. It's like the Poneglyphs—ancient stones holding secret history.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Real-World OSINT Example:</h2>
            <p>
              I once tracked down a threat actor who posted anonymous screenshots. The images looked clean, but the EXIF 
              data revealed:
            </p>
            <ul className="list-disc list-inside space-y-2 bg-gray-50 p-4 rounded">
              <li>Camera model: iPhone 12 Pro</li>
              <li>Location: Latitude/Longitude coordinates</li>
              <li>Timestamp: 3:47 AM local time</li>
              <li>Software: Photoshop CC 2021</li>
            </ul>
            <p>
              That metadata narrowed down the search significantly. Combined with timezone analysis and social media 
              correlation, we identified the individual within 48 hours.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Tools for Metadata Analysis:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>ExifTool (the Swiss Army knife)</li>
              <li>Metagoofil (document metadata harvesting)</li>
              <li>FOCA (for Windows environments)</li>
              <li>Online tools like Jeffrey's Image Metadata Viewer</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded">
              <h3 className="text-xl font-bold text-gray-800 mb-3">The Lesson:</h3>
              <p>
                Before sharing any file online, strip the metadata. For investigators, always check metadata first—it's 
                often the fastest route to answers.
              </p>
            </div>

            <p className="italic text-right">
              Until our next adventure,<br/>
              — Red-HairedDev
            </p>
          </div>
        </article>
      </div>
    </div>
  );

  const BlogPost4 = () => (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button onClick={() => setCurrentPage('blog')} className="text-blue-600 hover:underline mb-6">
          ← Back to all posts
        </button>
        
        <article className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">Navigating the Job Hunt: A Pirate's Guide to Career Seas</h1>
          
          <div className="prose max-w-none text-gray-700 space-y-6">
            <p className="text-lg">
              The cybersecurity job market in 2024 feels like sailing through a storm. Layoffs, hiring freezes, and an 
              overwhelming number of applicants for every position. Even experienced pirates are finding it tough to land 
              their next crew position.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">The Reality Check:</h2>
            <p>
              I've talked to dozens of fellow security professionals recently, and the story is the same everywhere. Entry-level 
              positions want 3-5 years of experience. Senior roles are being eliminated or left unfilled. The treasure chest 
              of opportunities feels like it's shrinking.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6 rounded">
              <h3 className="text-xl font-bold text-gray-800 mb-2">⚠️ The Numbers Don't Lie:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Tech layoffs hit 200,000+ workers in 2023-2024</li>
                <li>Average 300+ applications per cybersecurity role</li>
                <li>Entry-level positions increasingly require certifications + experience</li>
                <li>Remote positions seeing 10x more competition</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">But Don't Lose Hope, Nakama!</h2>
            <p>
              Just like navigating the Grand Line, you need the right strategy. Here's what's actually working in this market:
            </p>

            <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3">1. Build Your Crew Network 🤝</h3>
            <p>
              In pirate terms: it's not just what you know, it's who you know. The majority of jobs are filled through 
              referrals before they even hit job boards.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Engage with security communities on Discord, Slack, and forums</li>
              <li>Attend virtual CTF events and conferences</li>
              <li>Comment thoughtfully on security posts and articles</li>
              <li>Share your own projects and writeups publicly</li>
            </ul>

            <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3">2. Make Your Flag Visible 🏴‍☠️</h3>
            <p>
              You need to stand out in a sea of applicants. One effective strategy? Build your professional presence where 
              recruiters actually look.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg my-4">
              <p className="font-semibold mb-2">Pro Tip:</p>
              <p>
                Optimize your professional profiles with specific keywords: "penetration testing," "SIEM," "threat hunting," 
                "incident response," "OSINT." Recruiters search for these exact terms.
              </p>
            </div>

            <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3">3. Direct Outreach Strategy 📨</h3>
            <p>
              Don't just apply through job portals. Research the company, find the security team lead or hiring manager, 
              and reach out directly with a personalized message. Show you've done your homework.
            </p>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6 rounded">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Template for Cold Outreach:</h3>
              <div className="bg-white p-4 rounded border text-sm">
                <p className="mb-2"><em>"Hi [Name],</em></p>
                <p className="mb-2"><em>I've been following [Company]'s work in [specific area], particularly [recent project/news]. Your approach to [security aspect] really resonates with my experience in [your skill].</em></p>
                <p className="mb-2"><em>I noticed you're [hiring for X role / building out the security team]. I'd love to learn more about the challenges you're tackling and share how my background in [relevant experience] might contribute.</em></p>
                <p className="mb-2"><em>Would you be open to a brief conversation?</em></p>
                <p><em>Best,<br/>[Your Name]"</em></p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3">4. Show, Don't Just Tell 💻</h3>
            <p>
              Actions speak louder than resumes. Contribute to open-source security tools, write detailed CTF writeups, 
              create educational content, or publish vulnerability research (responsibly, of course).
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">The Loguetown Connection 🗺️</h2>
            <p>
              When I was starting out in Loguetown, I felt lost in a sea of competition. What changed everything was 
              making genuine connections with other security professionals. Some of my best opportunities came from 
              people I helped or collaborated with months earlier.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Want to Connect?</h3>
              <p className="mb-3">
                I'm always open to connecting with fellow security enthusiasts, whether you're looking for advice, 
                collaboration opportunities, or just want to talk shop about the latest exploits.
              </p>
              <p className="text-gray-700">
                You can usually find me around the fediverse as <strong>@RedHairedDev</strong> — let’s swap stories and navigate these stormy seas together.              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Final Thoughts:</h2>
            <p>
              The job market is tough right now, no question. But remember: every great pirate faced storms before finding 
              their treasure. Stay persistent, keep learning, build genuine relationships, and don't be afraid to chart 
              your own course.
            </p>

            <p className="italic text-right mt-8">
              The One Piece is out there, nakama. Don't give up!<br/>
              — Red-HairedDev
            </p>
          </div>
        </article>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'blog' && <BlogListPage />}
      {currentPage === 'post1' && <BlogPost1 />}
      {currentPage === 'post2' && <BlogPost2 />}
      {currentPage === 'post3' && <BlogPost3 />}
      {currentPage === 'post4' && <BlogPost4 />}
      <Footer />
    </div>
  );
}

export default App;