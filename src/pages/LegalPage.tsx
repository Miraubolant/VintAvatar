import React, { useEffect } from 'react';
import {
  ArrowLeft,
  Scale,
  FileText,
  Sparkles,
  Shield,
  CreditCard,
  Database,
  Eye,
  Users,
  Lock,
  Cookie,
  Globe
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useSEO, SEO_CONFIGS } from '../hooks/useSEO';

export const LegalPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t, i18n } = useTranslation('legal');
  useSEO(SEO_CONFIGS.cgu);

  return (
    <div className="min-h-screen bg-grain">
      {/* Header */}
      <div className="bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Bouton retour mobile optimisé */}
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-vinted border-3 border-black text-white font-display font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform rotate-1 hover:rotate-0"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('navigation.backToHome')}
            </Link>
          </div>

          {/* Titre et description */}
          <div className="mb-6">
            <h1 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-black mb-2">
              {t('title')}
            </h1>
            <p className="font-body font-semibold text-base sm:text-lg text-vinted">
              {t('lastUpdated')}
            </p>
          </div>

          <div className="bg-mint border-3 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <div className="flex items-center gap-3">
              <Scale className="w-6 h-6 text-black" />
              <p className="font-body font-semibold text-black">
                {t('introduction')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Table of Contents */}
        <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-12">
          <h2 className="font-display font-bold text-xl text-black mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            {t('toc.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {(t('toc.sections', { returnObjects: true }) as Array<{ href: string; label: string }>).map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-3 py-2 bg-cream border-2 border-black font-body font-semibold text-sm hover:bg-mint hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">

          {/* Section 1: Service */}
          <section id="service" className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <h2 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-vinted" />
              {t('sections.service.title')}
            </h2>
            <div className="space-y-4 font-body text-black">
              <p className="font-semibold">
                {t('sections.service.content.description')}
              </p>
              <p className="font-semibold">
                {t('sections.service.content.operator')}
              </p>
              <div className="bg-mint border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-lg mb-2">Le service comprend :</h3>
                <ul className="space-y-2">
                  {(t('sections.service.content.features', { returnObjects: true }) as string[]).map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: Age */}
          <section id="age" className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <h2 className="font-display font-bold text-2xl text-black mb-4">
              {t('sections.age.title')}
            </h2>
            <div className="space-y-4 font-body text-black">
              <p className="font-semibold">
                {t('sections.age.content.description')}
              </p>
              <div className="bg-pink-pastel border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <ul className="space-y-2">
                  {(t('sections.age.content.conditions', { returnObjects: true }) as string[]).map((condition, idx) => (
                    <li key={idx}>• {condition}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Privacy */}
          <section id="compte" className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <h2 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Database className="w-6 h-6 text-vinted" />
              {t('sections.compte.title')}
            </h2>
            <div className="space-y-6 font-body text-black">

              {/* User Account */}
              <div>
                <h3 className="font-display font-bold text-lg mb-2">{t('sections.compte.content.userAccount.title')}</h3>
                <p>{t('sections.compte.content.userAccount.description')}</p>
              </div>

              {/* Data Types */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-mint border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-display font-bold text-md mb-2">{t('sections.compte.content.dataTypes.identification.title')}</h4>
                  <ul className="space-y-1 text-sm">
                    {(t('sections.compte.content.dataTypes.identification.items', { returnObjects: true }) as string[]).map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-pink-pastel border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-display font-bold text-md mb-2">{t('sections.compte.content.dataTypes.usage.title')}</h4>
                  <ul className="space-y-1 text-sm">
                    {(t('sections.compte.content.dataTypes.usage.items', { returnObjects: true }) as string[]).map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-cream border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-display font-bold text-md mb-2">{t('sections.compte.content.dataTypes.technical.title')}</h4>
                  <ul className="space-y-1 text-sm">
                    {(t('sections.compte.content.dataTypes.technical.items', { returnObjects: true }) as string[]).map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Security */}
              <div className="bg-vinted border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-white">
                <h3 className="font-display font-bold text-lg mb-2">{t('sections.compte.content.security.title')}</h3>
                <ul className="space-y-2">
                  {(t('sections.compte.content.security.measures', { returnObjects: true }) as string[]).map((measure, idx) => (
                    <li key={idx}>• {measure}</li>
                  ))}
                </ul>
              </div>

              {/* Rights */}
              <div className="bg-mint border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-lg mb-2">{t('sections.compte.content.rights.title')}</h3>
                <p>{t('sections.compte.content.rights.description')}</p>
              </div>
            </div>
          </section>

          {/* Section 4: Intellectual Property */}
          <section id="propriete" className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <h2 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-vinted" />
              {t('sections.propriete.title')}
            </h2>
            <div className="space-y-4 font-body text-black">
              <div className="bg-mint border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-lg mb-2">{t('sections.propriete.content.sourceImages.title')}</h3>
                <p>{t('sections.propriete.content.sourceImages.description')}</p>
              </div>
              <div className="bg-pink-pastel border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-lg mb-2">{t('sections.propriete.content.generatedImages.title')}</h3>
                <p>{t('sections.propriete.content.generatedImages.description')}</p>
              </div>
              <div className="bg-cream border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-lg mb-2 text-red-600">{t('sections.propriete.content.forbiddenContent.title')}</h3>
                <p className="mb-2">{t('sections.propriete.content.forbiddenContent.description')}</p>
                <ul className="space-y-1 mb-2">
                  {(t('sections.propriete.content.forbiddenContent.items', { returnObjects: true }) as string[]).map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
                <p className="text-sm font-semibold">{t('sections.propriete.content.forbiddenContent.moderation')}</p>
              </div>
            </div>
          </section>

          {/* Section 5: Payments */}
          <section id="paiements" className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <h2 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <CreditCard className="w-6 h-6 text-vinted" />
              {t('sections.paiements.title')}
            </h2>
            <div className="space-y-4 font-body text-black">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-cream border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-display font-bold text-lg mb-2">Tarification :</h3>
                  <ul className="space-y-1">
                    <li>• {t('sections.paiements.content.pricing.pack10')}</li>
                    <li>• {t('sections.paiements.content.pricing.pack25')}</li>
                    <li>• {t('sections.paiements.content.pricing.subscription')}</li>
                  </ul>
                </div>
                <div className="bg-mint border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-display font-bold text-lg mb-2">Conditions :</h3>
                  <ul className="space-y-2">
                    <li>• {t('sections.paiements.content.processing.description')}</li>
                    <li>• {t('sections.paiements.content.credits.description')}</li>
                    <li>• {t('sections.paiements.content.subscription.description')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Refunds */}
          <section id="retractation" className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <h2 className="font-display font-bold text-2xl text-black mb-4">
              {t('sections.retractation.title')}
            </h2>
            <div className="space-y-4 font-body text-black">
              <div className="bg-pink-pastel border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-lg mb-2">{t('sections.retractation.content.right.title')}</h3>
                <p className="text-sm">{t('sections.retractation.content.right.description')}</p>
              </div>
              <div className="bg-mint border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-lg mb-2">{t('sections.retractation.content.refunds.title')}</h3>
                <ul className="space-y-2">
                  <li>• {t('sections.retractation.content.refunds.subscriptions')}</li>
                  <li>• {t('sections.retractation.content.refunds.creditPacks')}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7: Cookies */}
          <section id="cookies" className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <h2 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Cookie className="w-6 h-6 text-vinted" />
              {t('sections.cookies.title')}
            </h2>
            <div className="space-y-4 font-body text-black">
              <p className="font-semibold">
                {t('sections.cookies.content.types.necessary')} {t('sections.cookies.content.types.analytics')}
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-mint border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-display font-bold text-lg mb-2">{t('sections.cookies.content.categories.essential.title')}</h3>
                  <p className="text-sm mb-2">{t('sections.cookies.content.categories.essential.description')}</p>
                  <ul className="space-y-1 text-sm">
                    {(t('sections.cookies.content.categories.essential.items', { returnObjects: true }) as string[]).map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-pink-pastel border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-display font-bold text-lg mb-2">{t('sections.cookies.content.categories.analytics.title')}</h3>
                  <p className="text-sm mb-2">{t('sections.cookies.content.categories.analytics.description')}</p>
                  <ul className="space-y-1 text-sm">
                    {(t('sections.cookies.content.categories.analytics.items', { returnObjects: true }) as string[]).map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-cream border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-display font-bold text-lg mb-2">{t('sections.cookies.content.categories.marketing.title')}</h3>
                  <p className="text-sm mb-2">{t('sections.cookies.content.categories.marketing.description')}</p>
                  <ul className="space-y-1 text-sm">
                    {(t('sections.cookies.content.categories.marketing.items', { returnObjects: true }) as string[]).map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: GDPR Rights */}
          <section id="droits" className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <h2 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-vinted" />
              {t('sections.droits.title')}
            </h2>
            <div className="space-y-4 font-body text-black">
              <p className="font-semibold">
                {t('sections.droits.content.description')}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-mint border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-display font-bold text-lg mb-2">{t('sections.droits.content.accessRights.title')}</h3>
                  <ul className="space-y-2">
                    {(t('sections.droits.content.accessRights.items', { returnObjects: true }) as string[]).map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-pink-pastel border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-display font-bold text-lg mb-2">{t('sections.droits.content.limitationRights.title')}</h3>
                  <ul className="space-y-2">
                    {(t('sections.droits.content.limitationRights.items', { returnObjects: true }) as string[]).map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-cream border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-display font-bold text-lg mb-2">{t('sections.droits.content.exercise.title')}</h3>
                <p className="mb-2">{t('sections.droits.content.exercise.description')}</p>
                <ul className="space-y-1 mb-2">
                  {(t('sections.droits.content.exercise.requirements', { returnObjects: true }) as string[]).map((req, idx) => (
                    <li key={idx}>• {req}</li>
                  ))}
                </ul>
                <p className="text-sm font-semibold">{t('sections.droits.content.exercise.timeframe')}</p>
              </div>
            </div>
          </section>

          {/* Section 9: Contact */}
          <section id="contact" className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <h2 className="font-display font-bold text-2xl text-black mb-4 flex items-center gap-2">
              <Globe className="w-6 h-6 text-vinted" />
              {t('sections.contact.title')}
            </h2>
            <div className="space-y-4 font-body text-black">
              <p className="font-semibold">
                {t('sections.contact.content.description')}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-mint border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-display font-bold text-lg mb-2">Société :</h3>
                  <div className="space-y-1">
                    <p><strong>{t('sections.contact.content.company.name')}</strong></p>
                    <p>{t('sections.contact.content.company.address')}</p>
                    <p>{t('sections.contact.content.company.city')}</p>
                    <p>{t('sections.contact.content.company.siren')}</p>
                  </div>
                </div>
                <div className="bg-pink-pastel border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-display font-bold text-lg mb-2">Contacts :</h3>
                  <div className="space-y-2">
                    <p>{t('sections.contact.content.contacts.general')}</p>
                    <p>{t('sections.contact.content.contacts.support')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-cream border-3 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-sm">{t('sections.contact.content.law')}</p>
              </div>
            </div>
          </section>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-vinted border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
          <h2 className="font-display font-bold text-2xl text-white mb-4">
            {t('cta.title')}
          </h2>
          <p className="font-body font-semibold text-white mb-4">
            {t('cta.description')}
          </p>
          <a
            href="mailto:contact@miraubolant.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-mint text-black border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            <Sparkles className="w-5 h-5" />
            {t('cta.button')}
          </a>
        </div>

        {/* Back to home */}
        <div className="text-center mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-3 border-black font-display font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            {t('navigation.backToHome')}
          </Link>
        </div>
      </div>
    </div>
  );
};