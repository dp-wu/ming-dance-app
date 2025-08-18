export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <small>© {year} Ming Dance</small>
        </footer>
    );
}