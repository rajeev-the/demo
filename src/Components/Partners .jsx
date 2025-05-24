import React from 'react';


const Partners = () => {
  const partners = [
    { id: 1, icon: 'company-icon-envato' },
    { id: 2, icon: 'company-icon-photodune' },
    { id: 3, icon: 'company-icon-graphicriver' },
    { id: 4, icon: 'company-icon-themeforest' },
    { id: 5, icon: 'company-icon-videohive' },
    { id: 6, icon: 'company-icon-audiojungle' },
    { id: 7, icon: 'company-icon-codecanyon' },
  ];

  return (
    <section className="company-logos-section">
      <div className="logos-container">
        <div className="auto-slider-track">
          {/* Original set */}
          {partners.map((partner) => (
            <div className="logo-item" key={partner.id}>
              <i className={partner.icon} />
            </div>
          ))}
          {/* Duplicated set for seamless loop */}
          {partners.map((partner) => (
            <div className="logo-item" key={`clone-${partner.id}`}>
              <i className={partner.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;