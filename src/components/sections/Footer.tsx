export default function Footer() {
  return (
    <footer id="footer" className="bg-card text-foreground">
      <div className="container mx-auto px-6 py-8 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:underline text-muted-foreground hover:text-foreground">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline text-muted-foreground hover:text-foreground">
            Terms of Service
          </a>
          <a href="#contact" className="hover:underline text-muted-foreground hover:text-foreground">
            Contact
          </a>
        </div>
        <p className="text-muted-foreground/60">
          &copy; 2025 LoneStar Land Buyers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
