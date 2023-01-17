/* This example requires Tailwind CSS v2.0+ */
const navigation = [{ name: 'About', href: '/about' }];

export default function Navbar() {
  return (
    <header className="bg-indigo-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a href="/">
              <span className="sr-only">Logo</span>
              <img
                className="h-10 w-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/1280px-Chess_kdt45.svg.png"
                alt="logo"
              />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="ml-10 space-x-4">
            <button
              type="button"
              className="text-white bg-indigo-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              disabled
            >
              Sign in with Lichess
            </button>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
