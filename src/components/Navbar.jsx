import { useTheme } from "../theme/Theme";


export const Navbar = () => {
  const { theme, themeName, toggleTheme } = useTheme();
  return (
    <nav
      style={{
        background: theme.colors.primary,
        color: theme.colors.navText,
        padding: '1rem'
      }}
    >
      <ul style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        listStyle: 'none',
        margin: 0,
        padding: 0
      }}>
        <li><a href="/" style={{ color: theme.colors.navText, textDecoration: 'none', fontWeight: 'bold' }}>Home</a></li>
        <li><a href="/about" style={{ color: theme.colors.navText, textDecoration: 'none', fontWeight: 'bold' }}>About</a></li>
        <li><a href="/contact" style={{ color: theme.colors.navText, textDecoration: 'none', fontWeight: 'bold' }}>Contact</a></li>
        <li>
          <button
            style={{
              border: `2px solid ${theme.colors.buttonBorder}`,
              borderRadius: '999px',
              padding: '0.5rem 1.2rem',
              background: theme.colors.buttonBg,
              color: theme.colors.buttonText,
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            onClick={toggleTheme}
          >
            Toggle Theme: {themeName}
          </button>
        </li>
      </ul>
    </nav>
  );
};