import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [visitorCount] = useState(Math.floor(Math.random() * 9999) + 1000);
  const [activeSection, setActiveSection] = useState('posts');

  const blogPosts = [
    {
      id: 1,
      date: '2001/05/12',
      title: 'Добро пожаловать в мой блог! ★',
      excerpt: 'Привет! Это мой новый блог. Здесь я буду делиться мыслями о музыке, аниме и жизни...',
      year: '2001'
    },
    {
      id: 2,
      date: '2001/05/08',
      title: 'Мои любимые J-Pop группы ♪',
      excerpt: 'Сегодня хочу рассказать о моих любимых японских группах. На первом месте...',
      year: '2001'
    },
    {
      id: 3,
      date: '2001/04/30',
      title: 'Новая игра на PlayStation! ⚡',
      excerpt: 'Вчера купил новую игру! Графика просто невероятная, особенно на моём телевизоре...',
      year: '2001'
    }
  ];

  const galleryImages = [
    { id: 1, url: 'https://v3b.fal.media/files/b/lion/YbEKVzRUnwrCLcpC1IhKY_output.png', caption: 'Мой аватар' },
    { id: 2, url: 'https://v3b.fal.media/files/b/lion/YbEKVzRUnwrCLcpC1IhKY_output.png', caption: 'Друзья' },
    { id: 3, url: 'https://v3b.fal.media/files/b/lion/YbEKVzRUnwrCLcpC1IhKY_output.png', caption: 'Природа' }
  ];

  const links = [
    { id: 1, title: 'Мой любимый сайт', url: '#', emoji: '🌐' },
    { id: 2, title: 'Форум друзей', url: '#', emoji: '💬' },
    { id: 3, title: 'Музыкальный портал', url: '#', emoji: '🎵' },
    { id: 4, title: 'Аниме сообщество', url: '#', emoji: '⭐' }
  ];

  return (
    <div className="min-h-screen font-retro" style={{
      background: 'linear-gradient(135deg, #FF6B9D 0%, #C33764 25%, #1D2671 50%, #00CED1 75%, #FFD700 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradient 15s ease infinite'
    }}>
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <div className="overflow-hidden bg-black border-b-4 border-[#FFD700]">
        <div className="animate-marquee whitespace-nowrap py-2 text-[#00CED1] text-2xl">
          ★ ☆ ✧ ДОБРО ПОЖАЛОВАТЬ В МОЙ БЛОГ! ★ UNDER CONSTRUCTION ★ BEST VIEWED IN 800x600 ★ ☆ ✧ ★ 
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-pixel mb-4 text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.8)] animate-pulse" 
              style={{ textShadow: '4px 4px 0px #FF6B9D, 8px 8px 0px #00CED1' }}>
            ヘクルボログ
          </h1>
          <p className="text-2xl text-white mb-4">～ Мой личный блог ～</p>
          
          <div className="flex justify-center gap-2 mb-6">
            <div className="animate-spin-slow text-4xl">🌍</div>
            <div className="animate-float text-4xl">✨</div>
            <div className="animate-blink text-4xl">⚡</div>
            <div className="animate-float text-4xl" style={{ animationDelay: '1s' }}>✨</div>
            <div className="animate-spin-slow text-4xl" style={{ animationDirection: 'reverse' }}>🪐</div>
          </div>

          <div className="inline-block bg-black border-4 border-[#00CED1] px-6 py-3 transform -rotate-1">
            <div className="flex items-center gap-4">
              <span className="text-[#FFD700] text-xl">👁️ СЧЁТЧИК:</span>
              <span className="text-[#FF6B9D] text-2xl font-pixel animate-blink">{visitorCount}</span>
              <span className="text-xl">📧</span>
              <span className="text-xl">🚧</span>
            </div>
          </div>
        </div>

        <nav className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'about', label: 'About Me', gradient: 'from-[#00CED1] to-[#FFD700]' },
              { id: 'posts', label: 'Posts', gradient: 'from-[#FFD700] to-[#FF6B9D]' },
              { id: 'gallery', label: 'Gallery', gradient: 'from-[#FF6B9D] to-[#C33764]' },
              { id: 'links', label: 'Links', gradient: 'from-[#C33764] to-[#00CED1]' }
            ].map(section => (
              <Button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`text-xl px-8 py-6 font-pixel border-4 border-black transform transition-transform hover:scale-110 bg-gradient-to-r ${section.gradient} text-black hover:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
                style={{
                  clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
                  filter: activeSection === section.id ? 'drop-shadow(0 0 15px currentColor)' : 'none'
                }}
              >
                {section.label}
              </Button>
            ))}
          </div>
        </nav>

        {activeSection === 'about' && (
          <div className="max-w-3xl mx-auto">
            <Card className="border-8 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#FF6B9D] to-[#00CED1] border-4 border-black flex-shrink-0 flex items-center justify-center text-6xl animate-pulse">
                    😊
                  </div>
                  <div>
                    <h2 className="text-4xl font-pixel mb-4 text-[#FF6B9D]">Обо мне ★</h2>
                    <p className="text-2xl leading-relaxed mb-4">
                      Привет! Меня зовут Хекл! Мне нравится создавать сайты, слушать J-Pop и смотреть аниме. 
                      Этот блог я создал в 2001 году, чтобы делиться своими мыслями с миром!
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge className="text-lg px-4 py-2 bg-[#FFD700] text-black border-2 border-black">Музыка</Badge>
                      <Badge className="text-lg px-4 py-2 bg-[#00CED1] text-black border-2 border-black">Аниме</Badge>
                      <Badge className="text-lg px-4 py-2 bg-[#FF6B9D] text-black border-2 border-black">Игры</Badge>
                      <Badge className="text-lg px-4 py-2 bg-[#C33764] text-white border-2 border-black">Веб-дизайн</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'posts' && (
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className="border-8 border-[#00CED1] bg-white shadow-[8px_8px_0px_0px_rgba(0,206,209,1)] transform transition-all hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,206,209,1)]"
                  style={{ 
                    clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="animate-float text-4xl">
                        {index === 0 ? '🎵' : index === 1 ? '⭐' : '🎮'}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xl text-gray-600">{post.date}</span>
                          <Badge className="bg-black text-[#00CED1] border-2 border-[#00CED1] font-pixel">
                            {post.year}
                          </Badge>
                        </div>
                        <h3 className="text-3xl font-pixel mb-3 text-black">{post.title}</h3>
                        <p className="text-xl text-gray-800 leading-relaxed">{post.excerpt}</p>
                        <Button className="mt-4 bg-[#FFD700] text-black hover:bg-[#FFD700] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-pixel">
                          Читать далее →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'gallery' && (
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galleryImages.map((img, index) => (
                <Card 
                  key={img.id}
                  className="border-6 border-[#FF6B9D] bg-white shadow-[6px_6px_0px_0px_rgba(255,107,157,1)] overflow-hidden transform transition-all hover:scale-105 hover:rotate-2"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-4">
                    <div className="bg-gradient-to-br from-[#FFD700] to-[#00CED1] border-4 border-black mb-3 h-48 flex items-center justify-center text-6xl">
                      {index === 0 ? '🎨' : index === 1 ? '👥' : '🌸'}
                    </div>
                    <p className="text-xl font-pixel text-center text-black">{img.caption}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'links' && (
          <div className="max-w-3xl mx-auto">
            <Card className="border-8 border-[#FFD700] bg-black shadow-[8px_8px_0px_0px_rgba(255,215,0,1)]">
              <CardContent className="p-8">
                <h2 className="text-4xl font-pixel mb-6 text-[#FFD700] text-center">★ МОИ ССЫЛКИ ★</h2>
                <div className="space-y-4">
                  {links.map(link => (
                    <a
                      key={link.id}
                      href={link.url}
                      className="flex items-center gap-4 bg-white border-4 border-[#00CED1] p-4 text-2xl font-retro text-black hover:bg-[#00CED1] transition-all transform hover:translate-x-2 shadow-[4px_4px_0px_0px_rgba(0,206,209,1)]"
                    >
                      <span className="text-3xl">{link.emoji}</span>
                      <span>{link.title}</span>
                      <span className="ml-auto animate-blink">→</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <footer className="mt-16 text-center">
          <div className="inline-block bg-black border-4 border-white px-8 py-4 mb-4">
            <p className="text-[#00CED1] text-xl font-pixel">
              © 2001 ヘクルボログ ★ All Rights Reserved
            </p>
          </div>
          <div className="flex justify-center gap-4 text-4xl">
            <span className="animate-spin-slow">⚙️</span>
            <span className="animate-blink">✨</span>
            <span className="animate-float">💫</span>
            <span className="animate-blink" style={{ animationDelay: '0.5s' }}>⭐</span>
            <span className="animate-spin-slow" style={{ animationDirection: 'reverse' }}>⚙️</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
