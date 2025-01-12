import {
  FooterContact,
  FooterQuickLinks,
  FooterSocial,
  FooterSupport,
} from '../data/ExerciseData';

export default function Footer() {
  return (
    <footer className="bg-black px-2 pt-14 pb-5">
      {/* Footer Container */}
      <main className="max-w-[1300px] mx-auto">
        {/* Top Footer */}
        <div className="flex flex-col pb-7 md:flex-row md:flex-wrap md:justify-between">
          {/*  */}
          <div className="s-1 mb-10 lg:w-[50%]">
            <h1 className="font-kaushan text-3xl text-neutral-50 mb-5">
              Trainlyy
            </h1>
            <p className="text-sm text-neutral-400 mb-5 w-full md:w-[60%]">
              Your ultimate destination for discovering and learning exercises
              that match your fitness goals.
            </p>

            <div className="soclia-icons flex gap-5">
              {FooterSocial.map((icon) => (
                <div
                  className="bg-neutral-800 inline-flex justify-center items-center h-9 w-9 rounded-full"
                  key={icon.id}
                >
                  <span className="text-neutral-50"> {icon.iconType}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h2 className="mb-3 text-neutral-50">Quick Links</h2>
            <ul>
              {FooterQuickLinks.map((productText, i) => (
                <li className="mb-2 text-neutral-400 text-sm" key={i}>
                  {productText}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="mb-8">
            <h2 className="mb-3 text-neutral-50">Support</h2>
            <ul>
              {FooterSupport.map((serviceText, i) => (
                <li className="mb-2 text-neutral-400 text-sm" key={i}>
                  {serviceText}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact us */}
          <div className="s-4">
            <h2 className="mb-3 text-neutral-50">Contact Us</h2>
            <ul>
              {FooterContact.map((data) => (
                <li
                  className="flex items-center gap-2 mb-2 text-neutral-400 text-sm"
                  key={data.id}
                >
                  {data.icon} {data.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="h-px border-neutral-400 pb-7" />

        {/* Bottom Footer */}
        <div className="md:flex md:justify-between">
          <p className="text-neutral-400 text-sm mb-5">
            &copy; 2025 Trainlyy. All Right Reserved
          </p>
          <div className="flex flex-col gap-2 md:flex-row md:gap-3">
            <p className="text-neutral-400 text-sm">Term & Condition</p>
            <p className="text-neutral-400 text-sm">Privacy Policy</p>
            <p className="text-neutral-400 text-sm">Cookie Policy</p>
          </div>
        </div>
      </main>
    </footer>
  );
}
