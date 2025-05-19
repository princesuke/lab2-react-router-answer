import useTheme from "../contexts/useTheme";

export default function News() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <h1>News {theme}</h1>
            <p>Latest news and updates.</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}