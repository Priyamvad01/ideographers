import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  Section, 
  Card, 
  Button, 
  Input, 
  Textarea,
  SEO,
  StructuredData
} from '../components/ui';
import { content } from '../content/company';
import { companyData } from '../constants/company';

interface ContactFormValues {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  projectType: string;
  details: string;
}

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const Contact: React.FC = () => {
  const [fileName, setFileName] = useState<string>('');
  const [formValues, setFormValues] = useState<ContactFormValues>({ fullName: '', email: '', phone: '', service: '', budget: '', projectType: '', details: '' });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const updateField = (field: keyof ContactFormValues, value: string) => {
    setFormValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setFormError('');
    setFormStatus('idle');
  };

  const validate = (): ContactFormErrors => {
    const nextErrors: ContactFormErrors = {};
    if (!formValues.fullName.trim()) nextErrors.fullName = 'Please enter your full name.';
    if (!formValues.email.trim()) nextErrors.email = 'Please enter your email address.';
    else if (!/^\S+@\S+\.\S+$/.test(formValues.email)) nextErrors.email = 'Please enter a valid email address.';
    if (!formValues.phone.trim()) nextErrors.phone = 'Please enter your phone number.';
    if (!formValues.service) nextErrors.service = 'Please select a service.';
    if (!formValues.budget) nextErrors.budget = 'Please select an estimated budget.';
    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formStatus === 'loading') return;

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setFormError('Please correct the highlighted fields and try again.');
      setFormStatus('error');
      return;
    }

    setFormStatus('loading');
    setFormError('');
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) throw new Error('The contact form is not configured. Please try again later.');

      const submissionData = new FormData();
      submissionData.append('access_key', accessKey);
      submissionData.append('name', formValues.fullName);
      submissionData.append('email', formValues.email);
      submissionData.append('phone', formValues.phone);
      submissionData.append('subject', `New ${formValues.service} consultation request`);
      submissionData.append('message', [
        `Service: ${formValues.service}`,
        `Estimated Budget: ${formValues.budget}`,
        `Project Type: ${formValues.projectType || 'Not specified'}`,
        '',
        formValues.details || 'No project details provided.',
      ].join('\n'));

      const attachment = new FormData(event.currentTarget).get('attachment');
      if (attachment instanceof File && attachment.size > 0) submissionData.append('attachment', attachment);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: submissionData,
      });
      const result: { success?: boolean; message?: string } = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || 'We could not send your request. Please try again.');

      setFormStatus('success');
      setFormValues({ fullName: '', email: '', phone: '', service: '', budget: '', projectType: '', details: '' });
      setFileName('');
    } catch (error) {
      setFormError(error instanceof Error ? error.message : 'We could not send your request. Please try again.');
      setFormStatus('error');
    }
  };

  const trustItems = [
    { title: "Expert Consultation", desc: "Strategy-first approach." },
    { title: "End-to-End Solutions", desc: "Seamless project delivery." },
    { title: "Fast Response", desc: "Dedicated support team." },
    { title: "Dedicated Support", desc: "Commitment to excellence." }
  ];

  return (
    <div className="bg-white">
      <SEO title="Contact Ideographers | Let's Discuss Your Next Project" description="Get in touch with Ideographers for premium engineering, architectural, branding, and IT consultancy services. Let's build your vision." canonical="/contact" />
      <StructuredData
        data={{
          '@type': 'ContactPage',
          'mainEntity': {
            '@type': 'Organization',
            'name': companyData.name,
            'url': 'https://ideographers.com',
            'contactPoint': {
              '@type': 'ContactPoint',
              'telephone': companyData.contact.phone,
              'contactType': 'customer service',
              'email': companyData.contact.email,
            },
          },
        }}
      />
      {/* 1. Hero Redesign */}
      <Section className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent"></div>
        <Container className="text-center relative">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-bold text-xs tracking-widest uppercase mb-4">GET IN TOUCH</span>
            <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">Let's Discuss Your Next Project</h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">Partner with Ideographers for premium engineering, architectural, branding, and IT consultancy services. Let's build your vision.</p>
        </Container>
      </Section>

      {/* 2. Trust Section Redesign */}
      <Section className="py-20">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">Why Clients Contact Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {trustItems.map((item, i) => (
              <Card key={i} className="p-8 text-center border-none shadow-sm hover:shadow-lg transition-all duration-300">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Form + Info Layout */}
      <Section className="bg-gray-50 py-20">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <Card className="lg:col-span-2 p-10 shadow-sm border-none">
              <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Tell us about your project and we'll get back to you soon.</p>
              <form ref={formRef} className="space-y-6" noValidate onSubmit={handleSubmit}>
                {formStatus === 'success' && <p className="rounded-lg bg-green-50 p-4 text-green-700" role="status">Thank you. Your consultation request has been received.</p>}
                {formStatus === 'error' && <p className="rounded-lg bg-red-50 p-4 text-red-700" role="alert">{formError || 'We could not send your request. Please try again.'}</p>}
                <div className="grid md:grid-cols-2 gap-6">
                  <Input id="contact-full-name" name="name" label="Full Name*" placeholder="Your Name" autoComplete="name" required value={formValues.fullName} onChange={(event) => updateField('fullName', event.target.value)} error={errors.fullName} />
                  <Input id="contact-email" name="email" label="Email*" type="email" placeholder="you@example.com" autoComplete="email" required value={formValues.email} onChange={(event) => updateField('email', event.target.value)} error={errors.email} />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Input id="contact-phone" name="phone" label="Phone*" type="tel" placeholder="+91 0000000000" autoComplete="tel" required value={formValues.phone} onChange={(event) => updateField('phone', event.target.value)} error={errors.phone} />
                  <div>
                    <label htmlFor="contact-service" className="block text-sm font-semibold text-gray-900 mb-2">Services Interested In*</label>
                    <select id="contact-service" name="service" required value={formValues.service} onChange={(event) => updateField('service', event.target.value)} aria-invalid={errors.service ? true : undefined} aria-describedby={errors.service ? 'contact-service-error' : undefined} className={`w-full p-3 border rounded-lg bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 ${errors.service ? 'border-red-500' : 'border-gray-300'}`}>
                      <option value="">Select Service</option>
                      <option>Civil & Landscaping</option>
                      <option>Architecture Services</option>
                      <option>PR & Branding</option>
                      <option>IT Development</option>
                      <option>Enterprise IT Services</option>
                      <option>Industry Maintenance</option>
                    </select>
                    {errors.service && <p id="contact-service-error" className="mt-1 text-sm text-red-600" role="alert">{errors.service}</p>}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="contact-budget" className="block text-sm font-semibold text-gray-900 mb-2">Estimated Budget*</label>
                        <select id="contact-budget" name="budget" required value={formValues.budget} onChange={(event) => updateField('budget', event.target.value)} aria-invalid={errors.budget ? true : undefined} aria-describedby={errors.budget ? 'contact-budget-error' : undefined} className={`w-full p-3 border rounded-lg bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 ${errors.budget ? 'border-red-500' : 'border-gray-300'}`}>
                            <option value="">Select Budget</option>
                            <option>Under ₹50K</option>
                            <option>₹50K – ₹2L</option>
                        </select>
                        {errors.budget && <p id="contact-budget-error" className="mt-1 text-sm text-red-600" role="alert">{errors.budget}</p>}
                    </div>
                    <div>
                        <label htmlFor="contact-project-type" className="block text-sm font-semibold text-gray-900 mb-2">Project Type</label>
                        <select id="contact-project-type" name="projectType" value={formValues.projectType} onChange={(event) => updateField('projectType', event.target.value)} className="w-full p-3 border border-gray-300 rounded-lg bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400">
                            <option value="">Select Type</option>
                            <option>Residential</option>
                            <option>Commercial</option>
                        </select>
                    </div>
                </div>
                <Textarea id="contact-details" name="message" label="Project Details" placeholder="Tell us about your requirements..." rows={4} value={formValues.details} onChange={(event) => updateField('details', event.target.value)} />
                <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer hover:border-blue-500">
                    <label className="block text-sm font-semibold text-gray-700 cursor-pointer">
                        Upload Project Brief (PDF, DOCX, PNG, JPG)
                        <input id="contact-file" name="attachment" type="file" className="hidden" onChange={(e) => setFileName(e.target.files?.[0]?.name || '')} />
                    </label>
                    {fileName && <p className="text-sm text-blue-600 mt-2">Selected: {fileName}</p>}
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full py-3" loading={formStatus === 'loading'}>Send Message</Button>
              </form>
            </Card>

            <div className="space-y-8">
                <Card className="p-8 border-none shadow-sm">
                    <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                    <p className="text-gray-600 mb-8">We're here to help and answer any questions you may have.</p>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="text-blue-600 font-bold text-2xl">📍</div>
                            <div>
                                <h4 className="font-bold">Address</h4>
                                <p className="text-gray-600">{content.contact.address}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-blue-600 font-bold text-2xl">🕒</div>
                            <div>
                                <h4 className="font-bold">Working Hours</h4>
                                <p className="text-gray-600">Mon - Sat: 9AM - 6PM</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-blue-600 font-bold text-2xl">📞</div>
                            <div>
                                <h4 className="font-bold">Phone</h4>
                                <p className="text-gray-600"><a className="hover:text-blue-600" href={`tel:${content.contact.phone.replace(/[^\d+]/g, '')}`}>{content.contact.phone}</a></p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-blue-600 font-bold text-2xl">✉️</div>
                            <div>
                                <h4 className="font-bold">Email</h4>
                                <p className="text-gray-600"><a className="hover:text-blue-600" href={`mailto:${content.contact.email}`}>{content.contact.email}</a></p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Premium CTA Banner */}
      <Section className="py-20">
        <Container>
            <Card className="bg-blue-600 text-white p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <h3 className="text-sm font-bold tracking-widest uppercase mb-2 text-blue-200">Ready To Start Your Next Project?</h3>
                    <h2 className="text-4xl font-bold mb-2">Let's turn your ideas into reality.</h2>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Get Consultation</Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => navigate('/services')}>Explore Services</Button>
                </div>
            </Card>
        </Container>
      </Section>
    </div>
  );
};

export default Contact;
