import React, { useEffect } from 'react';

const SOCIABLEKIT_SCRIPT_ID = 'sociablekit-tiktok-feed-script';
const SOCIABLEKIT_SCRIPT_SRC = 'https://widgets.sociablekit.com/tiktok-feed/widget.js';

export const CommunityTikTok: React.FC = () => {
  useEffect(() => {
    const existingScript = document.getElementById(SOCIABLEKIT_SCRIPT_ID);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = SOCIABLEKIT_SCRIPT_ID;
      script.src = SOCIABLEKIT_SCRIPT_SRC;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section
      id="comunidad"
      className="py-24 bg-[#05020D] relative border-b border-[#7135F5]/20 overflow-hidden"
    >
      {/* Background Accent Gradient matching site theme */}
      <div className="absolute inset-0 bg-radial from-[#7135F5]/8 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white mt-2">
            Comunidad <span className="text-[#9B6CFF]">COM360</span>
          </h2>
          <p className="text-slate-400 mt-3 text-base font-normal">
            Sigue el detrás de cámaras, entrevistas relámpago y todo el movimiento de nuestra comunidad vallejiana.
          </p>
        </div>

        {/* Centered SociableKIT TikTok Feed Widget */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#080312]/80 border border-[#7135F5]/35 p-4 sm:p-6 shadow-2xl shadow-black overflow-hidden">
          <div className="overflow-hidden">
            <div className="-mb-[42px]">
              <div className="sk-tiktok-feed" data-embed-id="25729614" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
