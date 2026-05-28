import Container from '../common/Container';

/**
 * Global application footer.
 */
function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-16 mt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              NexTrip
            </h3>

            <p className="text-sm text-slate-400 leading-relaxed">
              Discover flights, hotels, villas,
              attractions, and unforgettable travel
              experiences across the United States.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Company
            </h4>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Investor Relations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Support
            </h4>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>Help Center</li>
              <li>Cancellation Options</li>
              <li>Safety Information</li>
              <li>Contact Support</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Legal
            </h4>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-slate-500">
          © 2026 NexTrip. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;